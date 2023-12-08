import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Input } from './Input';
import { userEvent, within } from '@storybook/test';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Design System/Atoms/Input',
    component: Input,
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
  } satisfies Meta<typeof Input>;
  
  export default meta;

  type Story = StoryObj<typeof meta>;
  
  export const FirstStory: Story = {
    args: {
      label: 'First Input',
      labelId: 'primary-input',
      labelText: 'Primary',
      'data-testid': 'first-input', // Set testId for the story
    },
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      await userEvent.type(canvas.getByTestId('first-input'), 'example-value');
    },
  };
  
  export const SecondStory: Story = {
    args: {
      label: 'Second Input',
      labelId: 'primary-input',
      labelText: 'Primary',
      'data-testid': 'second-input', // Set testId for the story
    },
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      await userEvent.type(canvas.getByTestId('second-input'), 'another value');
    },
  };
  
  