import React from 'react';
import Ninjas from './Ninjas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome to React!
        <Ninjas name="Ryu" belt="Black" age="25" />
        <Ninjas name="Yoshi" belt="green" age="16" />
      </header>
    </div>
  );
}

export default App;
