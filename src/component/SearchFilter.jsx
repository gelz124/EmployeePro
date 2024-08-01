import React, { useState } from 'react';

const SearchFilter = ({ setFilteredCitizens, citizens }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = citizens.filter(citizen => 
      citizen.name.toLowerCase().includes(term) ||
      citizen.address.toLowerCase().includes(term) ||
      citizen.status.toLowerCase().includes(term)
    );
    
    setFilteredCitizens(filtered);
  };

  return (
    <div className="search-filter">
      <input 
        type="text" 
        value={searchTerm} 
        onChange={handleSearch} 
        placeholder="Search by name, address, or status"
      />
    </div>
  );
};

export default SearchFilter;
