import React, { Component } from 'react';

export default class Ninjas extends Component {
  render() {
    const { ninjas } = this.props;
    const ninjaList = ninjas.map(ninja => {
      return (
        <div className="ninja" key={ninja.id}>
          <h2>Name: {ninja.name}</h2>
          <p>Belt: {ninja.belt}</p>
          <p>Age: {ninja.age}</p>
        </div>
      );
    });
    return <div>{ninjaList}</div>;
  }
}
