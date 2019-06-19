import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddForm from './AddForm';
class App extends Component {
  state = {
    ninjas: [
      { name: 'ryu', belt: 'black', age: 25, id: 1 },
      { name: 'yoshi', belt: 'green', age: 12, id: 2 },
      { name: 'mario', belt: 'red', age: 17, id: 3 }
    ]
  };

  addNinja = ninja => {
    ninja.id = Math.random();
    const newState = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: newState
    });
  };

  deleteNinja = id => {
    const ninjas = [...this.state.ninjas];
    const filteredNinjas = ninjas.filter(ninja => ninja.id !== id);
    this.setState({
      ninjas: filteredNinjas
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Welcome to React!</h1>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <AddForm addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
