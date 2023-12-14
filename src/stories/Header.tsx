import React from 'react';
import './header.css';
import Image from 'next/image';

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogout: () => void;
  onCreateAccount: () => void;
  backgroundColor?: string; // Nova prop para cor de fundo
  size?: 'small' | 'medium' | 'large'; // Nova prop para tamanho
  mode?: 'sidebar' | 'navbar'; // Nova prop para modo de visualização
}

export const Header = () => (
  
  <header>
    <nav className="storybook-header">

      <svg className='logo-svg'  viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H52C63.0457 0 72 8.95431 72 20V52C72 63.0457 63.0457 72 52 72H0V0Z" fill="#7C5DFA" />
        <mask id="mask0_0_1479" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="72" height="72">
          <path d="M0 0H52C63.0457 0 72 8.95431 72 20V52C72 63.0457 63.0457 72 52 72H0V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_0_1479)">
          <path d="M72 36.3496H20C8.95431 36.3496 0 45.3039 0 56.3496V88.3496C0 99.3953 8.95431 108.35 20 108.35H72V36.3496Z" fill="#9277FF" />
        </g>
        <path fillRule="evenodd" clipRule="evenodd" d="M29.486 23.0003L36 35.8995L42.514 23.0003C46.9652 25.3092 50 29.9105 50 35.21C50 42.8261 43.732 49.0002 36 49.0002C28.268 49.0002 22 42.8261 22 35.21C22 29.9105 25.0348 25.3092 29.486 23.0003Z" fill="white" />
      </svg>




      <div className=' left-buttons'>
        <button className="mode-toggle-button">
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.81724 0.900391C3.1055 0.900391 0.899414 3.10691 0.899414 5.81865C0.899414 8.53039 3.1055 10.7369 5.81724 10.7369C8.52854 10.7369 10.7351 8.53083 10.7351 5.81865C10.7351 3.10648 8.52854 0.900391 5.81724 0.900391Z" fill="#858BB2" />
          </svg>
        </button>


        {/* Avatar Button */}
        <button className="avatar-button">
          <Image src="https://res.cloudinary.com/deaejawfj/image/upload/v1668457927/tribos-ux/imagemPerfilGroups_niyvl7.png" alt="Profile Icon" width={32} height={32} />
        </button>

      </div>

    </nav>
  </header>
);

