import { useEffect, useState } from "react";
import axios from "axios";

export default function Land8ACertificate() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ YOUR BACKEND ROUTE
  const API = "http://localhost:5000/api/land8a";

  // ✅ FETCH DATA
  const fetchData = async () => {
    try {
      const res = await axios.get(API);
      setData(res.data.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ✅ APPROVE
  const handleApprove = async (id) => {
    try {
      await axios.patch(`${API}/${id}/status`, {
        status: "approved",
      });

      setData((prev) =>
        prev.map((item) =>
          item._id === id ? { ...item, status: "approved" } : item
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

  // ❌ REJECT
  const handleReject = async (id) => {
    try {
      await axios.patch(`${API}/${id}/status`, {
        status: "rejected",
      });

      setData((prev) =>
        prev.map((item) =>
          item._id === id ? { ...item, status: "rejected" } : item
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

  // 🗑️ DELETE
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      setData((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <p className="text-center mt-10">Loading Land 8A records...</p>;
  }

  return (
    <div className="p-4 lg:p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Land 8A Applications
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">

          {/* HEADER */}
          <thead className="bg-gray-200 text-xs lg:text-sm">
            <tr>
              <th className="px-3 py-2">Owner Name</th>
              <th className="px-3 py-2">Village</th>
              <th className="px-3 py-2">Taluka</th>
              <th className="px-3 py-2">District</th>
              <th className="px-3 py-2">Khata No</th>
              <th className="px-3 py-2">Mobile</th>
              <th className="px-3 py-2">Email</th>
              <th className="px-3 py-2">UTR</th>
              <th className="px-3 py-2">Screenshot</th>
              <th className="px-3 py-2">Actions</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {data.map((item) => (
              <tr key={item._id} className="border-t text-xs lg:text-sm hover:bg-gray-50">

                <td className="px-3 py-2">{item.ownerName}</td>
                <td className="px-3 py-2">{item.village}</td>

                <td className="px-3 py-2">{item.taluka || "-"}</td>
                <td className="px-3 py-2">{item.district || "-"}</td>

                <td className="px-3 py-2">{item.khataNo}</td>

                <td className="px-3 py-2">{item.mobile}</td>
                <td className="px-3 py-2">{item.email || "-"}</td>

                <td className="px-3 py-2">{item.utr || "-"}</td>

                {/* IMAGE */}
                <td className="px-3 py-2">
                  {item.screenshot ? (
                    <img
                      src={item.screenshot}
                      alt="screenshot"
                      className="w-14 h-14 object-cover rounded cursor-pointer hover:scale-110 transition"
                      onClick={() => window.open(item.screenshot, "_blank")}
                    />
                  ) : (
                    "-"
                  )}
                </td>


                {/* ACTIONS */}
                <td className="px-3 py-2 flex flex-col gap-1">

                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-gray-700 text-white px-2 py-1 rounded text-xs hover:bg-gray-800"
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}