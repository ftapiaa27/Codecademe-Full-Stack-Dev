import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ( { contacts } ) => {
  return (
    <div>
      {contacts.map((contact, index) => {
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
