"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Capabilities() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <h2 className="text-center text-2xl font-semibold md:text-3xl">Telling Stories has never been this easy</h2>
      <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-muted-foreground">
        From script generation to voiceover, captions, and rendering—produce videos in minutes.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card className="border border-border">
          <CardHeader>
            <CardTitle>Text to Video</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Write a prompt, select a style and voice, and get a full video in seconds.
            </p>
            <img
              src="/ai-video-editor-timeline-ui.jpg"
              alt="Text to video UI"
              className="w-full rounded-lg border border-border"
            />
          </CardContent>
        </Card>

        <Card className="border border-border">
          <CardHeader>
            <CardTitle>AI Photo (realistic images)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Generate photorealistic scenes to use as video shots or thumbnails.
            </p>
            <img
              src="/photorealistic-portrait-montage.jpg"
              alt="Photorealistic images"
              className="w-full rounded-lg border border-border"
            />
          </CardContent>
        </Card>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        {[
          { title: "Turn images into videos", query: "split image before after seascape" },
          { title: "Automatic Voiceover", query: "voice settings panel UI list" },
          { title: "Beautiful captions", query: "caption styles mobile preview desert" },
        ].map((f, i) => (
          <Card key={i} className="border border-border">
            <CardHeader>
              <CardTitle className="text-lg">{f.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src={`/.jpg?height=300&width=600&query=${encodeURIComponent(f.query)}`}
                alt={f.title}
                className="w-full rounded-lg border border-border"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
