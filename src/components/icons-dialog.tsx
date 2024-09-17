import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LucideIcon } from "lucide-react";

interface IconsDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  icons: Record<string, React.ComponentType<{ size?: number | string }>>
}

const IconsDialog = ({ open, setOpen, icons }: IconsDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Choose an Icon</DialogTitle>
          <DialogDescription>
          {Object.keys(icons).map((icon) => {
              const IconComponent = icons[icon];
              return (
                <DialogTrigger key={icon} onClick={() => setOpen(false)}>
                  <IconComponent size={48} />
                </DialogTrigger>
              );
            })}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default IconsDialog;
