import { connect } from "react-redux";
import Expense from "./Expense/Expense";
import styles from "./ExpenseTable.module.css";
import { useEffect } from "react";
import {get, remove } from "../../reducers/connections/expense";

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
  };
};

const ExpenseTable = ({ expenses, dispatch }) => {

  useEffect(() => {
    // Fetch expenses when the component mounts
    const fetchData = async () => {
      try {
        const data = await get();
        dispatch({
          type: "RECEIVE_EXPENSES",
          data,
        });
        // Handle success, e.g., update state or show a success message
      } catch (error) {
        console.error('Error fetching expenses:', error);
        // Handle error, e.g., show an error message
      }
    };

    fetchData();
  }, [dispatch]);

  const onRemove = id => {
    remove(id)
    dispatch({
      type: "DELETE_EXPENSE",
      id
    })
  }


  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <Expense key={expense.id} item={expense} onRemove={onRemove}></Expense>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default connect(mapStateToProps)(ExpenseTable);
