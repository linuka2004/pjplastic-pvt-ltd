import { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import Loader from "../../components/loader";
import toast from "react-hot-toast";

function toYYYYMMDD(value) {
  if (!value) return "";
  try {
    return new Date(value).toISOString().slice(0, 10);
  } catch {
    return "";
  }
}

export default function AdminMaterialStockDetailsPage() {
  const { materialId } = useParams();
  const location = useLocation();

  const materialFromState = location?.state?.material ?? null;

  const [materialName, setMaterialName] = useState(materialFromState?.name ?? "Material");

  const [date, setDate] = useState(toYYYYMMDD(new Date()));
  const [quantityKg, setQuantityKg] = useState("");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);

  const token = useMemo(() => localStorage.getItem("token"), []);

  async function loadMaterialNameIfNeeded() {
    if (materialFromState?.name) return;

    try {
      const response = await axios.get(import.meta.env.VITE_BACKEND_URL + "/materials", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const material = response.data.find((m) => m._id === materialId);
      if (material?.name) setMaterialName(material.name);
    } catch {
      // ignore
    }
  }

  async function fetchRecords() {
    if (!token) {
      toast.error("You must be logged in as admin.");
      window.location.href = "/login";
      return;
    }

    setLoading(true);
    try {
      const params = {};
      if (startDate) params.startDate = startDate;
      if (endDate) params.endDate = endDate;

      const response = await axios.get(
        import.meta.env.VITE_BACKEND_URL + `/materials/${materialId}/stock-records`,
        {
          headers: { Authorization: `Bearer ${token}` },
          params,
        }
      );

      setRecords(response.data);
    } catch (err) {
      toast.error("Failed to load stock records");
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadMaterialNameIfNeeded();
    fetchRecords();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [materialId]);

  useEffect(() => {
    // Re-filter by refetching when date range changes
    fetchRecords();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, endDate]);

  async function submitDailyStock(e) {
    e.preventDefault();

    if (!token) {
      toast.error("You must be logged in as admin.");
      window.location.href = "/login";
      return;
    }

    if (!date) {
      toast.error("Date is required");
      return;
    }

    const quantity = Number(quantityKg);
    if (!Number.isFinite(quantity) || quantity < 0) {
      toast.error("Quantity must be a valid number (>= 0)");
      return;
    }

    try {
      await axios.post(
        import.meta.env.VITE_BACKEND_URL + `/materials/${materialId}/stock-records`,
        { date, quantityKg: quantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.success("Daily stock saved");
      setQuantityKg("");
      fetchRecords();
    } catch (err) {
      toast.error("Failed to save daily stock");
      console.log(err);
    }
  }

  return (
    <div className="w-full min-h-screen flex justify-center px-4 py-6 sm:px-6 md:px-10 bg-primary text-secondary">
      <div className="w-full max-w-5xl bg-white shadow-xl rounded-2xl p-4 sm:p-6 overflow-hidden">
        <h1 className="text-3xl font-semibold mb-6 tracking-wide text-secondary">
          {materialName} — Daily Stock
        </h1>

        {/* TOP: Add/Update daily stock */}
        <form
          onSubmit={submitDailyStock}
          className="w-full rounded-2xl border border-accent/40 p-4 bg-primary/50"
        >
          <div className="w-full flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block mb-1 text-sm font-medium">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full h-10 rounded-2xl border border-accent px-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div className="flex-1">
              <label className="block mb-1 text-sm font-medium">Quantity (Kg)</label>
              <input
                type="number"
                step="0.01"
                value={quantityKg}
                onChange={(e) => setQuantityKg(e.target.value)}
                placeholder="e.g. 150"
                className="w-full h-10 rounded-2xl border border-accent px-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div className="md:w-[180px] flex items-end">
              <button
                type="submit"
                className="w-full h-10 rounded-2xl bg-secondary text-primary hover:bg-gold transition-all"
              >
                Submit
              </button>
            </div>
          </div>
        </form>

        {/* BOTTOM: Date range filter + table */}
        <div className="mt-8">
          <div className="w-full flex flex-col md:flex-row gap-4 items-end mb-4">
            <div className="flex-1">
              <label className="block mb-1 text-sm font-medium">From</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full h-10 rounded-2xl border border-accent px-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1 text-sm font-medium">To</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full h-10 rounded-2xl border border-accent px-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div className="md:w-[180px]">
              <button
                type="button"
                onClick={() => {
                  setStartDate("");
                  setEndDate("");
                }}
                className="w-full h-10 rounded-2xl bg-accent/80 text-white hover:bg-accent transition-all"
              >
                Clear Filter
              </button>
            </div>
          </div>

          {!loading ? (
            <div className="w-full overflow-x-auto">
              <table className="min-w-[600px] w-full border-collapse">
                <thead>
                  <tr className="bg-secondary text-primary text-left text-sm uppercase tracking-wider">
                    <th className="py-3 px-4 rounded-l-xl">Date</th>
                    <th className="py-3 px-4">Quantity (Kg)</th>
                    <th className="py-3 px-4 rounded-r-xl text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-accent/30">
                  {records.length === 0 ? (
                    <tr>
                      <td className="py-4 px-4" colSpan={2}>
                        No records found for this material.
                      </td>
                    </tr>
                  ) : (
                    records.map((r) => (
                      <tr key={r._id} className="hover:bg-primary/70 transition-all ease-in-out">
                        <td className="py-3 px-4 font-medium">
                          {r.date ? r.date.slice(0, 10) : ""}
                        </td>
                        <td className="py-3 px-4">{r.quantityKg}</td>
                        <td className="py-3 px-4 text-center">
                          <button
                            onClick={() => setConfirmDelete(r._id)}
                            disabled={deleting === r._id}
                            className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all disabled:opacity-60 inline-flex items-center gap-1"
                            title="Delete record"
                          >
                            <MdDelete size={18} />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          ) : (
            <Loader />
          )}
        </div>

        {/* Delete Confirmation Modal */}
        {confirmDelete && (
          <div className="w-screen fixed inset-0 z-[9999] bg-black/40 flex justify-center items-center">
            <div className="w-[90%] max-w-[500px] bg-white rounded-2xl p-6 shadow-2xl">
              <h2 className="text-xl font-semibold text-secondary mb-4">Delete Stock Record?</h2>
              <p className="text-secondary/80 mb-6">
                Are you sure you want to delete this stock record? This action cannot be undone.
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
                      await axios.delete(
                        import.meta.env.VITE_BACKEND_URL + `/materials/${materialId}/stock-records/${confirmDelete}`,
                        { headers: { Authorization: `Bearer ${token}` } }
                      );
                      toast.success("Stock record deleted successfully");
                      setConfirmDelete(null);
                      fetchRecords();
                    } catch (err) {
                      toast.error(err?.response?.data?.message || "Failed to delete record");
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
    </div>
  );
}
