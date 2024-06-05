import "./ColorInput.css";
export default function ColorInput({ label, value, onChange }) {
  const handleTextChange = (event) => {
    onChange(event.target.value);
  };

  const handleColorChange = (event) => {
    onChange(event.target.value);
    console.log(value);
  };
  return (
    <div>
      <label className="color-input-label">{label}</label>
      <input type="text" value={value} onChangeText={handleTextChange}></input>
      <input
        type="color"
        value={value}
        onChangeColor={handleColorChange}
      ></input>
    </div>
  );
}
