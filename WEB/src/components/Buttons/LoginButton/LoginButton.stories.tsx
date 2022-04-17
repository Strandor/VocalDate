import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { LoginButton } from "./index";

export default {
  title: "LoginButton",
  component: LoginButton,
} as ComponentMeta<typeof LoginButton>;

export const Google: ComponentStory<typeof LoginButton> = () => (
  <LoginButton type="google" />
);

export const Facebook: ComponentStory<typeof LoginButton> = () => (
  <LoginButton type="facebook" />
);
