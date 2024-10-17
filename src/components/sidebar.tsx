"use client";

import React, { useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import { Brush, LifeBuoy, RefreshCcw } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import InfoDialog from "./info-dialog";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const [openInfoDialog, setOpenInfoDialog] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <aside className="lg:flex h-full flex-col border-r justify-between hidden">
        <nav className="grid gap-2 p-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/" aria-label="Playground">
                <div
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    `rounded-lg ${pathname === "/" ? "bg-muted" : ""}`
                  )}
                >
                  <Brush className="size-5" />
                </div>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Design
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/convert" aria-label="Playground">
                <div
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    `rounded-lg ${pathname === "/convert" ? "bg-muted" : ""}`
                  )}
                >
                  <RefreshCcw className="size-5" />
                </div>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Convert
            </TooltipContent>
          </Tooltip>
        </nav>

        <nav className="flex flex-col gap-1 p-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="mt-auto rounded-lg"
                aria-label="Help"
                onClick={() => setOpenInfoDialog(true)}
              >
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
