import { useReducer } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from "./AddExpense.module.css";
import { createExpense } from "../../redux/expense/actions/createExpense.action";

const INITIAL_STATE = {
  description: "",
  amount: 0,
  category: "food",
};

const reducer = (state, payload) => ({ ...state, ...payload });

const AddExpense = ({ dispatch }) => {
  const [state, setState] = useReducer(reducer, INITIAL_STATE);
  const navigate = useNavigate();

  const onAddExpenseClick = async () => {
    await dispatch(createExpense({ ...state }));
    setState(INITIAL_STATE);
    navigate("/");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState({ [name]: value });
  };

  return (
    <div className={style.form}>
      <h1>Add Expense</h1>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="description"
          value={state.description}
          onChange={handleInputChange}
          required
          aria-labelledby="description"
        />
      </div>

      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          step="0.01"
          name="amount"
          value={state.amount}
          onChange={handleInputChange}
          required
          aria-labelledby="amount"
        />
      </div>

      <div>
        <label htmlFor="category">Category:</label>
        <select
          name="category"
          value={state.category}
          onChange={handleInputChange}
          aria-labelledby="category"
        >
          <option value="food">Food</option>
          <option value="transportation">Transportation</option>
          <option value="entertainment">Entertainment</option>
          <option value="utilities">Utilities</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button onClick={onAddExpenseClick} aria-labelledby="submit">
        Submit
      </button>
    </div>
  );
};

export default connect()(AddExpense);
