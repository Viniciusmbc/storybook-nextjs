import React from 'react';

import { Header } from './Header';
import './page.css';

type User = {
  name: string;
};

export const Page: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <article>
      <Header
        
        
      />

      <section className="storybook-page">
        <h2>Invoices</h2>
        <p>7 invoices</p>
        
      
      </section>
    </article>
  );
};
