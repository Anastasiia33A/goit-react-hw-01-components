import css from './transactionHistory.module.css';

function TransactionHistory({ items }) {
    return (
        <table className={css['transaction-history']}>
  <thead className={css['transaction-head']}>
    <tr>
      <th className={css['title']}>Type</th>
      <th className={css['title']}>Amount</th>
      <th className={css['title']}>Currency</th>
    </tr>
  </thead>
{items.map(item=>
  <tbody >
    <tr className={css.form}>
      <td className={css['item']} key={item.id}>{item.type}</td>
      <td className={css['item']} >{item.amount}</td>
      <td className={css['item']} >{item.currency}</td>
    </tr>
    </tbody>
    )}
</table>
    )
    
};

export default TransactionHistory;