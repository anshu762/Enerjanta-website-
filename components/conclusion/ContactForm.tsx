"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/Button";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please provide a valid email address"),
  ward: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("idle");
    setServerError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        throw new Error(json.error || "Failed to submit message");
      }

      setStatus("success");
      reset();
    } catch (err: unknown) {
      console.error("Form submission error:", err);
      setStatus("error");
      setServerError(
        err instanceof Error ? err.message : "Something went wrong. Please try again later."
      );
    }
  };

  const handleSendAnother = () => {
    setStatus("idle");
    setServerError(null);
  };

  if (status === "success") {
    return (
      <div className="p-8 sm:p-10 rounded-2xl bg-[#14141E] border border-emerald-500/30 text-center space-y-4 shadow-xl">
        <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-[#FFFFF0] font-heading">
          Thank You for Getting Involved!
        </h3>
        <p className="text-sm text-[#9496A1] max-w-md mx-auto leading-relaxed">
          Your message has been received by our community coordination team. We will review your inquiry
          and get back to you within 2 business days.
        </p>
        <div className="pt-4">
          <Button
            type="button"
            variant="secondary"
            size="md"
            onClick={handleSendAnother}
            icon={<RefreshCw className="w-4 h-4" />}
            iconPosition="left"
          >
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div id="get-involved-form" className="p-6 sm:p-10 rounded-2xl bg-[#121218] border border-white/10 shadow-2xl space-y-6">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Direct Action Channel</span>
        </div>
        <h3 className="text-2xl font-bold text-[#FFFFF0] font-heading">
          Get Involved with Enerjanta
        </h3>
        <p className="text-xs sm:text-sm text-[#9496A1] leading-relaxed">
          Whether you want to bring a clean energy audit to your ward, propose a neighborhood
          microgrid, or partner with us — send us a message below.
        </p>
      </div>

      {status === "error" && (
        <div className="p-4 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-start gap-3 text-rose-300 text-xs">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{serverError || "An error occurred while sending your message. Please try again."}</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name and Email Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-name" className="block text-xs font-medium text-[#E2E2EA] mb-1.5">
              Full Name <span className="text-emerald-400">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              placeholder="e.g. Priya Sharma"
              {...register("name")}
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0B0F] border border-white/10 text-sm text-[#FFFFF0] placeholder-[#606170] focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors"
            />
            {errors.name && (
              <p className="text-xs text-rose-400 mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="contact-email" className="block text-xs font-medium text-[#E2E2EA] mb-1.5">
              Email Address <span className="text-emerald-400">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              placeholder="priya@example.com"
              {...register("email")}
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0B0F] border border-white/10 text-sm text-[#FFFFF0] placeholder-[#606170] focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors"
            />
            {errors.email && (
              <p className="text-xs text-rose-400 mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Ward Field */}
        <div>
          <label htmlFor="contact-ward" className="block text-xs font-medium text-[#E2E2EA] mb-1.5">
            Municipal Ward / Neighborhood <span className="text-[#9496A1]">(Optional)</span>
          </label>
          <input
            id="contact-ward"
            type="text"
            placeholder="e.g. Ward 12, East Cantonment"
            {...register("ward")}
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0B0F] border border-white/10 text-sm text-[#FFFFF0] placeholder-[#606170] focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors"
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="contact-message" className="block text-xs font-medium text-[#E2E2EA] mb-1.5">
            Your Message or Inquiry <span className="text-emerald-400">*</span>
          </label>
          <textarea
            id="contact-message"
            rows={4}
            placeholder="Share how you'd like to collaborate, request an energy literacy kiosk, or ask questions about our data..."
            {...register("message")}
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0B0F] border border-white/10 text-sm text-[#FFFFF0] placeholder-[#606170] focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 resize-none transition-colors"
          />
          {errors.message && (
            <p className="text-xs text-rose-400 mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2 flex items-center justify-between">
          <p className="text-[11px] text-[#9496A1]">
            We value your privacy. No data is shared with commercial vendors.
          </p>
          <Button
            type="submit"
            variant="primary"
            size="md"
            disabled={isSubmitting}
            icon={isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            className="shrink-0"
          >
            {isSubmitting ? "Sending..." : "Submit Message"}
          </Button>
        </div>
      </form>
    </div>
  );
}
