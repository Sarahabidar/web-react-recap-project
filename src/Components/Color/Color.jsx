import React, { useState, useEffect } from "react";
import "./Color.css";
import ColorForm from "../ColorForm/ColorForm";
import CopyToClipboard from "../CopyToClipboard/CopyToClipboard";
import ContrastChecker from "../ContrastChecker/ContrastChecker";

export default function Color({ color, onDelete, onEdit }) {
  const [showConfirmation, setshowConfirmation] = useState(false);
  const [editAllow, setEditAllow] = useState(false);

  const handleDelete = () => {
    setshowConfirmation(!showConfirmation);
  };

  const cancelDelete = () => {
    setshowConfirmation(false);
  };
  const confirmDelete = () => {
    onDelete(color.id);
  };
  const handleEditToggle = () => {
    setEditAllow(!editAllow);
  };

  const handleEdit = (editedColor) => {
    onEdit(editedColor);
    setEditAllow(false);
  };

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <div className="color-card-hex-copy">
        <h3 className="color-card-headline">{color.hex}</h3>
        <CopyToClipboard hexCode={color.hex} />
      </div>
      <ContrastChecker color={color} />
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      <button onClick={handleDelete}>DELETE</button>
      <button onClick={handleEditToggle}>EDIT</button>

      {showConfirmation ? (
        <div>
          <p className="color-card-hightlight">Really delete?</p>
          <button onClick={cancelDelete}>CANCEL</button>
          <button onClick={confirmDelete}>DELETE</button>
        </div>
      ) : null}
      {editAllow ? (
        <ColorForm initialColor={color} onNewColors={handleEdit} />
      ) : null}
    </div>
  );
}
