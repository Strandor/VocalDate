import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Components from "../../components";
import { wrapper } from "../../store";
import { fetchToken, StoreState } from "../../store/";

const CALLBACK_URI = "http://localhost:3000/auth/callback/";

const GOOGLE_SCOPE = "openid";
const GOOGLE_RESPONSE_TYPE = "code";
const GOOGLE_CLIENT_ID =
  "1090912464932-r15c28u1g17ahoefh0ciimrqdjjclieg.apps.googleusercontent.com";
const GOOGLE_CALLBACK_URI = CALLBACK_URI + "google/";

export const GOOGLE_AUTH_URL = `https://accounts.google.com/signin/oauth?scope=${GOOGLE_SCOPE}&response_type=${GOOGLE_RESPONSE_TYPE}&client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_CALLBACK_URI}`;

const Authenticate = () => {
  const router = useRouter();

  const authState = useSelector((store: StoreState) => store.authenticate);

  return (
    <Components.Wrappers.Authentication beLoggedIn={false}>
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h3>Login!</h3>
          <div className="flex flex-col gap-3">
            <Components.Buttons.LoginButton
              type="google"
              onClick={() => router.push(GOOGLE_AUTH_URL)}
            />
            <Components.Buttons.LoginButton type="facebook" />
          </div>
        </div>
      </div>
    </Components.Wrappers.Authentication>
  );
};

export default Authenticate;
