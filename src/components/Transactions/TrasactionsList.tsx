import { useGlobalState } from "../../context/GlobalState";
type Props = {};

function TrasactionsList({}: Props) {
  const { transactions } = useGlobalState();
  return (
    <div>
      {transactions.map((transaction) => (
        <div key={transaction.id}>
            <p>{transaction.description}</p>
            <p>{transaction.id}</p>
        </div>
      ))}
    </div>
  );
}

export default TrasactionsList;
