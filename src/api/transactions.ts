import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const fetchTransactions = async () => {
  try {
    const response = await getDoc(doc(db, "transactions", "first"));
    return response.data();
  } catch (error) {
    return error;
  }
};
