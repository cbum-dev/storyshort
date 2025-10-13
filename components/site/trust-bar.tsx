"use client"

export function TrustBar() {
  return (
    <div className="my-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground md:my-8">
      <div className="flex -space-x-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <img
            key={i}
            className="h-8 w-8 rounded-full border-2 border-background"
            src={`/diverse-group-avatars.png?height=64&width=64&query=avatar%20${i + 1}`}
            alt={`User ${i + 1}`}
          />
        ))}
      </div>
      <span>Trusted by 47,000+ creators</span>
      <span className="inline-flex items-center gap-1">
        {"★★★★★".split("").map((s, i) => (
          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
            <path d="M12 17.27L18.18 21l-1.63-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.45 4.73L5.82 21z" />
          </svg>
        ))}
      </span>
    </div>
  )
}
