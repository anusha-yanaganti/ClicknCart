# 🛒 ClicknCart

**ClicknCart** is a full-stack e-commerce web application developed as a **course-end project** while learning **MERN Stack Development**.  
It offers a seamless shopping experience with features like product browsing, cart management, authentication, and order placement.

> 🚀 **Live Demo:** [Click Here](https://click-n-cart-ivory.vercel.app/)

---

## 📌 Purpose

This project was developed **purely for educational purposes**, to understand and implement:
- **Frontend development** with React
- **Backend APIs** with Node.js and Express.js
- **Database operations** with MongoDB
- **RESTful architecture**
- **State management** in a full-stack application

---

## 📌 Features

- **🔍 Product Browsing** – View and search products with category filtering
- **📦 Cart System** – Add/remove products, adjust quantities
- **🔐 User Authentication** – Register, login, and manage accounts securely
- **🛒 Checkout Process** – Place orders with integrated cart
- **📊 Order History** – View previous purchases
- **💾 Persistent Storage** – Data saved in MongoDB
- **⚡ Responsive Design** – Works across desktop and mobile

---

## 🏗 Tech Stack

| **Technology**     | **Purpose** |
|--------------------|-------------|
| **MongoDB**        | NoSQL database for product, user, and order data |
| **Express.js**     | Backend framework to build APIs |
| **React**          | Frontend library for building the UI |
| **Node.js**        | JavaScript runtime for server-side logic |
| **Bootstrap / CSS** | Styling and responsive design |
| **JWT**            | Secure authentication mechanism |

---

## 🚀 Deployment

Frontend is deployed on **Vercel** and backend on **(Your Backend Hosting, e.g., Render / Railway / Heroku)**.

---

## 📂 Project Structure
  ```bash
    ClicknCart/
    │
    ├── backend/ # Node.js + Express.js API
    │ ├── models/ # Mongoose models
    │ ├── routes/ # API routes
    │ ├── controllers/ # Business logic
    │ ├── config/ # DB connection & environment config
    │ └── server.js # Backend entry point
    │
    ├── frontend/ # React app
    │ ├── src/
    │ │ ├── components/ # Reusable UI components
    │ │ ├── pages/ # Page components
    │ │ ├── store/ # State management
    │ │ └── App.js # App entry point
    │
    ├── .env # Environment variables
    ├── package.json
    └── README.md
  ```

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ClicknCart.git
   cd ClicknCart
   ```
2. **Install dependencies**
   - Backend:
     ```bash
     cd backend
     npm install
     ```
   - Frontend:
     ```bash
     cd ../frontend
     npm install
     ```
3. **Configure environment variables in `.env` (backend folder):**
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   PORT=5000
   ```
4. **Run the app**
   - Backend:
     ```bash
     cd backend
     npm run dev
     ```
   - Frontend:
     ```bash
     cd ../frontend
     npm start
     ```

  ---

  ## 🏗 Future Improvements

   - 📱 Mobile-first design enhancements
   - 💳 Payment gateway integration (Stripe/PayPal)
   - 🔍 Advanced search & filtering
   - 📦 Admin dashboard for inventory management

---

## 📜 License
This project is for learning purposes only and is not intended for commercial use.



   
