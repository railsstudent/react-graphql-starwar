import React, { useState } from 'react';

const SearchForm = () => {
  const [query, setQuery] = useState('');

  const searchCharacters = (e) => {
    e.preventDefault();
    console.log(query)
  }

  return (
    <form className="form" onSubmit={searchCharacters}>
      <label htmlForm="query" className="query-label">
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
  )
};

export default SearchForm;
