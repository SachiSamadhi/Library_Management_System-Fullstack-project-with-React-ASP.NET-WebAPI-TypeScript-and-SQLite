📚 Library Management System – Fullstack Web App
A simple fullstack web application for managing library books. Built using React + TypeScript for the frontend and ASP.NET Core Web API + SQLite for the backend.

🖼️ Screenshots

<img width="954" height="537" alt="home" src="https://github.com/user-attachments/assets/c7632718-e650-4da2-bc37-7e75872589b4" />

<img width="952" height="530" alt="home2" src="https://github.com/user-attachments/assets/c083ed9b-bb6c-4302-ac57-a9124af6eb68" />


🧰 Tech Stack
| Layer    | Technology                            |
| -------- | ------------------------------------- |
| Frontend | React, TypeScript, Semantic UI  |
| Backend  | ASP.NET Core Web API (.NET 6/7)       |
| Database | SQLite (via EF Core)                  |


 🟢 Backend Setup (ASP.NET Core + SQLite)
 cd backend
dotnet restore
dotnet build
dotnet run

By default, the API runs on: https://localhost:5038

🔵 Frontend Setup (React + TypeScript)
cd frontend
npm install
npm run dev

The app runs at: http://localhost:3000

🌐 Connect Frontend to Backend
In frontend/src/api/apiConnector.ts, update your API base URL:
export const API_BASE_URL = 'http://localhost:5038/api';

🔒 CORS Setup in Backend

In Program.cs of your ASP.NET project:
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
        policy.WithOrigins("https://yourproject.web.app")
              .AllowAnyMethod()
              .AllowAnyHeader());
});

app.UseCors("AllowFrontend");

✅ Features:
📚 View, create, update, and delete book records
⚡ Fast, responsive frontend with React
🗂️ REST API with Entity Framework + SQLite

🧠 Developer Notes
-Uses React Router for navigation

-Axios used for API integration




