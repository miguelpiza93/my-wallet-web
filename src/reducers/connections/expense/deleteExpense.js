import axios from 'axios';

const deleteExpense = async (id) => {
  try {
    const response = await axios.delete(`https://wallet-app-3cqs.onrender.com/api/v1/expense/${id}`);
    console.log('Expense deleted:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error deleting expense:', error);
  }
}

export default deleteExpense;
