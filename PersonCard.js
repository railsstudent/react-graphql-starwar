import React from 'react';

const PersonCard = (prop) => {
  const { person } = prop;
  return (
    <div className="person-container">
      <div className="name">
        { person.name } ({ person.gender })
      </div>
      <div className="details">
        <div>
          <span>Birth year: { person.birthYear }</span>
        </div>
        <div className="physical-measurement">
          <p className="title">Measurements</p>
          <span>Mass: { person.mass }</span>
          <span>Height: { person.height }</span>
        </div>
        <div className="physical-features">
          <p className="title">Facial features</p>
          <div className="eye-colors">
            <span>Eye color: </span>
            { person.eyeColor.map(color => <span className="eye-color" key={color}>{color}</span>)}
          </div>
          <div className="skin-colors">
            <span>Skin color: </span>
            { person.skinColor.map(color => <span className="skin-color" key={color}>{color}</span>)}
          </div>
          <div className="hair-colors">
            <span>Hair color: </span>
            { person.hairColor.map(color => <span className="hair-color" key={color}>{color}</span>)}
          </div>
        </div>
        <div className="home-world">
          <p className="title">Home world</p>
          <p className="name">{ person.homeworld.name}</p>
        </div>
        <div className="species">
          <p className="title">Species</p>
          <div>
              <span>Name: </span><span>{ person.species[0].name}</span>
              <span>Language: </span><span>{ person.species[0].language}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonCard;
