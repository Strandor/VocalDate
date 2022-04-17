import { AnyAction, Reducer } from "@reduxjs/toolkit";
import { AppActionTypes, appState } from "./types";
import { initialState } from "./utils";

const reducer: Reducer<appState> = (
  state = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case AppActionTypes.QUEUE:
      return {
        ...state,
        isLoading: true,
      };
    case AppActionTypes.QUEUE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: {
          ...state.data,
          state: "queued",
        },
      };
    case AppActionTypes.QUEUE_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export { reducer as appReducer };
