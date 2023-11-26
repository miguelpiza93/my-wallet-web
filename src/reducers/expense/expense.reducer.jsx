const expense = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        id: action.id,
        description: action.description,
        amount: parseFloat(action.amount),
        category: action.category,
      };
    case "TOGGLE_TODO":
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed,
      };
    default:
      return state;
  }
};

export const expenses = (state = [], action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, expense(undefined, action)];
    case "TOGGLE_TODO":
      return state.map((todoItem) => expense(todoItem, action));
    case 'RECEIVE_EXPENSES':
      return action.data;
    case "DELETE_EXPENSE":
      const deletedExpenseId = action.id;
      return state.filter((expense) => expense.id !== deletedExpenseId);
    default:
      return state;
  }
};
