import React from 'react';

const FilmCard = ({films}) => {
  const styleListItem = {
    listStyleDisc: 'none'
  };

  return (
    <div>
      <p>Films</p>
      <ul>
        { (films || []).map(film => <li stlye={styleListItem}>{ film.title }</li>) }
      </ul>
    </div>
  );
}

export default FilmCard;
