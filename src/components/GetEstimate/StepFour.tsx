"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FaGoogle } from "react-icons/fa";

type StepFourProps = {
  nextStep: () => void;
  prevStep: () => void;
  updateData: (data: any) => void;
  data: { email: string | null; password: string | null };
};

const formSchema = z.object({
  email: z.string().email({ message: "Enter a valid email address" }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export function StepFour({
  data,
  nextStep,
  prevStep,
  updateData,
}: StepFourProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form submitted:", values);
    form.reset({
      email: "",
      password: "",
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-md mx-auto bg-white p-8 rounded-xl shadow-md space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center text-zinc-800">
          Create your account
        </h2>

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-zinc-700">
                Email Address
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="you@example.com"
                  {...field}
                  className="rounded-md border-zinc-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </FormControl>
              <FormMessage className="text-sm text-red-500" />
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-zinc-700">
                Password
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                  className="rounded-md border-zinc-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </FormControl>
              <FormMessage className="text-sm text-red-500" />
            </FormItem>
          )}
        />

        {/* Submit */}
        <Button
          type="submit"
          className="w-full text-white bg-blue-600 hover:bg-blue-700"
        >
          Create Account
        </Button>

        {/* Divider */}
        <div className="relative text-center">
          <span className="text-sm text-zinc-500 bg-white px-2 relative z-10">
            or
          </span>
          <div className="absolute inset-0 border-t border-zinc-300 top-1/2 -translate-y-1/2"></div>
        </div>

        {/* Google Button */}
        <Button variant="default" className="w-full">
          Continue with Google <FaGoogle className="ml-2" />
        </Button>

        {/* Footer text */}
        <div className="text-center text-sm text-zinc-500 mt-4 space-y-2">
          <p>
            By signing up, you agree to our{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Privacy Policy
            </a>
          </p>
          <p>
            Already have an account?{" "}
            <button type="button" className="text-blue-500 hover:underline">
              Sign in
            </button>
          </p>
        </div>
      </form>
    </Form>
  );
}
