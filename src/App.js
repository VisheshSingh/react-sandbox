import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    ninjas: [
      { name: 'ryu', belt: 'black', age: 25, id: 1 },
      { name: 'yoshi', belt: 'green', age: 12, id: 2 },
      { name: 'mario', belt: 'red', age: 17, id: 3 }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>Welcome to React!</h1>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
