// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider (props) {
  const [color, setColor] = useState('red')
  const [cars, setCars] = useState({ red: false, blue: false, yellow: false })

  function moveCar(car, side) {
  setCars({...cars, [car]:side})
  };

  function changeSignal(signalColor) {
    setColor(signalColor)
  };

  
    const context = {
      color,
      cars,
      moveCar,
      changeSignal,
    };

    const { children } = props;

    return (
      <CarsContext.Provider value={context}>
        {children}
      </CarsContext.Provider>
    );
  };

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
