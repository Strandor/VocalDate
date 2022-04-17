import { appState } from "./types";

export const initialState: appState = {
  isLoading: false,
  data: {
    state: "waiting",
  },
  errors: undefined,
};
