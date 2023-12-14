// InvoiceStatus.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { InvoiceStatus } from './InvoiceStatus';

const meta: Meta = {
  title: 'Design System/Atoms/InvoiceStatus',
  component: InvoiceStatus,
  parameters: {
    layout: 'centered',
  },
  // Define argTypes if needed for controls
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<typeof InvoiceStatus>;

export const Pending: Story = {
  args: {
    status: 'Pending',
    color: '#FFA500', // Orange color for pending status
    backgroundColor: 'rgba(51, 214, 159, 0.0571)',

  },
};

export const Draft: Story = {
  args: {
    status: 'Draft',
    color: '#BBBBBB', // Gray color for draft status
    textColor: '#373B53', // Black text color for draft status
  },
};

export const Paid: Story = {
  args: {
    status: 'Paid',
    color: '#33D69F', // Color of the circle
    backgroundColor: 'rgba(51, 214, 159, 0.0571)', // Semi-transparent background color
    textColor: "#33D69F",
  },
};