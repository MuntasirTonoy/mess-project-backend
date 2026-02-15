# Mess Project - Backend API

This is the backend API for the Mess Project, providing an interface to manage utility bills and member contributions.

## 🚀 Features

- **RESTful API**: Endpoints for creating, reading, and deleting bill records.
- **MongoDB Integration**: Persists data using Mongoose ODM.
- **CORS Enabled**: Configured to work seamlessly with the frontend.
- **Vercel Ready**: Structured for deployment as Vercel Serverless Functions.

## 🛠 Tech Stack

- **Node.js** & **Express**
- **Mongoose** (MongoDB)
- **Cors**
- **Dotenv**

## ⚙️ Setup & Installation

1. Clone the repository and navigate to the backend directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   ```
4. Run the server in development mode:
   ```bash
   npm run dev
   ```

## 📡 API Endpoints

- `GET /api/bills` - Fetch all saved bills.
- `POST /api/bills` - Save a new bill.
- `DELETE /api/bills/:id` - Remove a bill record.

## 🌍 Deployment

The backend is optimized for deployment on **Vercel**. It uses `vercel.json` for routing and exports the Express `app` for serverless execution.
