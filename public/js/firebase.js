// public/js/firebase.js

// Import Firebase core and required services
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDWnlGPxDGK6tAoo_fFAGd0kTIdKPxiKxc",
  authDomain: "gymmanagementsystem-2c189.firebaseapp.com",
  projectId: "gymmanagementsystem-2c189",
  storageBucket: "gymmanagementsystem-2c189.firebasestorage.app",
  messagingSenderId: "135832156870",
  appId: "1:135832156870:web:ad97adf46c29fd1946b5c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);

// Export for use in other files
export { auth, db };
