import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { ModeToggle } from "@/components/mode-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shadcn Dashboard",
  description: "shadcn dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="flex ">
            <div className="hidden md:block w-[300px] h-[100vh] bg-blue-300">
              <Sidebar />
            </div>
            <div className="w-full p-5 md:w-full dark:bg-gray-900 bg-slate-100">
              {children}
            </div>
          </div>
          <ModeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
