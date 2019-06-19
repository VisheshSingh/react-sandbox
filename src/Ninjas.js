import React, { Component } from 'react';

export default class Ninjas extends Component {
  render() {
    console.log(
      '%c Ninja props: ',
      'background: green; color: white',
      this.props
    );
    const { name, belt, age } = this.props;
    return (
      <div className="ninja">
        <h2>Name: {name}</h2>
        <p>Belt: {belt}</p>
        <p>Age: {age}</p>
      </div>
    );
  }
}
