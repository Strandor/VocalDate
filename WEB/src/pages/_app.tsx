import "tailwindcss/tailwind.css";

import { Provider, useDispatch, useSelector } from "react-redux";
import type { AppProps } from "next/app";

import { wrapper } from "../store";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import { getCookies, setCookies, removeCookies } from "cookies-next";
import { fetchToken, init, StoreState } from "../store/";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(
    (state: StoreState) => state.authenticate.data.isLoggedIn
  );

  useEffect(() => {
    if (!isLoggedIn) dispatch(fetchToken());

    init(dispatch);
  }, []);

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default wrapper.withRedux(MyApp);
