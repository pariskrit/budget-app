import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0ZowO2NPZvH-h0IhozBG6LSuhiS2JbGA",
  authDomain: "budget-app-e8f01.firebaseapp.com",
  projectId: "budget-app-e8f01",
  storageBucket: "budget-app-e8f01.appspot.com",
  messagingSenderId: "1004511256566",
  appId: "1:1004511256566:web:56a55e7ee60ae94ca1f1d7",
  measurementId: "G-LHX0MPTB87",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
