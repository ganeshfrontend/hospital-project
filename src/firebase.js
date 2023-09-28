// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAq4jOFEcd4uQFMtL8vkmOnJFAWCMkOGhY",
  authDomain: "hospital-application-c76f9.firebaseapp.com",
  projectId: "hospital-application-c76f9",
  storageBucket: "hospital-application-c76f9.appspot.com",
  messagingSenderId: "625018074544",
  appId: "1:625018074544:web:9baee00995873c72211275",
  measurementId: "G-KNFCMVHZKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);