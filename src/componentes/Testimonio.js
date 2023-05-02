import React from 'react';
import '../hojasDeEstilo/Testimonio.css'

function Testimonio (props){
  return (
    <div className='contenedor-testimonio'>
      <img 
      className='imagen-tesatimonio'
     src={require(`../imagenes/raza-${props.imagen}.png`)}
     alt='Foto de Bulldog' />
    <div className='contenedor-texto-testimonio'>
      <p className='nombre-testimonio'><strong>{props.nombre}</strong></p>
      <p className='cargo-testimonio'>Origen en <strong>{props.pais}</strong></p>
      <p className='texto-testimonio'>"{props.descripcion}"</p>
    </div>
    </div>
  );
}

export default Testimonio; 