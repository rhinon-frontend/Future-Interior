"use client";

import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../ui/button";

const FormSchema = z.object({
  fullName: z.string().min(1, { message: "Fullname is required" }),
  phoneNumber: z.string().max(10, { message: "Phone number is required" }),
});

type StepOneProps = {
  nextStep: () => void;
  prevStep: () => void;
  updateData: (data: any) => void;
  data: { fullName: string; phoneNumber: string };
};

const Step2 = ({ nextStep, prevStep, updateData, data }: StepOneProps) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullName: data.fullName || "",
      phoneNumber: data.phoneNumber || "",
    },
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    updateData(values);
    console.log("Form submitted:", values);
    form.reset({
      fullName: "",
      phoneNumber: "",
    });
    nextStep();
  }

  function handleBack() {
    prevStep();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="fullname" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input type="number" placeholder="phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-between items-center mt-4 gap-5">
          <Button type="button" className="w-full mt-4" onClick={handleBack}>
            Back
          </Button>
          <Button type="submit" className="w-full mt-4">
            Next
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default Step2;
