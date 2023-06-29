// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnJdAyaWo5ql4eXGVOdj8f6T6BVizaHWg",
  authDomain: "postergenius2.firebaseapp.com",
  projectId: "postergenius2",
  storageBucket: "postergenius2.appspot.com",
  messagingSenderId: "719342750673",
  appId: "1:719342750673:web:6ef108fbd6cdf0f5c5aef0",
  measurementId: "G-J8W7S6LLT4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
