"use client"

import Image from "next/image"

export default function Pipeline() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr,0.9fr] gap-8 items-center">
        <div className="card-dark p-6">
          <h3 className="text-lg font-semibold mb-2">From Script to Video</h3>
          <p className="text-neutral-400 mb-4">Pick a style, voice, and music—your video is generated automatically.</p>
          <div className="relative h-[380px] w-full rounded-xl overflow-hidden border border-white/10">
            <Image src="/images/section-pipeline.png" alt="Pipeline flow" fill className="object-cover" />
          </div>
        </div>
        <div className="relative">
          <div className="phone h-[520px] w-[280px] mx-auto">
            <Image src="/images/section-pipeline.png" alt="Generated Video" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
