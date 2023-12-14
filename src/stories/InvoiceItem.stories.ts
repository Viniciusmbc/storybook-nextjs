import { Meta } from "@storybook/react";
import { InvoiceItem } from "./InvoiceItem";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const meta = {
    title: 'Design System/Atoms/InvoiceItem',
    component: InvoiceItem,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
      layout: 'centered',
 
        viewport: {
          viewports: INITIAL_VIEWPORTS,
        },
      
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
   
  } satisfies Meta<typeof InvoiceItem>;
  
  export default meta;

export const Default = {
  args: {
    invoice: {
      id: '#RT3080',
      amount: '1000',
      dueDate: '19 Aug 2021',
      clientName: 'Jensen Huang',
    },
  },
};

export const Pinned = {
  args: {
    task: {
      ...Default.args.invoice,
      state: 'TASK_PINNED',
    },
  },
};

export const Archived = {
  args: {
    task: {
      ...Default.args.invoice,
      state: 'TASK_ARCHIVED',
    },
  },
};