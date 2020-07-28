import React from 'react';

const SearchForm = () => {
  return (
    <form className="form" onSubmit={() => console.log('submit clicked')}>
      <label htmlForm="query" className="query-input">
        <span className="query-text">Character:</span>
        <input id="query" placeholder="i.e. Luke Skywalker" />
      </label>
      <button type="submit" className="submit">Submit</button>
    </form>
  )
};

export default SearchForm;
