import { connect } from "react-redux";

const getTotalAmount = (expenses) => {
  return expenses.reduce((sum, expense) => sum + parseFloat(expense.amount), 0);
};

const mapStateToProps = (state) => {
  return {
    totalAmount: getTotalAmount(state.expenses),
  };
};

const OveralBox = ({ totalAmount }) => {
  return (
    <div>
      <span>Total Amount:</span>{" "}
      <span>{totalAmount}</span>
    </div>
  );
};

export default connect(mapStateToProps)(OveralBox);
