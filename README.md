##📚 Library Management System – Fullstack Web App##
A simple fullstack web application for managing library books. Built using React + TypeScript for the frontend and ASP.NET Core Web API + SQLite for the backend.

🖼️ Screenshots

<img width="954" height="537" alt="home" src="https://github.com/user-attachments/assets/c7632718-e650-4da2-bc37-7e75872589b4" />

<img width="952" height="530" alt="home2" src="https://github.com/user-attachments/assets/c083ed9b-bb6c-4302-ac57-a9124af6eb68" />

<img width="956" height="532" alt="edit2" src="https://github.com/user-attachments/assets/f2779af5-4aa7-44a3-ba15-76225442ed01" />




🧰 Tech Stack
| Layer    | Technology                            |
| -------- | ------------------------------------- |
| Frontend | React, TypeScript, Semantic UI  |
| Backend  | ASP.NET Core Web API (.NET 6/7)       |
| Database | SQLite (via EF Core)                  |


 🟢 Backend Setup (ASP.NET Core + SQLite)

#dotnet restore
#dotnet build
#dotnet run

By default, the API runs on: https://localhost:5038

🔵 Frontend Setup (React + TypeScript)
#cd frontend
#npm install
#npm run dev

The app runs at: http://localhost:3000

🌐 Connect Frontend to Backend
In frontend/src/api/apiConnector.ts, update your API base URL:
#export const API_BASE_URL = 'http://localhost:5038/api';



✅ Features:
📚 View, create, update, and delete book records
⚡ Fast, responsive frontend with React
🗂️ REST API with Entity Framework + SQLite

🧠 Developer Notes
-Uses React Router for navigation

-Axios used for API integration




