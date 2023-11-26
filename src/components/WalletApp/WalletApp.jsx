import ExpenseHeader from "../ExpenseHeader/ExpenseHeader";
import ExpenseTable from "../ExpenseTable/ExpenseTable";
import "./WalletApp.css";

function WalletApp() {
  return (
    <div>
      <ExpenseHeader />
      <ExpenseTable />
    </div>
  );
}

export default WalletApp;
