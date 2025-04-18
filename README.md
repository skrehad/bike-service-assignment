# 🚴‍♂️ Bike Servicing Management API

An advanced backend API system designed for managing bike servicing operations at a bike service center. This API allows seamless management of customers, bikes, and service records with robust CRUD operations and advanced filtering features.

## 🔗 Live Link
🔹 [Render PostgreSQL DB](https://render.com/)  
🔹 Live backend deployment link: _[your-api-url-here]_ (replace with actual link)

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js, TypeScript
- **Database:** PostgreSQL (via Render)
- **ORM:** Prisma ORM
- **UUIDs** for primary keys across all models

---

## 📦 Features

### 👥 Customer Management
- Create, view, update & delete customer records

### 🛵 Bike Management
- Add bikes associated with a customer
- View all or single bikes

### 🧰 Service Management
- Add and fetch service records
- Mark service as complete
- Fetch pending or overdue services

### ⚠️ Error Handling
- Standardized error response structure with proper status codes

---

## 🗃️ Database Schema

- **Customer**
  - `customerId` (UUID, PK)
  - `name`, `email`, `phone`
  - `createdAt`

- **Bike**
  - `bikeId` (UUID, PK)
  - `brand`, `model`, `year`
  - `customerId` (UUID, FK)

- **ServiceRecord**
  - `serviceId` (UUID, PK)
  - `bikeId` (UUID, FK)
  - `serviceDate`, `completionDate`, `description`, `status`

---

## 📂 Setup Guide

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/bike-servicing-api.git
   cd bike-servicing-api
