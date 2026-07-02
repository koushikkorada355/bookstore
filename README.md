# BookStore MERN E-Commerce

A production-ready MERN bookstore with Docker, JWT authentication, role-based authorization, books, orders, reviews, and admin management.

## Features

- JWT authentication with user and admin roles
- Book catalog with search and filtering
- Shopping cart with localStorage persistence
- Checkout and order tracking
- Admin dashboard for books, orders, and users
- MongoDB, Express, React, Node.js
- Docker Compose development and production setups

## Project Structure

- server: Express API, MongoDB models, controllers, routes, middleware, seed script
- client: React UI, routing, state context, services, components, pages
- docker-compose.yml: development orchestration
- docker-compose.prod.yml: production orchestration

## Prerequisites

- Docker
- Docker Compose

## Setup

1. Copy environment files

   - Use the root .env.example as a starting point
   - Use server/.env.example and client/.env.example if you want service-specific overrides

2. Build and run development environment

   - docker-compose up -d
   - docker-compose ps
   - docker-compose logs -f
   - docker-compose down

3. Seed the database

   - docker-compose exec backend npm run seed

## Development Commands

- docker-compose up -d
- docker-compose down
- docker-compose logs -f
- docker-compose ps
- docker-compose build
- docker-compose up -d mongodb
- docker-compose up -d backend
- docker-compose up -d frontend

## Production Commands

- docker-compose -f docker-compose.prod.yml up -d --build
- docker-compose -f docker-compose.prod.yml down
- docker-compose -f docker-compose.prod.yml logs -f

## Environment Variables

Required variables:

- NODE_ENV
- MONGODB_URI
- JWT_SECRET
- PORT
- CLIENT_URL
- VITE_API_URL
- SEED_ON_START

## Default URLs

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000/api
- Mongo Express: http://localhost:8081
- MongoDB: mongodb://localhost:27017

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

## Seed Data

The seed script creates:

- 1 admin user
- 1 sample user
- 10 books
- sample order
- sample reviews

Default admin credentials:

- email: admin@bookstore.com
- password: Admin@123

## Notes

- Frontend API calls use the backend service name inside Docker.
- Backend connects to MongoDB using the mongodb service name.
- Health check endpoint: /api/health
