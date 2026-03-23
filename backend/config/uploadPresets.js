// Upload Presets Configuration
// Maps each document type to its Cloudinary preset and folder

const uploadPresets = {
  // Contact & Review Forms
  contact: {
    preset: "gaav-contact",
    folder: "gaav-uploads/contact-forms",
    description: "Contact form submissions",
  },
  review: {
    preset: "gaav-review",
    folder: "gaav-uploads/review-forms",
    description: "Review and feedback submissions",
  },

  // Complaints & Services
  complaint: {
    preset: "gaav-complaint",
    folder: "gaav-uploads/complaints",
    description: "Complaint submissions",
  },

  // Certificates
  birthCertificate: {
    preset: "gaav-birth-cert",
    folder: "gaav-uploads/certificates/birth",
    description: "Birth certificate documents",
  },
  ageCertificate: {
    preset: "gaav-age-cert",
    folder: "gaav-uploads/certificates/age",
    description: "Age certificate documents",
  },
  deathCertificate: {
    preset: "gaav-death-cert",
    folder: "gaav-uploads/certificates/death",
    description: "Death certificate documents",
  },
  marriageCertificate: {
    preset: "gaav-marriage-cert",
    folder: "gaav-uploads/certificates/marriage",
    description: "Marriage certificate documents",
  },
  residenceCertificate: {
    preset: "gaav-residence-cert",
    folder: "gaav-uploads/certificates/residence",
    description: "Residence certificate documents",
  },

  // Property Documents
  propertyDocument: {
    preset: "gaav-property-doc",
    folder: "gaav-uploads/documents/property",
    description: "Property documents",
  },
  propertyCard: {
    preset: "gaav-property-card",
    folder: "gaav-uploads/documents/property-card",
    description: "Property card documents",
  },
  propertyTransfer: {
    preset: "gaav-property-transfer",
    folder: "gaav-uploads/documents/property-transfer",
    description: "Property transfer documents",
  },

  // Land Documents
  land712: {
    preset: "gaav-land-712",
    folder: "gaav-uploads/documents/land/7-12",
    description: "Land 7/12 documents",
  },
  land8A: {
    preset: "gaav-land-8a",
    folder: "gaav-uploads/documents/land/8-a",
    description: "Land 8-A documents",
  },

  // Government Services
  buildingPermission: {
    preset: "gaav-building-perm",
    folder: "gaav-uploads/documents/building-permission",
    description: "Building permission documents",
  },
  businessLicense: {
    preset: "gaav-business-lic",
    folder: "gaav-uploads/documents/business-license",
    description: "Business license documents",
  },
  tax: {
    preset: "gaav-tax",
    folder: "gaav-uploads/documents/tax",
    description: "Tax documents",
  },
  noDues: {
    preset: "gaav-no-dues",
    folder: "gaav-uploads/documents/no-dues",
    description: "No dues certificate documents",
  },
};

module.exports = uploadPresets;
