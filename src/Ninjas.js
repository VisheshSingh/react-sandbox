import React from 'react';

const Ninjas = props => {
  const { ninjas } = props;
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
};

export default Ninjas;
