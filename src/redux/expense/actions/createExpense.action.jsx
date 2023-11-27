import { createExpenseRequest } from "../connections/createExpense"

export const createExpense = (data) => async dispatch => {
  const result = await createExpenseRequest(data);
  dispatch({
    type: "ADD_EXPENSE",
    ...result,
  })
};