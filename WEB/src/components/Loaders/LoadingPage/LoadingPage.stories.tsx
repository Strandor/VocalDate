import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { LoadingPage } from "./index";

export default {
  title: "Loaders/LoadingPage",
  component: LoadingPage,
} as ComponentMeta<typeof LoadingPage>;

export const Loading: ComponentStory<typeof LoadingPage> = () => (
  <LoadingPage isLoading={true}>
    <p>Hello from the background</p>
  </LoadingPage>
);

export const NotLoading: ComponentStory<typeof LoadingPage> = () => (
  <LoadingPage isLoading={false}>
    <p>Hello from the background</p>
  </LoadingPage>
);
