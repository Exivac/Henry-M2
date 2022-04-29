import React, { useState, useEffect, useRef } from 'react';
import './Timer.css'

const Timer = () => {
  //--Vars---
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);
  const [tipo, setTipo] = useState('Contador');
  const reference = useRef(null)
  //--Funcs--
  
  useEffect(()=>{
    let count = null
    
    if (activo && tipo === 'Contador'){
      count = setInterval(() => {
        setSegundos(segundos => segundos + 1)
      }, 1000)
    }
    if (!activo && segundos !== 0 && tipo === 'Contador') {
      clearInterval(count)
    }
    if (segundos === 0 && tipo === 'CuentaRegresiva'){
      reset()
      clearInterval(count)
    }
    return () => clearInterval(count)
  }, [activo, tipo, segundos])
  
  
  const addSecs = () => { 
    let ref = reference.current.value
    setSegundos(ref)
   }

  const toggle = () => { setActivo(!activo) }
  const reset = () => {
    setSegundos(0)
    setActivo(false)
  }
  const swapType = () => { 
    if(tipo === 'Contador') setTipo('Cuenta Regresiva')
    if(tipo === 'Cuenta Regresiva') setTipo('Contador')
  }
  //---------
  return (
    <div className="app">
      <div className="time">
        {segundos}s
      </div>
      <div className="row">
        <button 
        className={`button button-primary button-primary-${activo ? 'active' : 'inactive'}`}
        onClick={toggle}
        >
          {activo ? 'Pausa' : 'Inicio'}
        </button>
        <button className="button"
        onClick={reset}>
          Reset
        </button>
      </div>
      <button className="button" onClick={swapType}>
          {tipo}
      </button>
      {tipo === 'Cuenta Regresiva' && <input type="number" ref={reference} onChange={addSecs} placeholder="Ingresa Segundos" autoComplete="off"/>}
    </div>
  );
};

export default Timer;