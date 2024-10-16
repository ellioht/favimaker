"use client";

import React, { useEffect } from "react";
import { LucideIcon } from "./lucide-icon";
import { useFaviContext } from "./favi-provider";
import { renderToStaticMarkup } from "react-dom/server";

const Canvas = () => {
  const {
    bgColor,
    selectedIcon,
    iconColor,
    iconSize,
    canvasRef,
    iconRot,
    bgSize,
    bgRounded,
    bgShadowSize,
    textValue,
    textColor,
    textSize,
    textRot,
    textFont,
    textStrokeColor,
    textStrokeWidth,
  } = useFaviContext();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const textString = renderToStaticMarkup(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={canvas.width}
          height={canvas.height}
          style={{ transform: `rotate(${textRot}deg)` }}
        >
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill={textColor}
            fontSize={textSize}
            fontFamily={textFont}
            stroke={textStrokeColor}
            strokeWidth={textStrokeWidth}
          >
            {textValue}
          </text>
        </svg>
      );

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
          width={canvas.width}
          height={canvas.height}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="0"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ borderRadius: `${bgRounded}%` }}
        >
          <rect x="0" y="0" width="100%" height="100%" fill={bgColor} />
        </svg>
      );

      const textBlob = new Blob([textString], { type: "image/svg+xml" });
      const iconBlob = selectedIcon ? new Blob([svgString], { type: "image/svg+xml" }) : null;
      const bgBlob = new Blob([svgBG], { type: "image/svg+xml" });

      const textUrl = URL.createObjectURL(textBlob);
      const iconUrl = iconBlob ? URL.createObjectURL(iconBlob) : null;
      const bgUrl = URL.createObjectURL(bgBlob);

      const text = new Image();
      const icon = iconBlob ? new Image() : null;
      const bg = new Image();

      bg.onload = () => {
        text.onload = () => {
          if (icon && iconUrl) {
            icon.onload = () => {
              ctx.clearRect(0, 0, canvas.width, canvas.height);

              //bg
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

              ctx.save();
              ctx.translate(canvas.width / 2, canvas.height / 2);
              ctx.rotate((iconRot * Math.PI) / 180);
              ctx.drawImage(icon, -icon.width / 2, -icon.height / 2);
              ctx.restore();

              // text
              const textX = (canvas.width - text.width) / 2;
              const textY = (canvas.height - text.height) / 2;
              ctx.drawImage(text, textX, textY);

              URL.revokeObjectURL(iconUrl);
              URL.revokeObjectURL(bgUrl);
              URL.revokeObjectURL(textUrl);
            };
            icon.src = iconUrl;
          } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // bg
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

            // text
            const textX = (canvas.width - text.width) / 2;
            const textY = (canvas.height - text.height) / 2;
            ctx.drawImage(text, textX, textY);

            URL.revokeObjectURL(bgUrl);
            URL.revokeObjectURL(textUrl);
          }
        };
        text.src = textUrl;
      };
      bg.src = bgUrl;
    }
  }, [
    bgColor,
    iconSize,
    iconColor,
    selectedIcon,
    iconRot,
    bgSize,
    bgRounded,
    bgShadowSize,
    textValue,
    textSize,
    textColor,
    textRot,
    textFont,
    textStrokeColor,
    textStrokeWidth,
  ]);

  return <canvas ref={canvasRef} className="aspect-square w-full" width={600} height={600} />;
};

export default Canvas;
