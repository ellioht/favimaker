import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface InfoDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const InfoDialog = ({ open, setOpen }: InfoDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Favimaker - A favicon maker</DialogTitle>
          <DialogDescription>
            This is a free tool to create favicons for your website.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default InfoDialog;
