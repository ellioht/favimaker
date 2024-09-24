"use client";

import React from "react";
import { Label } from "./ui/label";
import { useFaviContext } from "./favi-provider";
import { Slider } from "@/components/ui/slider";
import ColorPicker from "./color-picker";

const BackgroundControls = () => {
  const {
    bgColor,
    setBgColor,
    bgSize,
    setBgSize,
    bgRounded,
    setBgRounded,
    bgShadowSize,
    setBgShadowSize,
  } = useFaviContext();

  return (
    <div className="grid gap-6 border p-4 rounded-xl">
      <div className="grid gap-3">
        <Label htmlFor="bg-color">Background Color</Label>
        <ColorPicker id="bg-color" color={bgColor} setColor={setBgColor} />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="icon-size">Background Size</Label>
        <Slider
          id="icon-size"
          value={[bgSize]}
          onValueChange={(value) => setBgSize(value[0])}
          max={100}
          min={0}
          step={1}
        />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="icon-size">Background Roundness</Label>
        <Slider
          id="icon-size"
          value={[bgRounded]}
          onValueChange={(value) => setBgRounded(value[0])}
          max={100}
          min={0}
          step={1}
        />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="icon-size">Background Shadow</Label>
        <Slider
          id="icon-size"
          value={[bgShadowSize]}
          onValueChange={(value) => setBgShadowSize(value[0])}
          max={100}
          min={0}
          step={1}
        />
      </div>
    </div>
  );
};

export default BackgroundControls;
