import { useEffect, useState } from "react";
import API from "../../utils/api";

export default function BirthCertificateAdmin() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ FETCH DATA
  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/api/birth-cert");

      setData(res.data.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ✅ DELETE
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await API.delete(`/api/birth-cert/${id}`);

      setData((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <p className="text-center mt-10 text-lg">Loading...</p>;
  }

  return (
    <div className="p-4 lg:p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Birth Certificate Applications
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200 text-xs lg:text-sm">
            <tr>
              <th className="px-3 py-2">Name (Eng)</th>
              <th className="px-3 py-2">Name (Mar)</th>
              <th className="px-3 py-2">Aai Name</th>
              <th className="px-3 py-2">Child</th>
              <th className="px-3 py-2">DOB</th>
              <th className="px-3 py-2">Father</th>
              <th className="px-3 py-2">Mobile</th>
              <th className="px-3 py-2">Screenshot</th>
              <th className="px-3 py-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item._id} className="border-t text-xs lg:text-sm">
                <td className="px-3 py-2">{item.fullNameEng}</td>
                <td className="px-3 py-2">{item.fullNameMar}</td>
                <td className="px-3 py-2">{item.aaiName}</td>
                <td className="px-3 py-2">{item.childName}</td>
                <td className="px-3 py-2">
                  {new Date(item.dob).toLocaleDateString()}
                </td>
                <td className="px-3 py-2">{item.fatherName}</td>
                <td className="px-3 py-2">{item.mobile}</td>

                {/* IMAGE */}
                <td className="px-3 py-2">
                  {item.screenshot && (
                    <img
                      src={item.screenshot}
                      alt=""
                      className="w-16 h-16 object-cover cursor-pointer"
                      onClick={() => window.open(item.screenshot)}
                    />
                  )}
                </td>

                {/* ACTION */}
                <td className="px-3 py-2">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
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
