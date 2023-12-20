import React from "react";
import { Logo } from "./_components/logo";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex flex-col  justify-center items-center">
      <Logo />
      <div>{children}</div>
    </div>
  );
}
