"use client";

import React, { useState } from "react";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import IconsDialog from "./icons-dialog";
import { LucideIcon } from "./lucide-icon";
import { useFaviContext } from "./favi-provider";
import { Slider } from "@/components/ui/slider";
import ColorPicker from "./color-picker";
import { X } from "lucide-react";

const IconControls = () => {
  const { iconColor, setIconColor, selectedIcon, setSelectedIcon, iconSize, setIconSize, iconRot, setIconRot } =
    useFaviContext();
  const [openIconDialog, setOpenIconDialog] = useState(false);

  const handleOpenIconDialog = () => {
    setOpenIconDialog(true);
  };

  const handleRemoveIcon = () => {
    setSelectedIcon(null);
  };

  return (
    <>
      <IconsDialog open={openIconDialog} setOpen={setOpenIconDialog} />
      <div className="grid gap-6 border p-4 rounded-xl">
        <div className="grid gap-3">
          <div className="w-full flex items-center justify-start gap-2">
            <Label htmlFor="icon">Icon</Label>
            {selectedIcon && (
              <button className="bg-muted rounded-sm" onClick={handleRemoveIcon}>
                <X size={16} className="text-muted-foreground" />
              </button>
            )}
          </div>
          <Button
            id="icon"
            variant="outline"
            size="sm"
            className="w-full"
            onClick={handleOpenIconDialog}
          >
            <LucideIcon name={selectedIcon} size={16} />
            <span className="ml-2">{selectedIcon}</span>
          </Button>
        </div>
        <div className="grid gap-3">
          <Label htmlFor="icon-color">Icon Color</Label>
          <ColorPicker id="icon-color" color={iconColor} setColor={setIconColor} />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="icon-size">Icon Size</Label>
          <Slider
            id="icon-size"
            value={[iconSize]}
            onValueChange={(value) => setIconSize(value[0])}
            max={600}
            min={1}
            step={1}
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="icon-rot">Icon Rotation</Label>
          <Slider
            id="icon-rot"
            value={[iconRot]}
            onValueChange={(value) => setIconRot(value[0])}
            max={360}
            min={0}
            step={1}
          />
        </div>
      </div>
    </>
  );
};

export default IconControls;
