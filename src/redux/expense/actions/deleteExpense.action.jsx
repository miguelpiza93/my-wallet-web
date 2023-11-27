import { deleteExpenseRequest } from "../connections/deleteExpense"

export const deleteExpense = id => async (dispatch, getState) => {
  await deleteExpenseRequest(id);
  dispatch({
    type: "DELETE_EXPENSE",
    id,
  })
};