import React, { useReducer, useContext, Fragment, ReactNode } from "react";
import reducer from "./modalReducer";
import { actionTypes } from "./actionTypes";

export interface modalState {
  show?: boolean;
  children: ReactNode;
  displayModal: (content: ReactNode) => any;
  hideModal: () => any;
}

const initialState: modalState = {
  show: false,
  children: null,
  displayModal: () => {},
  hideModal: () => {},
};

export interface ModalProps {
  children: ReactNode;
}

const ModalContext = React.createContext(initialState);

const ModalContextProvider = ({ children }: ModalProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayModal = (content: any) => {
    dispatch({ type: actionTypes.SHOW_MODAL, payload: content });
  };

  const hideModal = () => {
    dispatch({ type: actionTypes.HIDE_MODAL });
  };

  return (
    <ModalContext.Provider
      value={{
        ...state,
        hideModal,
        displayModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const useModalContext = () => {
  return useContext(ModalContext);
};

ModalContextProvider.defaultProps = {
  children: <Fragment />,
};

export { ModalContextProvider, ModalContext, initialState, useModalContext };
