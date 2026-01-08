# Student Management System – Frontend (React)

This folder contains the **React-based frontend UI** for the Student Management System.  
It is integrated with a **Spring Boot + MongoDB backend** running inside Docker.

---

## Features
- Create Student
- View All Students
- Update Student
- Delete Student
- Fully connected to backend REST APIs

---

## Tech Stack
- React.js
- JavaScript
- Fetch API
- CSS
- Spring Boot (Backend)
- MongoDB
- Docker

---

## Backend API Integration

Base URL: http://localhost:8080/api/students

### Endpoints Used
POST /api/students
GET /api/students
PUT /api/students/{id}
DELETE /api/students/{id}

---

## How to Run the UI
```bash
cd crud-ui
npm install
npm start