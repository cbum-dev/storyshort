import Image from "next/image"

export function SectionEasy() {
  return (
    <section className="py-20">
      <div className="mx-auto w-[min(1100px,92vw)]">
        <h2 className="text-center text-3xl md:text-5xl font-semibold">Telling Stories has never been this easy</h2>
        <p className="mt-3 text-center text-foreground/70 max-w-2xl mx-auto">
          From image generation to video generation, StoryShort can generate any style of video in seconds.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 surface p-4 md:p-8">
          <div className="aspect-[16/10] rounded-xl overflow-hidden">
            <Image
              src="/public/images/section-easy.png"
              alt="Text to video tool"
              width={1200}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="aspect-[16/10] rounded-xl overflow-hidden">
            <Image
              src="/public/images/section-easy.png"
              alt="AI photos grid"
              width={1200}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export function SectionUltraSpeed() {
  return (
    <section className="py-20">
      <div className="mx-auto w-[min(1100px,92vw)]">
        <h2 className="text-center text-3xl md:text-5xl font-semibold">Turn Prompts Into Videos At Ultra Speed</h2>
        <p className="mt-3 text-center text-foreground/70 max-w-2xl mx-auto">
          What if you could create engaging videos for Tiktok and Youtube on autopilot and publish daily?
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 surface p-4 md:p-8">
          <div className="aspect-[16/10] rounded-xl overflow-hidden">
            <Image
              src="/public/images/section-ultra-speed.png"
              alt="Tell stories with AI"
              width={1200}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="aspect-[16/10] rounded-xl overflow-hidden">
            <Image
              src="/public/images/section-ultra-speed.png"
              alt="Edit in seconds"
              width={1200}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
