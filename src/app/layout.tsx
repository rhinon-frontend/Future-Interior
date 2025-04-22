import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navigation/NavBar";
import Footer from "@/components/Home/Footer";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Future Interior",
  description: "Designing Spaces for Tomorrow",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg[#f6f1eb] scroll-smooth p-[14px]`}>
        <NavBar />
        <Toaster />
        {children}
        <Footer />
      </body>
    </html>
  );
}
