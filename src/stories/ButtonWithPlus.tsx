import React from 'react';
import './buttonWithPlus.css'; // Assuming styles are defined here


interface ButtonWithPlus {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const PlusIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="white" />
    <path d="M17.3131 21.0229V17.3131H21.0229V14.7328H17.3131V11.0229H14.7328V14.7328H11.0229V17.3131H14.7328V21.0229H17.3131Z" fill="#7C5DFA" />
  </svg>
);

export const ButtonWithPlus = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  hoverBackgroundColor,
  label,
  ...props
}: ButtonWithPlus) => {
  const mode = primary ? 'storybook-button-with-plus--primary' : 'storybook-button-with-plus--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      <span className="icon-wrapper bg-red-500">
        <PlusIcon />
      </span>
      {label}

      <style jsx>{`
        button {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-left: 8px;
          padign-right: 1rem; // Padding on the left side of the button
        }
        button:hover {
          background-color: ${hoverBackgroundColor || backgroundColor};
        }
        .icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 16px; // Space between the icon and the label
        }
      `}</style>
    </button>
  );
};
