import React, { useState } from "react";
import { generateId, getNewExpirationTime } from "./utilities.js";

export function AddThoughtForm(props) {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!text) { return; }
    const thought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime(),
    };
    props.addThought(thought);
    setText('');
  };
  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={handleTextChange}
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
      />
      <input type="submit" value="Add" />
    </form>
  );
}
