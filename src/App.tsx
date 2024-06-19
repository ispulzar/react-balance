import { GlobalProvider } from "./context/GlobalState.tsx";
import Balance from "./components/Balance.tsx";
import Header from "./components/Header.tsx";
import TransactionForm from "./components/Transactions/TransactionForm.tsx";
import TransactionsList from "./components/Transactions/TrasactionsList.tsx";
import InComeExpenses from "./components/InComeExpenses.tsx";
type Props = {};

const App = (props: Props) => {
  return (
    <GlobalProvider>
      <Balance></Balance>
      <InComeExpenses/>
      <TransactionForm></TransactionForm>
      <Header></Header>
      <TransactionsList />
    </GlobalProvider>
  );
};

export default App;
