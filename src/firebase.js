import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC7f81qhaJvYSgTejjaTA6jIwbdd4mrAN0",
  authDomain: "yarnie-the-cat.firebaseapp.com",
  projectId: "yarnie-the-cat",
  storageBucket: "yarnie-the-cat.firebasestorage.app",
  messagingSenderId: "294195767958",
  appId: "1:294195767958:web:36ef05093cef2f790cb0b7",
  measurementId: "G-M61NDH0VKE",
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
