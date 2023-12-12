import "./invoicestatus.css";

interface InvoiceStatusProps {
  status: string
}

export const InvoiceStatus: React.FC<InvoiceStatusProps> = ({status}) => {
  return <div className="invoice-status-container">
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="4" cy="4" r="4" fill="#33D69F" />
    </svg>
    <p>{status}</p>
  </div>
}