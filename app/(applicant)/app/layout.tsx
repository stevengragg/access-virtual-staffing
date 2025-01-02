import { AppNavbar } from "@/components/layout/app-navigation";

export default async function AppRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const session = await getSession();
  // console.log(session);
  return (
    <>
      <AppNavbar />
      {children}
      <footer>I am footer</footer>
    </>
  );
}
