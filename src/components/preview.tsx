"use client";

import React, { useEffect, useRef } from "react";
import { Badge } from "./ui/badge";
import { LucideIcon } from "./lucide-icon";
import { useFaviContext } from "./favi-provider";
import { renderToStaticMarkup } from "react-dom/server";

const Preview = () => {
  const { bgColor, selectedIcon, iconColor, iconSize, canvasRef, iconRot } = useFaviContext();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      const svgString = renderToStaticMarkup(
        <LucideIcon name={selectedIcon} size={iconSize} color={iconColor} rotate={iconRot.toString()} />
      );

      const svgBlob = new Blob([svgString], { type: "image/svg+xml" });
      const url = URL.createObjectURL(svgBlob);
      const icon = new Image();

      icon.onload = () => {
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          ctx.fillStyle = bgColor;
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          const x = (canvas.width - icon.width) / 2;
          const y = (canvas.height - icon.height) / 2;

          ctx.drawImage(icon, x, y);
        }

        URL.revokeObjectURL(url);
      };

      icon.src = url;
    }
  }, [bgColor, iconSize, iconColor, selectedIcon, iconRot]);

  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center rounded-xl bg-muted p-6">
      <Badge variant="outline" className="absolute right-3 top-3">
        Preview
      </Badge>

      <div className="max-w-full flex-grow aspect-square flex items-center justify-center">
        <canvas ref={canvasRef} className="aspect-square w-full" width={600} height={600}></canvas>
      </div>
    </div>
  );
};

export default Preview;
