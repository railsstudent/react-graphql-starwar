import React from 'react';

const PersonCard = (prop) => {
  const { person } = prop;
  const { 
    eyeColor: eyeColors = [], 
    hairColor: hairColors = [], 
    skinColor: skinColors = [], 
    homeworld,
    species
  } = person || {}
  const eyeColor = eyeColors.length > 0 && eyeColors[0] || undefined
  const hairColor = hairColors.length > 0 && hairColors[0] || undefined
  const skinColor = skinColors.length > 0 && skinColors[0] || undefined

  console.log('homeworld', homeworld)
  const { name = '' } = homeworld || {};
  const [{ name: speciesName, language }] = species || [ { name: '', language: '' }];
  console.log('speciesName', speciesName, language);

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
          <div>
            <span>Mass: { person.mass || 'N/A' }</span>
            <span>Height: { person.height || 'N/A' }</span>
          </div>
        </div>
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
        { name && <div className="home-world">
          <p className="title">Home world</p>
          <p className="name">{ name}</p>
        </div>}
        { (!!speciesName || !!language) && <div className="species-container">
          <p className="title">Species</p>
          <div className="species">
            { speciesName && <span>{ speciesName }</span> }
            { language && <span>{ language}</span> }
          </div>
        </div> }
      </div>
    </div>
  )
}

export default PersonCard;
