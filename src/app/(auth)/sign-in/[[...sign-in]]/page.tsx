// app/auth/sign-in/[[...sign-in]]/page.tsx
import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

export default function SignInPage() {
  return (
    <div className="min-h-screen grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col space-y-12 justify-center items-center min-h-screen">
        <div className="h-full lg:flex flex-col items-center justify-center px-4">
          <div className="text-center space-y-4 pt-16">
            <h1 className="font-bold text-3xl text-[#2E2A47]">Welcome Back!</h1>
            <p className="text-base text-[#7E8CA0]">
              Log in or Create account to get back to your dashboard!
            </p>
          </div>
        </div>
        <ClerkLoaded>
          <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
        </ClerkLoaded>
        <ClerkLoading>
          <Loader2 className="animate-spin text-muted-foreground" />
        </ClerkLoading>
      </div>
      <div className="h-full bg-black hidden lg:flex items-center justify-center"></div>
    </div>
  );
}
