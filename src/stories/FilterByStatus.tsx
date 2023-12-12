import React, { useState } from 'react';
import "./filterbystatus.css";

type StatusOption = 'draft' | 'pending' | 'paid';

interface FilterByStatusProps {
  onSelect: (status: StatusOption[]) => void;
}

export const FilterByStatus: React.FC<FilterByStatusProps> = ({ onSelect }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedStatuses, setSelectedStatuses] = useState<StatusOption[]>([]);

  const handleSelect = (status: StatusOption) => {
    const newStatuses = selectedStatuses.includes(status)
      ? selectedStatuses.filter(s => s !== status)
      : [...selectedStatuses, status];

    setSelectedStatuses(newStatuses);
    onSelect(newStatuses);
  }

  return (
    <div className="filterByStatus-container">
      <button className="filterButton" onClick={() => setShowDropdown(!showDropdown)}>
        Filter by status
        {!showDropdown ? (
          <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5.2279 5.2279L9.4558 1" stroke="#7C5DFA" strokeWidth="2"/>
          </svg>
        ) : (
          <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 6.22754L5.2279 1.99964L9.4558 6.22754" stroke="#7C5DFA" strokeWidth="2"/>
          </svg>
        )}
      </button>
      {showDropdown && (
        <div className="dropdown-menu">
          {(['draft', 'pending', 'paid'] as StatusOption[]).map(status => (
            <div key={status} className="checkbox-container">
             <input
              id={`status-${status}`}
              className="css-checkbox"
              type="checkbox"
              name="status"
              value={status}
              checked={selectedStatuses.includes(status)}
              onChange={() => handleSelect(status)}
            />
            <label htmlFor={`status-${status}`} className="label-checkbox">
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
