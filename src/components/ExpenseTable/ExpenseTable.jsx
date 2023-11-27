import { connect } from "react-redux";
import Expense from "./Expense/Expense";
import styles from "./ExpenseTable.module.css";
import { useSelector } from 'react-redux'
import { getExpenses } from "../../redux/expense/actions/getExpenses.action";
import { deleteExpense } from "../../redux/expense/actions/deleteExpense.action";
import { useEffect } from "react";
import { selectExpenses } from "../../redux/expense/expense.selectors";

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
  };
};



const ExpenseTable = ({dispatch}) => {
  const expenses = useSelector(selectExpenses);

  const onRemove = id => {
    dispatch(deleteExpense(id));
  }

  useEffect(()=>{
    dispatch(getExpenses());
  }, [dispatch])

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
