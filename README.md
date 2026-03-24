# Task Manager Full Stack Application

## Overview

This project is a full-stack web application that allows users to manage their daily tasks. It supports user registration and login, along with task operations such as adding, deleting, and marking tasks as completed. The application demonstrates end-to-end integration between frontend, backend, and database systems.

---

## Tech Stack

### Frontend

* Angular
* TypeScript
* HTML, CSS

### Backend

* Spring Boot
* Java
* Spring Data JPA

### Database

* MySQL

---

## Features

* User Registration
* User Login Authentication
* Add New Tasks
* View Tasks
* Delete Tasks
* Mark Tasks as Completed
* Logout Functionality

---

## Application Architecture

The application follows a typical three-tier architecture:

Frontend (Angular) → Backend (Spring Boot REST APIs) → Database (MySQL)

* The frontend handles user interface and sends HTTP requests.
* The backend processes requests, applies business logic, and interacts with the database.
* The database stores user and task data.

---

## API Endpoints

### Authentication

* POST /auth/register
  Registers a new user.

* POST /auth/login
  Authenticates a user.

### Task Management

* GET /tasks/{userId}
  Retrieves all tasks for a user.

* POST /tasks/{userId}
  Adds a new task for a user.

* PUT /tasks/{taskId}
  Marks a task as completed.

* DELETE /tasks/{taskId}
  Deletes a task.

---

## Database Design

### User Table

* id (Primary Key)
* username
* password

### Task Table

* id (Primary Key)
* title
* completed (boolean)
* user_id (Foreign Key)

Relationship:

* One user can have multiple tasks (One-to-Many)

---

## Key Concepts Used

* REST API development using Spring Boot
* Object Relational Mapping using JPA
* Dependency Injection with Spring Framework
* HTTP communication between Angular and backend
* Component-based architecture in Angular
* Two-way data binding using ngModel

---

## How to Run the Project

### Backend Setup

1. Navigate to the backend folder
2. Configure MySQL database in application.properties:

   * Database URL
   * Username
   * Password
3. Run the Spring Boot application
4. Server will start on http://localhost:8081

---

### Frontend Setup

1. Navigate to the frontend folder
2. Install dependencies:
   npm install
3. Run the Angular application:
   ng serve
4. Open browser at http://localhost:4200

---

## Project Workflow

1. User registers or logs in
2. Frontend sends request to backend APIs
3. Backend validates and processes the request
4. Data is stored or retrieved from MySQL
5. Response is sent back to frontend
6. UI updates accordingly

---

## Limitations

* No advanced authentication (JWT not implemented)
* Basic UI design
* No role-based access control
* No deployment (local environment only)

---

## Future Improvements

* Implement JWT-based authentication
* Add task editing functionality
* Improve UI/UX design
* Deploy application to cloud platform

---

## Conclusion

This project demonstrates the fundamentals of full-stack development, including frontend-backend integration, RESTful API design, and database interaction. It is suitable as a beginner-level project to showcase
