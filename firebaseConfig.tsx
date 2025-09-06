import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// IMPORTANT: These variables are placeholders.
// In a real production environment, these should be replaced with your actual
// Firebase project configuration, ideally through secure environment variables.
const firebaseConfig = {
  apiKey: "AIzaSyDR7ESMB1iyH02o_bez3fsV-OP0t67ZdaI",
  authDomain: "pcbl-uk.firebaseapp.com",
  projectId: "pcbl-uk",
  storageBucket: "pcbl-uk.firebasestorage.app",
  messagingSenderId: "5928195368",
  appId: "1:5928195368:web:db91b5c0cd17a0f035ac1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
