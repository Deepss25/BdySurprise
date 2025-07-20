import { cn } from "@/lib/utils";

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  delay?: string;
}

export const FloatingElement = ({ children, className, delay = "0s" }: FloatingElementProps) => {
  return (
    <div 
      className={cn("animate-float", className)}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
};