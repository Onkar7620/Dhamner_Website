# 🏘️ Gaav Website Backend

Complete Node.js/Express/MongoDB backend for the Gaav Website with **Cloudinary image storage integration**.

---

## 📋 What's Included

### ✅ 15 Complete API Endpoints
All village services forms are fully integrated:

**Services (2 forms)**
- 🔴 Complaints submission
- 💰 Tax payment tracking

**Document Certificates (13 forms)**
- 👶 Birth Certificate
- ☠️ Death Certificate
- 💍 Marriage Certificate
- 🏠 Residence Certificate
- 📄 Property/Malmatta Certificate
- 🏗️ Building Permission
- 🎯 Property Card (Digital Signed)
- 💼 Business License
- 🌾 Land 7/12 (Digital Signed)
- 🌍 Land 8A (Digital Signed)
- ✋ No Dues Certificate
- 👤 Age Certificate
- 🏘️ Property Transfer

### ⚙️ Core Features
- **MongoDB** - NoSQL database for scalability
- **Cloudinary** - Cloud storage for images (as URLs)
- **Express.js** - Fast, lightweight Node framework
- **File Upload** - Multer + Express-fileupload
- **CORS** - Enable cross-origin requests from frontend
- **Error Handling** - Comprehensive error messages
- **Status Tracking** - pending/approved/rejected states
- **Marathi Support** - Messages in Marathi language

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+)
- MongoDB (local or Atlas)
- Cloudinary account (free)

### Installation
```bash
# 1. Install dependencies
npm install

# 2. Create .env file
cp .env.example .env

# 3. Add your credentials to .env
MONGODB_URI=mongodb://localhost:27017/gaav-database
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# 4. Start server
npm start
```

✅ Server runs on **http://localhost:5000**

---

## 📁 Project Structure

```
backend/
├── config/              # Database & Cloudinary configuration
├── models/              # MongoDB schemas (15 models)
├── controllers/         # Business logic (15 controllers)
├── routes/              # API endpoints (15 route files)
├── middleware/          # Upload & authentication
├── server.js            # Main entry point
├── package.json         # Dependencies
├── .env.example         # Environment template
├── BACKEND_SETUP.md     # Detailed setup guide
└── QUICK_START.md       # Quick reference
```

---

## 🔗 API Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/api/complaints` | Submit complaint |
| POST | `/api/tax` | Tax payment form |
| POST | `/api/form` | Birth certificate |
| POST | `/api/death-form` | Death certificate |
| POST | `/api/marriage-form` | Marriage certificate |
| POST | `/api/residence-form` | Residence certificate |
| POST | `/api/malmatta-form` | Property document |
| POST | `/api/property-card` | Property card |
| POST | `/api/building-permission` | Building permission |
| POST | `/api/business-form` | Business license |
| POST | `/api/land712` | Land 7/12 |
| POST | `/api/land8a` | Land 8A |
| POST | `/api/no-dues` | No dues |
| POST | `/api/age-certificate` | Age certificate |
| POST | `/api/property-transfer` | Property transfer |

**All endpoints support:**
- GET - Retrieve all records
- GET /:id - Retrieve specific record
- PUT /:id - Update record
- DELETE /:id - Delete record

---

## 📤 Cloudinary Integration

All uploaded files are stored as **Cloudinary URLs** in MongoDB:

```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "राज पटेल",
  "gharpattiScreenshot": "https://res.cloudinary.com/your-cloud/image/upload/v1/...",
  "status": "pending"
}
```

### File Types Accepted
- Images: JPEG, PNG, GIF, WebP
- Documents: PDF
- Max Size: 5MB

---

## 💾 MongoDB Collections

Each form creates a collection in MongoDB:

```
gaav-database/
├── complaints
├── taxes
├── agecertificates
├── birthcertificates
├── deathcertificates
├── marriagecertificates
├── buildingpermissions
├── businesslicenses
├── land712s
├── land8as
├── noduess
├── residencecertificates
├── propertydocuments
├── propertycards
└── propertytransfers
```

---

## 📊 Status Values

All documents support status tracking:

```
"pending"    → Awaiting review
"approved"   → Application approved
"rejected"   → Application rejected
"resolved"   → Complaint resolved (complaints only)
"verified"   → Payment verified (tax only)
```

---

## 🔐 Environment Variables

Required in `.env`:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/gaav-database
# or MongoDB Atlas:
# MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/gaav-database

# Cloudinary
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Server
PORT=5000
NODE_ENV=development
```

---

## 💻 Development

### Start Development Server
```bash
npm run dev
```
Uses `nodemon` for auto-reload on file changes.

### Run Production
```bash
npm start
```

### Testing with cURL
```bash
curl -X POST http://localhost:5000/api/complaints \
  -H "Content-Type: application/json" \
  -d '{"propertyId":"123","department":"water","complaint":"Test","name":"User","address":"Address","mobile":"9876543210","aadhaar":"111122223333"}'
```

---

## 🚀 Deployment

### Heroku
```bash
heroku create your-app-name
heroku config:set MONGODB_URI=your_uri
heroku config:set CLOUDINARY_NAME=your_name
heroku config:set CLOUDINARY_API_KEY=your_key
heroku config:set CLOUDINARY_API_SECRET=your_secret
git push heroku main
```

### Render
1. Connect GitHub repository
2. Create Web Service
3. Set environment variables
4. Deploy

---

## 📚 Documentation

- **BACKEND_SETUP.md** - Complete setup guide & API docs
- **QUICK_START.md** - Quick reference & testing

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| MongoDB connection fails | Start MongoDB or check Atlas URI |
| Cloudinary upload fails | Verify credentials in .env |
| CORS errors | Backend CORS enabled by default |
| Port already in use | Change PORT in .env |
| Form submission fails | Check Cloudinary account limits |

---

## 📞 Support Features

- ✅ Comprehensive error messages
- ✅ Status tracking for all forms
- ✅ Image storage with Cloudinary URLs
- ✅ CORS enabled for all domains
- ✅ Marathi language support
- ✅ RESTful API design
- ✅ Production-ready code

---

## 🎯 Next Steps

1. [ ] Follow **QUICK_START.md** to set up backend
2. [ ] Get Cloudinary credentials
3. [ ] Configure MongoDB
4. [ ] Test API endpoints with Postman
5. [ ] Deploy to Heroku/Render
6. [ ] Update frontend API URLs
7. [ ] Test end-to-end workflow

---

## 📈 API Response Format

### Success
```json
{
  "success": true,
  "message": "तक्रार यशस्वीरित्या पाठवली ✅",
  "data": { ... }
}
```

### Error
```json
{
  "success": false,
  "message": "काहीतरी चूक झाली ❌",
  "error": "Error details"
}
```

---

## 📦 Dependencies

```json
{
  "express": "^4.18.2",
  "mongoose": "^7.0.0",
  "cors": "^2.8.5",
  "dotenv": "^16.0.3",
  "multer": "^1.4.5-lts.1",
  "cloudinary": "^1.33.0",
  "express-fileupload": "^1.5.0",
  "body-parser": "^1.20.2",
  "nodemon": "^2.0.22"
}
```

---

**Backend Ready! 🚀**

All 15 forms are fully integrated with Cloudinary image storage, MongoDB database, and production-ready error handling.

Start with **QUICK_START.md** for immediate setup.
