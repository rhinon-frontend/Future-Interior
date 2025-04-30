"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { Poppins } from "next/font/google";
import NavBar from "@/components/Navigation/NavBar";
import Footer from "@/components/Home/Footer";
import { LoadingProvider } from "@/context/LoadingProvider";
import { Toaster } from "@/components/ui/toaster";

// Fetch Clerk Frontend API Key from environment variables
const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

// Ensure the key is defined
if (!clerkPublishableKey) {
  console.error("Clerk Publishable Key is missing. Please add it to the environment variables.");
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey={clerkPublishableKey}>
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
