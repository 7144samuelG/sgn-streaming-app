import React, { Suspense } from "react";
import { Navbar } from "./_components/Navbar";
import { Sidebar, SidebarSkeleton } from "./_components/Sidebar";
import { Container } from "./_components/container";
export default function BrowseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
       <Navbar />
      <div className="flex h-full pt-20">
        <Suspense fallback={<SidebarSkeleton/>}>
        <Sidebar/>
        </Suspense>
        <Container>
        {children}
        </Container></div>
    </>
  );
}
