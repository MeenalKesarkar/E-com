# 🛒 E-Commerce Store

A full-stack MERN E-Commerce application that allows users to browse products, manage carts, place orders, and experience a responsive online shopping platform.

## 🚀 Features

### User Features
- User Authentication & Authorization
- Browse Products
- Search Products
- Add to Cart
- Update Cart Quantity
- Remove Items from Cart
- Checkout Process
- Responsive Design

### Admin Features
- Add Products
- Update Products
- Delete Products
- Manage Inventory
- View Orders

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- CSS3
- JavaScript (ES6+)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Authentication
- JWT (JSON Web Token)
- bcrypt.js

### Tools
- Git & GitHub
- Postman
- VS Code

---

## 📂 Project Structure

```bash
E-com/
│
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/MeenalKesarkar/E-com.git
cd E-com
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## 🌐 API Endpoints

### User Routes

```http
POST /api/users/register
POST /api/users/login
```

### Product Routes

```http
GET /api/products
GET /api/products/:id
POST /api/products
PUT /api/products/:id
DELETE /api/products/:id
```

### Cart Routes

```http
POST /api/cart
GET /api/cart
DELETE /api/cart/:id
```

---

## 🎯 Future Improvements

- Payment Gateway Integration
- Wishlist Feature
- Order Tracking
- Product Reviews & Ratings
- Email Notifications
- Dark Mode

---

## 👩‍💻 Author

**Meenal S Kesarkar**

- GitHub: https://github.com/MeenalKesarkar
- LinkedIn: https://www.linkedin.com/in/meenal-kesarkar-031070258

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub and support the repository.
