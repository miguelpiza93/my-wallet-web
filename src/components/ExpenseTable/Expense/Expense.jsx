import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Expense = ({ item, onRemove }) => {
  return (
    <tr>
      <td>{item.description}</td>
      <td>${item.amount}</td>
      <td>{item.category}</td>
      <td>
        <button onClick={() => onRemove(item.id)}>
        <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
};

export default Expense;
