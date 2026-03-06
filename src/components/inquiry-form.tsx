"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useLanguage } from "@/lib/context/language-context";
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

type InquiryFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export function InquiryForm() {
  const { locale } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  const copy = useMemo(
    () =>
      locale === "ar"
        ? {
            formLabel: "نموذج الاستفسار",
            heading: "ابدئي طلبك للتفصيل حسب الطلب",
            name: "الاسم",
            email: "البريد الإلكتروني",
            phone: "الهاتف",
            message: "الرسالة",
            namePlaceholder: "الاسم الكامل",
            emailPlaceholder: "name@example.com",
            phonePlaceholder: "+973",
            messagePlaceholder: "شاركي معنا المناسبة، تفضيل المقاس، والجدول الزمني.",
            submit: "إرسال الاستفسار",
            submitting: "جارٍ الإرسال...",
            success: "شكرًا لك. سنتواصل معك قريبًا.",
            genericError: "حدث خطأ غير متوقع.",
            submitError: "تعذر إرسال الاستفسار.",
            validation: {
              name: "الرجاء إدخال الاسم.",
              email: "الرجاء إدخال بريد إلكتروني صحيح.",
              phone: "الرجاء إدخال رقم هاتف صحيح.",
              message: "الرجاء إضافة بعض التفاصيل.",
            },
          }
        : {
            formLabel: "Inquiry Form",
            heading: "Begin Your Made-to-Order Request",
            name: "Name",
            email: "Email",
            phone: "Phone",
            message: "Message",
            namePlaceholder: "Your full name",
            emailPlaceholder: "name@example.com",
            phonePlaceholder: "+973",
            messagePlaceholder: "Tell us about the occasion, fit preference, and timeline.",
            submit: "Send Inquiry",
            submitting: "Submitting...",
            success: "Thank you. We will contact you shortly.",
            genericError: "Something went wrong.",
            submitError: "Unable to submit inquiry.",
            validation: {
              name: "Please enter your name.",
              email: "Please enter a valid email.",
              phone: "Please enter a valid phone number.",
              message: "Please share a few details.",
            },
          },
    [locale],
  );

  const inquirySchema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, copy.validation.name),
        email: z.string().email(copy.validation.email),
        phone: z.string().min(7, copy.validation.phone),
        message: z.string().min(10, copy.validation.message),
      }),
    [copy],
  );

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

      await response.json();
      if (!response.ok) {
        throw new Error(copy.genericError);
      }

      setServerMessage(copy.success);
      form.reset();
    } catch (error) {
      setServerMessage(error instanceof Error ? error.message : copy.submitError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-10 border border-[#E5DCD3] p-6 md:p-10">
      <p className="meta-text">{copy.formLabel}</p>
      <h3 className="mt-3 font-serif text-3xl">{copy.heading}</h3>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 grid gap-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs tracking-[0.16em] uppercase text-[#1A1A1A]">
                  {copy.name}
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder={copy.namePlaceholder} />
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
                <FormLabel className="text-xs tracking-[0.16em] uppercase text-[#1A1A1A]">
                  {copy.email}
                </FormLabel>
                <FormControl>
                  <Input type="email" {...field} placeholder={copy.emailPlaceholder} />
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
                <FormLabel className="text-xs tracking-[0.16em] uppercase text-[#1A1A1A]">
                  {copy.phone}
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder={copy.phonePlaceholder} />
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
                <FormLabel className="text-xs tracking-[0.16em] uppercase text-[#1A1A1A]">
                  {copy.message}
                </FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder={copy.messagePlaceholder} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
              {isSubmitting ? copy.submitting : copy.submit}
            </Button>
            {serverMessage ? <p className="text-sm text-[#1A1A1A]">{serverMessage}</p> : null}
          </div>
        </form>
      </Form>
    </div>
  );
}
