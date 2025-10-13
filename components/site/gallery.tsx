"use client"

export function Gallery() {
  const items = [
    { title: "Life with dinosaurs", size: "lg", query: "lush forest cinematic still" },
    { title: "The Story of Julius Caesar", size: "md", query: "ancient Rome cinematic street" },
    { title: "Turn images into videos", size: "md", query: "rocky coast sunset seascape" },
    { title: "The story of Cleopatra", size: "sm", query: "Cleopatra regal portrait cinematic" },
    { title: "Apollo 11 Moon Landing", size: "sm", query: "rocket launch smoke trail night" },
    { title: "Japanese Ink Style", size: "lg", query: "samurai silhouette red moon ink art" },
  ] as const

  const sizeMap: Record<string, string> = {
    sm: "row-span-1",
    md: "row-span-1",
    lg: "row-span-2",
  }

  return (
    <section id="features" className="container mx-auto px-4 py-16 md:py-24">
      <h2 className="text-center text-2xl font-semibold md:text-3xl">Create unique faceless videos for every niche</h2>
      <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-muted-foreground">
        From image generation to video creation, this tool can generate any style of video in seconds.
      </p>

      <div className="mt-8 grid auto-rows-[180px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {items.map((item, i) => (
          <figure
            key={i}
            className={`relative overflow-hidden rounded-xl border border-border bg-card ${sizeMap[item.size]}`}
          >
            <img
              src={`/.jpg?height=600&width=800&query=${encodeURIComponent(item.query)}`}
              alt={item.title}
              className="h-full w-full object-cover"
            />
            <figcaption className="pointer-events-none absolute inset-x-3 bottom-3 rounded-md bg-background/60 px-2 py-1 text-xs text-foreground backdrop-blur">
              {item.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
