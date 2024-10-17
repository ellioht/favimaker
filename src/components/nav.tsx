"use client";

import React from "react";
import { Download } from "lucide-react";
import { Button } from "./ui/button";
import { useFaviContext } from "./favi-provider";
import { usePathname } from "next/navigation";

const Nav = () => {
  const { canvasRef } = useFaviContext();
  const pathname = usePathname();

  const saveImageToLocal = () => {
    if (!canvasRef.current) {
      return;
    }

    const link = document.createElement("a");
    link.setAttribute("download", "icon.png");
    const image = canvasRef.current.toDataURL("image/png");
    link.setAttribute("href", image);
    link.click();
  };

  const downloadIco = async () => {
    // https://stackoverflow.com/questions/63558462/how-to-parse-image-to-ico-format-in-javascript-client-side
    if (!canvasRef.current) {
      return;
    }

    const canvas = canvasRef.current;

    const blobCallback = (iconName: string) => (blob: Blob | null) => {
      if (!blob) return;

      const a = document.createElement("a");
      a.textContent = "Download";
      a.download = `${iconName}.ico`;
      a.href = window.URL.createObjectURL(blob);
      a.style.display = "none";

      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(a.href);
    };

    canvas.toBlob(
      blobCallback("favicon"),
      "image/vnd.microsoft.icon",
      "-moz-parse-options:format=bmp;bpp=32"
    );
  };

  return (
    <header className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4">
      <h1 className="text-xl font-semibold inline-flex gap-2">
        <span>Favimaker</span>
        <span className="hidden sm:block font-light">-</span>
        <span className="hidden sm:block font-light">Make your Favicon</span>
      </h1>
      {pathname === "/" && (
        <div className="flex gap-2 ml-auto">
          <Button
            variant="outline"
            size="sm"
            className="ml-auto gap-1.5 text-sm"
            onClick={downloadIco}
          >
            <Download className="size-3.5" />
            <span className="hidden sm:block">Download </span>ICO
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="ml-auto gap-1.5 text-sm"
            onClick={saveImageToLocal}
          >
            <Download className="size-3.5" />
            <span className="hidden sm:block">Download </span>PNG
          </Button>
        </div>
      )}
    </header>
  );
};

export default Nav;
