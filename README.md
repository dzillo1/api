Component API
------------------
A small full-stack project demonstrating a RESTful API with a live frontend on GitHub Pages. Built to showcase CRUD operations and integration between a static site and a backend API.

Demo
------------------
Frontend (GitHub Pages): https://dzillo1.github.io/api/component-api/index.html

Backend API (Render): https://component-api-rjqa.onrender.com/components

Features
------------------
GET /components — view all components

POST /components — add a new component

PUT /components/:id — update a component

DELETE /components/:id — delete a component

Fully functional frontend interface to interact with the API

Demonstrates JavaScript fetch, Node.js with Express, CORS, and frontend/backend integration

Technologies Used
------------------
Frontend: HTML, CSS, JavaScript

Backend: Node.js, Express, CORS

Hosting: GitHub Pages (frontend), Render.com (backend)

Architecture / Flow Diagram
------------------
┌─────────────────────────┐
│  GitHub Pages Frontend  │
│  (HTML, CSS, JS)       │
│                         │
│  - Displays components  │
│  - Adds/updates/deletes │
└─────────────┬───────────┘
              │ fetch API calls
              ▼
┌─────────────────────────┐
│  Render Node API        │
│  (Express + CORS)       │
│                         │
│  Endpoints:             │
│  GET /components        │
│  POST /components       │
│  PUT /components/:id    │
│  DELETE /components/:id │
└─────────────┬───────────┘
              │ stores data in memory
              ▼
      (In-memory array)
      [
        {id, name, usageCount},
        ...
      ]

Usage
------------------
Open the frontend URL → see the list of components

Add a new component using the form → updates the Render API

Click on a component to delete it → updates the backend

All changes reflect live on the API

Learning Takeaways
------------------
Implemented a RESTful API from scratch

Learned full CRUD operations with a backend

Connected a static GitHub Pages site to a live backend

Gained experience deploying a Node API to Render

Practiced fetch API for frontend-backend communication

Notes
------------------
Data is stored in memory on the backend. If the Render server restarts, data resets to default components.

Intended as a portfolio/demo project to showcase API and frontend skills.
