import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { LoadingCircle } from "./index";

export default {
  title: "Loaders/LoadingCircle",
  component: LoadingCircle,
} as ComponentMeta<typeof LoadingCircle>;

export const Primary: ComponentStory<typeof LoadingCircle> = () => (
  <LoadingCircle />
);
