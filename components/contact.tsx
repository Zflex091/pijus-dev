"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Facebook, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Reveal } from "./reveal";

const links = [
  { label: "Telefonas", value: siteConfig.phoneDisplay, href: `tel:${siteConfig.phone}`, icon: Phone },
  { label: "Messenger", value: "Pijus Lukavičius", href: siteConfig.messenger, icon: MessageCircle },
  { label: "Facebook", value: "Pijus Lukavičius", href: siteConfig.facebook, icon: Facebook },
];

export function Contact() {
  return (
    <section id="kontaktai" className="section-space bg-[#d8ff3e] text-black">
      <div className="site-shell">
        <div className="grid gap-14 lg:grid-cols-[1.25fr_.75fr] lg:gap-24">
          <div>
            <Reveal>
              <p className="mb-9 text-xs font-semibold uppercase tracking-[0.17em] text-black/50">03 / Kontaktai</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display text-[clamp(4rem,10vw,10rem)] leading-[0.78] tracking-[-0.078em]">
                Turite idėją?
                <span className="block text-black/35">Paverskime ją</span>
                <span className="block">rezultatu.</span>
              </h2>
            </Reveal>
          </div>

          <div className="flex flex-col justify-end">
            <Reveal delay={0.14}>
              <p className="max-w-[500px] text-lg leading-8 text-black/62 md:text-xl">
                Trumpai papasakokite, ko reikia. Atsakysiu, pasiūlysiu tinkamiausią sprendimą ir aiškiai įvardysiu kainą bei terminą.
              </p>
            </Reveal>

            <div className="mt-10 border-t border-black/20">
              {links.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * index }}
                    className="group flex items-center justify-between gap-4 border-b border-black/20 py-6"
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      <span className="grid size-11 shrink-0 place-items-center rounded-full border border-black/20 transition group-hover:bg-black group-hover:text-[#d8ff3e]">
                        <Icon size={18} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-black/45">{link.label}</p>
                        <p className="mt-1 truncate text-base font-medium sm:text-lg">{link.value}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="shrink-0 transition group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
