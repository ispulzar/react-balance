import { GlobalProvider } from "./context/GlobalState.tsx";
import Balance from './components/Balance.tsx'
import Transaction from "./components/Transaction.tsx";
import Header from "./components/Header.tsx";
type Props = {};

const App = (props: Props) => {
  return (
    <GlobalProvider>
      <Balance></Balance>
      <Transaction></Transaction>
      <Header></Header>
      <div>hola mundo</div>
    </GlobalProvider>
  );
};

export default App;
