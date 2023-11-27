import { getExpensesRequest } from "../connections/getExpenses";

export const getExpenses = () => async (dispatch, getState) => {
  const data = await getExpensesRequest();
  
  dispatch({
    type: "RECEIVE_EXPENSES",
    data,
  });
};
