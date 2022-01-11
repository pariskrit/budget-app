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

export const updateTransaction = async (payload: {
  monthlyExpenses: any[];
  transactions: transactionInterface[];
}) => {
  try {
    const response = await setDoc(doc(db, "transactions", "first"), payload);
    return response;
  } catch (error) {
    return error;
  }
};
