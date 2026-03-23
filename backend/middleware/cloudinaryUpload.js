const cloudinary = require("../config/cloudinary");
const uploadPresets = require("../config/uploadPresets");

/**
 * Upload file to Cloudinary with organized folder structure
 * @param {Buffer} fileBuffer - File buffer to upload
 * @param {String} filename - Original filename
 * @param {String} documentType - Type of document (contact, review, birthCertificate, etc.)
 * @returns {Promise<String>} Secure URL of uploaded file
 */
const uploadToCloudinary = async (fileBuffer, filename, documentType = "general") => {
  return new Promise((resolve, reject) => {
    // Get preset configuration for this document type
    const presetConfig = uploadPresets[documentType] || uploadPresets.complaint;
    
    const stream = cloudinary.uploader.upload_stream(
      {
        resource_type: "auto",
        folder: presetConfig.folder, // Upload to organized folder
        public_id: `${Date.now()}-${filename}`,
        use_filename: true,
        unique_filename: true,
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.secure_url);
        }
      }
    );

    stream.end(fileBuffer);
  });
};

module.exports = uploadToCloudinary;
