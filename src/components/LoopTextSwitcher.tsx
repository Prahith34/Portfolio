import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const texts = ["React JS Developer", "Frontend Engineer"];

export function LoopTextSwitcher() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative inline-flex items-center justify-center
                 overflow-hidden text-[12px] rounded-lg border border-neutral-300
                 px-4 py-0.5 bg-white dark:bg-neutral-900
                 min-w-[145px]"   // 👈 fixed minimum width
    >
      <div className="relative h-[1.5em] flex items-center justify-center w-full">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute"
          >
            {texts[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}