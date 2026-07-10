import { BackToTop } from "@/components/back-to-top";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { LoadingScreen } from "@/components/loading-screen";
import { Navbar } from "@/components/navbar";
import { Pricing } from "@/components/pricing";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { Services } from "@/components/services";
import { SmoothScroll } from "@/components/smooth-scroll";

export default function HomePage() {
  return (
    <SmoothScroll>
      <LoadingScreen />
      <ScrollIndicator />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </SmoothScroll>
  );
}
