import React from 'react';
import './spinner.scss';

const Spinner = () => {
  return (
    <div className="spinner">
      <div className="spinner__body">
        <span>Loading</span>
        <span className="spinner__dot"></span>
      </div>
    </div>
  )
}

export default Spinner;
