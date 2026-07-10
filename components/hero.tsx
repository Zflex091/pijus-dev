"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, CircleCheck } from "lucide-react";
import { siteConfig } from "@/data/site";

const reveal = {
  hidden: { y: "110%" },
  visible: { y: 0 },
};

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden border-b border-white/10 pt-[76px] md:pt-[92px]">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="site-shell relative flex min-h-[calc(100svh-76px)] flex-col justify-between py-8 md:min-h-[calc(100svh-92px)] md:py-12">
        <div className="flex items-start justify-between gap-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="max-w-[260px] text-xs uppercase leading-5 tracking-[0.16em] text-white/48"
          >
            Interneto svetainės ir sistemos verslui visoje Lietuvoje
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="hidden items-center gap-2 text-xs uppercase tracking-[0.14em] text-white/48 sm:flex"
          >
            <span className="size-2 rounded-full bg-[#d8ff3e] shadow-[0_0_0_5px_rgba(216,255,62,.08)]" />
            Priimu naujus projektus
          </motion.div>
        </div>

        <div className="my-auto py-14 md:py-20">
          <h1 className="font-display text-[clamp(4.35rem,12.2vw,11.5rem)] font-medium leading-[0.78] tracking-[-0.078em]">
            <span className="block overflow-hidden pb-[0.09em]">
              <motion.span className="block" variants={reveal} initial="hidden" animate="visible" transition={{ duration: 0.85, ease: [0.2, 0.8, 0.2, 1] }}>
                Svetainės,
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.09em] pl-[8vw] text-white/38 md:pl-[14vw]">
              <motion.span className="block" variants={reveal} initial="hidden" animate="visible" transition={{ duration: 0.85, delay: 0.12, ease: [0.2, 0.8, 0.2, 1] }}>
                kurios dirba
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.09em] text-[#d8ff3e]">
              <motion.span className="block" variants={reveal} initial="hidden" animate="visible" transition={{ duration: 0.85, delay: 0.24, ease: [0.2, 0.8, 0.2, 1] }}>
                jūsų verslui.
              </motion.span>
            </span>
          </h1>
        </div>

        <div className="grid items-end gap-8 border-t border-white/10 pt-7 md:grid-cols-[1fr_auto_1fr]">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }} className="flex gap-8">
            <div>
              <p className="font-display text-4xl tracking-[-0.06em] md:text-5xl">30<span className="text-[#d8ff3e]">+</span></p>
              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-white/42">Įgyvendintų projektų</p>
            </div>
            <div>
              <p className="font-display text-4xl tracking-[-0.06em] md:text-5xl">2<span className="text-[#d8ff3e]">+</span></p>
              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-white/42">Metų patirties</p>
            </div>
          </motion.div>

          <a
            href="#paslaugos"
            className="focus-ring group order-3 grid size-16 place-items-center rounded-full border border-white/15 transition hover:border-[#d8ff3e] hover:bg-[#d8ff3e] hover:text-black md:order-none md:size-20"
            aria-label="Peržiūrėti paslaugas"
          >
            <ArrowDownRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
          </a>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="md:justify-self-end md:text-right">
            <p className="max-w-[420px] text-base leading-7 text-white/65 md:text-lg">
              Kuriu greitus, aiškius ir patikimus skaitmeninius sprendimus — be šabloninio dizaino ir nereikalingo sudėtingumo.
            </p>
            <a href={`tel:${siteConfig.phone}`} className="focus-ring mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#d8ff3e]">
              Aptarti projektą <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-5 md:hidden">
          {["Individualus dizainas", "Greitas paleidimas", "Pilna mobili versija"].map((item) => (
            <span key={item} className="flex items-center gap-2 text-xs text-white/55">
              <CircleCheck size={14} className="text-[#d8ff3e]" /> {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
