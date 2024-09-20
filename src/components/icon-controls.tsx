"use client";

import React, { useState } from "react";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import IconsDialog from "./icons-dialog";
import { LucideIcon } from "./lucide-icon";
import { useFaviContext } from "./favi-provider";
import { Input } from "./ui/input";
import { Slider } from "@/components/ui/slider"

const IconControls = () => {
  const { iconColor, setIconColor, selectedIcon, iconSize, setIconSize, iconRot, setIconRot } = useFaviContext();
  const [openIconDialog, setOpenIconDialog] = useState(false);

  const handleOpenIconDialog = () => {
    setOpenIconDialog(true);
  };
  
  return (
    <>
      <IconsDialog open={openIconDialog} setOpen={setOpenIconDialog} />
      <div className="grid gap-6 border p-4 rounded-xl">
        <div className="grid gap-3">
          <Label htmlFor="icon">Icon</Label>
          <Button id="icon" variant="outline" size="sm" className="w-full" onClick={handleOpenIconDialog}>
            <LucideIcon name={selectedIcon} size={16} />
            <span className="ml-2">{selectedIcon}</span>
          </Button>
        </div>
        <div className="grid gap-3">
          <Label htmlFor="bg-color">Icon Colour</Label>
          <Input
            type="color"
            id="bg-color"
            name="bg-color"
            value={iconColor}
            onChange={(e) => setIconColor(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="icon-size">Icon Size</Label>
          <Slider id="icon-size" value={[iconSize]} onValueChange={(value) => setIconSize(value[0])} max={600} min={1} step={1} />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="icon-rot">Icon Rotation</Label>
          <Slider id="icon-rot" value={[iconRot]} onValueChange={(value) => setIconRot(value[0])} max={360} min={0} step={1} />
        </div>
      </div>
    </>
  );
};

export default IconControls;
