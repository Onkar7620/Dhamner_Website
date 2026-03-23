import axios from "axios";

/**
 * Safely submit form data with proper Content-Type handling
 * Ensures multipart/form-data is properly formatted
 * @param {string} url - API endpoint
 * @param {Object} formData - Form fields (text data)
 * @param {Object} files - File fields {fieldName: File}
 * @returns {Promise} Response from API
 */
export const submitFormData = async (url, formData, files = {}) => {
  const data = new FormData();

  // Append all text fields
  if (formData) {
    Object.keys(formData).forEach((key) => {
      const value = formData[key];
      // Skip null/undefined values, but keep empty strings for text fields
      if (value !== null && value !== undefined) {
        data.append(key, value);
      }
    });
  }

  // Append only files that exist
  if (files) {
    Object.keys(files).forEach((key) => {
      if (files[key]) {
        data.append(key, files[key]);
      }
    });
  }

  try {
    // Create request WITHOUT explicitly setting Content-Type
    // Axios will automatically set it with proper boundary
    const response = await axios.post(url, data, {
      headers: {
        // Don't set Content-Type - let axios handle it
        // "Content-Type": "multipart/form-data" would break the boundary
      },
    });

    return response.data;
  } catch (error) {
    console.error("Form submission error:", error);
    throw error;
  }
};

/**
 * Validate file before submission
 * @param {File} file - File to validate
 * @param {number} maxSizeMB - Max file size in MB
 * @returns {Object} {valid: boolean, error: string}
 */
export const validateFile = (file, maxSizeMB = 5) => {
  if (!file) {
    return {
      valid: false,
      error: "कृपया फाईल निवडा",
    };
  }

  const maxBytes = maxSizeMB * 1024 * 1024;
  if (file.size > maxBytes) {
    return {
      valid: false,
      error: `फाईल आकार ${maxSizeMB}MB पेक्षा मोठी असू शकत नाही`,
    };
  }

  return { valid: true };
};

/**
 * Validate multiple files
 * @param {Object} files - {fieldName: File}
 * @param {Array} requiredFiles - List of required file field names
 * @returns {Object} {valid: boolean, error: string}
 */
export const validateFiles = (files, requiredFiles = []) => {
  for (const fieldName of requiredFiles) {
    if (!files[fieldName]) {
      return {
        valid: false,
        error: `कृपया ${fieldName} अपलोड करा`,
      };
    }
  }

  return { valid: true };
};
