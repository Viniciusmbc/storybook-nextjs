import React from 'react';
import { InvoiceStatus } from './InvoiceStatus'; // Adjust the import path as needed
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof InvoiceStatus> = {
  title: 'Components/InvoiceStatus',
  component: InvoiceStatus,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    status: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof InvoiceStatus>;

// Story for Paid Status
export const Paid: Story = {
  args: {
    status: 'Paid',
  },
};

// Story for Pending Status
export const Pending: Story = {
  args: {
    status: 'Pending',
  },
};

// Story for Draft Status
export const Draft: Story = {
  args: {
    status: 'Draft',
  },
};

// Story for Overdue Status
export const Overdue: Story = {
  args: {
    status: 'Overdue',
  },
};

// Story for Cancelled Status
export const Cancelled: Story = {
  args: {
    status: 'Cancelled',
  },
};
