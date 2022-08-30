import React from 'react';
import PropTypes from 'prop-types';

export default function CounterData({ title, numbers }) {
  return (
    <div>
      <h4>{title}</h4>
      <p>{numbers}</p>
    </div>
  );
}

CounterData.propTypes = ({
  title: PropTypes.string,
  numbers: PropTypes.number,
}).isRequired;
