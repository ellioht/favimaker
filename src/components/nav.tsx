import React from "react";
import { Download } from "lucide-react";
import { Button } from "./ui/button";

const Nav = () => {
  return (
    <header className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4">
      <h1 className="text-xl font-semibold">Favimaker</h1>
      <Button variant="outline" size="sm" className="ml-auto gap-1.5 text-sm">
        <Download className="size-3.5" />
        Download
      </Button>
    </header>
  );
};

export default Nav;
