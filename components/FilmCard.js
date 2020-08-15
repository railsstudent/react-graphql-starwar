import React from 'react';

const ListItem = ({ film: { title, director } }) => {
  return (
    <li className='film-item' style={{listStyleType: 'none'}}>
        <span style={{display: 'block'}}>{title}</span>
        <span style={{display: 'block'}}>{director}</span>
    </li>
  )
}

const FilmCard = ({films}) => {
  return (
    <div>
      <p>Films</p>
      <ul style={{marginLeft: '-1rem' }}>
        { 
          (films || []).map(
            film => <ListItem key={film.episodeId} film={film} />
          ) 
        }
      </ul>
    </div>
  );
}

export default FilmCard;
