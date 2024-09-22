"use client";

import React from "react";
import { Download } from "lucide-react";
import { Button } from "./ui/button";
import { useFaviContext } from "./favi-provider";

const Nav = () => {
  const { canvasRef } = useFaviContext();

  const saveImageToLocal = () => {
    if (!canvasRef.current) {
      return;
    }

    const link = document.createElement("a");
    link.setAttribute("download", "icon.png");
    let image = canvasRef.current.toDataURL("image/png");
    link.setAttribute("href", image);
    link.click();
  };

  return (
    <header className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4">
      <h1 className="text-xl font-semibold inline-flex gap-2">
        <span>Favimaker</span>
        <span className="hidden sm:block font-light">-</span>
        <span className="hidden sm:block font-light">Make your Favicon</span>
      </h1>
      <Button variant="outline" size="sm" className="ml-auto gap-1.5 text-sm" onClick={saveImageToLocal}>
        <Download className="size-3.5" />
        Download
      </Button>
    </header>
  );
};

export default Nav;
