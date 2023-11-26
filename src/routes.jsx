import { Route, Routes } from "react-router-dom";
import WalletApp from "./components/WalletApp/WalletApp";
import AddExpense from "./components/AddExpense/AddExpense";

function Statistics() {
  return (
    <div>
      <h2>Statistics Page</h2>
      {/* Add your statistics page content here */}
    </div>
  );
}

const WalletRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WalletApp />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/add" element={<AddExpense />} />
    </Routes>
  );
};

export default WalletRoutes;
