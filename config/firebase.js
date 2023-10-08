import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBJuG_RV5fO78xLcr_cyFJKj3cjvDoQsU8",
    authDomain: "shuttlex-e2c46.firebaseapp.com",
    databaseURL: "https://shuttlex-e2c46-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "shuttlex-e2c46",
    storageBucket: "shuttlex-e2c46.appspot.com",
    messagingSenderId: "242578470974",
    appId: "1:242578470974:web:beb1d153f32ae20c4e396f"
  };

/*const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID 
  };*/

// initialize firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
