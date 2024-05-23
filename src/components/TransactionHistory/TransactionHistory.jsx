import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.tableHeader}>
          <th className={css.tableHeader}>type</th>
          <th className={css.tableHeader}>Amount</th>
          <th className={css.tableHeader}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id} className={css.tableRow}>
                   
            <td className={css.tableData}> {item.type}</td>
            <td className={css.tableData}> {item.amount}</td>
            <td className={css.tableData}> {item.currency}</td>
          
          </tr>
        ))}
        
    
      </tbody>
    </table>
  )
};


TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired

    })
  ).isRequired,
};


export default TransactionHistory;