import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jennifer David-Alozie",
  description: "Jennifer David-Alozie is a skilled software developer specializing in Azure technologies. With a passion for crafting robust solutions, she brings creativity and expertise to every project, ensuring optimal performance and user satisfaction.",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <div className="body min-h[100vh] ">
        <Navbar/>
        {children}
        </div>
      </body>
    </html>
  );
}
