"use client"

import Image from "next/image"

export default function SectionUltraSpeed() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <header className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-semibold">Turn Prompts Into Videos At Ultra Speed</h2>
        <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
          Create engaging videos for TikTok and YouTube on autopilot and publish daily without lifting a finger.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card-dark p-6">
          <h3 className="text-lg font-semibold mb-2">Tell Stories with AI</h3>
          <p className="text-neutral-400 mb-4">From writing script to adding captions, it does it all.</p>
          <div className="relative h-[320px] w-full rounded-xl overflow-hidden border border-white/10">
            <Image src="/images/section-ultra-speed.png" alt="Script UI preview" fill className="object-cover" />
          </div>
        </div>

        <div className="card-dark p-6">
          <h3 className="text-lg font-semibold mb-2">Edit Videos in Seconds</h3>
          <p className="text-neutral-400 mb-4">Beautiful viral videos that get views and subscribers.</p>
          <div className="relative h-[320px] w-full rounded-xl overflow-hidden border border-white/10">
            <Image src="/images/section-pipeline.png" alt="Editor preview" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
