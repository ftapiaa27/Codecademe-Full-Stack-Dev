import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ( { list } ) => {
  return (
    <div>
      {list.map((contact, index) => {
        const {name: contactName, ...rest} = contact;
        return (
          <Tile 
            name={contactName}
            description={rest}
            key={index}
          />
        )
      })}
    </div>
  );
};
