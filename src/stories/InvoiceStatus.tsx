import React from 'react';
import "./invoicestatus.css";

interface InvoiceStatusProps {
  status: string;
  color?: string;
  backgroundColor?: string;
  textColor: string;
}

export const InvoiceStatus: React.FC<InvoiceStatusProps> = ({ status, color, textColor, backgroundColor = "rgba(51, 214, 159, 0.0571)" }) => {
  return (
    <div className="invoice-status-container" style={{ backgroundColor }}>
      <svg width="8" height="8" viewBox="0 0 8 8" className='invoice-status-svg' fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4" r="4" fill={color || backgroundColor} />
      </svg>
      <p style={{ color: textColor }} className='invoice-status-text'>{status}</p>
    </div>
  );
};
