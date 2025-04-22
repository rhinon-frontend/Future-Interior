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

const FormSchema = z.object({
  bhk: z.string().min(1, { message: "BHK is required" }),
  location: z.string().min(2, { message: "Location is required" }),
});

type StepOneProps = {
  nextStep: () => void;
  updateData: (data: any) => void;
  data: { bhk: string; location: string };
};

const StepOne = ({ nextStep, updateData, data }: StepOneProps) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      bhk: data.bhk || "",
      location: data.location || "",
    },
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    updateData(values);
    console.log("Form submitted:", values);
    form.reset({
      bhk: "",
      location: "",
    });
    nextStep();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-10"
      >
        <h2 className="text-xl font-semibold text-center mb-4">
          Property Details
        </h2>

        {/* Number of BHKs */}
        <FormField
          control={form.control}
          name="bhk"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of BHKs</FormLabel>
              <FormControl>
                <Input placeholder="e.g. 2, 3, 4 BHK" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Property Location */}
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Property Location</FormLabel>
              <FormControl>
                <Input placeholder="e.g. Pune, Mumbai" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Next
        </Button>
      </form>
    </Form>
  );
};

export default StepOne;
