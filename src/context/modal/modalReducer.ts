import { initialState, modalState } from "./modalContext";
import { actionTypes } from "./actionTypes";

interface ReducerAction {
  type: string;
  payload?: any;
}

const reducer = (state: modalState, action: ReducerAction): modalState => {
  switch (action.type) {
    case actionTypes.SHOW_MODAL:
      return {
        ...state,
        show: true,
        children: action.payload,
      };
    case actionTypes.HIDE_MODAL:
      return {
        ...state,
        show: false,
        children: null,
      };

    default:
      return initialState;
  }
};
export default reducer;
