import React, { useState } from 'react';
import SearchForm from './SearchForm';

const App = () => {
  const [name] = useState('React');
  const headerStyle = {
    textAlign: 'center'
  }

  return (
    <div class="container">
      <h2 style={headerStyle}>
        Search Star War Characters
      </h2>
      <SearchForm />
    </div>
  );
}

export default App;