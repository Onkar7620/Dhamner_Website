import { useEffect, useState } from "react";
import axios from "axios";

export default function BuildingPermissionCertificate() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ YOUR BACKEND ROUTE
  const API = "http://localhost:5000/api/building-permission";

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
    return <p className="text-center mt-10">Loading building permissions...</p>;
  }

  return (
    <div className="p-4 lg:p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Building Permission Applications
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">

          {/* HEADER */}
          <thead className="bg-gray-200 text-xs lg:text-sm">
            <tr>
              <th className="px-3 py-2">Name</th>
              <th className="px-3 py-2">Mobile</th>
              <th className="px-3 py-2">Email</th>
              <th className="px-3 py-2">Address</th>
              <th className="px-3 py-2">Property No</th>
              <th className="px-3 py-2">Business</th>
              <th className="px-3 py-2">Plot (SqFt)</th>
              <th className="px-3 py-2">Plot (SqM)</th>
              <th className="px-3 py-2">Construction (SqFt)</th>
              <th className="px-3 py-2">Construction (SqM)</th>
              <th className="px-3 py-2">Floors</th>
              <th className="px-3 py-2">Ownership</th>
              <th className="px-3 py-2">Layout</th>
              <th className="px-3 py-2">Building Plan</th>
              <th className="px-3 py-2">Tax Receipt</th>
              <th className="px-3 py-2">Actions</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {data.map((item) => (
              <tr key={item._id} className="border-t text-xs lg:text-sm hover:bg-gray-50">

                <td className="px-3 py-2">{item.fullName}</td>
                <td className="px-3 py-2">{item.mobile}</td>
                <td className="px-3 py-2">{item.email || "-"}</td>

                <td className="px-3 py-2">{item.address}</td>
                <td className="px-3 py-2">{item.propertyNo}</td>

                <td className="px-3 py-2">{item.business || "-"}</td>

                <td className="px-3 py-2">{item.plotAreaSqFt || "-"}</td>
                <td className="px-3 py-2">{item.plotAreaSqM || "-"}</td>

                <td className="px-3 py-2">{item.constructionAreaSqFt || "-"}</td>
                <td className="px-3 py-2">{item.constructionAreaSqM || "-"}</td>

                <td className="px-3 py-2">{item.floors || "-"}</td>

                {/* DOCUMENT IMAGES */}
                <td className="px-3 py-2">
                  {item.ownershipDocs ? (
                    <img
                      src={item.ownershipDocs}
                      className="w-12 h-12 cursor-pointer"
                      onClick={() => window.open(item.ownershipDocs)}
                    />
                  ) : "-"}
                </td>

                <td className="px-3 py-2">
                  {item.layoutPlan ? (
                    <img
                      src={item.layoutPlan}
                      className="w-12 h-12 cursor-pointer"
                      onClick={() => window.open(item.layoutPlan)}
                    />
                  ) : "-"}
                </td>

                <td className="px-3 py-2">
                  {item.buildingPlan ? (
                    <img
                      src={item.buildingPlan}
                      className="w-12 h-12 cursor-pointer"
                      onClick={() => window.open(item.buildingPlan)}
                    />
                  ) : "-"}
                </td>

                <td className="px-3 py-2">
                  {item.taxReceipt ? (
                    <img
                      src={item.taxReceipt}
                      className="w-12 h-12 cursor-pointer"
                      onClick={() => window.open(item.taxReceipt)}
                    />
                  ) : "-"}
                </td>

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