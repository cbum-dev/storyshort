"use client"

import Image from "next/image"

export default function SectionEasy() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <header className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-semibold">Telling Stories has never been this easy</h2>
        <p className="mt-4 text-neutral-400">
          From Image generation to video generation, StoryShort can generate any style of video.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card-dark p-6">
          <h3 className="text-xl font-semibold mb-2">The most powerful Text to Video tool</h3>
          <p className="text-neutral-400 mb-4">
            Generate a script with AI, choose a style, a voice and a background, and get a video in seconds.
          </p>
          <div className="phone h-[320px] w-full relative">
            <Image src="/images/section-ultra-speed.png" alt="Text to video UI" fill className="object-cover" />
          </div>
        </div>
        <div className="card-dark p-6">
          <h3 className="text-xl font-semibold mb-2">AI Photo (realistic images)</h3>
          <p className="text-neutral-400 mb-4">Generate realistic images with advanced AI models.</p>
          <div className="phone h-[320px] w-full relative">
            <Image src="/images/section-easy.png" alt="AI photo stack" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
