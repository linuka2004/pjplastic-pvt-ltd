import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

export default function AdminAddMaterialPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();

  async function addMaterial(e) {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You must be logged in as admin to add a stock type.");
      navigate("/login");
      return;
    }

    const trimmedName = name.trim();
    if (!trimmedName) {
      toast.error("Material name is required");
      return;
    }

    setSubmitting(true);
    try {
      await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/materials",
        { name: trimmedName, description: description.trim() },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.success("Stock type added successfully!");
      navigate("/admin/stock");
    } catch (err) {
      const message = err?.response?.data?.message || "Failed to add stock type";
      toast.error(message);
      console.log(err);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-start px-4 py-6 sm:px-6 md:px-10 overflow-y-auto bg-primary">
      <div className="w-full max-w-3xl p-4 sm:p-6 md:p-8 bg-accent/85 rounded-2xl shadow-2xl overflow-y-visible">
        <h1 className="w-full text-xl mb-[20px] flex justify-center items-center gap-[5px]">
          Add New Stock Type
        </h1>

        <form
          onSubmit={addMaterial}
          className="w-full bg-white p-[20px] rounded-xl flex flex-wrap justify-between shadow-2xl"
        >
          <div className="my-[10px] w-full">
            <label>Material Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-[40px] rounded-2xl focus-outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-[20px]"
              placeholder="e.g. HDPE"
            />
          </div>

          <div className="my-[10px] w-full">
            <label>Description (optional):</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full h-[100px] rounded-2xl focus-outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-[20px] py-[10px]"
              placeholder="Short note about this material"
            />
          </div>

          <Link
            to="/admin/stock"
            className="w-full sm:w-[48%] h-[50px] bg-red-900 text-white font-bold rounded-2xl flex justify-center items-center hover:bg-gray-300 border-[2px] mt-[20px]"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="w-full sm:w-[48%] h-[50px] bg-black text-white rounded-2xl hover:bg-accent/80 mt-[20px] disabled:opacity-60"
          >
            {submitting ? "Adding..." : "Add Stock Type"}
          </button>
        </form>
      </div>
    </div>
  );
}
