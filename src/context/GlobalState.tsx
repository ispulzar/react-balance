import { ReactNode, createContext, useContext, useReducer } from "react";
import AppReducer from './AppReducer'
export const Context = createContext();

type Props = {
  children: ReactNode;
};

export const useGlobalState = () => {
  const context = useContext(Context)
  return context
}

export const GlobalProvider = (props: Props) => {
  const { children } = props;
  const [state,setState] = useReducer(AppReducer,[])
  return <Context.Provider value={{ total: 100 }}>{children}</Context.Provider>;
};

