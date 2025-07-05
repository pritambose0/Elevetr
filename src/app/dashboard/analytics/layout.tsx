import type { ReactNode } from "react";

export default function SubjectsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center bg-background">
      {children}
    </div>
  );
}
