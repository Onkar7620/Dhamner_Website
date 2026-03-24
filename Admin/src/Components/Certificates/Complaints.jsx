import { useEffect, useState } from "react";
import API from "../../utils/api";

export default function Complaints() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ FETCH DATA
  const fetchData = async () => {
    try {
      const res = await API.get("/api/complaints");
      setData(res.data.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ✅ UPDATE STATUS
  const updateStatus = async (id, status) => {
    try {
      await API.patch(`/api/complaints/${id}/status`, { status });

      setData((prev) =>
        prev.map((item) =>
          item._id === id ? { ...item, status } : item
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

  // 🗑️ DELETE
  const handleDelete = async (id) => {
    try {
      await API.delete(`/api/complaints/${id}`);
      setData((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <p className="text-center mt-10">Loading complaints...</p>;
  }

  return (
    <div className="p-4 lg:p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Complaint Management
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">

          {/* HEADER */}
          <thead className="bg-gray-200 text-gray-700 text-xs lg:text-sm">
            <tr>
              <th className="px-3 py-2">Property ID</th>
              <th className="px-3 py-2">Department</th>
              <th className="px-3 py-2">Complaint</th>
              <th className="px-3 py-2">Name</th>
              <th className="px-3 py-2">Address</th>
              <th className="px-3 py-2">Mobile</th>
              <th className="px-3 py-2">Aadhaar</th>
              <th className="px-3 py-2">Actions</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {data.map((item) => (
              <tr key={item._id} className="border-t text-xs lg:text-sm hover:bg-gray-50">

                <td className="px-3 py-2">{item.propertyId}</td>
                <td className="px-3 py-2 capitalize">{item.department}</td>
                <td className="px-3 py-2">{item.complaint}</td>
                <td className="px-3 py-2">{item.name}</td>
                <td className="px-3 py-2">{item.address}</td>
                <td className="px-3 py-2">{item.mobile}</td>
                <td className="px-3 py-2">{item.aadhaar}</td>

                {/* ACTIONS */}
                <td className="px-3 py-2 flex flex-col gap-1">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600"
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