"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  return <motion.div style={{ scaleX: scrollYProgress }} className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-[#d8ff3e]" />;
}
