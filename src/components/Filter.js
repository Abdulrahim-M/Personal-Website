// components/ProjectFilter.jsx
'use client';

import { useState } from 'react';

export default function ProjectFilter({ onFilter, filters }) {
  const [active, setActive] = useState('All');

  const handleClick = (filter) => {
    setActive(filter);
    onFilter(filter);
  };

  return (
    <div className="filter-bar">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`filter-btn ${
            filter === active ? 'active' : ''
          }`}
          onClick={() => handleClick(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}