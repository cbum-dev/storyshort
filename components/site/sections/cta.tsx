"use client"

import { AnimatedGrid } from "@/components/site/animated-grid"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section id="cta" className="relative isolate py-24">
      <AnimatedGrid />
      <div className="relative mx-auto w-[min(1100px,92vw)]">
        <div className="surface mx-auto max-w-4xl px-6 py-14 text-center">
          <h2 className="text-pretty text-3xl md:text-5xl font-semibold">Say Goodbye To Boring Videos</h2>
          <p className="mt-3 text-foreground/70">
            Get started with StoryShort.ai today and start creating engaging videos for Tiktok and Youtube on autopilot.
          </p>
          <div className="mt-6 flex justify-center">
            <Button className="bg-brand text-black hover:brightness-95">Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
