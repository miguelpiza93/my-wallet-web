// Import necessary modules at the top
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import createMockStore from "redux-mock-store";
import ExpenseHeader from "./ExpenseHeader";

// Mocking useNavigate
const mockNavigate = jest.fn()
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate,
  }));
  const mockStore = createMockStore();
  const store = mockStore({
    expenses: [],
  });

  const renderComponent = () => {
    return render(
      <Provider store={store}>
        <MemoryRouter>
          <ExpenseHeader />
        </MemoryRouter>
      </Provider>
    );
  };

describe("ExpenseHeader", () => {
  it("renders the OveralBox component", () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('navigates to the add expense page when the "Add Expense" button is clicked', () => {
    renderComponent();
    userEvent.click(screen.getByLabelText("Add Expense"));
    expect(mockNavigate).toHaveBeenCalledWith("/add");
  });
});
