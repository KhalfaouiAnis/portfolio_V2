import { initialState, themeState } from "./themeContext";
import { actionTypes } from "./actionTypes";

interface ReducerAction {
  type: string;
  payload?: any;
}

const reducer = (state: themeState, action: ReducerAction): themeState => {
  switch (action.type) {
    case actionTypes.TOGGLE_THEME:
      const { theme, icon } = action.payload;
      return {
        ...state,
        theme,
        icon,
      };
    default:
      return initialState;
  }
};
export default reducer;
