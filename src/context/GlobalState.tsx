import { ReactNode, createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";
export const Context = createContext();

const intialState = {
  transactions: [],
};

type Props = {
  children: ReactNode;
};

export const useGlobalState = () => {
  const context = useContext(Context);
  return context;
};

export const GlobalProvider = (props: Props) => {
  const { children } = props;

  const [state, dispatch] = useReducer(AppReducer, intialState);

  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  return (
    <Context.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
      }}
    >
      {children}
    </Context.Provider>
  );
};
