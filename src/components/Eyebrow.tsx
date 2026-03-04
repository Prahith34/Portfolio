import { motion } from "motion/react";
import type { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  animate?: boolean;
}

export function Eyebrow({ children, animate = true }: EyebrowProps) {
  return (
    <motion.span
      initial={animate ? { opacity: 0, y: 8 } : false}
      animate={animate ? { opacity: 1, y: 0 } : false}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        inline-block
        rounded-sm 
        border
        border-neutral-200 dark:border-neutral-800
        bg-neutral-50 dark:bg-neutral-900
        px-4 py-1.5
        text-xs md:text-sm
        font-medium uppercase
        tracking-tight
        text-neutral-600 dark:text-neutral-300
      "
    >
      {children}
    </motion.span>
  );
}