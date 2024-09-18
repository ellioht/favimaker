"use client";

import React, { useEffect, useState } from "react";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import IconsDialog from "./icons-dialog";
import { LucideIcon } from "./lucide-icon";

const IconPicker = () => {
  const [selectedIcon, setSelectedIcon] = useState<string>("Aperture");
  const [openIconDialog, setOpenIconDialog] = useState(false);

  const handleOpenIconDialog = () => {
    setOpenIconDialog(true);
  };
  
  return (
    <>
      <IconsDialog open={openIconDialog} setOpen={setOpenIconDialog} setSelectedIcon={setSelectedIcon} />
      <div className="grid gap-6 border p-4 rounded-xl">
        <div className="grid gap-3">
          <Label htmlFor="temperature">Icon</Label>
          <Button variant="outline" size="sm" className="w-full" onClick={handleOpenIconDialog}>
            <LucideIcon name={selectedIcon} size={16} />
            <span className="ml-2">{selectedIcon}</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default IconPicker;
