# 🏋️‍♂️ FitLife Gym Management System

A web-based gym management system built with **HTML**, **JavaScript**, and **Firebase**, designed to streamline tasks for gym administrators and enhance experience for members.

## 📌 Features

### 👑 Admin Panel
- Add / Edit / Delete Members
- Assign Fee Packages
- Generate Bills
- Manage Diet Plans
- Send Notifications to Members
- Manage Supplement Store Inventory
- View Reports (e.g. billing summaries)

### 🙋‍♂️ Member Panel
- View Assigned Package
- Access Diet Plans
- See Bills
- View Supplement Store Items
- Receive Admin Notifications

---

## 🛠 Tech Stack

| Tech        | Description                                 |
|-------------|---------------------------------------------|
| HTML/CSS    | UI Structure & Styling                      |
| JavaScript  | Frontend Logic                              |
| Firebase    | Authentication, Firestore, Storage          |
| Firestore   | Real-time NoSQL database                    |
| Firebase Auth | Login / Registration (Role-based)        |

---

## 🔐 Roles

- **Admin**: Manages the system (members, billing, diet, supplements).
- **Member**: Views assigned packages, bills, diet plans, supplements, and receives notifications.

---

## 🚀 How to Run

1. **Clone the repository**

```bash
git clone https://github.com/your-username/gym-management-system.git
cd gym-management-system


2. **Setup Firebase**
   - Go to Firebase Console
   - Create a new project
   - Enable Authentication → Email/Password
   - Enable Firestore Database
   - Enable Storage
   - Add your Firebase config to firebase.js

3. **Launch Locally**
   - Use VSCode with Live Server, or
   - Run via any local web server (e.g. Live Server)