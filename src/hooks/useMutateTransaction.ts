import { updateTransaction } from "./../api/transactions";
import { useMutation, useQueryClient } from "react-query";

export const useMutateTransaction = (closeModal: () => void) => {
  const queryClient = useQueryClient();

  return useMutation(updateTransaction, {
    onSuccess: () => {
      queryClient.invalidateQueries("transactions");
      closeModal();
    },
  });
};
