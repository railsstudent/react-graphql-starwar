import React from 'react';

const SearchForm = () => {
  return (
    <form class="form" onSubmit={() => console.log('submit clicked')}>
      <label htmlFor="query" class="query-input">
        Search:
        <input id="query" />
      </label>
      <button type="submit" class="submit">Submit</button>
    </form>
  )
};

export default SearchForm;
