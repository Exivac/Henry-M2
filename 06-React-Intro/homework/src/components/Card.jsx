import React from 'react';

export default function Card(max, min, name, img, onClose) {
  return <div>Card Component
    <div>
      <button id ='Close'> X </button>
      <h4>{name || 'Nombre de Ciudad'}</h4>
      <div>

      </div>
      

    </div>
  </div>
};