export default function ColorInput({ label, value, onChange }) {
  const handleTextChange = (event) => {
    onChange(event.target.value);
  };

  const handleColorChange = (event) => {
    onChange(event.target.value);
  };
  return (
    <div>
      <label>{label}</label>
      <input type="text" value={value} onChange={handleTextChange}></input>
      <input type="color" value={value} onChange={handleColorChange}></input>
    </div>
  );
}
