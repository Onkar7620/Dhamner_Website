# Gaav Website Backend - Quick Reference

## ⚡ Start Backend in 3 Steps

```bash
cd backend
npm install
npm start
```

Visit: **http://localhost:5000**

---

## 📝 Test Requests (cURL)

### Complaint Submission
```bash
curl -X POST http://localhost:5000/api/complaints \
  -H "Content-Type: application/json" \
  -d '{
    "propertyId": "MH-2024-001",
    "department": "water",
    "complaint": "समस्या वर्णन",
    "name": "राम कुमार",
    "address": "गाव, तालुका",
    "mobile": "9876543210",
    "aadhaar": "111122223333"
  }'
```

### Tax Form with File
```bash
curl -X POST http://localhost:5000/api/tax \
  -F "name=राज पटेल" \
  -F "whatsapp=9876543210" \
  -F "email=raj@example.com" \
  -F "receiptNo=12345" \
  -F "gharpattiAmount=1000" \
  -F "panipattiAmount=500" \
  -F "gharpattiUpi=raj@okhdfcbank" \
  -F "panipattiUpi=raj@upi" \
  -F "gharpattiScreenshot=@/path/to/screenshot.jpg" \
  -F "panipattiScreenshot=@/path/to/screenshot2.jpg"
```

---

## 📊 Database Queries (MongoDB)

### View All Complaints
```javascript
db.complaints.find()
```

### View Specific Tax Forms
```javascript
db.taxes.find({ status: "pending" })
```

### Update Status
```javascript
db.complaints.updateOne(
  { _id: ObjectId("...") },
  { $set: { status: "resolved" } }
)
```

---

## 🔗 Frontend CORS Configuration

Your frontend is already configured! The API calls work because:
- Backend has CORS enabled for all origins
- Frontend uses `http://localhost:5000` endpoints
- File uploads use FormData

No changes needed! ✅

---

## 📦 Environment Variables Required

Create `.env` file:
```env
MONGODB_URI=mongodb://localhost:27017/gaav-database
CLOUDINARY_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
PORT=5000
NODE_ENV=development
```

---

## 🌍 Live Testing with Postman

1. **Import Collection**: Use the API endpoints from BACKEND_SETUP.md
2. **Create Request**:
   - Method: POST
   - URL: `http://localhost:5000/api/complaints`
   - Body (raw JSON):
   ```json
   {
     "propertyId": "123",
     "department": "water",
     "complaint": "Test",
     "name": "Test User",
     "address": "Test Address",
     "mobile": "9876543210",
     "aadhaar": "111122223333"
   }
   ```
   - Send!

---

## ✅ Checklist After Setup

- [ ] MongoDB running locally or Atlas URI set
- [ ] Cloudinary credentials in `.env`
- [ ] `npm install` completed
- [ ] `npm start` shows "Server running on 5000"
- [ ] `http://localhost:5000` returns success message
- [ ] Frontend forms submit successfully
- [ ] Images appear in Cloudinary dashboard
- [ ] Data appears in MongoDB

---

## 🐛 Common Issues

| Issue | Solution |
|-------|----------|
| MongoDB connection error | Start MongoDB: `mongod` |
| Cloudinary upload fails | Check API credentials |
| CORS error from frontend | Backend CORS enabled by default |
| Port 5000 in use | Change PORT in .env |
| File too large | Max 5MB, check file size |

---

## 📱 Frontend Files That Use Backend

- `ComplaintPage.jsx` → `/api/complaints`
- `TaxForm.jsx` → `/api/tax`
- `BirthDocument.jsx` → `/api/form`
- `DeathDocument.jsx` → `/api/death-form`
- `MarriageDocument.jsx` → `/api/marriage-form`
- `BuildingPermission.jsx` → `/api/building-permission`
- `BussinessDocument.jsx` → `/api/business-form`
- `Land712Document.jsx` → `/api/land712`
- `Land8ADocument.jsx` → `/api/land8a`
- `NoDues.jsx` → `/api/no-dues`
- `ResidenceDocument.jsx` → `/api/residence-form`
- `PropertyDocument.jsx` → `/api/malmatta-form`
- `PropertyCard.jsx` → `/api/property-card`
- `PropertyTransfer.jsx` → `/api/property-transfer`
- `AgeDocument.jsx` → `/api/age-certificate`

---

## 🎯 What's Next?

1. **Test API endpoints** with Postman
2. **Verify Cloudinary uploads** work
3. **Check MongoDB collection** for saved data
4. **Deploy backend** to Heroku/Render
5. **Update frontend** with live API URL
6. **Test full workflow** end-to-end

---

**Ready to go! 🚀**
