import { Transaction } from 'components/Transaction/Transaction';
import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';
export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {transactions.map(transaction => {
        return (
              <tbody key={transaction.id} className={css.tbody}>

          <Transaction
            
            id={transaction.id}
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
            />
            </tbody>
            );
            
      })}
    </table>
  );
};
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
   id: PropTypes.string.isRequired,
 })).isRequired
};
