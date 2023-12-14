import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { DarkModeToggle } from './DarkModeTogle';
import { userEvent, within } from '@storybook/test';

const meta = {
    title: 'Design System/Atoms/DarkModeToggle',
    component: DarkModeToggle,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
      layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } satisfies Meta<typeof DarkModeToggle>;
  
  export default meta;

  type Story = StoryObj<typeof meta>;

  export const Primary: Story = {
    args: {
      primary: true,
      label: 'Button',
    },
  };

  export const ClickExample: Story = {
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      const button = canvas.getByRole('button');
      await userEvent.click(button);
    },
  };