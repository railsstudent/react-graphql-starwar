import React from 'react';

const PersonCard = (prop) => {
  console.log(prop.person)
  const { person } = prop;

  return (
    <div className="person-container">
      <div className="name">
        { person.name } ({ person.gender })
      </div>
      <div className="details">
        <span>Birth year: { person.birthYear }</span>
      </div>
    </div>
  )
}

export default PersonCard;
