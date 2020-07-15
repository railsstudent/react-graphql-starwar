import React, { useState } from 'react';
import Hello from './Hello'

const App = () => {
  const [name] = useState('React');

  return (
    <div>
      <Hello name={name} />
      <p>
        Start editing to see some magic happen :)
      </p>
    </div>
  );
}

export default App;