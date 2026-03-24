import { useEffect, useState } from "react";
import API from "../../utils/api";

export default function ContactAdmin() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ FETCH
  const fetchData = async () => {
    try {
      const res = await API.get("/api/contact");
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
      await API.patch(`/api/contact/${id}/status`, { status });

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
      await API.delete(`/api/contact/${id}`);
      setData((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <p className="text-center mt-10">Loading contacts...</p>;
  }

  return (
    <div className="p-4 lg:p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Contact Messages
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">

          {/* HEADER */}
          <thead className="bg-gray-200 text-gray-700 text-xs lg:text-sm">
            <tr>
              <th className="px-3 py-2">Name</th>
              <th className="px-3 py-2">Email</th>
              <th className="px-3 py-2">Subject</th>
              <th className="px-3 py-2">Message</th>
              <th className="px-3 py-2">Status</th>
              <th className="px-3 py-2">Date</th>
              <th className="px-3 py-2">Actions</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {data.map((item) => (
              <tr key={item._id} className="border-t text-xs lg:text-sm hover:bg-gray-50">

                <td className="px-3 py-2">
                  {item.firstName} {item.lastName}
                </td>

                <td className="px-3 py-2 break-all">{item.email}</td>

                <td className="px-3 py-2">{item.subject}</td>

                <td className="px-3 py-2 whitespace-normal break-words max-w-md">
                  {item.message}
                </td>

                {/* STATUS */}
                <td className="px-3 py-2">
                  <span
                    className={`px-2 py-1 rounded text-white text-xs ${
                      item.status === "replied"
                        ? "bg-green-500"
                        : item.status === "archived"
                        ? "bg-gray-500"
                        : "bg-yellow-500"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                {/* DATE */}
                <td className="px-3 py-2">
                  {new Date(item.createdAt).toLocaleString()}
                </td>

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