import { useEffect, useState } from "react";
import axios from "axios";

export default function BusinessCertificate() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ YOUR BACKEND ROUTE
  const API = "http://localhost:5000/api/business-form";

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
    return <p className="text-center mt-10">Loading business applications...</p>;
  }

  return (
    <div className="p-4 lg:p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Business License Applications
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">

          {/* HEADER */}
          <thead className="bg-gray-200 text-xs lg:text-sm">
            <tr>
              <th className="px-3 py-2">Owner</th>
              <th className="px-3 py-2">Mobile</th>
              <th className="px-3 py-2">Email</th>
              <th className="px-3 py-2">Business Type</th>
              <th className="px-3 py-2">Category</th>
              <th className="px-3 py-2">District</th>
              <th className="px-3 py-2">Pincode</th>
              <th className="px-3 py-2">Start Date</th>
              <th className="px-3 py-2">Nature</th>
              <th className="px-3 py-2">Workers</th>
              <th className="px-3 py-2">Address</th>
              <th className="px-3 py-2">Village</th>
              <th className="px-3 py-2">Aadhar</th>
              <th className="px-3 py-2">Photo</th>
              <th className="px-3 py-2">Payment</th>
              <th className="px-3 py-2">UTR</th>
              <th className="px-3 py-2">Actions</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {data.map((item) => (
              <tr key={item._id} className="border-t text-xs lg:text-sm hover:bg-gray-50">

                <td className="px-3 py-2">{item.ownerName}</td>
                <td className="px-3 py-2">{item.mobile}</td>
                <td className="px-3 py-2">{item.email || "-"}</td>

                <td className="px-3 py-2">{item.businessType}</td>
                <td className="px-3 py-2">{item.businessCategory}</td>

                <td className="px-3 py-2">{item.district}</td>
                <td className="px-3 py-2">{item.pincode}</td>

                <td className="px-3 py-2">
                  {new Date(item.startDate).toLocaleDateString()}
                </td>

                <td className="px-3 py-2">{item.businessNature}</td>

                {/* WORKERS */}
                <td className="px-3 py-2">
                  M:{item.male || 0} F:{item.female || 0} O:{item.other || 0} T:{item.total || 0}
                </td>

                <td className="px-3 py-2">{item.businessAddress}</td>
                <td className="px-3 py-2">{item.village}</td>

                {/* IMAGES */}
                <td className="px-3 py-2">
                  {item.aadhar ? (
                    <img
                      src={item.aadhar}
                      className="w-12 h-12 cursor-pointer"
                      onClick={() => window.open(item.aadhar)}
                    />
                  ) : "-"}
                </td>

                <td className="px-3 py-2">
                  {item.photo ? (
                    <img
                      src={item.photo}
                      className="w-12 h-12 cursor-pointer"
                      onClick={() => window.open(item.photo)}
                    />
                  ) : "-"}
                </td>

                <td className="px-3 py-2">
                  {item.payment ? (
                    <img
                      src={item.payment}
                      className="w-12 h-12 cursor-pointer"
                      onClick={() => window.open(item.payment)}
                    />
                  ) : "-"}
                </td>

                <td className="px-3 py-2">{item.utr || "-"}</td>



                {/* ACTIONS */}
                <td className="px-3 py-2 flex flex-col gap-1">

                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-gray-700 text-white px-2 py-1 rounded text-xs"
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