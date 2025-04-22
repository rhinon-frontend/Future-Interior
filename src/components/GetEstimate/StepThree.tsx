"use client";

import React, { useState } from "react";
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
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { designOptions } from "@/utils";

type StepThreeProps = {
  nextStep: () => void;
  prevStep: () => void;
  updateData: (data: any) => void;
  data: {
    floorPlan?: File | null;
    preferences?: string[];
  };
};

const StepThree: React.FC<StepThreeProps> = ({
  nextStep,
  prevStep,
  updateData,
  data,
}) => {
  const [floorPlanFile, setFloorPlanFile] = useState<File | null>(
    data.floorPlan || null
  );

  const form = useForm({
    defaultValues: {
      preferences: data.preferences || [],
    },
  });

  function onSubmit(values: any) {
    updateData({
      preferences: values.preferences,
      floorPlan: floorPlanFile,
    });
    console.log("Form submitted:", {
      preferences: values.preferences,
      floorPlan: floorPlanFile,
    });
    nextStep();
  }

  function handleBack() {
    prevStep();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Preferences Checkboxes */}
        <FormField
          control={form.control}
          name="preferences"
          render={() => (
            <FormItem>
              <FormLabel className="text-base">Design Preferences</FormLabel>
              <FormDescription>
                Select the features you want in your interior design.
              </FormDescription>

              <div className="grid grid-cols-2 gap-3 mt-4">
                {designOptions.map((item) => (
                  <FormField
                    key={item}
                    control={form.control}
                    name="preferences"
                    render={({ field }) => {
                      const checked = field.value?.includes(item);
                      return (
                        <FormItem className="flex items-center space-x-2">
                          <FormControl>
                            <Checkbox
                              checked={checked}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, item])
                                  : field.onChange(
                                      field.value?.filter((i) => i !== item)
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal m-0">
                            {item}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Floor Plan Upload */}
        <div className="space-y-2">
          <FormLabel>Upload Floor Plan</FormLabel>
          <Input
            type="file"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={(e) =>
              setFloorPlanFile(e.target.files ? e.target.files[0] : null)
            }
            className="file:border-0 text-xs file:rounded-md file:px-4 file:py-1 file:text-sm file:font-semibold file:bg-zinc-200 hover:file:bg-zinc-300 file:text-zinc-700 file:cursor-pointer file:mr-4 file:transition-colors file:duration-200"
          />
        </div>

        <div className="flex justify-between items-center mt-4 gap-5">
          <Button type="button" className="w-full" onClick={handleBack}>
            Back
          </Button>
          <Button type="submit" className="w-full">
            Continue
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default StepThree;
