import React from 'react';

const Ninjas = props => {
  const { ninjas, deleteNinja } = props;
  const ninjaList = ninjas.map(ninja => {
    return (
      <div className="ninja" key={ninja.id}>
        <h2>Name: {ninja.name}</h2>
        <p>Belt: {ninja.belt}</p>
        <p>Age: {ninja.age}</p>
        <button
          onClick={() => {
            deleteNinja(ninja.id);
          }}
        >
          X
        </button>
      </div>
    );
  });
  return <div>{ninjaList}</div>;
};

export default Ninjas;
