import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBPZdDSAJWss1vxqMsd2nIZYJXOuCGB1A0",
  authDomain: "komik-islami-anak.firebaseapp.com",
  projectId: "komik-islami-anak",
  storageBucket: "komik-islami-anak.firebasestorage.app",
  messagingSenderId: "814700474572",
  appId: "1:814700474572:web:daa8779042d4c622f51269"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
