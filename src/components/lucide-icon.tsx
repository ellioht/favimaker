import * as React from "react";
import * as LucideIcons from "lucide-react";

interface LucideIconProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  size?: number;
  color?: string;
}

const LucideIcon = React.forwardRef<HTMLDivElement, LucideIconProps>(
  ({ name, size = 24, color = "currentColor", ...props }, ref) => {
    const IconComponent = LucideIcons[name as keyof typeof LucideIcons] as React.ElementType;
    if (!IconComponent) {
      return null;
    }
    return (
      <div ref={ref} {...props}>
        <IconComponent size={size} color={color} />
      </div>
    );
  }
);

LucideIcon.displayName = "LucideIcon";

export { LucideIcon };
