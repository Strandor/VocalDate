import { FetchResult, gql } from "@apollo/client";
import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import { StoreState } from "../";
import client from "../../apollo-client";
import {
  AuthenticateActionTypes,
  AuthenticateGraph,
  TokenRequestGraph,
} from "./types";

export const fetchToken =
  (): ThunkAction<void, StoreState, unknown, AnyAction> =>
  async (dispatch, getState) => {
    dispatch({
      type: AuthenticateActionTypes.TOKEN_REQUEST,
    });

    const authenticateData = getState().authenticate.data;

    try {
      const tokenGraph = await client.mutate<TokenRequestGraph>({
        variables: {
          token: authenticateData.token,
        },
        mutation: gql`
          mutation ValidateToken($token: String!) {
            validateToken(token: $token) {
              id
            }
          }
        `,
      });

      dispatch({
        type: AuthenticateActionTypes.TOKEN_REQUEST_SUCCESS,
        payload: tokenGraph.data?.validateToken,
      });
    } catch (error: any) {
      dispatch({
        type: AuthenticateActionTypes.TOKEN_REQUEST_ERROR,
        payload: error.message,
      });
    }
  };

export const authenticate =
  (code: string): ThunkAction<void, StoreState, unknown, AnyAction> =>
  async (dispatch) => {
    dispatch({
      type: AuthenticateActionTypes.AUTHENTICATE_REQUEST,
    });

    try {
      const authenticateGraph = await client.mutate<AuthenticateGraph>({
        variables: {
          code: code,
        },
        mutation: gql`
          mutation Mutation($code: String!) {
            authGoogle(code: $code) {
              token
            }
          }
        `,
      });

      dispatch({
        type: AuthenticateActionTypes.AUTHENTICATE_REQUEST_SUCCESS,
        payload: authenticateGraph.data?.authGoogle,
      });
    } catch (error: any) {
      dispatch({
        type: AuthenticateActionTypes.AUTHENTICATE_REQUEST_ERROR,
        payload: error.message,
      });
    }
  };
