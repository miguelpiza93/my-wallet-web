import axios from 'axios';

const createExpense = async (expenseData) => {
  try {
    const response = await axios.post('https://wallet-app-3cqs.onrender.com/api/v1/expense', expenseData);
    console.log('Expense created:', response.data);
    // Handle success, e.g., update state or show a success message
  } catch (error) {
    console.error('Error creating expense:', error);
    // Handle error, e.g., show an error message
  }
}


export default createExpense;