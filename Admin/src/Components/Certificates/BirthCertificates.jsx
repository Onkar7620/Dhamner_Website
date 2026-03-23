import { useEffect, useState } from "react";
import axios from "axios";

export default function BirthCertificateAdmin() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const API = "http://localhost:5000/api/birth-cert";

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

      // update only that row
      setData((prev) =>
        prev.map((item) =>
          item._id === id ? { ...item, status: "approved" } : item
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ DELETE
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
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

      {/* ✅ TABLE */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          
          {/* HEADER */}
          <thead className="bg-gray-200 text-gray-700 text-xs lg:text-sm">
            <tr>
              <th className="px-3 py-2">Name (Eng)</th>
              <th className="px-3 py-2">Name (Mar)</th>
              <th className="px-3 py-2">Aai Name</th>
              <th className="px-3 py-2">Child</th>
              <th className="px-3 py-2">DOB</th>
              <th className="px-3 py-2">Time</th>
              <th className="px-3 py-2">Father</th>
              <th className="px-3 py-2">Mobile</th>
              <th className="px-3 py-2">Email</th>
              <th className="px-3 py-2">Address</th>
              <th className="px-3 py-2">Year</th>
              <th className="px-3 py-2">UTR</th>
              <th className="px-3 py-2">Screenshot</th>
              <th className="px-3 py-2">Actions</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {data.map((item) => (
              <tr key={item._id} className="border-t text-xs lg:text-sm hover:bg-gray-50">

                <td className="px-3 py-2">{item.fullNameEng}</td>
                <td className="px-3 py-2">{item.fullNameMar}</td>
                <td className="px-3 py-2">{item.aaiName}</td>

                <td className="px-3 py-2">{item.childName}</td>
                <td className="px-3 py-2">
                  {new Date(item.dob).toLocaleDateString()}
                </td>
                <td className="px-3 py-2">{item.time || "-"}</td>

                <td className="px-3 py-2">{item.fatherName}</td>

                <td className="px-3 py-2">{item.mobile}</td>
                <td className="px-3 py-2">{item.email || "-"}</td>

                <td className="px-3 py-2">{item.address}</td>
                <td className="px-3 py-2">{item.year}</td>
                <td className="px-3 py-2">{item.utr || "-"}</td>

                {/* ✅ IMAGE PREVIEW */}
                <td className="px-3 py-2">
                  {item.screenshot ? (
                    <img
                      src={item.screenshot}
                      alt="screenshot"
                      className="w-16 h-16 object-cover rounded cursor-pointer hover:scale-110 transition"
                      onClick={() => window.open(item.screenshot, "_blank")}
                    />
                  ) : (
                    "-"
                  )}
                </td>



                {/* ACTIONS */}
                <td className="px-3 py-2 flex flex-col gap-1">
                  {/* DELETE */}
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 text-xs"
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