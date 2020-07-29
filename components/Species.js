import React from 'react';

const Species = (prop) => {
  const { speciesName = undefined, language = undefined } = prop || {};
  return (
    <div className="species-container">
      <p className="title">Species</p>
      <div className="species">
        { speciesName && <span>{ speciesName }</span> }
        { language && <span>{ language}</span> }
      </div>
    </div>
  );
}

export default Species;
