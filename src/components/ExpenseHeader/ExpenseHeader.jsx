import { useNavigate } from "react-router-dom";
import OveralBox from "../OveralBox/OveralBox";

const ExpenseHeader = () => {
  const navigate = useNavigate();
  const handleRedirectToAddExpense = () => {
    navigate("/add");
  };
  return (
    <div>
      <OveralBox />
      <button onClick={handleRedirectToAddExpense}>Add Expense</button>
    </div>
  );
};

export default ExpenseHeader;
