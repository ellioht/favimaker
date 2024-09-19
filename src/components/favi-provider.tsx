"use client";

import React, { createContext, useState, useContext, ReactNode, useRef } from 'react';

type FaviContextType = {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  bgColor: string;
  setBgColor: (color: string) => void;
  selectedIcon: string;
  setSelectedIcon: (icon: string) => void;
  iconColor: string;
  setIconColor: (color: string) => void;
  iconSize: number;
  setIconSize: (size: number) => void;
  iconRot: number;
  setIconRot: (rot: number) => void;
};

const FaviContext = createContext<FaviContextType | undefined>(undefined);

export const FaviProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedIcon, setSelectedIcon] = useState<string>("Aperture");
  const [bgColor, setBgColor] = useState<string>('#000000');
  const [iconColor, setIconColor] = useState<string>('#ffffff');
  const [iconSize, setIconSize] = useState<number>(500);
  const [iconRot, setIconRot] = useState<number>(0);

  return (
    <FaviContext.Provider value={{ canvasRef, bgColor, setBgColor, selectedIcon, setSelectedIcon, iconColor, setIconColor, iconSize, setIconSize, iconRot, setIconRot }}>
      {children}
    </FaviContext.Provider>
  );
};

export const useFaviContext = (): FaviContextType => {
  const context = useContext(FaviContext);
  if (!context) {
    throw new Error('useFaviContext must be used within a FaviProvider');
  }
  return context;
};
