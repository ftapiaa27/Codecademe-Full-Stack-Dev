import React from "react";

export const Tile = ( { name, description } ) => {
  const details = Object.values(description);
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {details.map((element, index) => <p className="tile" key={index}>{element}</p>)}
    </div>
  );
};
