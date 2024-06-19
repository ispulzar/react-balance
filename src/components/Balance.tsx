import { useGlobalState } from "../context/GlobalState";
type Props = {};

const Balance = (props: Props) => {
  const data = useGlobalState();
  return (
    <div>
      <h1>Balance</h1>
    </div>
  );
};

export default Balance;
