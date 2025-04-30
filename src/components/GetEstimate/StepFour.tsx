"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { string, z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useEstimate } from "@/context/EstimateContext";
import { supabase } from "@/lib/superbase";

// Validation schema
const formSchema = z.object({
  full_name: z.string().nonempty({ message: "Full Name is required." }),
  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .email("Invalid email"),
  phone_number: z
    .string()
    .regex(/^\d{10}$/, { message: "Phone number must be exactly 10 digits." }),
});

// Error Message component
const ErrorMessage = ({ message }: { message: string }) => (
  <p className="text-sm text-red-500 mt-1">{message}</p>
);

// Email sending
async function sendEstimateEmail(finalData: any) {
  const response = await fetch("/api/send", {
    method: "POST",
    body: JSON.stringify(finalData),
  });

  if (!response.ok) throw new Error("Failed to send email");

  const result = await response.json();
  if (!result.success) throw new Error("Email sending failed");
}

export function StepFour({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const { formData, updateEstimate, resetEstimate } = useEstimate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: formData.full_name || "",
      email: formData.email || "",
      phone_number: formData.phone_number || "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    try {
      // 1. Check for duplicate email
      const { data: existingEmail, error: emailCheckError } = await supabase
        .from("estimates")
        .select("email")
        .eq("email", values.email)
        .maybeSingle();

      if (emailCheckError) throw emailCheckError;

      if (existingEmail) {
        form.setError("email", {
          type: "manual",
          message: "This email has already been used for an estimate.",
        });

        toast({
          title: "Duplicate Email",
          description: "This email is already registered. Please use another.",
          variant: "destructive",
        });

        setLoading(false);
        return;
      }

      // 2. Check for duplicate phone number
      const { data: existingPhone, error: phoneCheckError } = await supabase
        .from("estimates")
        .select("phone_number")
        .eq("phone_number", values.phone_number)
        .maybeSingle();

      if (phoneCheckError) throw phoneCheckError;

      if (existingPhone) {
        form.setError("phone_number", {
          type: "manual",
          message: "This phone number has already been used.",
        });

        toast({
          title: "Duplicate Phone Number",
          description: "This phone number is already registered. Try another.",
          variant: "destructive",
        });

        setLoading(false);
        return;
      }

      // Upload floor plan if it's a File
      let floorPlanUrl = "";

      if (formData.floor_plan_url instanceof File) {
        const file = formData.floor_plan_url;

        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("floorplans")
          .upload(`floorplans/${Date.now()}_${file.name}`, file);

        if (uploadError)
          throw new Error("Upload failed: " + uploadError.message);

        const { data: urlData } = supabase.storage
          .from("floorplans")
          .getPublicUrl(uploadData.path);

        floorPlanUrl = urlData.publicUrl;
      } else if (typeof formData.floor_plan_url === "string") {
        floorPlanUrl = formData.floor_plan_url;
      }

      const finalData = {
        ...formData,
        ...values,
        floor_plan_url: floorPlanUrl,
      };

      const { data, error } = await supabase
        .from("estimates")
        .insert([finalData]);

      if (error) throw error;

      await sendEstimateEmail(finalData);

      toast({
        title: "Estimate Submitted",
        description: "Your estimate request has been received!",
      });

      updateEstimate(finalData);
      form.reset();
      resetEstimate();
      onNext();
    } catch (error) {
      console.error("Form submit error:", error);
      toast({
        title: "Unexpected Error",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="w-full max-w-md mx-auto bg-white p-8 rounded-xl space-y-6 text-[#1E1FBF]"
    >
      <h2 className="text-2xl font-semibold text-center text-[#1E1FBF]">
        Enter Your Contact Details
      </h2>

      <div className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="text-sm font-medium text-[#1E1FBF]">
            Full Name
          </label>
          <Input
            placeholder="Your Full Name"
            {...form.register("full_name")}
            className="rounded-md border-[#d0d0ff] focus:border-[#1E1FBF] focus:ring-1 focus:ring-[#1E1FBF]"
          />
          {form.formState.errors.full_name && (
            <ErrorMessage
              message={form.formState.errors.full_name.message || ""}
            />
          )}
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium text-[#1E1FBF]">
            Email Address
          </label>
          <Input
            placeholder="you@example.com"
            {...form.register("email")}
            className="rounded-md border-[#d0d0ff] focus:border-[#1E1FBF] focus:ring-1 focus:ring-[#1E1FBF]"
          />
          {form.formState.errors.email && (
            <ErrorMessage message={form.formState.errors.email.message || ""} />
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label className="text-sm font-medium text-[#1E1FBF]">
            Phone Number
          </label>
          <Input
            type="tel"
            placeholder="Enter your phone number"
            {...form.register("phone_number")}
            className="rounded-md border-[#d0d0ff] focus:border-[#1E1FBF] focus:ring-1 focus:ring-[#1E1FBF]"
          />
          {form.formState.errors.phone_number && (
            <ErrorMessage
              message={form.formState.errors.phone_number.message || ""}
            />
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <Button
            type="button"
            variant="outline"
            onClick={onBack}
            className="border-[#1E1FBF] text-[#1E1FBF] hover:bg-[#f0f3ff]"
          >
            Back
          </Button>
          <Button
            type="submit"
            className="w-full bg-[#1E1FBF] hover:bg-[#1d1db3] text-white"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </div>
    </form>
  );
}
