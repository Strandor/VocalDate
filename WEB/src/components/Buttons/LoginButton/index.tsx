import { useMemo } from "react";
import { IProps } from "./interface";
import {
  FACEBOOK_LOGO,
  FACEBOOK_NAME,
  GOOGLE_LOGO,
  GOOGLE_NAME,
} from "./utils";

export const LoginButton = ({ type, onClick }: IProps) => {
  const imageSrc = useMemo(() => {
    switch (type) {
      case "google":
        return GOOGLE_LOGO;
      case "facebook":
        return FACEBOOK_LOGO;
    }
  }, [type]);

  const loginName = useMemo(() => {
    switch (type) {
      case "google":
        return GOOGLE_NAME;
      case "facebook":
        return FACEBOOK_NAME;
    }
  }, [type]);

  return (
    <div className="flex cursor-pointer px-5 rounded border" onClick={onClick}>
      <img src={imageSrc} />
      <div className="flex-1 text-center self-center">
        <div>Login with {loginName}</div>
      </div>
    </div>
  );
};
