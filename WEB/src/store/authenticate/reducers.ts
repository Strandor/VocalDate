import { AnyAction, Reducer } from "@reduxjs/toolkit";
import { setCookies } from "cookies-next";
import { HYDRATE } from "next-redux-wrapper";
import { AuthenticateActionTypes, authenticateState } from "./types";
import { initialState } from "./utils";

const reducer: Reducer<authenticateState> = (
  state = initialState,
  action: AnyAction
) => {
  console.log(action);
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload.authenticate,
      };
    case AuthenticateActionTypes.AUTHENTICATE_REQUEST:
      return {
        ...state,
        isLoading: true,
        errors: undefined,
      };
    case AuthenticateActionTypes.AUTHENTICATE_REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    case AuthenticateActionTypes.AUTHENTICATE_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: {
          ...state.data,
          ...action.payload,
          isLoggedIn: true,
        },
      };
    case AuthenticateActionTypes.TOKEN_REQUEST:
      return {
        ...state,
        isLoading: true,
        errors: undefined,
      };
    case AuthenticateActionTypes.TOKEN_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: {
          ...state.data,
          ...action.payload,
          isLoggedIn: true,
        },
      };
    case AuthenticateActionTypes.TOKEN_REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export { reducer as authenticateReducer };
