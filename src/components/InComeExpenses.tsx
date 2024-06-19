import { useGlobalState } from "../context/GlobalState";

type Props = {};

function InComeExpenses({}: Props) {
  const { transactions } = useGlobalState();
  const amounts = transactions.map((transaction) => transaction.amount);
  const inCome = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, item) => (acc += item), 0);

    const Expeses = amounts
    .filter((amount) => amount < 0)
    .reduce((acc, item) => (acc += item), 0) * -1;

    return (
    <>
      <div>
        <h4>InCome</h4>
        <p>{inCome}</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p>{Expeses}</p>
      </div>
    </>
  );
}

export default InComeExpenses;
