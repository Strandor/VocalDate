import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { StoreState } from "../../../store/";
import { IProps } from "./interface";

export const Authentication = ({ beLoggedIn, children }: IProps) => {
  const router = useRouter();
  const authentication = useSelector((state: StoreState) => state.authenticate);

  return children;
};
