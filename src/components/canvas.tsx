"use client";

import React, { useEffect } from "react";
import { LucideIcon } from "./lucide-icon";
import { useFaviContext } from "./favi-provider";
import { renderToStaticMarkup } from "react-dom/server";

const Canvas = () => {
  const { bgColor, selectedIcon, iconColor, iconSize, canvasRef, iconRot, bgSize, bgRounded, bgShadowSize } =
    useFaviContext();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const svgString = renderToStaticMarkup(
        <LucideIcon
          name={selectedIcon}
          size={iconSize}
          color={iconColor}
          rotate={iconRot.toString()}
        />
      );

      const svgBG = renderToStaticMarkup(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ borderRadius: `${bgRounded}%` }}
        >
          <rect x="0" y="0" width="100%" height="100%" fill={bgColor} />
        </svg>
      );

      const iconBlob = new Blob([svgString], { type: "image/svg+xml" });
      const bgBlob = new Blob([svgBG], { type: "image/svg+xml" });
      const iconUrl = URL.createObjectURL(iconBlob);
      const bgUrl = URL.createObjectURL(bgBlob);
      const icon = new Image();
      const bg = new Image();

      bg.onload = () => {
        icon.onload = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
          ctx.shadowBlur = bgShadowSize;
          ctx.shadowOffsetX = bgShadowSize;
          ctx.shadowOffsetY = bgShadowSize;

          const bgWidth = canvas.width * (bgSize / 100);
          const bgHeight = canvas.height * (bgSize / 100);
          const bgX = (canvas.width - bgWidth) / 2;
          const bgY = (canvas.height - bgHeight) / 2;
          ctx.drawImage(bg, bgX, bgY, bgWidth, bgHeight);

          ctx.shadowColor = "transparent";
          ctx.shadowBlur = 0;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 0;

          const iconX = (canvas.width - icon.width) / 2;
          const iconY = (canvas.height - icon.height) / 2;
          ctx.drawImage(icon, iconX, iconY);

          URL.revokeObjectURL(iconUrl);
          URL.revokeObjectURL(bgUrl);
        };
        icon.src = iconUrl;
      };
      bg.src = bgUrl;
    }
  }, [bgColor, iconSize, iconColor, selectedIcon, iconRot, bgSize, bgRounded, bgShadowSize]);

  return <canvas ref={canvasRef} className="aspect-square w-full" width={600} height={600} />;
};

export default Canvas;
