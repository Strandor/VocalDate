import { getCookie } from "cookies-next";
import { authenticateState } from "./types";

export const initialState: authenticateState = {
  isLoading: false,
  data: {
    isLoggedIn: false,
    token: undefined,
  },
  errors: undefined,
};
