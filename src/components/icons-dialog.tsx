"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LucideIcon as LucideIconComponent } from "./lucide-icon";
import * as LucideIcons from "lucide-react";
import next from "next";
import { Input } from "./ui/input";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

interface IconsDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  setSelectedIcon: (icon: string) => void;
}

const IconsDialog = ({ open, setOpen, setSelectedIcon }: IconsDialogProps) => {
  const [visibleIcons, setVisibleIcons] = useState<string[]>([]);
  const [batchSize, setBatchSize] = useState<number>(40);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const buffer = 100;

  useEffect(() => {
    setSearchQuery("");
    setVisibleIcons(Object.keys(LucideIcons).slice(0, 40));
  }, [open]);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (scrollTop + clientHeight + buffer >= scrollHeight) {
      setBatchSize((prevBatchSize) => {
        const newBatchSize = prevBatchSize + 40;
        const nextBatch = Object.keys(LucideIcons).slice(prevBatchSize, newBatchSize);
        setVisibleIcons((prevIcons) => [...prevIcons, ...nextBatch]);
        return newBatchSize;
      });
    }
    if (scrollTop === 0) {
    }
  }, []);

  const handleSearchIcons = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
  
    if (query === "") {
      setVisibleIcons(Object.keys(LucideIcons).slice(0, 40));
    } else {
      const filteredIcons = Object.keys(LucideIcons).filter((icon) =>
        icon.toLowerCase().includes(query.toLowerCase())
      );
      setVisibleIcons(filteredIcons);
    }
  };
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="px-4 py-6">
        <DialogHeader className="px-4 mb-2">
          <DialogTitle>Choose an Icon</DialogTitle>
          <DialogDescription className="sr-only">Select an icon to use</DialogDescription>
        </DialogHeader>
        <div className="px-4">
          <div className="flex items-center border px-3 rounded-md" cmdk-input-wrapper="">
            <MagnifyingGlassIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <input
              type="text"
              placeholder="Search icons..."
              value={searchQuery}
              onChange={handleSearchIcons}
              className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
        </div>
        <ScrollArea className="h-[600px] w-full px-4" onScroll={(e) => handleScroll(e)}>
          <div className="grid grid-cols-4 gap-4">
            {visibleIcons &&
              visibleIcons.map((icon, index) => {
                return icon && (
                  <div className="flex flex-col" key={index}>
                    <DialogTrigger
                      key={icon}
                      onClick={() => {
                        setSelectedIcon(icon);
                        setOpen(false);
                      }}
                      className="bg-muted hover:bg-accent-foreground/20 rounded-md p-1 flex items-center justify-center aspect-square"
                    >
                      <LucideIconComponent name={icon} size={64} />
                    </DialogTrigger>
                    <span className="text-xs mt-1 break-words">{icon}</span>
                  </div>
                );
              })}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default IconsDialog;
