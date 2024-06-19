import { useGlobalState } from "../context/GlobalState";
type Props = {};

const Balance = (props: Props) => {
  const { transactions } = useGlobalState();

  const total = transactions.map((transaction) => transaction.amount).reduce((acc, item) => (acc += item), 0);

  // const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <div>
      <h3>Your Balance</h3>
      <h1>${JSON.stringify(total, null, 2)}</h1>
    </div>
  );
};

export default Balance;
