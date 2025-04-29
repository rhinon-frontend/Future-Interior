"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { useEstimate } from "@/context/EstimateContext";

// Schema validation using zod
const FormSchema = z.object({
  bhk: z.string().min(1, { message: "BHK is required" }),
  location: z.string().min(2, { message: "Location is required" }),
});

type StepOneProps = {
  onNext: () => void;
};

const StepOne = ({ onNext }: StepOneProps) => {
  const { formData, updateEstimate } = useEstimate();

  // Use react-hook-form with zod validation resolver
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      bhk: formData.bhk || "",
      location: formData.location || "",
    },
  });

  // Submit handler to update context and move to next step
  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    if (values.bhk !== formData.bhk || values.location !== formData.location) {
      // Update the global context only when data changes
      updateEstimate(values);
    }

    // Reset form after successful submit
    form.reset({
      bhk: "",
      location: "",
    });

    // Move to next step
    onNext();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-10">
        <h2 className="text-xl font-semibold text-center mb-4 text-[#1E1FBF]">
          Property Details
        </h2>

        {/* BHK Input */}
        <FormField
          control={form.control}
          name="bhk"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#1E1FBF]">Number of BHKs</FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g. 2, 3, 4 BHK"
                  {...field}
                  className="focus:ring-[#1E1FBF] focus:border-[#1E1FBF] text-[#1E1FBF]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Location Input */}
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#1E1FBF]">Property Location</FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g. Pune, Mumbai"
                  {...field}
                  className="focus:ring-[#1E1FBF] focus:border-[#1E1FBF] text-[#1E1FBF]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-[#1E1FBF] hover:bg-[#1e1fbf] focus:ring-2 focus:ring-[#1E1FBF] text-white"
        >
          Next
        </Button>
      </form>
    </Form>
  );
};

export default StepOne;
