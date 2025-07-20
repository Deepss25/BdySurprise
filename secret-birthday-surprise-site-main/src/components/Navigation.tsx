import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Home, Camera, Heart, Cake, Sparkles } from "lucide-react";

export const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { to: "/", label: "Home", icon: Home },
    { to: "/gallery", label: "Photos", icon: Camera },
    { to: "/messages", label: "Messages", icon: Heart },
    { to: "/celebration", label: "Cake", icon: Cake },
    { to: "/memories", label: "Memories", icon: Sparkles },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-accent/20 shadow-[var(--shadow-soft)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-primary">
            🎂 Birthday Surprise
          </Link>
          
          <div className="flex space-x-1">
            {navItems.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className={cn(
                  "flex items-center px-4 py-2 rounded-lg transition-[var(--transition-birthday)] text-sm font-medium",
                  location.pathname === to
                    ? "bg-primary text-primary-foreground shadow-[var(--shadow-birthday)]"
                    : "text-muted-foreground hover:text-primary hover:bg-accent/50"
                )}
              >
                <Icon size={16} className="mr-2" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};