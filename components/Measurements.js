import React from 'react';

const Measurements = (prop) => {
  const { mass = 'N/A', height = 'N/A' } = prop || {};
  return (
    <div className="physical-measurement">
      <p className="title">Measurements</p>
      <div>
        <span>Mass: { mass }</span>
        <span>Height: { height }</span>
      </div>
    </div>
  );
}

export default Measurements;
