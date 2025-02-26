# Job Board Website

## 🚀 Overview
This is a **Job Board** web application built with **React.js** and **Firebase**. It allows users to browse job listings, apply filters based on job criteria, and retrieve job postings from a Firebase database.

## 🧐 Features
- 🔍 **Search & Filter Jobs** (By title, location, experience, type)
- 📄 **Job Listings** (Dynamically retrieved from Firebase)
- 📌 **Sorting by Posted Date** (Newest jobs appear first)
- 🎨 **Responsive UI** (Designed with Tailwind CSS for a modern look)

## ⚙️ Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **Backend:** Firebase Firestore (Cloud Database)
- **State Management:** React Hooks (useState, useEffect)

## 🔧 Installation & Setup
### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/Kamalpannu/Job-Board.git
cd Job-Board
```
### **2️⃣ Install Dependencies**
```bash
npm install
```
### **3️⃣ Configure Firebase**
- Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
- Enable **Firestore Database**
- Create a collection named **jobs** and add job listings
- Add Firebase config details in `firebase.config.js`:
  ```javascript
  import { initializeApp } from "firebase/app";
  import { getFirestore } from "firebase/firestore";
  const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  ```
### **4️⃣ Run the Development Server**
```bash
npm start
```
Access the app at **http://localhost:3000**.

## 💂️ Project Structure
```
Job-Board/
│-- public/
│-- src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Header.js
│   │   ├── Searchbar.js
│   │   ├── JobCard.js
│   ├── firebase.config.js
│   ├── JobDummyData.js
│   ├── App.js
│   ├── index.js
│-- package.json
│-- README.md
```

## 🚀 Deployment
### **Deploying to Netlify**
1. **Build the Project**
   ```bash
   npm run build
   ```
2. **Upload to Netlify**
   - Go to https://new-board.netlify.app

## 🔧 Future Enhancements
- ✅ **User Authentication** (Login & Apply for Jobs)
- ✅ **Job Posting Feature** (Employers can post jobs)
- ✅ **Pagination & Infinite Scrolling**

## 🤝 Contributing
Feel free to **fork** this repository and submit **pull requests**! 😊

## 📞 Contact
For any queries, reach out on GitHub: [Kamalpannu](https://github.com/Kamalpannu)
