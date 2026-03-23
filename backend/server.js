require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const connectDB = require("./config/database");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

// Connect to database
connectDB();

// ============ MIDDLEWARE ============

// 1. CORS first
app.use(cors());

// 2. Handle malformed multipart requests gracefully
app.use((err, req, res, next) => {
  if (err.message && err.message.includes("Unexpected end of form")) {
    console.warn("⚠️ Malformed multipart request detected, continuing...");
    return res.status(400).json({
      success: false,
      message: "Invalid form submission - file may be too large or connection interrupted",
      error: "Multipart stream error",
    });
  }
  next(err);
});

// 3. File upload ONLY (no bodyParser interference)
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: './tmp/',
  limits: { fileSize: 50 * 1024 * 1024 },
  safeFileNames: true,
  preserveExtension: true,
  abortOnLimit: true,
  responseOnLimit: "File too large, max 50MB",
  responseOnError: "Error uploading file",
}));

// 4. JSON parser ONLY for non-file requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🏘️ Gaav Website Backend API is running perfectly! ✅",
  });
});

// Diagnostic endpoint for debugging multipart issues
app.post("/api/test-upload", (req, res) => {
  console.log("📝 TEST UPLOAD DEBUG:");
  console.log("Content-Type:", req.headers["content-type"]);
  console.log("Request method:", req.method);
  console.log("Files received:", req.files ? Object.keys(req.files) : "NONE");
  console.log("Form fields:", req.body ? Object.keys(req.body) : "NONE");
  
  if (req.files) {
    Object.keys(req.files).forEach((key) => {
      console.log(`  - ${key}:`, {
        name: req.files[key].name,
        mimetype: req.files[key].mimetype,
        size: req.files[key].size,
        tempFilePath: req.files[key].tempFilePath,
      });
    });
  }
  
  res.json({
    success: true,
    message: "Test upload received",
    filesReceived: req.files ? Object.keys(req.files) : [],
    fieldsReceived: req.body,
  });
});

// Routes
app.use("/api/complaints", require("./routes/complaintRoutes"));
app.use("/api/tax", require("./routes/taxRoutes"));
app.use("/api/age-certificate", require("./routes/ageCertificateRoutes"));
app.use("/api/form", require("./routes/birthCertificateRoutes")); // Birth certificate endpoint
app.use("/api/birth-cert", require("./routes/birthCertificateRoutes")); // Alternative endpoint
app.use("/api/death-form", require("./routes/deathCertificateRoutes"));
app.use("/api/marriage-form", require("./routes/marriageCertificateRoutes"));
app.use("/api/building-permission", require("./routes/buildingPermissionRoutes"));
app.use("/api/business-form", require("./routes/businessLicenseRoutes"));
app.use("/api/land712", require("./routes/land712Routes"));
app.use("/api/land8a", require("./routes/land8ARoutes"));
app.use("/api/no-dues", require("./routes/noDuesRoutes"));
app.use("/api/residence-form", require("./routes/residenceCertificateRoutes"));
app.use("/api/malmatta-form", require("./routes/propertyDocumentRoutes"));
app.use("/api/property-card", require("./routes/propertyCardRoutes"));
app.use("/api/property-transfer", require("./routes/propertyTransferRoutes"));
app.use("/api/review", require("./routes/reviewRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));
require("dotenv").config();
app.use("/api/admin", adminRoutes);


// Error handling middleware
app.use((err, req, res, next) => {
  console.error("❌ Error:", err);
  
  // Handle multipart/form-data errors specifically
  if (err.message && err.message.includes("Unexpected end of form")) {
    return res.status(400).json({
      success: false,
      message: "Invalid form data - please ensure all files are properly selected",
      error: "Malformed multipart form data",
    });
  }
  
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Server error",
    error: process.env.NODE_ENV === "development" ? err.stack : err.message,
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API endpoint not found",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n✅ Server is running on http://localhost:${PORT}`);
  console.log(`📚 API Documentation:`);
  console.log(`   - Complaints: POST /api/complaints`);
  console.log(`   - Tax: POST /api/tax`);
  console.log(`   - Birth Certificate: POST /api/form`);
  console.log(`   - Death Certificate: POST /api/death-form`);
  console.log(`   - Marriage Certificate: POST /api/marriage-form`);
  console.log(`   - Building Permission: POST /api/building-permission`);
  console.log(`   - Business License: POST /api/business-form`);
  console.log(`   - Land 7/12: POST /api/land712`);
  console.log(`   - Land 8A: POST /api/land8a`);
  console.log(`   - No Dues: POST /api/no-dues`);
  console.log(`   - Residence Certificate: POST /api/residence-form`);
  console.log(`   - Property Document: POST /api/malmatta-form`);
  console.log(`   - Property Card: POST /api/property-card`);
  console.log(`   - Property Transfer: POST /api/property-transfer\n`);
});
