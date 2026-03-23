# Cloudinary Upload Presets Implementation Guide

## Overview

This implementation organizes all document uploads into categorized folders in Cloudinary for better organization, management, and security.

---

## Step 1: Create Upload Presets in Cloudinary Dashboard

You must manually create these presets in Cloudinary (one time only):

### Contact & Review Forms
- **Preset Name**: `gaav-contact` → Folder: `gaav-uploads/contact-forms`
- **Preset Name**: `gaav-review` → Folder: `gaav-uploads/review-forms`

### Certificates (Copy this pattern for all)
- **Preset Name**: `gaav-birth-cert` → Folder: `gaav-uploads/certificates/birth`
- **Preset Name**: `gaav-age-cert` → Folder: `gaav-uploads/certificates/age`
- **Preset Name**: `gaav-death-cert` → Folder: `gaav-uploads/certificates/death`
- **Preset Name**: `gaav-marriage-cert` → Folder: `gaav-uploads/certificates/marriage`
- **Preset Name**: `gaav-residence-cert` → Folder: `gaav-uploads/certificates/residence`

### Property Documents
- **Preset Name**: `gaav-property-doc` → Folder: `gaav-uploads/documents/property`
- **Preset Name**: `gaav-property-card` → Folder: `gaav-uploads/documents/property-card`
- **Preset Name**: `gaav-property-transfer` → Folder: `gaav-uploads/documents/property-transfer`

### Land Documents
- **Preset Name**: `gaav-land-712` → Folder: `gaav-uploads/documents/land/7-12`
- **Preset Name**: `gaav-land-8a` → Folder: `gaav-uploads/documents/land/8-a`

### Government Services
- **Preset Name**: `gaav-complaint` → Folder: `gaav-uploads/complaints`
- **Preset Name**: `gaav-building-perm` → Folder: `gaav-uploads/documents/building-permission`
- **Preset Name**: `gaav-business-lic` → Folder: `gaav-uploads/documents/business-license`
- **Preset Name**: `gaav-tax` → Folder: `gaav-uploads/documents/tax`
- **Preset Name**: `gaav-no-dues` → Folder: `gaav-uploads/documents/no-dues`

**For each preset:**
1. Go to Settings ⚙️ → Upload tab
2. Click "Add upload preset"
3. Set **Signing Mode** to **"Unsigned"** (safer for frontend)
4. Set **Folder** to the specified path
5. Click "Save"

---

## Step 2: Update Your `.env` File

Copy all variables from `.env.example` to your `.env` file:

```env
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# All 14 upload presets:
CLOUDINARY_PRESET_CONTACT=gaav-contact
CLOUDINARY_PRESET_REVIEW=gaav-review
CLOUDINARY_PRESET_COMPLAINT=gaav-complaint
# ... (and all others)
```

---

## Step 3: Using Presets in Backend Controllers

### Backend Upload (Server-side)

Update controllers to specify document type:

```javascript
// Before:
const fileUrl = await uploadToCloudinary(fileBuffer, filename);

// After:
const fileUrl = await uploadToCloudinary(fileBuffer, filename, "birthCertificate");
```

**Available document types:**
- `contact`
- `review`
- `complaint`
- `birthCertificate`
- `ageCertificate`
- `deathCertificate`
- `marriageCertificate`
- `residenceCertificate`
- `propertyDocument`
- `propertyCard`
- `propertyTransfer`
- `land712`
- `land8A`
- `buildingPermission`
- `businessLicense`
- `tax`
- `noDues`

### Frontend Upload (Client-side - RECOMMENDED)

For frontend direct uploads (no backend file handling), use the preset as environment variable:

```javascript
// React example
const handleFileUpload = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "gaav-birth-cert");

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_NAME}/auto/upload`,
      { method: "POST", body: formData }
    );
    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error("Upload failed:", error);
  }
};
```

---

## Step 4: Folder Structure After Implementation

All uploads will be organized as:

```
gaav-uploads/
├── contact-forms/          ← Contact form submissions
├── review-forms/           ← Review submissions
├── complaints/             ← Complaint submissions
├── certificates/
│   ├── birth/               ← Birth certificates
│   ├── age/                 ← Age certificates
│   ├── death/               ← Death certificates
│   ├── marriage/            ← Marriage certificates
│   └── residence/           ← Residence certificates
├── documents/
│   ├── property/            ← Property documents
│   ├── property-card/       ← Property cards
│   ├── property-transfer/   ← Property transfers
│   ├── building-permission/ ← Building permissions
│   ├── business-license/    ← Business licenses
│   ├── tax/                 ← Tax documents
│   ├── no-dues/             ← No dues certificates
│   └── land/
│       ├── 7-12/           ← Land 7/12 documents
│       └── 8-a/            ← Land 8-A documents
```

---

## Step 5: Benefits

✅ **Organization**: Each document type in its own folder  
✅ **Security**: Different folders can have different access rules  
✅ **Management**: Easily delete/backup specific document types  
✅ **Tracking**: See which forms generate most uploads  
✅ **Scalability**: Easy to add more document types  
✅ **Compliance**: Better audit trail for government requirements  

---

## Example: Update Birth Certificate Controller

```javascript
// Before:
const fileUrl = await uploadToCloudinary(fileBuffer, req.file.originalname);

// After:
const fileUrl = await uploadToCloudinary(fileBuffer, req.file.originalname, "birthCertificate");

// Or if using preset directly:
const preset = process.env.CLOUDINARY_PRESET_BIRTH_CERT;
// Pass to frontend
```

---

## Troubleshooting

**Q: Files not uploading to correct folder?**  
A: Make sure preset with exact name exists in Cloudinary Dashboard with correct folder path

**Q: "Upload preset not found" error?**  
A: Check if preset name matches exactly (case-sensitive)

**Q: Files going to root instead of folder?**  
A: Preset may not have folder configured. Edit preset → set Folder field

**Q: Need to update folder path later?**  
A: Go to Cloudinary → Settings → Upload → Edit preset → Change Folder → Save

---

## Files Modified

1. `backend/config/uploadPresets.js` (NEW) - Maps documents to presets/folders
2. `backend/middleware/cloudinaryUpload.js` (UPDATED) - Supports documentType parameter
3. `backend/.env.example` (UPDATED) - All preset environment variables
4. This guide file

---

**Next Steps:**
1. Create all 14 presets in Cloudinary Dashboard
2. Copy `.env.example` values to your `.env` file
3. Update controllers to use the document type (optional, improves organization)
4. Test by submitting a form and checking Cloudinary Media Library

Questions? The preset system is flexible and can be extended anytime!
