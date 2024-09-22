import React from "react";
import { Badge } from "./ui/badge";
import Canvas from "./canvas";

const Preview = () => {
  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center rounded-xl bg-muted p-6">
      <Badge variant="outline" className="absolute right-3 top-3 border-none">
        Preview
      </Badge>
      <div className="max-w-full flex-grow aspect-square flex items-center justify-center border border-primary/20 bg-primary/5" style={{ borderStyle: "dashed" }}>
        <Canvas />
      </div>
    </div>
  );
};

export default Preview;
