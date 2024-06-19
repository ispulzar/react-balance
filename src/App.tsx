import { GlobalProvider } from "./context/GlobalState.tsx";
import Balance from './components/Balance.tsx'
import Header from "./components/Header.tsx";
import TransactionForm from "./components/Transactions/TransactionForm.tsx";
import TransactionsList from "./components/Transactions/TrasactionsList.tsx";
type Props = {};

const App = (props: Props) => {
  return (
    <GlobalProvider>
      <Balance></Balance>
      <TransactionForm></TransactionForm>
      <Header></Header>
      <TransactionsList/>
    </GlobalProvider>
  );
};

export default App;
