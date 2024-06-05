import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm";
import { useState } from "react";

function App() {
  const [colors, setColors] = useState(initialColors);

  function addNewColor(newColor) {
    setColors([newColor, ...colors]);
  }
  const deleteColor = (colorId) => {
    const updateColor = colors.filter((color) => color.id !== colorId);
    setColors(updateColor);
  };

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm colors={initialColors} onNewColors={addNewColor} />

      {colors.map((color) => {
        return <Color key={color.id} color={color} onDelete={deleteColor} />;
      })}
    </>
  );
}

export default App;
