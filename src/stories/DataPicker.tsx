import React, { useState, ChangeEvent, FC } from 'react';
import './datepicker.css';
import { format } from 'date-fns';

export const DatePicker: FC = () => {
    const [date, setDate] = useState<string>(
        new Date().toISOString().split('T')[0]
    );

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value);
    };

    // Convert the string date to a Date object before formatting
    const formattedDate = date ? format(new Date(date), 'dd/MMM/yyyy') : '';

    return (
        <div className="datepicker-container">
            <label htmlFor="date-picker" className="dropdown-label">
                Nome do Dropdown
            </label>
            <input
                id="date-picker"
                type="date"
                className="date-picker"
                value={date}
                onChange={handleChange}
                aria-labelledby="dropdown-label"
            />
        </div>
    );
};
