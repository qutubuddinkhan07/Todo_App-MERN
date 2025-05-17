# 🖥️ Frontend - Todo List App

This is the **frontend** part of the Full-Stack Todo List App built using **React** and **Redux Toolkit**. It allows users to manage tasks, see creation date/time, and interact with a clean, responsive UI styled using **Tailwind CSS**.

## 🚀 Features

- ✅ Add, delete, and toggle tasks
- 📆 Display task creation date and time
- 🗂️ Persist data through MongoDB backend API
- 🔄 Sync with Redux store and Express API
- 📱 Responsive design with mobile-first styling
- 🖼️ Shows a GIF/image when no tasks are available

## 🧩 Tech Stack

- **React**
- **Redux Toolkit**
- **Tailwind CSS**
- **Axios** for HTTP requests

## 🗃️ Folder Structure

client/
├── public/
│ └── index.html
├── src/
│ ├── app/ # Redux store configuration
│ ├── assets/ # Images or GIFs
│ ├── components/ # React components (Todo, AddForm)
│ ├── features/
│ │ └── todo/ # Redux slice for todo management
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── package.json
└── tailwind.config.js


## 📦 Installation

```bash
cd client
npm install


npm run dev 
```

This will start the frontend app at: http://localhost:5173 (or similar, depending on your dev server).

## 🔗 Backend API
Ensure the backend server is running (usually at http://localhost:5000) and the frontend is configured to point to it correctly (via axios baseURL).

## 🌐 API Usage
Frontend makes the following calls:

GET /api/todos – Fetch all tasks

POST /api/todos – Add a new task

DELETE /api/todos/:id – Delete a task

PATCH /api/todos/:id – Toggle task completion

## 🖼️ Empty State
Displays an image or animated GIF when there are no tasks in the list.

✅ Built with love using React and Tailwind for a clean and fast experience!