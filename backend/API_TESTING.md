# 🧪 API Testing Guide

Complete guide to test all 15 API endpoints for Gaav Website Backend.

---

## 🔧 Tool Setup

### Option 1: Postman
1. Download [Postman](https://www.postman.com/downloads/)
2. Create new requests using endpoints below
3. Copy request formats from this guide

### Option 2: cURL (Command Line)
Use cURL examples provided with each endpoint

### Option 3: VS Code REST Client
Install "REST Client" extension, then create `.http` file

---

## 📝 Test Requests

### 1️⃣ COMPLAINT SUBMISSION

**Endpoint:** `POST http://localhost:5000/api/complaints`

**Request Body (JSON):**
```json
{
  "propertyId": "MH-001-2024",
  "department": "water",
  "complaint": "पाणीचा मुद्दा",
  "name": "राम कुमार",
  "address": "गाव, तालुका, जिल्हा",
  "mobile": "9876543210",
  "aadhaar": "111122223333"
}
```

**cURL:**
```bash
curl -X POST http://localhost:5000/api/complaints \
  -H "Content-Type: application/json" \
  -d '{
    "propertyId": "MH-001-2024",
    "department": "water",
    "complaint": "पाणीचा मुद्दा",
    "name": "राम कुमार",
    "address": "गाव, तालुका",
    "mobile": "9876543210",
    "aadhaar": "111122223333"
  }'
```

**Expected Response:**
```json
{
  "success": true,
  "message": "तक्रार यशस्वीरित्या पाठवली ✅",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "propertyId": "MH-001-2024",
    "status": "pending",
    "createdAt": "2024-03-21T10:30:00Z"
  }
}
```

---

### 2️⃣ TAX FORM (WITH FILES)

**Endpoint:** `POST http://localhost:5000/api/tax`

**Form Data (Multipart):**
```
name: राज पटेल
whatsapp: 9876543210
email: raj@example.com
receiptNo: TAX-2024-001
gharpattiAmount: 1000
panipattiAmount: 500
gharpattiUpi: raj@okhdfcbank
panipattiUpi: raj@upi
gharpattiScreenshot: [FILE]
panipattiScreenshot: [FILE]
```

**cURL:**
```bash
curl -X POST http://localhost:5000/api/tax \
  -F "name=राज पटेल" \
  -F "whatsapp=9876543210" \
  -F "email=raj@example.com" \
  -F "receiptNo=TAX-2024-001" \
  -F "gharpattiAmount=1000" \
  -F "panipattiAmount=500" \
  -F "gharpattiUpi=raj@okhdfcbank" \
  -F "panipattiUpi=raj@upi" \
  -F "gharpattiScreenshot=@screenshot1.jpg" \
  -F "panipattiScreenshot=@screenshot2.jpg"
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Form submitted successfully ✅",
  "data": {
    "_id": "507f1f77bcf86cd799439012",
    "name": "राज पटेल",
    "gharpattiScreenshot": "https://res.cloudinary.com/...",
    "panipattiScreenshot": "https://res.cloudinary.com/...",
    "status": "pending"
  }
}
```

---

### 3️⃣ BIRTH CERTIFICATE

**Endpoint:** `POST http://localhost:5000/api/form`

**Form Data (Multipart):**
```
aaiName: सीता बाई
fullNameEng: Sita Kumar
fullNameMar: सीता कुमार
mobile: 9876543210
email: sita@example.com
address: गाव, तालुका
year: 2024
childName: अमित
dob: 2020-05-15
time: 14:30
fatherName: राम कुमार
utr: TXN-001
screenshot: [FILE]
```

**cURL:**
```bash
curl -X POST http://localhost:5000/api/form \
  -F "aaiName=सीता बाई" \
  -F "fullNameEng=Sita Kumar" \
  -F "fullNameMar=सीता कुमार" \
  -F "mobile=9876543210" \
  -F "email=sita@example.com" \
  -F "address=गाव, तालुका" \
  -F "year=2024" \
  -F "childName=अमित" \
  -F "dob=2020-05-15" \
  -F "time=14:30" \
  -F "fatherName=राम कुमार" \
  -F "utr=TXN-001" \
  -F "screenshot=@payment.jpg"
```

---

### 4️⃣ DEATH CERTIFICATE

**Endpoint:** `POST http://localhost:5000/api/death-form`

**Form Data (Multipart):**
```
deathDate: 2024-03-20
deathTime: 10:30
deathReason: नैसर्गिक देवदूत
fullNameEng: Ram Kumar
fullNameMar: राम कुमार
year: 2024
deceasedName: राम कुमार (देवदूत)
aadhar: 111122223333
address: गाव, तालुका
mobile: 9876543210
email: widow@example.com
utr: TXN-002
screenshot: [FILE]
```

---

### 5️⃣ MARRIAGE CERTIFICATE

**Endpoint:** `POST http://localhost:5000/api/marriage-form`

**Form Data (Multipart):**
```
husbandName: राज कुमार
wifeName: सीता बाई
husbandAadhar: 111122223333
wifeAadhar: 444455556666
fullNameEng: Raj Kumar & Seeta Bai
fullNameMar: राज कुमार व सीता बाई
mobile: 9876543210
email: married@example.com
year: 2024
marriageDate: 2024-03-10
marriagePlace: गाव मंदिर
utr: TXN-003
screenshot: [FILE]
```

---

### 6️⃣ RESIDENCE CERTIFICATE

**Endpoint:** `POST http://localhost:5000/api/residence-form`

**Form Data:**
```
malmattaNo: 123
wardNo: 5
street: मुख्य रस्ता
fullNameEng: Raj Kumar
fullNameMar: राज कुमार
aadhar: 111122223333
mobile: 9876543210
email: resident@example.com
year: 2024
address: गाव नाम
utr: TXN-004
screenshot: [FILE]
```

---

### 7️⃣ PROPERTY/MALMATTA CERTIFICATE

**Endpoint:** `POST http://localhost:5000/api/malmatta-form`

**Form Data:**
```
wardNo: 5
address: गाव नाम
fullNameEng: Raj Kumar
fullNameMar: राज कुमार
mobile: 9876543210
email: owner@example.com
year: 2024
village: गाव नाम
ownerName: राज कुमार
aadhar: 111122223333
propertyNo: PROP-001
utr: TXN-005
screenshot: [FILE]
```

---

### 8️⃣ BUILDING PERMISSION

**Endpoint:** `POST http://localhost:5000/api/building-permission`

**Form Data (4 FILES):**
```
fullName: राज कुमार
address: गाव, तालुका
mobile: 9876543210
email: builder@example.com
business: निर्माण
propertyNo: PROP-001
plotAreaSqFt: 5000
plotAreaSqM: 465
constructionAreaSqFt: 2000
constructionAreaSqM: 186
floors: 2
ownershipDocs: [FILE]
layoutPlan: [FILE]
buildingPlan: [FILE]
taxReceipt: [FILE]
```

**cURL:**
```bash
curl -X POST http://localhost:5000/api/building-permission \
  -F "fullName=राज कुमार" \
  -F "address=गाव" \
  -F "mobile=9876543210" \
  -F "email=builder@example.com" \
  -F "business=निर्माण" \
  -F "propertyNo=PROP-001" \
  -F "plotAreaSqFt=5000" \
  -F "plotAreaSqM=465" \
  -F "constructionAreaSqFt=2000" \
  -F "constructionAreaSqM=186" \
  -F "floors=2" \
  -F "ownershipDocs=@doc1.pdf" \
  -F "layoutPlan=@layout.pdf" \
  -F "buildingPlan=@plan.pdf" \
  -F "taxReceipt=@receipt.pdf"
```

---

### 9️⃣ BUSINESS LICENSE

**Endpoint:** `POST http://localhost:5000/api/business-form`

**Form Data (3 FILES):**
```
ownerName: राज कुमार
ownerAddress: गाव
mobile: 9876543210
email: business@example.com
businessType: खुदरा
businessCategory: दुकान
district: जिल्हा
pincode: 412345
startDate: 2020-01-15
businessNature: दोकान चलवणे
male: 1
female: 0
other: 0
total: 1
businessAddress: गाव, रस्ता
buildingName: शॉप नं
road: मुख्य रस्ता
landmark: मंदिर पाशी
village: गाव
taluka: तालुका
aadhar: [FILE]
photo: [FILE]
payment: [FILE]
utr: TXN-006
```

---

### 🔟 LAND 7/12

**Endpoint:** `POST http://localhost:5000/api/land712`

**Form Data:**
```
surveyNo: 123/4
mobile: 9876543210
email: land@example.com
ownerName: राज कुमार
village: गाव नाम
taluka: तालुका
district: जिल्हा
utr: TXN-007
screenshot: [FILE]
```

---

### 1️⃣1️⃣ LAND 8A

**Endpoint:** `POST http://localhost:5000/api/land8a`

**Form Data:**
```
ownerName: राज कुमार
village: गाव नाम
taluka: तालुका
district: जिल्हा
khataNo: 789
mobile: 9876543210
email: land8a@example.com
utr: TXN-008
screenshot: [FILE]
```

---

### 1️⃣2️⃣ NO DUES CERTIFICATE

**Endpoint:** `POST http://localhost:5000/api/no-dues`

**Request Body (JSON):**
```json
{
  "propertyNo": "PROP-001",
  "wardNo": "5",
  "address": "गाव नाम",
  "fullNameEng": "Raj Kumar",
  "fullNameMar": "राज कुमार",
  "mobile": "9876543210",
  "email": "nodues@example.com",
  "year": 2024,
  "ownerName": "राज कुमार",
  "aadhar": "111122223333",
  "village": "गाव नाम"
}
```

---

### 1️⃣3️⃣ AGE CERTIFICATE

**Endpoint:** `POST http://localhost:5000/api/age-certificate`

**Request Body (JSON):**
```json
{
  "age": 25,
  "mobile": "9876543210",
  "email": "age@example.com",
  "aadhar": "111122223333",
  "year": 2024,
  "village": "गाव नाम",
  "fullNameEng": "Raj Kumar",
  "fullNameMar": "राज कुमार",
  "dob": "1999-03-15"
}
```

---

### 1️⃣4️⃣ PROPERTY CARD

**Endpoint:** `POST http://localhost:5000/api/property-card`

**Form Data:**
```
ctsNo: 123
ulpin: ABBCD1234567890
ownerName: राज कुमार
village: गाव नाम
taluka: तालुका
district: जिल्हा
mobile: 9876543210
email: propcard@example.com
utr: TXN-009
screenshot: [FILE]
```

---

### 1️⃣5️⃣ PROPERTY TRANSFER

**Endpoint:** `POST http://localhost:5000/api/property-transfer`

**Form Data (3 FILES):**
```
sellerName: राज कुमार
sellerAddress: गाव
buyerName: प्रकाश कुमार
buyerAddress: गाव
propertyNo: PROP-001
area: 5000 sq.ft
mobile: 9876543210
email: transfer@example.com
propertyType: residential
taxReceipt: [FILE]
utara: [FILE]
consent: [FILE]
```

---

## 📊 GET Requests

### Get All Records
```bash
GET http://localhost:5000/api/complaints
GET http://localhost:5000/api/tax
GET http://localhost:5000/api/residence-form
# ... etc for all endpoints
```

### Get Single Record
```bash
GET http://localhost:5000/api/complaints/507f1f77bcf86cd799439011
GET http://localhost:5000/api/tax/507f1f77bcf86cd799439012
```

---

## ✏️ UPDATE Requests

```bash
PUT http://localhost:5000/api/complaints/507f1f77bcf86cd799439011
Content-Type: application/json

{
  "status": "resolved",
  "complaint": "Updated description"
}
```

---

## 🗑️ DELETE Requests

```bash
DELETE http://localhost:5000/api/complaints/507f1f77bcf86cd799439011
```

---

## ✅ Testing Checklist

- [ ] Complaint form submission works
- [ ] Tax form with file upload works
- [ ] Birth certificate uploads to Cloudinary
- [ ] All form data saves to MongoDB
- [ ] GET endpoints return data
- [ ] UPDATE status changes successfully
- [ ] DELETE removes records
- [ ] Error handling shows proper messages
- [ ] Cloudinary URLs are stored in database
- [ ] All 15 endpoints working

---

## 🔍 Response Verification

Check response contains:
```json
{
  "success": true/false,
  "message": "Marathi message",
  "data": { 
    "_id": "ObjectId",
    "status": "pending/approved/rejected",
    "createdAt": "ISO timestamp",
    "cloudinary_urls": "https://res.cloudinary.com/..."
  }
}
```

---

## 🐛 Debugging Tips

1. **Check MongoDB** - Verify record saved
   ```bash
   # In MongoDB shell
   db.complaints.find()
   ```

2. **Check Cloudinary** - Verify file uploaded
   - Visit Cloudinary dashboard → Media Library

3. **Check Network** - Enable DevTools Network tab
   - Inspect request/response headers

4. **Check Logs** - Server terminal shows errors
   ```
   Error: Cloudinary upload failed...
   Error: MongoDB connection...
   ```

---

**All 15 endpoints ready for testing! 🚀**
