import React from 'react';
import "./invoiceitem.css";
import { InvoiceStatus } from './InvoiceStatus';

export interface Invoice {
  id: string;
  amount: string;
  dueDate: string;
  clientName: string;
}

interface InvoiceItemProps {
  invoice: Invoice;
}

export const InvoiceItem: React.FC<InvoiceItemProps> = ({ invoice }) => {
  return (
    <div className={'invoiceItem'}>
    <div className={'invoiceId'}>
      {invoice.id}
    </div>
    <div className={'invoiceDueDate'}>
      Due <span>{invoice.dueDate}</span>
    </div>
    <div className={'invoiceClientName'}>
      {invoice.clientName}
    </div>
    <div className={'invoiceAmount'}>
      £ {invoice.amount}
    </div>
    <InvoiceStatus status={'Paid'} color={'#33D69F'} textColor={'#888EB0'} />
    <svg className={'arrowIcon'} width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L5 5L1 9" stroke="#7C5DFA" stroke-width="2"/>
    </svg>
  </div>
  );
};

