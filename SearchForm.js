import React, { useState } from 'react';
import { GET_STARWAR_PERSONS } from './graphql/get-starwar-persons';
import { useLazyQuery } from '@apollo/client';
import PersonCard from './PersonCard';

const SearchForm = () => {
  const [query, setQuery] = useState('');
  const [getPersons, { loading, data }]  = useLazyQuery(GET_STARWAR_PERSONS, { 
    variables: { 
      name: query, 
      first: 8 
    }
  });

  if (loading) {
    return (<h1>Loading...</h1>)
  }

  if (data && data.persons) {
    console.log('persons', data.persons)
  }

  const searchCharacters = (e) => {
    e.preventDefault();
    console.log(query);

    getPersons({ variables: {
        name: query,
        first: 5
      } 
    })
  }

  return (
    <>
      <form className="form" onSubmit={searchCharacters}>
        <label htmlFor="query" className="query-label">
          <span className="query-text">Character:</span>
          <input 
            id="query" 
            type="input"
            className="query-input"
            placeholder="i.e. Luke Skywalker"
            value={query}
            onChange={ e => setQuery(e.target.value) }
          />
        </label>
        <button type="submit" className="submit">Submit</button>
      </form>
      <div className="persons-container">
      { data && data.persons && data.persons.map((person, i) => <PersonCard key={`${person.id}-${i}`} person={person} />) }
      </div>
    </>
  )
};

export default SearchForm;
