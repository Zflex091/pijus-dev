"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/site";
import { Reveal } from "./reveal";

export function Services() {
  return (
    <section id="paslaugos" className="section-space border-b border-white/10">
      <div className="site-shell">
        <div className="mb-16 grid gap-8 md:mb-24 md:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <p className="section-label">01 / Paslaugos</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="section-title max-w-[900px]">
              Nuo pirmo eskizo iki veikiančio produkto.
            </h2>
          </Reveal>
        </div>

        <div className="border-t border-white/10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.04 }}
                className="service-row group"
              >
                <div className="flex items-start gap-4 md:gap-6">
                  <span className="pt-1 text-xs tracking-[0.15em] text-white/34">{service.number}</span>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/12 transition duration-500 group-hover:border-[#d8ff3e] group-hover:text-[#d8ff3e] md:size-13">
                    <Icon size={19} strokeWidth={1.6} />
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-[clamp(2rem,4.2vw,4.6rem)] leading-none tracking-[-0.055em] transition duration-500 group-hover:translate-x-2">
                    {service.title}
                  </h3>
                  <p className="mt-5 max-w-[610px] text-sm leading-7 text-white/55 md:text-base">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-col gap-3 md:items-end">
                  {service.details.map((detail) => (
                    <span key={detail} className="text-xs uppercase tracking-[0.12em] text-white/38">
                      {detail}
                    </span>
                  ))}
                </div>

                <ArrowUpRight className="hidden text-white/22 transition duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#d8ff3e] lg:block" size={28} />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
