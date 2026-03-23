import React, { useState } from "react";
import axios from "axios";

const TestUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTestUpload = async (e) => {
    e.preventDefault();

    if (!file) {
      setMessage("❌ Please select a file first");
      return;
    }

    setLoading(true);
    setMessage("Sending...");

    try {
      const formData = new FormData();
      formData.append("testFile", file);
      formData.append("name", "Test User");
      formData.append("email", "test@example.com");

      console.log("📤 Sending FormData:");
      console.log("Content-Type will be:", formData.getHeaders?.()?.["content-type"] || "auto");

      const response = await axios.post(
        "http://localhost:5000/api/test-upload",
        formData
        // DON'T explicitly set Content-Type - let axios auto-detect with proper boundary
      );

      console.log("✅ Response:", response.data);
      setMessage(`✅ Success! ${JSON.stringify(response.data)}`);
    } catch (error) {
      console.error("❌ Error:", error);
      setMessage(`❌ Error: ${error.response?.data?.message || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", border: "1px solid red", margin: "20px" }}>
      <h2>🧪 Multipart Upload Test</h2>
      <form onSubmit={handleTestUpload}>
        <div>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            disabled={loading}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "⏳ Uploading..." : "🚀 Test Upload"}
        </button>
      </form>
      <div style={{ marginTop: "10px", color: message.includes("✅") ? "green" : "red" }}>
        {message}
      </div>
    </div>
  );
};

export default TestUpload;
