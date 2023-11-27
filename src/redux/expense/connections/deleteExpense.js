import axios from 'axios';

export const deleteExpenseRequest = async (id) => {
  try {
    const response = await axios.delete(`https://wallet-app-3cqs.onrender.com/api/v1/expense/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting expense:', error);
  }
}

