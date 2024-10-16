import * as React from "react";
import * as LucideIcons from "lucide-react";

interface LucideIconProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string | keyof typeof LucideIcons | null;
  size?: number;
  color?: string;
  rotate?: string;
}

const LucideIcon = React.forwardRef<SVGSVGElement, LucideIconProps>(
  ({ name, size = 24, color, rotate = "currentColor", className, ...props }, ref) => {
    const IconComponent = LucideIcons[name as keyof typeof LucideIcons] as React.ElementType;
    if (!IconComponent) {
      return null;
    }
    return <IconComponent ref={ref} size={size} color={color} style={{ transform: `rotate(${rotate}deg)` }} {...props} className={className} />;
  }
);

LucideIcon.displayName = "LucideIcon";

export { LucideIcon };
