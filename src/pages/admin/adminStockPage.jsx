import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader";
import toast from "react-hot-toast";

export default function AdminStockPage() {
  const [materials, setMaterials] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You must be logged in as admin.");
      window.location.href = "/login";
      return;
    }

    axios
      .get(import.meta.env.VITE_BACKEND_URL + "/materials/", {
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
  }, []);

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
              <button
                key={material._id}
                onClick={() =>
                  navigate(`/admin/stock/${material._id}`, {
                    state: { material },
                  })
                }
                className="text-left p-4 rounded-2xl border border-accent/40 hover:border-accent transition-all bg-primary/60"
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
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
