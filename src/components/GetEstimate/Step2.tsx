"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState, ChangeEvent, useCallback } from "react";
import { useEstimate } from "@/context/EstimateContext";
import { Toast } from "../ui/toast";

const formSchema = z.object({
  carpet_area: z
    .string()
    .optional()
    .refine((val) => val === undefined || /^[0-9]+$/.test(val), {
      message: "Carpet area must be a number.",
    }),
  additional_notes: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

type StepTwoProps = {
  onNext: () => void;
  onBack: () => void;
};

export function Step2({ onNext, onBack }: StepTwoProps) {
  const { formData, updateEstimate } = useEstimate();
  const [file, setFile] = useState<File | null>(null);
  const [filePreviewUrl, setFilePreviewUrl] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      carpet_area:
        formData.carpet_area !== undefined ? String(formData.carpet_area) : "",
      additional_notes: formData.additional_notes || "",
    },
  });

  const handleFileChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        const tempUrl = URL.createObjectURL(selectedFile);
        setFilePreviewUrl(tempUrl);
        updateEstimate({ floor_plan_url: tempUrl });
      }
    },
    [updateEstimate]
  );

  const onSubmit = (values: FormData) => {
    if (!file) {
      Toast({ title: "No floor plan file selected" });
      return;
    }

    updateEstimate({
      carpet_area: values.carpet_area ? parseFloat(values.carpet_area) : undefined,
      additional_notes: values.additional_notes,
    });

    form.reset({ carpet_area: "", additional_notes: "" });
    setFile(null);
    setFilePreviewUrl(null);
    onNext();
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-6 bg-white p-6 max-w-xl mx-auto"
    >
      <h2 className="text-2xl font-semibold text-center text-[#1E1FBF]">
        Upload Your Floor Plan
      </h2>

      {/* File Upload */}
      <div>
        <Label htmlFor="floorPlan" className="text-[#1E1FBF]">
          Upload Floor Plan (PDF/Image)
        </Label>
        <Input
          id="floorPlan"
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          className="mt-2 file:text-[#1E1FBF]"
          onChange={handleFileChange}
        />
        {file && (
          <div className="text-xs mt-2 text-[#1E1FBF]">
            <p>File: {file.name}</p>
            <p>Size: {(file.size / 1024).toFixed(2)} KB</p>
            <p>Type: {file.type}</p>
          </div>
        )}
        {filePreviewUrl && (
          <div className="mt-2">
            <p className="text-[#1E1FBF]">Preview:</p>
            <img src={filePreviewUrl} alt="Floor Plan Preview" className="max-w-xs border border-[#1E1FBF] rounded-md" />
          </div>
        )}
      </div>

      {/* Carpet Area */}
      <div>
        <Label htmlFor="carpetArea" className="text-[#1E1FBF]">Carpet Area (sq.ft)</Label>
        <Input
          id="carpetArea"
          placeholder="e.g. 1200"
          {...form.register("carpet_area")}
          className="mt-2 focus:ring-[#1E1FBF] focus:border-[#1E1FBF] text-[#1E1FBF]"
        />
      </div>

      {/* Additional Notes */}
      <div>
        <Label htmlFor="additional_notes" className="text-[#1E1FBF]">Additional Notes</Label>
        <Textarea
          id="additional_notes"
          placeholder="Any preferences?"
          {...form.register("additional_notes")}
          className="mt-2 focus:ring-[#1E1FBF] focus:border-[#1E1FBF] text-[#1E1FBF]"
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <Button
          variant="secondary"
          type="button"
          onClick={onBack}
          className="border border-[#1E1FBF] text-[#1E1FBF] hover:bg-[#1E1FBF]/10"
        >
          Back
        </Button>
        <Button
          type="submit"
          className="bg-[#1E1FBF] hover:bg-[#1e1fbf] text-white focus:ring-2 focus:ring-[#1E1FBF]"
        >
          Continue
        </Button>
      </div>
    </form>
  );
}
