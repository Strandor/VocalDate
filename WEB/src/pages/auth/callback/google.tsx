import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useRouter } from "next/router";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticate, StoreState } from "../../../store/";
import * as Components from "../../../components";

const GoogleCallback = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const code = useMemo(() => router.query["code"], [router]);

  useEffect(() => {
    if (code && typeof code === "string") dispatch(authenticate(code));
  }, [code]);

  const authState = useSelector((state: StoreState) => state.authenticate);

  useEffect(() => {
    if (authState.errors) router.push("/auth/authenticate");
  }, [authState.errors]);

  return (
    <Components.Wrappers.Authentication beLoggedIn={true}>
      <Components.Loaders.LoadingPage isLoading={authState.isLoading}>
        <div>
          <p>Token: {authState.data.token}</p>
        </div>
      </Components.Loaders.LoadingPage>
    </Components.Wrappers.Authentication>
  );
};

export default GoogleCallback;
