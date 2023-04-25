import React, { useState } from 'react';
import './style.css';

interface DropdownProps {
  items: { id: number; label: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <img src='/side-bar/arrow-side.svg' className="dropdown-toggle" onClick={handleToggle} />
      {isOpen && (
        <div className="dropdown-menu">
          {items.map((item) => (
            <DropdownItem key={item.id} label={item.label} />
          ))}
        </div>
      )}
    </div>
  );
};

interface DropdownItemProps {
  label: string;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ label }) => {
  return <div className="dropdown-item">{label}</div>;
};

export default Dropdown;
