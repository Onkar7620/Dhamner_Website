# Gaav Website Backend Setup Guide

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the backend folder:

```env
# MongoDB Connection (Local or Atlas)
MONGODB_URI=mongodb://localhost:27017/gaav-database

# Cloudinary Configuration
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Server
PORT=5000
NODE_ENV=development
```

### 3. Get Cloudinary Credentials
1. Go to [Cloudinary](https://cloudinary.com) and create a free account
2. From Dashboard, copy:
   - Cloud Name
   - API Key
   - API Secret
3. Add them to your `.env` file

### 4. Start the Server
```bash
npm start          # Production mode
npm run dev        # Development mode (with auto-reload)
```

✅ Server should run on `http://localhost:5000`

---

## 📋 API Endpoints

### Services (No File Upload)

| Form | Endpoint | Method |
|------|----------|--------|
| Complaints | `/api/complaints` | POST |
| Tax | `/api/tax` | POST |
| Age Certificate | `/api/age-certificate` | POST |
| No Dues | `/api/no-dues` | POST |

### Documents (With File Uploads)

| Form | Endpoint | Method | Files |
|------|----------|--------|-------|
| Birth Certificate | `/api/form` | POST | screenshot |
| Death Certificate | `/api/death-form` | POST | screenshot |
| Marriage Certificate | `/api/marriage-form` | POST | screenshot |
| Residence | `/api/residence-form` | POST | screenshot |
| Property (Malmatta) | `/api/malmatta-form` | POST | screenshot |
| Property Card | `/api/property-card` | POST | screenshot |
| Land 7/12 | `/api/land712` | POST | screenshot |
| Land 8A | `/api/land8a` | POST | screenshot |
| Building Permission | `/api/building-permission` | POST | ownershipDocs, layoutPlan, buildingPlan, taxReceipt |
| Business License | `/api/business-form` | POST | aadhar, photo, payment |
| Property Transfer | `/api/property-transfer` | POST | taxReceipt, utara, consent |

---

## 📁 Backend Structure

```
backend/
├── config/
│   ├── database.js          # MongoDB configuration
│   └── cloudinary.js        # Cloudinary setup
├── models/                  # MongoDB schemas (15 models)
│   ├── Complaint.js
│   ├── Tax.js
│   ├── AgeCertificate.js
│   ├── BirthCertificate.js
│   ├── DeathCertificate.js
│   ├── MarriageCertificate.js
│   ├── BuildingPermission.js
│   ├── BusinessLicense.js
│   ├── Land712.js
│   ├── Land8A.js
│   ├── NoDues.js
│   ├── ResidenceCertificate.js
│   ├── PropertyDocument.js
│   ├── PropertyCard.js
│   └── PropertyTransfer.js
├── controllers/             # Business logic (15 controllers)
│   ├── complaintController.js
│   ├── taxController.js
│   ├── ageCertificateController.js
│   ├── birthCertificateController.js
│   ├── deathCertificateController.js
│   ├── marriageCertificateController.js
│   ├── buildingPermissionController.js
│   ├── businessLicenseController.js
│   ├── land712Controller.js
│   ├── land8AController.js
│   ├── noDuesController.js
│   ├── residenceCertificateController.js
│   ├── propertyDocumentController.js
│   ├── propertyCardController.js
│   └── propertyTransferController.js
├── routes/                  # API routes (15 route files)
│   ├── complaintRoutes.js
│   ├── taxRoutes.js
│   ├── ageCertificateRoutes.js
│   ├── birthCertificateRoutes.js
│   ├── deathCertificateRoutes.js
│   ├── marriageCertificateRoutes.js
│   ├── buildingPermissionRoutes.js
│   ├── businessLicenseRoutes.js
│   ├── land712Routes.js
│   ├── land8ARoutes.js
│   ├── noDuesRoutes.js
│   ├── residenceCertificateRoutes.js
│   ├── propertyDocumentRoutes.js
│   ├── propertyCardRoutes.js
│   └── propertyTransferRoutes.js
├── middleware/
│   ├── upload.js            # Multer configuration
│   └── cloudinaryUpload.js  # Cloudinary upload handler
├── .env.example             # Environment template
├── package.json             # Dependencies
└── server.js                # Main entry point
```

---

## 🔄 Frontend Integration

### Update Frontend API Endpoints

In your frontend (React), the axios calls are already correct:

```javascript
// ComplaintPage.jsx
await axios.post("http://localhost:5000/api/complaints", formData);

// TaxForm.jsx
await axios.post("http://localhost:5000/api/tax", data);

// BirthDocument.jsx
await axios.post("http://localhost:5000/api/form", formData);
// etc...
```

### Update CORS in Backend (if needed)

The backend already has CORS enabled for all origins. To restrict to your frontend domain:

In `server.js`:
```javascript
app.use(cors({
  origin: ['http://localhost:5173', 'https://yourdomain.com'],
  credentials: true
}));
```

---

## 📤 Cloudinary URL Storage

All images/files are stored as **Cloudinary URLs** in MongoDB:

```javascript
// Example: Tax form with Cloudinary URLs
{
  _id: ObjectId(...),
  name: "Raj Patel",
  gharpattiScreenshot: "https://res.cloudinary.com/.../xyz.jpg",
  panipattiScreenshot: "https://res.cloudinary.com/.../abc.jpg",
  createdAt: "2024-03-21T10:30:00Z"
}
```

---

## 🗄️ MongoDB Collections

All form data is stored in **MongoDB** with the following collections:

| Collection | Status Field |
|-----------|--------------|
| complaints | pending, resolved, in-progress |
| taxes | pending, verified, rejected |
| agecertificates | pending, approved, rejected |
| birthcertificates | pending, approved, rejected |
| deathcertificates | pending, approved, rejected |
| marriagecertificates | pending, approved, rejected |
| buildingpermissions | pending, approved, rejected |
| businesslicenses | pending, approved, rejected |
| land712s | pending, approved, rejected |
| land8as | pending, approved, rejected |
| noduess | pending, approved, rejected |
| residencecertificates | pending, approved, rejected |
| propertydocuments | pending, approved, rejected |
| propertycards | pending, approved, rejected |
| propertytransfers | pending, approved, rejected |

---

## ✨ Features

✅ **15 Forms** - All village services covered  
✅ **Cloudinary Integration** - Secure cloud storage for images  
✅ **MongoDB** - NoSQL database for scalability  
✅ **CORS Enabled** - Frontend-backend communication  
✅ **File Upload** - Multer + Express-fileupload  
✅ **Status Tracking** - Monitor application status  
✅ **Error Handling** - Comprehensive error messages  
✅ **RESTful API** - Clean API design  
✅ **Marathi Support** - Messages in Marathi  

---

## 🔧 Troubleshooting

### MongoDB Connection Failed
- Ensure MongoDB is running locally: `mongod`
- Or use MongoDB Atlas connection string
- Check `MONGODB_URI` in `.env`

### Cloudinary Upload Failed
- Verify credentials in `.env`
- Check file size (max 5MB)
- Supported formats: JPEG, PNG, GIF, WebP, PDF

### CORS Error
- Frontend URL must match CORS config
- Check `Access-Control-Allow-Origin` header

### Port Already in Use
```bash
# Change PORT in .env to 5001 or kill process on 5000
```

---

## 📚 API Response Format

### Success Response
```json
{
  "success": true,
  "message": "तक्रार यशस्वीरित्या पाठवली ✅",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Ram Kumar",
    "mobile": "9876543210",
    "createdAt": "2024-03-21T10:30:00Z"
  }
}
```

### Error Response
```json
{
  "success": false,
  "message": "काहीतरी चूक झाली ❌",
  "error": "Email already exists"
}
```

---

## 🚀 Deployment

### Using Heroku
```bash
# Login
heroku login

# Create app
heroku create your-app-name

# Set environment variables
heroku config:set MONGODB_URI=your_atlas_uri
heroku config:set CLOUDINARY_NAME=your_name
heroku config:set CLOUDINARY_API_KEY=your_key
heroku config:set CLOUDINARY_API_SECRET=your_secret

# Deploy
git push heroku main
```

### Using Render
1. Push code to GitHub
2. Connect repository to Render
3. Set environment variables
4. Deploy

---

## 📞 Support

For issues:
1. Check `.env` configuration
2. Review MongoDB connection
3. Verify Cloudinary credentials
4. Check network/CORS settings
5. Review server logs

---

**Backend Setup Complete! ✅**
Your Gaav Website backend is ready for all 15 forms with Cloudinary integration.
