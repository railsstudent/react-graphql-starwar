import React from 'react';
import FacialFeatures from './components/FacialFeatures';
import Measurements from './components/Measurements';

const PersonCard = (prop) => {
  const { person } = prop;
  const {
    id, 
    eyeColor: eyeColors = [], 
    hairColor: hairColors = [], 
    skinColor: skinColors = [], 
    homeworld,
    species
  } = person || {}
  const eyeColor = eyeColors.length > 0 && eyeColors[0] || undefined
  const hairColor = hairColors.length > 0 && hairColors[0] || undefined
  const skinColor = skinColors.length > 0 && skinColors[0] || undefined

  const { name = '' } = homeworld || {};
  const [{ name: speciesName, language }] = species || [ { name: '', language: '' }];

  return (
    <div className="person-card">
      <div className="name">
        { person.name } ({ person.gender })
      </div>
      <div className="details">
        <div>
          <span>Birth year: { person.birthYear }</span>
        </div>
        <Measurements key={id} mass={person.mass} height={person.height} />
        <FacialFeatures key={id} eyeColor={eyeColor} skinColor={skinColor} hairColor={hairColor} />
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
