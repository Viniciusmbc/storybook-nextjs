import React from 'react';
import { action } from '@storybook/addon-actions';
import { FilterByStatus } from './FilterByStatus'; // Adjust the import path as needed
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';

const meta: Meta<typeof FilterByStatus> = {
  title: 'Components/FilterByStatus',
  component: FilterByStatus,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onSelect: { action: 'selectedStatus' },
  },
};

export default meta;

type Story = StoryObj<typeof FilterByStatus>;

// Default story with 'draft' selected
export const Default: Story = {
  args: {
    onSelect: action('selectedStatus'),
  },
};

// Story with 'pending' selected
export const PendingSelected: Story = {
  args: {
    onSelect: action('selectedStatus'),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText('Filter by status'));
    await userEvent.click(canvas.getByText('Pending'));
  },
};

// Story with 'paid' selected
export const PaidSelected: Story = {
  args: {
    onSelect: action('selectedStatus'),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText('Filter by status'));
    await userEvent.click(canvas.getByText('Paid'));
  },
};
