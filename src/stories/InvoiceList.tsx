import React from 'react';

export interface Invoice {
  id: string;
  amount: string;
  dueDate: string;
  clientName: string;
}

interface InvoiceListProps {
  invoices: Invoice[];
}

export const InvoiceList: React.FC<InvoiceListProps> = ({ invoices }) => {
  return (
    <div>
      {invoices.map((invoice) => (
        <div key={invoice.id} className="Rectangle" style={{ width: 730, height: 72, background: 'white', boxShadow: '0px 10px 10px -10px rgba(71.55, 84.08, 159.25, 0.10)', borderRadius: 8 }}>
          <div className="invoice-amount" style={{ textAlign: 'right', color: '#0C0E16', fontSize: 15, fontFamily: 'League Spartan', fontWeight: '700', lineHeight: '24px', wordWrap: 'break-word' }}>
            £ {invoice.amount}
          </div>
          <div className="invoice-due-date" style={{ color: '#888EB0', fontSize: 13, fontFamily: 'League Spartan', fontWeight: '500', lineHeight: '15px', wordWrap: 'break-word' }}>
            Due <span style={{ color: '#7E88C3' }}>{invoice.dueDate}</span>
          </div>
          <div className="invoice-client-name" style={{ color: '#858BB2', fontSize: 13, fontFamily: 'League Spartan', fontWeight: '500', lineHeight: '15px', wordWrap: 'break-word' }}>
            {invoice.clientName}
          </div>
          <div className="invoice-status-indicator" style={{ width: 4, height: 8, border: '2px #7C5DFA solid' }}></div>
        </div>
      ))}
    </div>
  );
};
