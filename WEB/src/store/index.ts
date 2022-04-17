import { combineReducers } from "redux";
import { authenticateReducer } from "./authenticate";
import { appReducer } from "./app";

const reducers = combineReducers({
  authenticate: authenticateReducer,
  app: appReducer,
});

export default reducers;
export type StoreState = ReturnType<typeof reducers>;
export * from "./authenticate";
export * from "./app";
export * from "./websockets";
