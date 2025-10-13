import { Navbar } from "@/components/site/navbar"
import { Hero } from "@/components/site/hero"
import { Gallery } from "@/components/site/gallery"
import { Capabilities } from "@/components/site/capabilities"
import { Pricing } from "@/components/site/pricing"
import { FAQ } from "@/components/site/faq"
import { Footer } from "@/components/site/footer"
import SectionEasy from "@/components/site/sections/easy"
import SectionUltraSpeed from "@/components/site/sections/ultra-speed"
import FeaturesMatrix from "@/components/site/sections/features-matrix"
import Pipeline from "@/components/site/sections/pipeline"
import CtaPanel from "@/components/site/sections/cta-panel"
import VideoShowcase from "@/components/site/sections/video-showcase"

export default function Page() {
  return (
    <main className="min-h-dvh bg-background text-foreground">
      <Navbar />
      <Hero />
      <VideoShowcase />
      <SectionEasy />
      <SectionUltraSpeed />
      <FeaturesMatrix />
      <Pipeline />
      <Gallery />
      <Capabilities />
      <Pricing />
      <FAQ />
      <CtaPanel />
      <Footer />
    </main>
  )
}
