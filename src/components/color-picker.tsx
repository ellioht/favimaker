import React from "react";

interface ColorPickerProps {
  color: string;
  setColor: (color: string) => void;
}

const ColorPicker = ({ color, setColor }: ColorPickerProps) => {
  return (
    <div className="w-full">
      <input
        type="color"
        id="bg-color"
        name="bg-color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="hidden"
      />
      <label
        htmlFor="bg-color"
        className="block w-full cursor-pointer border rounded-md"
        style={{ backgroundColor: color }}
      >
        <span className="block text-center text-muted">Pick a color</span>
      </label>
    </div>
  );
};

export default ColorPicker;
