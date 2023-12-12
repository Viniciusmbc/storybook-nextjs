import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ButtonWithPlus } from "./ButtonWithPlus";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Design System/Atoms/ButtonWithPlus",
  component: ButtonWithPlus,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof ButtonWithPlus>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "New Invoice",
    hoverBackgroundColor: "#9277FF", // Example hover color
  },
};

export const Secondary: Story = {
  args: {
    label: "New Invoice",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "New Invoice",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "New",
  },
};

export const Warning: Story = {
  args: {
    primary: true,
    label: "Delete now",
    backgroundColor: "red",
  },
};
