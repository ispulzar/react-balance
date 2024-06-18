import { GlobalProvider } from "./context/GlobalState.tsx";
import Balance from './components/Balance.tsx'
import Header from "./components/Header.tsx";
import TransactionForm from "./components/Transactions/TransactionForm.tsx";
import TrasactionsList from "./components/Transactions/TrasactionsList.tsx";
type Props = {};

const App = (props: Props) => {
  return (
    <GlobalProvider>
      <Balance></Balance>
      <TransactionForm></TransactionForm>
      <Header></Header>
      <TrasactionsList></TrasactionsList>
    </GlobalProvider>
  );
};

export default App;
