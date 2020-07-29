import React from 'react';

const FacialFeatures = (prop) => {
  const { eyeColor, skinColor, hairColor } = prop;

  return (
    <div className="facial-features">
      <p className="title">Facial features</p>
      <div className="colors">
        { eyeColor && <div className="color">
          <span>Eye color: </span>
          <span className="eye-color" key={eyeColor}>{eyeColor}</span>
        </div> }
        { skinColor && <div className="color">
          <span>Skin color: </span>
          <span className="skin-color" key={skinColor}>{skinColor}</span>
        </div> }
        { hairColor && <div className="color">
          <span>Hair color: </span>
          <span className="hair-color" key={hairColor}>{hairColor}</span>
        </div>}
      </div>
    </div>
  );
}

export default FacialFeatures;
