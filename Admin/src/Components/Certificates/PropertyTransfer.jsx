import { useEffect, useState } from "react";
import axios from "axios";

export default function PropertyTransfer() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ YOUR BACKEND ROUTE
  const API = "http://localhost:5000/api/property-transfer";

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
    return <p className="text-center mt-10">Loading property transfers...</p>;
  }

  return (
    <div className="p-4 lg:p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Property Transfer Applications
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">

          {/* HEADER */}
          <thead className="bg-gray-200 text-xs lg:text-sm">
            <tr>
              <th className="px-3 py-2">Seller Name</th>
              <th className="px-3 py-2">Seller Address</th>
              <th className="px-3 py-2">Buyer Name</th>
              <th className="px-3 py-2">Buyer Address</th>
              <th className="px-3 py-2">Property No</th>
              <th className="px-3 py-2">Area</th>
              <th className="px-3 py-2">Property Type</th>
              <th className="px-3 py-2">Mobile</th>
              <th className="px-3 py-2">Email</th>
              <th className="px-3 py-2">Tax Receipt</th>
              <th className="px-3 py-2">Utara</th>
              <th className="px-3 py-2">Consent</th>
              <th className="px-3 py-2">Death Cert</th>
              <th className="px-3 py-2">Actions</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {data.map((item) => (
              <tr key={item._id} className="border-t text-xs lg:text-sm hover:bg-gray-50">

                <td className="px-3 py-2">{item.sellerName}</td>
                <td className="px-3 py-2">{item.sellerAddress}</td>

                <td className="px-3 py-2">{item.buyerName}</td>
                <td className="px-3 py-2">{item.buyerAddress}</td>

                <td className="px-3 py-2">{item.propertyNo}</td>
                <td className="px-3 py-2">{item.area || "-"}</td>

                <td className="px-3 py-2">{item.propertyType || "-"}</td>

                <td className="px-3 py-2">{item.mobile}</td>
                <td className="px-3 py-2">{item.email || "-"}</td>

                {/* DOCUMENTS */}
                <td className="px-3 py-2">
                  {item.taxReceipt ? (
                    <img
                      src={item.taxReceipt}
                      className="w-12 h-12 cursor-pointer"
                      onClick={() => window.open(item.taxReceipt)}
                    />
                  ) : "-"}
                </td>

                <td className="px-3 py-2">
                  {item.utara ? (
                    <img
                      src={item.utara}
                      className="w-12 h-12 cursor-pointer"
                      onClick={() => window.open(item.utara)}
                    />
                  ) : "-"}
                </td>

                <td className="px-3 py-2">
                  {item.consent ? (
                    <img
                      src={item.consent}
                      className="w-12 h-12 cursor-pointer"
                      onClick={() => window.open(item.consent)}
                    />
                  ) : "-"}
                </td>

                <td className="px-3 py-2">
                  {item.deathCertificate ? (
                    <img
                      src={item.deathCertificate}
                      className="w-12 h-12 cursor-pointer"
                      onClick={() => window.open(item.deathCertificate)}
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