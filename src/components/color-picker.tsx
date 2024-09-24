import React from "react";

interface ColorPickerProps {
  color: string;
  setColor: (color: string) => void;
  id?: string;
}

const ColorPicker = ({ color, setColor, id }: ColorPickerProps) => {
  return (
    <div className="w-full">
      <input
        type="color"
        id={id}
        name="bg-color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="hidden"
      />
      <label
        htmlFor={id}
        className="block w-full cursor-pointer border rounded-md"
        style={{ backgroundColor: color }}
      >
        <span className="block text-center text-muted">Pick a color</span>
      </label>
    </div>
  );
};

export default ColorPicker;
