import { FetchResult, gql } from "@apollo/client";
import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import { StoreState } from "../";
import client from "../../apollo-client";
import { ExtraArgument } from "../../store";
import { AppActionTypes } from "./types";

export const queue =
  (): ThunkAction<void, StoreState, ExtraArgument, AnyAction> =>
  async (dispatch, getState, { emit }) => {
    dispatch({
      type: AppActionTypes.QUEUE,
    });

    try {
      emit(AppActionTypes.QUEUE, {});
    } catch (error: any) {
      dispatch({
        type: AppActionTypes.QUEUE_FAILURE,
        payload: error.message,
      });
    }
  };
