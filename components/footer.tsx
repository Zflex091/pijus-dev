import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[#d8ff3e] text-black">
      <div className="site-shell flex flex-col gap-5 border-t border-black/20 py-7 text-xs uppercase tracking-[0.14em] text-black/55 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.name}</p>
        <p>Sukurta kruopščiai. Veikia greitai.</p>
      </div>
    </footer>
  );
}
