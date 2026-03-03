"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
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
import { Textarea } from "@/components/ui/textarea";

const inquirySchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  message: z.string().min(10, "Please share a few details."),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

export function InquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  const form = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: InquiryFormData) => {
    setIsSubmitting(true);
    setServerMessage(null);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as { message?: string };
      if (!response.ok) {
        throw new Error(data.message ?? "Something went wrong.");
      }

      setServerMessage(data.message ?? "Thank you. We will contact you shortly.");
      form.reset();
    } catch (error) {
      setServerMessage(error instanceof Error ? error.message : "Unable to submit inquiry.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-10 border border-[#E5DCD3] p-6 md:p-10">
      <p className="meta-text">Inquiry Form</p>
      <h3 className="mt-3 font-serif text-3xl">Begin Your Made-to-Order Request</h3>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 grid gap-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs tracking-[0.16em] uppercase text-[#4A4A4A]">
                  Name
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Your full name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs tracking-[0.16em] uppercase text-[#4A4A4A]">
                  Email
                </FormLabel>
                <FormControl>
                  <Input type="email" {...field} placeholder="name@example.com" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs tracking-[0.16em] uppercase text-[#4A4A4A]">
                  Phone
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="+973" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs tracking-[0.16em] uppercase text-[#4A4A4A]">
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Tell us about the occasion, fit preference, and timeline."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
              {isSubmitting ? "Submitting..." : "Send Inquiry"}
            </Button>
            {serverMessage ? <p className="text-sm text-[#4A4A4A]">{serverMessage}</p> : null}
          </div>
        </form>
      </Form>
    </div>
  );
}
