"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { X, CheckCircle2, Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

const ambassadorSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please provide a valid email address"),
  phone: z.string().min(8, "Phone number must be at least 8 digits"),
  ward: z.string().min(2, "Please specify your ward or neighborhood"),
  motivation: z
    .string()
    .min(20, "Please share a brief motivation (minimum 20 characters)"),
});

type AmbassadorFormData = z.infer<typeof ambassadorSchema>;

interface AmbassadorApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AmbassadorApplyModal({ isOpen, onClose }: AmbassadorApplyModalProps) {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AmbassadorFormData>({
    resolver: zodResolver(ambassadorSchema),
  });

  if (!isOpen) return null;

  const onSubmit = async (data: AmbassadorFormData) => {
    // Simulate submission delay
    await new Promise((r) => setTimeout(r, 600));
    console.log("Ambassador nomination submitted:", data);
    setIsSuccess(true);
  };

  const handleClose = () => {
    setIsSuccess(false);
    reset();
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Apply to become an Ambassador"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-lg bg-[#121218] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto">
        <button
          onClick={handleClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-lg text-[#9496A1] hover:text-[#FFFFF0] hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-emerald-400"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-[#FFFFF0] font-heading">
              Application Received!
            </h2>
            <p className="text-sm text-[#9496A1] max-w-md mx-auto leading-relaxed">
              Thank you for stepping up as a community energy champion. Our regional coordinator will
              review your details and reach out within 2 business days.
            </p>
            <div className="pt-4">
              <Button variant="primary" onClick={handleClose}>
                Return to Directory
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                Community Leadership
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#FFFFF0] font-heading">
                Become a Ward Ambassador
              </h2>
              <p className="text-xs text-[#9496A1] mt-1">
                Help organize rooftop solar mapping and energy audits in your residential area.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-medium text-[#E2E2EA] mb-1"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="e.g. Priyanshu Mehta"
                  {...register("fullName")}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0B0F] border border-white/10 text-[#FFFFF0] placeholder-[#606170] text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
                {errors.fullName && (
                  <p className="text-xs text-rose-400 mt-1">{errors.fullName.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-[#E2E2EA] mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="name@domain.com"
                    {...register("email")}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0B0F] border border-white/10 text-[#FFFFF0] placeholder-[#606170] text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-400 mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-medium text-[#E2E2EA] mb-1"
                  >
                    Phone / WhatsApp
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    {...register("phone")}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0B0F] border border-white/10 text-[#FFFFF0] placeholder-[#606170] text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                  {errors.phone && (
                    <p className="text-xs text-rose-400 mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="ward"
                  className="block text-xs font-medium text-[#E2E2EA] mb-1"
                >
                  Ward / Neighborhood
                </label>
                <input
                  id="ward"
                  type="text"
                  placeholder="e.g. East Cantonment / Ward 14"
                  {...register("ward")}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0B0F] border border-white/10 text-[#FFFFF0] placeholder-[#606170] text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
                {errors.ward && (
                  <p className="text-xs text-rose-400 mt-1">{errors.ward.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="motivation"
                  className="block text-xs font-medium text-[#E2E2EA] mb-1"
                >
                  Why do you want to lead clean energy in your ward?
                </label>
                <textarea
                  id="motivation"
                  rows={3}
                  placeholder="Tell us about your community interest or local energy challenges..."
                  {...register("motivation")}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0B0F] border border-white/10 text-[#FFFFF0] placeholder-[#606170] text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 resize-none"
                />
                {errors.motivation && (
                  <p className="text-xs text-rose-400 mt-1">{errors.motivation.message}</p>
                )}
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <Button type="button" variant="ghost" size="sm" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                type="submit"
                variant="primary"
                size="md"
                disabled={isSubmitting}
                icon={<Send className="w-4 h-4" />}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
