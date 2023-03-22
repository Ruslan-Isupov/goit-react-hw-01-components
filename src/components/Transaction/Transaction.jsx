import css from './Transaction.module.css';
import PropTypes from 'prop-types';
export const Transaction = ({ id, type, amount, currency }) => {
  return (
    <tbody key={id} className={css.tbody}>
      <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </tbody>
  );
};
Transaction.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
