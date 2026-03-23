const fs = require("fs");

/**
 * Extract file buffer from express-fileupload
 * Handles both temp file (useTempFiles: true) and memory buffer scenarios
 * @param {Object} fileObj - The file object from req.files
 * @returns {Promise<Buffer>} The file buffer
 */
const getFileBuffer = async (fileObj) => {
  if (!fileObj) {
    throw new Error("File object is undefined");
  }

  let fileBuffer = null;

  try {
    // Scenario 1: File was saved to disk (useTempFiles: true in express-fileupload config)
    if (fileObj.tempFilePath) {
      fileBuffer = await fs.promises.readFile(fileObj.tempFilePath);
      // Clean up temp file after reading
      await fs.promises.unlink(fileObj.tempFilePath).catch(() => {});
    }
    // Scenario 2: File is in memory (useTempFiles: false or not set)
    else if (fileObj.data) {
      fileBuffer = fileObj.data;
    }

    // Validate file size
    if (!fileBuffer || fileBuffer.length === 0) {
      throw new Error("File buffer is empty");
    }

    return fileBuffer;
  } catch (error) {
    throw new Error(`Failed to extract file buffer: ${error.message}`);
  }
};

module.exports = { getFileBuffer };
