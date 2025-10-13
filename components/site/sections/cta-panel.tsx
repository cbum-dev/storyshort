"use client"
import { AnimatedGrid } from "@/components/site/animated-grid"

export default function CtaPanel() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-24">
      <AnimatedGrid className="grid-fade-mask rounded-[1.25rem]" />
      <div className="relative card-dark rounded-[1.25rem] px-6 md:px-16 py-14 text-center">
        <h3 className="text-3xl md:text-4xl font-semibold">Say Goodbye To Boring Videos</h3>
        <p className="mt-3 text-neutral-400 max-w-2xl mx-auto">
          Get started today and create engaging videos for TikTok and YouTube on autopilot.
        </p>
        <a href="#start" className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-black">
          Get Started
        </a>
      </div>
    </section>
  )
}
