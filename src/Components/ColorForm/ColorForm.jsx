import ColorInput from "../ColorInput/ColorInput";
import "./ColorForm.css";
import React, { useState } from "react";
import { nanoid } from "nanoid";

export default function ColorForm({ colors, onNewColors }) {
  const [role, setRole] = useState("");
  const [hex, setHex] = useState("#123456");
  const [contrastText, setContrastText] = useState("#ffffff");

  function handleRoleChange(event) {
    setRole(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (role && hex && contrastText) {
      const newColor = {
        id: nanoid(),
        role,
        hex,
        contrastText,
      };
      onNewColors(newColor);
      setRole("");
      setHex("#123456");
      setContrastText("#ffffff");
    }
  }

  return (
    <form className="color-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="role" className="color-form-label">
          Role
        </label>
        <input
          type="text"
          value={role}
          onChange={handleRoleChange}
          placeholder="some color"
        />
      </div>
      <ColorInput label="Hex" value={hex} onChange={setHex} />
      <ColorInput
        label="ContrastText"
        value={contrastText}
        onChange={setContrastText}
      />
      <div>
        <button type="submit">ADD COLOR</button>
      </div>
    </form>
  );
}
