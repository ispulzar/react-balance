import { useGlobalState } from "../../context/GlobalState";
type Props = {};

export function TransactionsList() {
  const { transactions, deleteTransaction } = useGlobalState();

  return (
    <>
      <p>Transactions</p>
      {transactions.map((transaction) => (
        <div key={transaction.id}>
          <p>{transaction.description}</p>
          <span>{transaction.amount}</span>
          <button onClick={() => deleteTransaction(transaction.id)}>x</button>
        </div>
      ))}
    </>
  );
}
export default TransactionsList;
