import { auth, db } from './firebase.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// =====================
// 📌 Registration Logic
// =====================
const registerBtn = document.getElementById('registerBtn');

if (registerBtn) {
  registerBtn.addEventListener('click', async () => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = document.getElementById('age').value.trim();
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
    const errorMsg = document.getElementById('errorMsg');

    if (!name || !email || !age || !password || !role) {
      errorMsg.textContent = "All fields are required.";
      return;
    }

    try {
      // 1. Create user with Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 2. Prepare user data
      const userData = {
        uid: user.uid,
        name,
        email,
        age: Number(age),
        role
      };

      // 3. Save to the appropriate collection based on role
      const collectionName = role === "admin" ? "admins" : "members";
      await setDoc(doc(db, collectionName, user.uid), userData);

      alert("Registration successful!");
      window.location.href = "./login.html";

    } catch (error) {
      errorMsg.textContent = error.message;
    }
  });
}



// =====================
// 🔐 Login Logic (Updated)
// =====================
const loginBtn = document.getElementById('loginBtn');

if (loginBtn) {
  loginBtn.addEventListener('click', async () => {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const selectedRole = document.getElementById('loginRole').value;
    const errorMsg = document.getElementById('loginErrorMsg');

    if (!email || !password || !selectedRole) {
      errorMsg.textContent = "All fields are required.";
      return;
    }

    try {
      // 1. Login using Firebase Auth
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 2. Decide which collection to check based on selected role
      const collectionName = selectedRole === "admin" ? "admins" : "members";
      const docRef = doc(db, collectionName, user.uid);
      const docSnap = await getDoc(docRef);

      // 3. Validate user record
      if (docSnap.exists()) {
        const userData = docSnap.data();

        if (userData.role === selectedRole) {
          // ✅ Redirect based on role
          if (selectedRole === "admin") {
            window.location.href = "./admin/dashboard.html";
          } else {
            window.location.href = "./member/dashboard.html";
          }
        } else {
          errorMsg.textContent = "Role mismatch. Please choose the correct role.";
        }
      } else {
        errorMsg.textContent = "User record not found in role collection.";
      }

    } catch (error) {
      errorMsg.textContent = error.message;
    }
  });
}
