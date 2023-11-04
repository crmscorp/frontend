import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export interface IdefaultValueState {
  chat: boolean;
  cart: boolean;
  activeMenu: boolean;
  userProfil: boolean;
  notification: boolean;
  sideBarOpen: boolean;
}
export const defaultValueState: IdefaultValueState = {
  chat: false,
  cart: false,
  activeMenu: true,
  userProfil: false,
  notification: false,
  sideBarOpen: false
};

export interface IinitialState {
  values: IdefaultValueState;
  setContextState: Dispatch<SetStateAction<IdefaultValueState>>;
}

export const initialState = {
  values: defaultValueState,
  setContextState: (values) => {},
} as IinitialState;

export const StateContext = createContext(initialState);

export interface IContextProvider {
  children: React.ReactNode;
}

export const ContextProvider = ({ children }: IContextProvider) => {
  const [contextState, setContextState] =
    useState<IdefaultValueState>(defaultValueState);

  return (
    <StateContext.Provider
      value={{ values: contextState, setContextState: setContextState }}
    >
      {children}
    </StateContext.Provider>
  );
};

// export const useStateContext = () => useContext(StateContext);
