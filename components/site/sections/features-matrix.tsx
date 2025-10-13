"use client"

import Image from "next/image"

const features = [
  { title: "Create Youtube Shorts", desc: "AI generated content. No recording needed." },
  { title: "Create viral Tiktok videos", desc: "No dancing or lip sync required." },
  { title: "Publish on Tiktok & Youtube", desc: "Publish directly from the app." },
  { title: "100% Powered by AI", desc: "Latest powerful models for engaging content." },
  { title: "AI Generated Voiceovers", desc: "Realistic voices with leading providers." },
  { title: "Background music", desc: "A library of thousands of songs." },
  { title: "And much more…", desc: "New features every week." },
]

export default function FeaturesMatrix() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <header className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-semibold">Creating Viral Faceless Videos Has Never Been So Easy</h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {features.slice(0, 4).map((f, i) => (
          <div key={i} className="card-dark p-6 min-h-[160px]">
            <h3 className="font-semibold">{f.title}</h3>
            <p className="text-neutral-400 mt-2">{f.desc}</p>
          </div>
        ))}
        <div className="card-dark p-0 md:col-span-2 overflow-hidden">
          <Image
            src="/images/section-features-grid.png"
            alt="Features spotlight"
            width={1200}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>
        {features.slice(4).map((f, i) => (
          <div key={i} className="card-dark p-6 min-h-[160px]">
            <h3 className="font-semibold">{f.title}</h3>
            <p className="text-neutral-400 mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
