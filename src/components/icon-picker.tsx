"use client";

import React, { useState } from "react";
import { Label } from "./ui/label";
import { 
  Aperture, 
  BarChart, 
  Camera, 
  Cloud, 
  Code, 
  Coffee, 
  Compass, 
  Database, 
  Flag, 
  Globe, 
  Heart, 
  Image, 
  Leaf, 
  Map, 
  Music, 
  Pen, 
  Rocket, 
  Star, 
  Zap,
} from 'lucide-react'
import { Bird, LucideIcon, Rabbit, Turtle } from "lucide-react";
import { Button } from "./ui/button";

const icons: Record<string, LucideIcon> = {
  Aperture, BarChart, Camera, Cloud, Code, Coffee, Compass, Database, 
  Flag, Globe, Heart, Image, Leaf, Map, Music, Pen, Rocket, Star, Zap
}

const IconPicker = () => {
  const [selectedIcon, setSelectedIcon] = useState<string>('Aperture');
  const IconComponent = icons[selectedIcon]
  return (
    <div className="grid gap-6 border p-4 rounded-xl">
      <div className="grid gap-3">
        <Label htmlFor="temperature">Icon</Label>
        <Button variant="outline" size="sm" className="w-full">
          <IconComponent className="size-3.5" />
          <span className="ml-2">{selectedIcon}</span>
        </Button>
      </div>
    </div>
  );
};

export default IconPicker;
