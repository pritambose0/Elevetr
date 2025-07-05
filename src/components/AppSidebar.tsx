"use client";

import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const mainLinks = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Subjects", href: "/dashboard/subjects", icon: BookOpen },
  { name: "Progress", href: "/dashboard/analytics", icon: BarChart3 },
];

const generalLinks = [
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
  // { name: "Help", href: "/dashboard/help", icon: HelpCircle },
];

export default function Sidebar({ isDrawer = false }: { isDrawer?: boolean }) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        isDrawer
          ? "w-64 p-0"
          : "hidden md:flex flex-col w-64 min-h-screen px-4 py-6",
        "border-r border-border bg-muted/10"
      )}
    >
      <div className="flex items-center gap-2 px-4 py-4 text-2xl font-bold text-primary border-b md:border-none">
        <div className="bg-primary text-white p-1.5 rounded-full">
          <LayoutDashboard className="h-5 w-5" />
        </div>
        Elevetr
      </div>

      <div className="mt-10 space-y-6 text-sm text-muted-foreground px-2">
        {/* MENU section */}
        <div>
          <p className="px-2 mb-2 text-xs tracking-widest">MENU</p>
          <nav className="space-y-1">
            {mainLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center justify-between px-3 py-2 rounded-md transition-colors group",
                    isActive
                      ? "bg-background text-primary font-semibold"
                      : "hover:bg-muted/50 text-muted-foreground"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <link.icon
                      className={cn("h-5 w-5", isActive && "text-primary")}
                    />
                    <span>{link.name}</span>
                  </div>
                  {link.name === "Subjects" && (
                    <Badge variant="secondary" className="text-xs">
                      12+
                    </Badge>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* GENERAL section */}
        <div>
          <p className="px-2 mb-2 text-xs tracking-widest">GENERAL</p>
          <nav className="space-y-1">
            {generalLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                    isActive
                      ? "bg-background text-primary font-semibold"
                      : "hover:bg-muted/50 text-muted-foreground"
                  )}
                >
                  <link.icon className="h-5 w-5" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Logout */}
      <div className="mt-auto px-2 pb-4">
        <button className="flex items-center gap-3 w-full text-sm text-muted-foreground hover:text-destructive px-3 py-2 transition-colors cursor-pointer hover:bg-destructive/5 rounded-md">
          <LogOut className="h-5 w-5" />
          Logout
        </button>
      </div>
    </aside>
  );
}
