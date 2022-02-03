import { transactionInterface } from "../modules/AllTransactions/index";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const fetchTransactions = async (id: string) => {
  try {
    const response = await getDoc(doc(db, "transactions", id));
    return response.data();
  } catch (error) {
    return error;
  }
};

export const updateTransaction = async (payload: {
  income: number;
  monthlyExpenses: any[];
  transactions: transactionInterface[];
  transactionsList: { month: string; transactions: transactionInterface[] }[];
  id: string;
}) => {
  try {
    const response = await setDoc(doc(db, "transactions", payload.id), {
      income: payload.income,
      monthlyExpenses: payload.monthlyExpenses,
      transactions: payload.transactions,
      transactionsList: payload.transactionsList,
    });
    return response;
  } catch (error) {
    return error;
  }
};
