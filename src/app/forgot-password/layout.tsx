import type { ReactNode } from "react";

export default function ForgotPasswordLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-dvh flex items-center justify-center bg-background">
      {children}
    </div>
  );
}
