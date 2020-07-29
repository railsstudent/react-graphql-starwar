import React from 'react';

const Homeworld = (prop) => {
  const { name } = prop;
  return (
    <div className="home-world">
      <p className="title">Home world</p>
      <p className="name">{ name }</p>
    </div>
  );
}

export default Homeworld;
