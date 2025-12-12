# A full-stack web application for storing, browsing, and managing code snippets.
## Built with:

Backend: Node.js + Express + MongoDB

Frontend: React (with hooks, syntax highlighting, filters, and CRUD features)

Styling: Tailwind CSS (dark grey modern UI)

Deployment: Render

## Features
🔹 Snippet Management

Add new snippets (title, language, description, code)

Syntax-highlighted code preview

Copy-to-clipboard function

View snippet details

Filter by language

Search snippets

Automatic data loading from backend on app load

🔹 API Integration

The frontend uses all HTTP methods provided by the backend:

Method	Purpose
- GET /api/snippets	Fetch all snippets
- GET /api/snippets/:id	Get a specific snippet
- POST /api/snippets	Create a snippet
- PUT /api/snippets/:id	Update a snippet
- DELETE /api/snippets/:id	Delete a snippet
- 
## Technologies Used
Frontend

React (Hooks)

React Router

Tailwind CSS

react-syntax-highlighter

Fetch API

Modern responsive UI with dark theme

Backend

Node.js

Express.js

MongoDB (Mongoose)

CORS enabled

RESTful routing

Deployment

Render (Backend service)

Render (Static site hosting for frontend)



## Getting Started (Local Development)
1. Clone the frontend
git clone https://github.com/your-username/snippet-frontend
cd snippet-frontend

2. Install dependencies
npm install

3. Start the development server
npm start


Your app will open at:

http://localhost:3000

## Environment Variables

Create a .env file in /src or project root:

REACT_APP_API_URL=https://your-backend-service.onrender.com/api/snippets


Your api.js uses this:

const API_URL = process.env.REACT_APP_API_URL;

## Deployment
Backend (Render)

Create a new Web Service

Connect your backend repo

Environment: Node

Build command:

npm install


Start command:

node server.js


Ensure it returns JSON at /api/snippets

Frontend (Render Static Site)

Create a Static Site

Connect frontend repo

Build command:

npm run build


Publish directory:

build

## Troubleshooting
 "Unexpected token < … not valid JSON"

Your API URL is wrong or backend is returning HTML instead of JSON.
Check:

REACT_APP_API_URL

 Blank Screen on Load

Bad export/import in a component

Syntax error in JSX

Missing default export

 CORS Errors

Add this to your backend:

const cors = require("cors");
app.use(cors());
