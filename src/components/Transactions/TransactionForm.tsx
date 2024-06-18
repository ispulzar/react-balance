import { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";
type Props = {};

const TransactionForm = (props: Props) => {
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useGlobalState();

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({ id: window.crypto.randomUUID, description, amount });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="ingresa una description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          step="0.01"
          placeholder="0.00"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button>Add transaction</button>
      </form>
    </div>
  );
};

export default TransactionForm;
