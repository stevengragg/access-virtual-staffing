import { ApplicationShell } from "@/components/layout/app-shell";

export default async function AppRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const session = await getSession();
  // console.log(session);
  return (
    <>
      <ApplicationShell>{children}</ApplicationShell>
    </>
  );
}
