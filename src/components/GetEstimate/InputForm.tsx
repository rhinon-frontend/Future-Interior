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
import { Textarea } from "../ui/textarea";
import { JSX } from "react";

const FormSchema = z.object({
  Fullname: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
});

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      Fullname: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-full rounded-md bg-slate-950 p-4 overflow-auto">
          <code className="text-white text-xs">
            {JSON.stringify(data, null, 2)}
          </code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-xl space-y-6 p-8"
      >
        {/* Fullname Field */}
        <FormField
          control={form.control}
          name="Fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fullname</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input type="email" placeholder="Enter your email" />
          </FormControl>
          <FormMessage />
        </FormItem>

        {/* Contact Number */}
        <FormItem>
          <FormLabel>Contact Number</FormLabel>
          <FormControl>
            <Input type="tel" placeholder="Enter contact number" />
          </FormControl>
          <FormMessage />
        </FormItem>

        {/* Additional Requirement */}
        <FormItem>
          <FormLabel>Additional Requirements</FormLabel>
          <FormControl>
            <Textarea placeholder="Mention any extra requirement here..." />
          </FormControl>
          <FormMessage />
        </FormItem>

        {/* File Upload */}
        <FormItem>
          <FormLabel>Upload File</FormLabel>
          <FormControl>
            <Input type="file" accept=".jpg, .jpeg, .png" className="file:bg-slate-200 file:rounded file:border file:border-gray-100 file:px-2 file:text-zinc-800 file:hover:cursor-pointer file:text-xs file:p-1" />
          </FormControl>
          <FormMessage />
        </FormItem>

        {/* Submit */}
        <Button type="submit" className="w-full text-base font-medium">
          Submit
        </Button>
      </form>
    </Form>
  );
}

// Dummy toast handler
function toast(arg0: { title: string; description: JSX.Element }) {
  console.log(arg0.title);
  console.log(arg0.description);
}
