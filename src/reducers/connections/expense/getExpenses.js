
import axios from 'axios';

const getExpenses = async () => {
  try {
    const response = await axios.get('https://wallet-app-3cqs.onrender.com/api/v1/expense');
    console.log('Expense created:', response.data);
    return response.data;
    // Handle success, e.g., update state or show a success message
  } catch (error) {
    console.error('Error creating expense:', error);
    // Handle error, e.g., show an error message
  }
}


export default getExpenses;


