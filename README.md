# 🚴‍♂️ Bike Servicing Management API

An advanced backend API system designed for managing bike servicing operations at a bike service center. This API allows seamless management of customers, bikes, and service records with robust CRUD operations and advanced filtering features.

## 🔗 Live Link
🔹 Live backend deployment link: https://bike-assignment.vercel.app

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
- Mark the service as complete
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


## Installation
 Clone the repository:

```
git clone https://github.com/your-username/bike-servicing-api.git
```
Navigate to the project folder and install packages :

```
npm install
```
Create a .env file with the following:

- DATABASE_URL: Collect it from Supabase.
- DIRECT_URL: Collect it from Supabase.
- ENABLE_PRISMA_CACHING=false

  

Run the server:

```
npm run dev
```
