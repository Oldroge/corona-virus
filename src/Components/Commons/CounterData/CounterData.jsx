import React from 'react';
import PropTypes from 'prop-types';

import './CounterData.css';

export default function CounterData({ title, numbers }) {
  return (
    <div className="container-counter-data">
      <h4 className="title-datas">{title}</h4>
      <p className="title-datas">{numbers}</p>
    </div>
  );
}

CounterData.propTypes = ({
  title: PropTypes.string,
  numbers: PropTypes.number,
}).isRequired;
