# 🗂️ Backend - Todo List App

This is the **backend** part of the Full-Stack Todo List App built using **Node.js**, **Express.js**, and **MongoDB**. It provides a RESTful API to create, fetch, update, and delete todos.

## 🚀 Features

- 🧠 REST API with Express
- 🗃️ MongoDB with Mongoose ODM
- 🧾 CRUD functionality (Create, Read, Update, Delete)
- 🕒 Stores task creation date and time
- 🌐 CORS enabled for frontend connection
- 🔄 Real-time sync with frontend using Axios

## 🧩 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **Cors**
- **Dotenv**

## 📂 Folder Structure

backend/
├── models/
│ └── todoModel.js # Mongoose schema for Todo
├── routes/
│ └── todoRoutes.js # API routes for todo operations
├── .env # Environment variables
├── server.js # Entry point
├── package.json


## 📦 Installation

```bash
cd backend
npm install
```

## ⚙️ Environment Setup
Create a .env file in the backend folder with:

PORT=5000
MONGO_URI=your_mongodb_connection_string

## 🏃 Running the Server
```bash
npm run dev
```

This starts the backend server on: http://localhost:5000

## 🧪 API Endpoints
| Method | Endpoint        | Description            |
| ------ | --------------- | ---------------------- |
| GET    | /api/todos      | Fetch all todos        |
| POST   | /api/todos      | Create a new todo      |
| PATCH  | /api/todos/\:id | Toggle todo completion |
| DELETE | /api/todos/\:id | Delete a todo          |

## 🔁 Sample Request Body for POST /api/todos
```json
{
  "_id": {
    "$oid": "6828b63d72d9c0fbdea12080"
  },
  "task": "Plan and execute a marketing campaign for a made-up bakery called 'Sweet Surrender,' promoting their selection of artisanal bread and pastries to a local audience.",
  "isDone": false,
  "createdAt": {
    "$date": "2025-05-17T16:15:57.046Z"
  },
  "updatedAt": {
    "$date": "2025-05-17T16:15:57.046Z"
  },
  "__v": 0
}
```

## 🔗 Connects With Frontend
Make sure your frontend uses the correct base URL when calling the backend (via Axios).


