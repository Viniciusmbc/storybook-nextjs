import React from 'react';
import './navbar.css'; // or './Navbar.css' if not using CSS modules
import Image from 'next/image';

const Navbar: React.FC = () => {
    return (
        <div className='navbarContainer'>
            <LogoSection />
            <Image className='profileIcon' style={{ left: '319px', top: '20px' }} src="https://via.placeholder.com/32x32" alt="Profile Icon" />
            <div className='divider' style={{ left: '294px' }} />
            <div className='additionalElement' style={{ left: '250px', top: '26px' }} />
        </div>
    );
};

const LogoSection: React.FC = () => {
    return (
        <div className='logoSection' style={{ left: '0px', top: '0px' }}>
            <div className='logoBackground' />
            <div className='logoBackground' />
            <div style={{ left: '72px', top: '36.35px' }} />
            <Image style={{ left: '22px', top: '23px' }} src="https://via.placeholder.com/28x26" alt="Logo" />
        </div>
    );
};

export default Navbar;
