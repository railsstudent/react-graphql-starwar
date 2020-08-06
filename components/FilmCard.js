import React from 'react';

const FilmCard = ({films}) => {
  return (
    <div>
      <p>Films</p>
      <ul style={{marginLeft: '-1rem' }}>
        { (films || []).map(
          film => <li key={film.episodeId} className='file-item' style={{listStyleType: 'none'}}>{ film.title }</li>) 
        }
      </ul>
    </div>
  );
}

export default FilmCard;
