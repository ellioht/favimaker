"use client";

import React, { createContext, useState, useContext, ReactNode, useRef } from "react";

type FaviContextType = {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  bgColor: string;
  setBgColor: (color: string) => void;
  selectedIcon: string | null;
  setSelectedIcon: (icon: string | null) => void;
  iconColor: string;
  setIconColor: (color: string) => void;
  iconSize: number;
  setIconSize: (size: number) => void;
  iconRot: number;
  setIconRot: (rot: number) => void;
  textValue: string;
  setTextValue: (text: string) => void;
  textColor: string;
  setTextColor: (color: string) => void;
  textSize: number;
  setTextSize: (size: number) => void;
  textRot: number;
  setTextRot: (rot: number) => void;
  textFont: string;
  setTextFont: (font: string) => void;
  textStrokeColor: string;
  setTextStrokeColor: (color: string) => void;
  textStrokeWidth: number;
  setTextStrokeWidth: (width: number) => void;
  bgSize: number;
  setBgSize: (size: number) => void;
  bgRounded: number;
  setBgRounded: (rounded: number) => void;
  bgShadowSize: number;
  setBgShadowSize: (size: number) => void;
};

const FaviContext = createContext<FaviContextType | undefined>(undefined);

export const FaviProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedIcon, setSelectedIcon] = useState<string | null>("Aperture");
  const [iconColor, setIconColor] = useState<string>("#ffffff");
  const [iconSize, setIconSize] = useState<number>(500);
  const [iconRot, setIconRot] = useState<number>(0);

  const [textValue, setTextValue] = useState<string>("");
  const [textColor, setTextColor] = useState<string>("#ffffff");
  const [textSize, setTextSize] = useState<number>(500);
  const [textRot, setTextRot] = useState<number>(0);
  const [textFont, setTextFont] = useState<string>("Arial");
  const [textStrokeColor, setTextStrokeColor] = useState<string>("#000000");
  const [textStrokeWidth, setTextStrokeWidth] = useState<number>(0);

  const [bgColor, setBgColor] = useState<string>("#000000");
  const [bgSize, setBgSize] = useState<number>(100);
  const [bgRounded, setBgRounded] = useState<number>(0);
  const [bgShadowSize, setBgShadowSize] = useState<number>(0);

  const FaviProviderValues = {
    canvasRef,
    bgColor,
    setBgColor,
    selectedIcon,
    setSelectedIcon,
    iconColor,
    setIconColor,
    iconSize,
    setIconSize,
    iconRot,
    setIconRot,
    textValue,
    setTextValue,
    textColor,
    setTextColor,
    textSize,
    setTextSize,
    textRot,
    setTextRot,
    textFont,
    setTextFont,
    textStrokeColor,
    setTextStrokeColor,
    textStrokeWidth,
    setTextStrokeWidth,
    bgSize,
    setBgSize,
    bgRounded,
    setBgRounded,
    bgShadowSize,
    setBgShadowSize,
  };

  return <FaviContext.Provider value={FaviProviderValues}>{children}</FaviContext.Provider>;
};

export const useFaviContext = (): FaviContextType => {
  const context = useContext(FaviContext);
  if (!context) {
    throw new Error("useFaviContext must be used within a FaviProvider");
  }
  return context;
};
