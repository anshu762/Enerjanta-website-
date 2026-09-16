"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface FadeInWhenVisibleProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export function FadeInWhenVisible({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  yOffset = 24,
}: FadeInWhenVisibleProps) {
  const shouldReduceMotion = useReducedMotion();

  // If user has prefers-reduced-motion set, eliminate translateY and transition instantaneously
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
