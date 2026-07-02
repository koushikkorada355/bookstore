# BookStore MERN E-Commerce

A full-stack MERN bookstore for browsing books, managing a cart, placing orders, leaving reviews, and using admin tools for content and order management.

## Features

- JWT authentication
- Role-based access for users and admins
- Book catalog with search and filtering
- Shopping cart with localStorage persistence
- Checkout and order tracking
- Review submission and management
- Admin dashboard for books, orders, and users

## Project Structure

- backend: Express API, MongoDB models, controllers, routes, middleware, and upload handling
- frontend: React UI, routing, state context, services, components, and pages

## Prerequisites

- Node.js
- npm
- MongoDB running locally or a MongoDB connection string

## Setup

1. Install dependencies

   - cd backend && npm install
   - cd ../frontend && npm install

2. Configure environment variables

   Backend environment:

   - NODE_ENV
   - PORT
   - MONGODB_URI
   - JWT_SECRET
   - CLIENT_URL

   Frontend environment:

   - VITE_API_URL

3. Start the backend

   - cd backend
   - npm run dev

4. Start the frontend

   - cd frontend
   - npm run dev

## Development Commands

Backend:

- npm run dev
- npm start

Frontend:

- npm run dev
- npm run build
- npm run preview

## Default URLs

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000/api
- Health check: http://localhost:5000/api/health

## API Endpoints

### Auth

- POST /api/auth/register
- POST /api/auth/login
- GET /api/auth/profile
- POST /api/auth/logout

### Books

- GET /api/books
- GET /api/books/:id
- POST /api/books
- PUT /api/books/:id
- DELETE /api/books/:id
- GET /api/books/search?query=...
- GET /api/books/filter?genre=...&priceMin=...&priceMax=...

### Orders

- POST /api/orders
- GET /api/orders
- GET /api/orders/:id
- PUT /api/orders/:id/status
- GET /api/orders/admin/all

### Reviews

- POST /api/reviews
- GET /api/books/:id/reviews
- DELETE /api/reviews/:id

### Admin

- GET /api/admin/dashboard
- GET /api/admin/users
- GET /api/admin/orders
- POST /api/admin/books
- PUT /api/admin/books/:id
- DELETE /api/admin/books/:id
- PUT /api/admin/orders/:id/status

