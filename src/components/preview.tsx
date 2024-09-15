import React from "react";
import { Badge } from "./ui/badge";

const Preview = () => {
  return (
    <div className="relative flex h-full w-full flex-col rounded-xl bg-muted p-4">
      <Badge variant="outline" className="absolute right-3 top-3">
        Preview
      </Badge>
    </div>
  );
};

export default Preview;
