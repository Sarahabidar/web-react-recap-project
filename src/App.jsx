import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [colors, setColors] = useLocalStorageState("colors", {
    defaultValue: initialColors,
  });

  function addNewColor(newColor) {
    setColors([newColor, ...colors]);
  }
  const deleteColor = (colorId) => {
    const updateColors = colors.filter((color) => color.id !== colorId);
    setColors(updateColors);
  };
  const editColor = (editedColor) => {
    const editedColors = colors.map((color) =>
      color.id === editedColor.id ? editedColor : color
    );
    setColors(editedColors);
  };

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onNewColors={addNewColor} />

      {colors.map((color) => {
        return (
          <Color
            key={color.id}
            color={color}
            onDelete={deleteColor}
            onEdit={editColor}
          />
        );
      })}
    </>
  );
}

export default App;
