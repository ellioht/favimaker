"use client";

import React from "react";
import { Label } from "./ui/label";
import { useFaviContext } from "./favi-provider";
import { Slider } from "@/components/ui/slider";
import ColorPicker from "./color-picker";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TextControls = () => {
  const {
    textValue,
    setTextValue,
    textColor,
    setTextColor,
    textSize,
    setTextSize,
    textRot,
    setTextRot,
    setTextFont,
    textStrokeWidth,
    setTextStrokeWidth,
    textStrokeColor,
    setTextStrokeColor,
  } = useFaviContext();

  return (
    <div className="grid gap-6 border p-4 rounded-xl">
      <div className="grid gap-3">
        <Label htmlFor="icon">Text</Label>
        <Input id="icon" value={textValue} onChange={(e) => setTextValue(e.target.value)} />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="font">Font</Label>
        <div id="font" className="w-full truncate">
          <Select onValueChange={(v) => setTextFont(v)}>
            <SelectTrigger>
              <SelectValue placeholder="Choose Font" className="truncate" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fonts</SelectLabel>
                <SelectItem value="Arial">Arial</SelectItem>
                <SelectItem value="Helvetica">Helvetica</SelectItem>
                <SelectItem value="Times New Roman">Times New Roman</SelectItem>
                <SelectItem value="Courier New">Courier New</SelectItem>
                <SelectItem value="Verdana">Verdana</SelectItem>
                <SelectItem value="Georgia">Georgia</SelectItem>
                <SelectItem value="Palatino">Palatino</SelectItem>
                <SelectItem value="Garamond">Garamond</SelectItem>
                <SelectItem value="Bookman">Bookman</SelectItem>
                <SelectItem value="Comic Sans MS">Comic Sans MS</SelectItem>
                <SelectItem value="Trebuchet MS">Trebuchet MS</SelectItem>
                <SelectItem value="Arial Black">Arial Black</SelectItem>
                <SelectItem value="Impact">Impact</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid gap-3">
        <Label htmlFor="text-color">Text Color</Label>
        <ColorPicker id="text-color" color={textColor} setColor={setTextColor} />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="text-size">Text Size</Label>
        <Slider
          id="text-size"
          value={[textSize]}
          onValueChange={(value) => setTextSize(value[0])}
          max={600}
          min={1}
          step={1}
        />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="text-rot">Text Rotation</Label>
        <Slider
          id="text-rot"
          value={[textRot]}
          onValueChange={(value) => setTextRot(value[0])}
          max={360}
          min={0}
          step={1}
        />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="text-stroke">Stroke</Label>
        <Slider
          id="text-stroke"
          value={[textStrokeWidth]}
          onValueChange={(value) => setTextStrokeWidth(value[0])}
          max={100}
          min={1}
          step={1}
        />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="text-stroke-color">Stroke Color</Label>
        <ColorPicker id="text-stroke-color" color={textStrokeColor} setColor={setTextStrokeColor} />
      </div>
    </div>
  );
};

export default TextControls;
