import React from 'react';
import './input.css'; // Make sure this path is correct and styles are appropriate for input

interface InputProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string; // This will be used as the input value
  labelId: string; // New property for associating label with input
  labelText: string; // Text to display in the label
  onClick?: () => void;
  'data-testid'?: string;
}

export const Input = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  labelId,
  labelText,
  "data-testid": testId,
  ...props
}: InputProps) => {
  const mode = primary ? 'storybook-input--primary' : 'storybook-input--secondary';

  return (
    <div>
            <label htmlFor={labelId}>{labelText}</label>
            <input
        type="text" // Specify the type of input, e.g., 'text', 'number', etc.
        value={label}
        className={['storybook-input', `storybook-input--${size}`, mode].join(' ')}
        style={{ backgroundColor }}
        data-testid={testId} // This should correctly apply the data-testid
        {...props}
      />
    </div>
     
    
  );
};
