import React from 'react';

export default function SearchBar({onSearch}) {
  // acá va tu código
  return <div>
    <input id = 'search' type="text" placeholder='Ciudad...'/>
    <button id='search-btn' onClick={onSearch}> &gt; Agregar</button>
    </div>
};

