// InvoiceList.stories.tsx or InvoiceList.stories.jsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { InvoiceList } from './InvoiceList';

export default {
  title: 'Components/InvoiceList',
  component: InvoiceList,
} as Meta;

type Story = StoryObj<typeof InvoiceList>;

export const Basic: Story = {};
// You can add more stories for different states or variations
