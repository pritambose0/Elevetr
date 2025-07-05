import type { ReactNode } from "react";

export default function SubjectsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex items-center justify-center bg-background">
      {children}
    </div>
  );
}
