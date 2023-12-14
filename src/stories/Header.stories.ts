import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const meta = {
  title: 'Example/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SidebarMode: StoryObj<typeof meta> = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
      viewports: {
        responsive: {
          name: 'Responsive',
          styles: {
            width: '1024px', // Largura para sidebar
            height: '768px',
          },
        },
      },
    },
  },
};

export const NavbarMode: StoryObj<typeof meta> = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
  parameters: {
    viewport: {
      defaultViewport: 'iphone6', // Representa tela menor que 767px
    },
  },
};



export const LoggedOut: Story = {};
