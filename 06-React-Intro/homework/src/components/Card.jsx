import React from 'react';

export default function Card({name, img, min, max, onClose}) {
  return <div>
  <button onClick ={onClose}> X </button>
  <h4>{name || 'Agregar Nombre de Ciudad'}</h4>
  
  <div id = 'min'>
    <p>Min°</p> 
    <h5>{min}</h5>
  </div>

  <div id="max">
    <p>Max°</p> 
    <h5>{max}</h5>
    </div>  
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Not Found"/>
  </div>
}