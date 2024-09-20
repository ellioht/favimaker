"use client";

import React from "react";
import { Label } from "./ui/label";
import { useFaviContext } from "./favi-provider";
import { Input } from "./ui/input";
import { Slider } from "@/components/ui/slider";

const BackgroundControls = () => {
  const { bgColor, setBgColor, bgSize, setBgSize, bgRounded, setBgRounded, bgShadowSize, setBgShadowSize } = useFaviContext();

  return (
    <div className="grid gap-6 border p-4 rounded-xl">
      <div className="grid gap-3">
        <Label htmlFor="bg-color">Background Colour</Label>
        <Input
          type="color"
          id="bg-color"
          name="bg-color"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
          className="w-full"
        />
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
