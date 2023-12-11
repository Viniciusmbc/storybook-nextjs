import React, { useState } from 'react';
import './dropdown.css'; // Make sure to import the CSS

export interface DropdownProps {
    title: string;
    options: string[];
    initial?: number;
}

export const Dropdown: React.FC<DropdownProps> = ({ title, options, initial = -1 }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [selected, setSelected] = useState<number>(initial);

    const toggleDropdown = () => {
        setOpen(!open);
    };

    const handleClick = (i: number) => {
        setSelected(i);
    };

    const renderOptions = () => {
        return options.map((option, i) => (
            <li
                onClick={() => handleClick(i)}
                key={i}
                className={`dropdown__list-item ${i === selected ? 'dropdown__list-item--active' : ''}`}
            >
                {option}
            </li>
        ));
    };

    return (
        <>
            <span className="dropdown-label">Nome do Dropdown</span>
            <div className="dropdown">
                <div onClick={toggleDropdown} className="dropdown__toggle">
                    <span>{title}</span> {/* Title */}
                    <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5.2279 5.2279L9.4558 1" stroke="#7C5DFA" stroke-width="2" />
                    </svg>
                </div>
                <ul className={`dropdown__list ${open ? 'dropdown__list--active' : ''}`}>
                    {renderOptions()}
                </ul>
            </div>
        </>
    );
};
