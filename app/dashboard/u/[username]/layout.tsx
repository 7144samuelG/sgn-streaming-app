import { getSelfByUsername } from "@/lib/auth-user";
import { redirect } from "next/navigation";
import { Navbar } from "./_components/Navbar";
import { Sidebar } from "./_components/Sidebar";
import { Container } from "lucide-react";

interface CreatorLayoutProps {
  params: { username: string };
  children: React.ReactNode;
}
const CreatorLayout = async ({ params, children }: CreatorLayoutProps) => {
  const self = await getSelfByUsername(params.username);

  if (!self) {
    redirect("/");
  }
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Sidebar/>
        <Container>

        {children}
        </Container>
        </div>
    </>
  );
};
