"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { pricing } from "@/data/site";
import { Reveal } from "./reveal";

export function Pricing() {
  return (
    <section id="kainos" className="section-space relative overflow-hidden border-b border-white/10">
      <div className="pricing-mark pointer-events-none absolute -right-8 top-10 select-none font-display text-[28vw] leading-none text-white/[0.022]">€</div>
      <div className="site-shell relative">
        <div className="mb-16 grid gap-8 md:mb-24 md:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <p className="section-label">02 / Kainos</p>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <h2 className="section-title max-w-[850px]">Aiškus startas be paslėptų mokesčių.</h2>
              <p className="mt-7 max-w-[640px] text-base leading-7 text-white/55 md:text-lg">
                Kiekvienas projektas įvertinamas individualiai, tačiau pagrindinės kainos leidžia iš karto suprasti biudžeto ribas.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid overflow-hidden border border-white/10 lg:grid-cols-[1.15fr_.85fr]">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="flex min-h-[440px] flex-col justify-between bg-[#d8ff3e] p-7 text-black sm:p-10 md:p-14"
          >
            <div className="flex items-start justify-between gap-5">
              <span className="text-xs font-semibold uppercase tracking-[0.16em]">Dažniausias pasirinkimas</span>
              <span className="grid size-11 place-items-center rounded-full border border-black/20">01</span>
            </div>
            <div>
              <h3 className="max-w-[640px] font-display text-[clamp(3rem,7vw,6.8rem)] leading-[0.88] tracking-[-0.07em]">
                {pricing[0].title}
              </h3>
              <div className="mt-10 flex flex-wrap items-end justify-between gap-5 border-t border-black/20 pt-6">
                <p className="font-display text-4xl tracking-[-0.055em] sm:text-6xl">{pricing[0].price}</p>
                <p className="max-w-[310px] text-sm leading-6 text-black/65">{pricing[0].note}</p>
              </div>
            </div>
          </motion.div>

          <div>
            {pricing.slice(1).map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group border-b border-white/10 p-6 last:border-b-0 sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl tracking-[-0.045em] sm:text-3xl">{item.title}</h3>
                    <p className="mt-3 max-w-[390px] text-sm leading-6 text-white/45">{item.note}</p>
                  </div>
                  <ArrowRight size={20} className="shrink-0 text-white/25 transition group-hover:translate-x-1 group-hover:text-[#d8ff3e]" />
                </div>
                <p className="mt-7 text-lg font-medium tracking-[-0.025em] text-[#d8ff3e]">{item.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
