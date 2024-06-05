import React, { useState } from "react";
import "./Color.css";

export default function Color({ color, onDelete }) {
  const [showConfirmation, setshowConfirmation] = useState(false);

  const handleDelete = () => {
    setshowConfirmation(true);
  };

  const cancelDelete = () => {
    setshowConfirmation(false);
  };
  const confirmDelete = () => {
    onDelete(color.id);
  };

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastsText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      <button onClick={handleDelete}>DELETE</button>
      {showConfirmation ? (
        <div>
          <p className="color-card-hightlight">Really delete?</p>
          <button onClick={cancelDelete}>CANCEL</button>
          <button onClick={confirmDelete}>DELETE</button>
        </div>
      ) : null}
    </div>
  );
}
