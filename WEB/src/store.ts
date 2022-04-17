import { applyMiddleware, createStore, Store } from "redux";
import {
  nextReduxCookieMiddleware,
  wrapMakeStore,
} from "next-redux-cookie-wrapper";
import thunk from "redux-thunk";
import reducers, { StoreState, emit } from "./store/";
import { createWrapper } from "next-redux-wrapper";

const makeStore = wrapMakeStore(() =>
  createStore(
    reducers,
    applyMiddleware(
      ...[
        nextReduxCookieMiddleware({
          subtrees: [
            {
              subtree: "authenticate.data.token",
              compress: false,
            },
          ],
        }),
        thunk.withExtraArgument({ emit }),
      ]
    )
  )
);

export interface ExtraArgument {
  emit: typeof emit;
}

export const wrapper = createWrapper<Store<StoreState>>(makeStore, {
  debug: true,
});
