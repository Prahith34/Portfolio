import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export function HoverTextSwitcher() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="inline-block"
    >
      <div className="relative overflow-hidden rounded-full border px-6 py-2 bg-white dark:bg-neutral-900">
        <AnimatePresence mode="wait">
          <motion.span
            key={hovered ? "frontend" : "design"}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            {hovered ? "Frontend Engineer" : "React Developer"}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}