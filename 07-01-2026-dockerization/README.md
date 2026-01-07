# Dockerization of Spring Boot CRUD Application
**Date:** 07-01-2026

## 📌 Overview
This task focuses on containerizing a Spring Boot CRUD application using Docker and Docker Compose, along with MongoDB as the database. The goal was to run the complete backend stack inside containers and verify data persistence and API functionality.

---

## 🛠 Tech Stack
- Java 21
- Spring Boot 3.x
- MongoDB
- Docker
- Docker Compose
- Gradle
- Postman

---

## 🐳 Docker Configuration

### Dockerfile
- Uses Java 21 base image
- Copies Spring Boot JAR
- Exposes port `8080`
- Runs application using `java -jar`

### docker-compose.yml
- **springboot-crud** service
  - Runs Spring Boot application
  - Exposes `8080:8080`
- **mongo** service
  - MongoDB official image
  - Exposes `27017`
- Both services are on the same Docker network

---

## ▶️ How to Run

### Build and start containers
```bash
docker compose up --build