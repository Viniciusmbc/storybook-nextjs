import React from "react";
import "./buttonWithPlus.css"; // Assuming styles are defined here

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
  size?: "small" | "medium" | "large";
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
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.3131 21.0229V17.3131H21.0229V14.7328H17.3131V11.0229H14.7328V14.7328H11.0229V17.3131H14.7328V21.0229H17.3131Z"
      fill="#7E88C3" // Change the fill color here
    />
  </svg>
);

export const NewItemButton = ({
  primary = false,
  size = "medium",
  backgroundColor,
  hoverBackgroundColor = '#DFE3FA',
  label,
  ...props
}: ButtonWithPlus) => {
  const mode = primary
    ? "storybook-button-with-plus--primary"
    : "storybook-button-with-plus--secondary";
  return (
    <button
      type="button"
      className={["storybook-button-with-plus", `storybook-button-with-plus--${size}`, mode].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      <span className="icon-wrapper">
        <PlusIcon />
      </span>
      <span className="storybook-button-text">{label}</span>

      <style jsx>{`
        .storybook-button-with-plus {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-left: 8px; // Padding on the left side of the button
        }
        .storybook-button-with-plus:hover {
          background-color: ${hoverBackgroundColor || backgroundColor};
        }
        .icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 16px;
          background-color: transparent;
        }
      `}</style>
    </button>
  );
};
