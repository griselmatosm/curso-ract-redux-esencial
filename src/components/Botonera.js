import React from 'react';
import '../styles/Botonera.css';
import * as ColorAppActions from '../actions/ColorAppActions';

function Botonera() {
  const buttonClick = (color) => {
    ColorAppActions.changeColor(color);
  }

  return (
    <div className="Botonera">
        <button onClick={event => buttonClick('#ff0000')}>Rojo</button>
        <button onClick={event => buttonClick('#00ff00')}>Verde</button>
    </div>
  );
}

export default Botonera;
