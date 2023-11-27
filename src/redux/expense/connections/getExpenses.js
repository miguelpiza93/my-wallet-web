
import axios from 'axios';

export const getExpensesRequest = async () => {
  try {
    const response = await axios.get('https://wallet-app-3cqs.onrender.com/api/v1/expense');
    return response.data;
  } catch (error) {
    console.error('Error creating expense:', error);
  }
}
