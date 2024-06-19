import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";

import AppReducer from "./AppReducer";

export const Context = createContext();

export const useGlobalState = () => {
  const context = useContext(Context);
  return context;
};

type Props = {
  children: ReactNode;
};
const intialState = {
  transactions: [],
};

export const GlobalProvider = (props: Props) => {
  const { children } = props;

  const [state, dispatch] = useReducer(AppReducer, intialState, () => {
    const localData = localStorage.getItem("transactions");
    return localData ? JSON.parse(localData) : intialState;
  });

  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };
  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state));
  }, [state]);

  return (
    <Context.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </Context.Provider>
  );
};
