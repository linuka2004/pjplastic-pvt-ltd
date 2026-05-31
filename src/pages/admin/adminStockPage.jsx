import { BiPlus } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/loader";
import toast from "react-hot-toast";

export default function AdminStockPage() {
  const [materials, setMaterials] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [deleting, setDeleting] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You must be logged in as admin.");
      window.location.href = "/login";
      return;
    }

    axios
      .get(import.meta.env.VITE_BACKEND_URL + "/materials", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setMaterials(response.data);
        setLoaded(true);
      })
      .catch(() => {
        toast.error("Failed to load materials");
        setLoaded(true);
      });
  }, [loaded]);

  return (
    <div className="w-full min-h-screen flex justify-center px-4 py-6 sm:px-6 md:px-10 bg-primary text-secondary">
      <div className="w-full max-w-5xl bg-white shadow-xl rounded-2xl p-4 sm:p-6 overflow-hidden">
        <h1 className="text-3xl font-semibold mb-6 tracking-wide text-secondary">
          Daily Stock Management
        </h1>

        {!loaded ? (
          <Loader />
        ) : materials.length === 0 ? (
          <div className="w-full p-4 rounded-xl bg-primary/70 text-secondary">
            No materials found. Add materials in the database to see cards here.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {materials.map((material) => (
              <div key={material._id} className="relative group">
                <button
                  onClick={() =>
                    navigate(`/admin/stock/${material._id}`, {
                      state: { material },
                    })
                  }
                  className="text-left p-4 w-full rounded-2xl border border-accent/40 hover:border-accent transition-all bg-primary/60"
                >
                  <div className="text-lg font-semibold text-secondary">
                    {material.name}
                  </div>
                  {material.description ? (
                    <div className="text-sm text-secondary/80 mt-1">
                      {material.description}
                    </div>
                  ) : null}
                </button>
                <button
                  onClick={() => setConfirmDelete(material._id)}
                  disabled={deleting === material._id}
                  className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-60"
                  title="Delete material"
                >
                  <MdDelete size={20} />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {confirmDelete && (
          <div className="w-screen fixed inset-0 z-[9999] bg-black/40 flex justify-center items-center">
            <div className="w-[90%] max-w-[500px] bg-white rounded-2xl p-6 shadow-2xl">
              <h2 className="text-xl font-semibold text-secondary mb-4">Delete Stock Type?</h2>
              <p className="text-secondary/80 mb-6">
                Are you sure you want to delete this material? This action cannot be undone.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setConfirmDelete(null)}
                  className="flex-1 px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={async () => {
                    setDeleting(confirmDelete);
                    try {
                      const token = localStorage.getItem("token");
                      await axios.delete(
                        import.meta.env.VITE_BACKEND_URL + `/materials/${confirmDelete}`,
                        { headers: { Authorization: `Bearer ${token}` } }
                      );
                      toast.success("Material deleted successfully");
                      setConfirmDelete(null);
                      setLoaded(false);
                    } catch (err) {
                      toast.error(err?.response?.data?.message || "Failed to delete material");
                      setDeleting(null);
                    }
                  }}
                  disabled={deleting === confirmDelete}
                  className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition disabled:opacity-60"
                >
                  {deleting === confirmDelete ? "Deleting..." : "Delete"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Add Button */}
      <Link
        to="/admin/add-material"
        className="fixed right-8 bottom-8 w-[60px] h-[60px] flex justify-center items-center rounded-full bg-secondary hover:bg-gold text-primary shadow-2xl text-4xl transition-all"
      >
        <BiPlus />
      </Link>
    </div>
  );
}
