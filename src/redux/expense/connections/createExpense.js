import axios from 'axios';

export const createExpenseRequest = async (expenseData) => {
  try {
    const response = await axios.post('https://wallet-app-3cqs.onrender.com/api/v1/expense', expenseData);
    return response.data;
    // Handle success, e.g., update state or show a success message
  } catch (error) {
    console.error('Error creating expense:', error);
    // Handle error, e.g., show an error message
  }
}