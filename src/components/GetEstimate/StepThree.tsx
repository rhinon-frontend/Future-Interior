"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useEstimate } from "@/context/EstimateContext";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormControl,
  FormMessage,
} from "../ui/form";
import { designOptions } from "@/utils";

const StepThreeSchema = z.object({
  preferences: z.array(z.string()).optional(),
});

interface StepThreeProps {
  onNext: () => void;
  onBack: () => void;
}

const StepThree: React.FC<StepThreeProps> = ({ onNext, onBack }) => {
  const { formData, updateEstimate } = useEstimate();
  const { preferences = [] } = formData;

  const form = useForm<z.infer<typeof StepThreeSchema>>({
    resolver: zodResolver(StepThreeSchema),
    defaultValues: { preferences },
  });

  const toast = useToast();

  const onSubmit = (values: z.infer<typeof StepThreeSchema>) => {
    updateEstimate({ preferences: values.preferences });

    toast.toast({
      title: "Saved",
      description: "Preferences saved successfully.",
    });

    form.reset({ preferences: [] });
    onNext();
  };

  const handleCheckboxChange = (checked: boolean, item: string) => {
    const currentPreferences = form.getValues("preferences") || [];
    if (checked) {
      form.setValue("preferences", [...currentPreferences, item]);
    } else {
      form.setValue(
        "preferences",
        currentPreferences.filter((i) => i !== item)
      );
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-xl mx-auto bg-white p-6 rounded-xl text-[#1E1FBF] font-sans"
      >
        <h2 className="text-2xl font-semibold text-center text-[#1E1FBF]">
          Design Preferences
        </h2>

        <FormField
          control={form.control}
          name="preferences"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">
                Choose your preferred styles
              </FormLabel>
              <FormDescription className="text-sm text-zinc-500">
                Select the features you want in your interior.
              </FormDescription>

              <div className="grid grid-cols-2 gap-3 mt-4">
                {designOptions.map((item) => {
                  const isChecked = field.value?.includes(item);
                  return (
                    <div key={item} className="flex items-center space-x-2">
                      <FormControl>
                        <Checkbox
                          checked={isChecked}
                          onCheckedChange={(checked: any) =>
                            handleCheckboxChange(checked, item)
                          }
                          className="data-[state=checked]:bg-[#1E1FBF] data-[state=checked]:border-[#1E1FBF]"
                        />
                      </FormControl>
                      <FormLabel
                        className={`text-sm font-medium m-0 ${
                          isChecked ? "text-[#1E1FBF]" : "text-gray-700"
                        }`}
                      >
                        {item}
                      </FormLabel>
                    </div>
                  );
                })}
              </div>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-between items-center mt-4 gap-5">
          <Button
            type="button"
            className="w-full bg-[#E5E5E5] text-[#1E1E1E] hover:bg-[#d6d6d6] font-medium transition"
            onClick={onBack}
          >
            Back
          </Button>
          <Button
            type="submit"
            className="w-full bg-[#1E1FBF] hover:bg-[#1e1fbf] text-white focus:ring-2 focus:ring-[#1E1FBF]"
          >
            Continue
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default StepThree;
