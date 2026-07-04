# AESTHETE

A modern full-stack e-commerce application built with React, Node.js, Express, Prisma ORM, and PostgreSQL.

## Preview

Coming soon...

---

## Features

The application allows users to:

* Create a new account
* Log into an existing account
* Validate user input on both frontend and backend
* Store user information securely in a PostgreSQL database
* Communicate with a REST API built with Express
* Provide a responsive and modern interface using React and CSS Modules

---

## Technologies Used

### Frontend

* React
* JavaScript
* React Router
* React Hook Form
* Axios
* Validator
* CSS Modules
* Vite

### Backend

* Node.js
* Express
* Prisma ORM
* PostgreSQL
* TypeScript
* CORS
* dotenv
* bcrypt
* JSON Web Token (JWT)
* Zod

---

## Functionalities

### User Registration

Users can create a new account by providing:

* Full name
* Email address
* Password

The application validates the form before sending the data to the backend.

---

### User Authentication

Users can log into their account using:

* Email
* Password

The backend verifies the user credentials before granting access.

---

### Database Integration

The backend communicates with a PostgreSQL database using Prisma ORM to:

* Create new users
* Search users by email
* Manage application data efficiently

---

### Form Validation

The frontend uses React Hook Form together with Validator to provide:

* Required field validation
* Email format validation
* Password validation
* Real-time error messages

---

### REST API

The backend exposes REST endpoints for frontend communication.

Current endpoints include:

* **POST** `/register`
* **POST** `/login`

---

## Planned Features

* JWT Authentication
* Password hashing with bcrypt
* Protected routes
* Product catalog
* Shopping cart
* Order management
* User profile
* Admin dashboard
* Product filtering and search
* Favorites/Wishlist
* Responsive checkout flow

---

## Project Goals

This project was created to improve full-stack development skills by applying modern technologies and best practices, including REST APIs, authentication, database management, and scalable project architecture.
