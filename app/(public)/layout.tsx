import { NavBar } from "@/components";

export const metadata = {
  title: "Layout Page",
  description: "Este es el layout.",
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <main className="flex flex-col items-center p-24">{children}</main>
    </>
  );
}
