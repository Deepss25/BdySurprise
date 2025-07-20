import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface BirthdayCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "celebration" | "message";
}

export const BirthdayCard = ({ children, className, variant = "default" }: BirthdayCardProps) => {
  const variantStyles = {
    default: "bg-card border-accent/20 shadow-[var(--shadow-soft)]",
    celebration: "bg-gradient-to-br from-accent/30 to-secondary/50 border-primary/20 shadow-[var(--shadow-birthday)]",
    message: "bg-gradient-to-br from-card to-accent/10 border-primary/30 shadow-[var(--shadow-glow)]"
  };

  return (
    <Card className={cn(
      "transition-[var(--transition-birthday)] hover:scale-[1.02] hover:shadow-[var(--shadow-birthday)]",
      variantStyles[variant],
      className
    )}>
      {children}
    </Card>
  );
};