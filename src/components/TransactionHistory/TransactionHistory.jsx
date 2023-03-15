import transactions from "Data/transactions"
export const TransactionHistory = (props) => {
    return transactions.map((transaction) => {
        return <tbody key = {transaction.id}>
          <tr>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
         
        </tbody>
     
    })
} 