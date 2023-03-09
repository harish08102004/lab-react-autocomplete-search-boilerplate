import React, { useEffect, useState } from 'react';
import data from './countryData';

function AutoComplete() {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setQuery('');
    }
  };
      
  useEffect(() => {
    if (!query) {
      setFilteredData([]);
      return;
    }

    const results = data.filter((item) =>
      item.name.toLowerCase().startsWith(query.toLowerCase())
    );
    
    setFilteredData(results);
  }, [query]);
              
  return (
    <div>
      <input type="text" value={query} onChange={handleInputChange} onKeyDown = {handleKeyDown} />
      <p>
        {filteredData.map((item) => (
          <p key={item.code}>{item.name}</p>
        ))}
      </p>
    </div>  
  );
}

export default AutoComplete;
