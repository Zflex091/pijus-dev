"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation, siteConfig } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-white/10 bg-[#090909]/92 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="site-shell flex h-[76px] items-center justify-between md:h-[92px]">
        <a href="#top" className="focus-ring group inline-flex items-center gap-3" aria-label="Pijus.dev pradžia">
          <span className="grid size-9 place-items-center rounded-full border border-white/15 text-[11px] font-semibold transition group-hover:border-white/40">
            P
          </span>
          <span className="text-[17px] font-semibold tracking-[-0.045em]">
            Pijus<span className="text-[#d8ff3e]">.</span>dev
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Pagrindinė navigacija">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="nav-link focus-ring">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={`tel:${siteConfig.phone}`}
          className="focus-ring hidden items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-[12px] font-medium uppercase tracking-[0.14em] transition hover:border-[#d8ff3e] hover:bg-[#d8ff3e] hover:text-black md:inline-flex"
        >
          Skambinti
          <ArrowUpRight size={15} />
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Uždaryti meniu" : "Atidaryti meniu"}
          className="focus-ring grid size-11 place-items-center rounded-full border border-white/15 md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[76px] z-40 bg-[#090909] md:hidden"
          >
            <div className="site-shell flex h-full flex-col pb-8 pt-10">
              <nav className="flex flex-col" aria-label="Mobili navigacija">
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.07 * index }}
                    className="flex items-center justify-between border-b border-white/10 py-6 font-display text-[clamp(2.6rem,13vw,4.5rem)] leading-none tracking-[-0.065em]"
                  >
                    {item.label}
                    <ArrowUpRight className="text-[#d8ff3e]" size={24} />
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto border-t border-white/10 pt-6">
                <p className="mb-4 text-xs uppercase tracking-[0.18em] text-white/45">Tiesioginis kontaktas</p>
                <a href={`tel:${siteConfig.phone}`} className="text-xl font-medium tracking-[-0.03em]">
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
