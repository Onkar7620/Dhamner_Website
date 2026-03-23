# Frontend-Backend Integration Guide

This guide helps you connect your React frontend with the Node.js backend.

## Step 1: Update Frontend Environment

Create or update `.env` in the `frontend` folder:

```env
VITE_API_URL=http://localhost:5000/api
```

## Step 2: Create API Client Service

Create `frontend/src/services/api.js`:

```javascript
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle responses
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
```

## Step 3: Install Axios in Frontend

```bash
cd frontend
npm install axios
```

## Step 4: Create API Hooks (Optional but Recommended)

Create `frontend/src/hooks/useAuth.js`:

```javascript
import { useState } from 'react';
import api from '../services/api';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const register = async (userData) => {
    try {
      setLoading(true);
      const response = await api.post('/auth/register', userData);
      localStorage.setItem('token', response.data.token);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      setLoading(true);
      const response = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { register, login, loading, error };
};
```

## Step 5: Update Components to Use API

Example: Login Component

```javascript
import { useAuth } from '../hooks/useAuth';

export const LoginComponent = () => {
  const { login, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      // Redirect to dashboard
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
};
```

## API Usage Examples

### Authentication

```javascript
// Register
POST /auth/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "password": "password123",
  "confirmPassword": "password123"
}

// Login
POST /auth/login
{
  "email": "john@example.com",
  "password": "password123"
}

// Get Profile (requires token)
GET /auth/profile
```

### Documents

```javascript
// Create document request
POST /documents
{
  "documentType": "birth",
  "formData": {
    "childName": "Raj",
    "fatherName": "Ram",
    "motherName": "Sita",
    "dateOfBirth": "2020-01-15"
  }
}

// Get user's documents
GET /documents/my-documents

// Get specific document
GET /documents/:id

// Update document
PUT /documents/:id
{
  "formData": { /* updated data */ }
}
```

### Complaints

```javascript
// Create complaint
POST /complaints
{
  "title": "Road Repair Needed",
  "description": "Pothole on Main Street",
  "category": "road",
  "priority": "high",
  "location": "Main Street, Village"
}

// Get user's complaints
GET /complaints/my-complaints

// Update complaint
PUT /complaints/:id
{
  "status": "open"
}
```

### Services

```javascript
// Get all services
GET /services

// Get services by category
GET /services?category=government

// Get specific service
GET /services/:id
```

### Members

```javascript
// Get all members
GET /members

// Get member by ID
GET /members/:id

// Get members by position
GET /members/search/position?position=sarpanch
```

### Gallery

```javascript
// Get all galleries
GET /gallery

// Get gallery by category
GET /gallery?category=gramSabha

// Get specific gallery
GET /gallery/:id
```

### Contacts

```javascript
// Submit contact form
POST /contacts
{
  "name": "John",
  "email": "john@example.com",
  "phone": "1234567890",
  "subject": "Inquiry",
  "message": "Your message here"
}
```

## Running Both Frontend and Backend

1. **Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

2. **Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

Frontend will be at: `http://localhost:5173`
Backend will be at: `http://localhost:5000`

## Troubleshooting

### CORS Errors
- Make sure backend CORS_ORIGIN matches your frontend URL in `.env`
- Default is `http://localhost:5173`

### Authentication Issues
- Check if token is being stored in localStorage
- Verify JWT_SECRET is same in backend
- Clear browser cache and localStorage if needed

### Connection Issues
- Verify backend is running on correct port
- Check MongoDB connection in backend logs
- Ensure VITE_API_URL in frontend .env is correct

## Database Setup

Make sure MongoDB is running before starting the backend:

### Local MongoDB
```bash
# Windows (if installed)
mongod

# Or using Docker
docker run -d -p 27017:27017 --name mongodb mongo
```

### MongoDB Atlas (Cloud)
1. Create free account at https://www.mongodb.com/cloud/atlas
2. Create a cluster
3. Get connection string
4. Update MONGODB_URI in backend `.env`

## Next Steps

1. Implement authenticated routes in frontend
2. Add form validation
3. Handle error states in UI
4. Add loading states
5. Implement file uploads for documents
6. Set up image upload for gallery
