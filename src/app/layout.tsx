import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navigation/NavBar";
import Footer from "@/components/Home/Footer";
import { Toaster } from "@/components/ui/toaster";
import { LoadingProvider } from "@/context/LoadingProvider";
import { ClerkProvider, RedirectToSignIn, useUser } from "@clerk/nextjs";

// Replace with your Clerk frontend API key
const clerkPublishableKey = "your-clerk-publishable-key";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Future Interio",
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
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${poppins.className} antialiased bg-[#FAFAFA] scroll-smooth p-[10px]`}
        >
          <LoadingProvider>
            <NavBar />
            <Toaster />
            {children}
            <Footer />
          </LoadingProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
