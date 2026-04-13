import "./globals.css";
import { TopNavBar } from "@/components/TopNavBar";
import { SideNavBar } from "@/components/SideNavBar";
import { BottomNavBar } from "@/components/BottomNavBar";

export const metadata = {
  title: "The Academic Editorial | Scholar Workspace",
  description: "Scholar Workspace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* Google Material Symbols */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="text-on-surface bg-background font-body">
        <TopNavBar />
        <SideNavBar />
        {children}
        <BottomNavBar />
      </body>
    </html>
  );
}
