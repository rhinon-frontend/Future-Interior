// app/auth/sign-in/[[...sign-in]]/page.tsx
import { SignUp, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

export default function SignUpPage() {
  return (
    <div className="min-h-screen grid-cols-1 md:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-[#2E2A47]">Welcome Back!</h1>
          <p className="text-base text-[#7E8CA0]">
            Log in or Create account to get back to your dashboard!
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <ClerkLoaded>
          <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
        </ClerkLoaded>
        <ClerkLoading>
          <Loader2 className="animate-spin text-muted-foreground" />
        </ClerkLoading>
      </div>
      <div className="h-full bg-black hidden lg:flex items-center justify-center"></div>
    </div>
  );
}
