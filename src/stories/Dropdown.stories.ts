import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Dropdown } from "./Dropdown";

const meta = {
  title: "Design System/Atoms/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    options: { control: "array" },
    initial: { control: "number" },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof Dropdown>;

// Basic Story
export const Basic: Story = {
  args: {
    title: "Choose a color",
    options: ["Red", "Green", "Blue"],
  },
};

// Story with Initial Selection
export const WithInitialSelection: Story = {
  args: {
    title: "Choose a fruit",
    options: ["Apple", "Banana", "Orange"],
    initial: 1,
  },
};

// Disabled Story
export const Disabled: Story = {
  args: {
    title: "Select a size",
    options: ["Small", "Medium", "Large"],
  },
};

// Story with Click Action
export const WithClickAction: Story = {
  args: {
    title: "Pick a topping",
    options: ["Chocolate", "Strawberry", "Vanilla"],
  },
  play: async () => {
    action("option selected")();
  },
};

// Story with Long Options
export const WithLongOptions: Story = {
  args: {
    title: "Select a country",
    options: [
      "United States of America",
      "Canada",
      "United Kingdom",
      "France",
      "Germany",
    ],
  },
};
