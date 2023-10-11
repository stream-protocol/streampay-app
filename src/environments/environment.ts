// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFOlb50P4jIKMzRVNI_QNUd8hjMsBXJtc",
  authDomain: "streampay-app.firebaseapp.com",
  projectId: "streampay-app",
  storageBucket: "streampay-app.appspot.com",
  messagingSenderId: "101647312484",
  appId: "1:101647312484:web:afda94a365d4896cf8e171",
  measurementId: "G-44L9V0FR01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);