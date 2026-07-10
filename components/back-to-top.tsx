"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Grįžti į puslapio viršų"
      className="focus-ring fixed bottom-5 right-5 z-40 grid size-12 place-items-center rounded-full border border-white/15 bg-[#111] text-white shadow-xl transition hover:border-[#d8ff3e] hover:bg-[#d8ff3e] hover:text-black md:bottom-8 md:right-8"
    >
      <ArrowUp size={18} />
    </button>
  );
}
