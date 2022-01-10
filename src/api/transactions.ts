import { transactionInterface } from "../modules/AllTransactions/index";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const fetchTransactions = async () => {
  try {
    const response = await getDoc(doc(db, "transactions", "first"));
    return response.data();
  } catch (error) {
    return error;
  }
};

export const addTransaction = async (transactions: transactionInterface[]) => {
  try {
    const response = await setDoc(doc(db, "transactions", "first"), {
      transactions,
    });
    return response;
  } catch (error) {
    return error;
  }
};
