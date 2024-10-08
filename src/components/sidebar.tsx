"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Brush, LifeBuoy } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import InfoDialog from "./info-dialog";

const Sidebar = () => {
  const [openInfoDialog, setOpenInfoDialog] = useState(false);
  return (
    <>
      <aside className="lg:flex h-full flex-col border-r justify-between hidden">
        <nav className="grid gap-1 p-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg bg-muted"
                aria-label="Playground"
              >
                <Brush className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Design
            </TooltipContent>
          </Tooltip>
          {/* <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-lg" aria-label="Models">
              <RefreshCcw className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Convert
          </TooltipContent>
        </Tooltip> */}
        </nav>

        <nav className="flex flex-col gap-1 p-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="mt-auto rounded-lg" aria-label="Help" onClick={() => setOpenInfoDialog(true)}>
                <LifeBuoy className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Help
            </TooltipContent>
          </Tooltip>
        </nav>
      </aside>
      <InfoDialog open={openInfoDialog} setOpen={setOpenInfoDialog} />
    </>
  );
};

export default Sidebar;
