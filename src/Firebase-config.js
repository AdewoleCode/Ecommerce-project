import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'



const firebaseConfig = {
  apiKey: "AIzaSyCV-8perq8LjIFhwHqDw5rt17LXdcy1kvI",
  authDomain: "ecommerce-583d5.firebaseapp.com",
  projectId: "ecommerce-583d5",
  storageBucket: "ecommerce-583d5.appspot.com",
  messagingSenderId: "445498663279",
  appId: "1:445498663279:web:b21c919cbcfc029c28489a"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;