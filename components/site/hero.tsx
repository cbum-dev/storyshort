"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import { AnimatedGrid } from "@/components/site/animated-grid"

function GridBG() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, color-mix(in oklab, var(--color-border) 70%, transparent) 1px, transparent 0)`,
        backgroundSize: "24px 24px",
        maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,0.9), rgba(0,0,0,0.2) 60%, transparent 80%)",
      }}
    />
  )
}

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export function Hero() {
  return (
    <section className="relative py-40 overflow-hidden">
      {/* moving dot grid background (Aceternity-like) */}
      <AnimatedGrid className="grid-fade-mask" />

      {/* subtle spotlight behind cards */}
      <div className="pointer-events-none absolute right-[-10%] top-[10%] -z-10 h-[380px] w-[380px] rounded-full bg-primary/10 blur-3xl" />
      <div className="container mx-auto grid grid-cols-1 items-center gap-10 px-4 pt-10 pb-16 md:grid-cols-2 md:pb-24">
        {/* Left: copy + CTAs */}
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/15 px-3 py-1 text-xs text-primary"
          >
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-sm bg-primary text-primary-foreground">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"></path>
              </svg>
            </span>
            <span className="font-medium">Powered by GPT-5</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="max-w-xl text-pretty text-4xl font-semibold leading-tight md:max-w-2xl md:text-6xl"
          >
            Create <span className="text-primary">viral</span> <span className="text-primary">faceless videos</span> on
            Auto‑Pilot.
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-4 max-w-xl text-muted-foreground">
            Create AI videos in minutes. Our AI creation tool writes scripts, generates scenes, voiceovers, and renders
            for you.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center gap-3">
            <Button size="lg" className="shadow-lg shadow-primary/25">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </motion.div>

          {/* Social proof avatars + stars */}
          <motion.div variants={fadeUp} className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[...Array(6)].map((_, i) => (
                <span key={i} className="inline-block h-8 w-8 overflow-hidden rounded-full ring-2 ring-black/40">
                  <Image
                    src="/images/hero-reference.png"
                    alt="Creator"
                    width={32}
                    height={32}
                    className="h-full w-full object-cover"
                  />
                </span>
              ))}
            </div>
            <div className="flex items-center gap-1 text-yellow-400" aria-label="5 stars">
              {"★★★★★".split("").map((s, i) => (
                <span key={i} aria-hidden>
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm text-neutral-400">Trusted by 27,000+ creators</span>
          </motion.div>
        </motion.div>

        {/* Right: animated fanned cards */}
        <div className="relative">
          <div className="pointer-events-none absolute -inset-x-10 -top-10 -z-10 h-[420px] rounded-full bg-primary/5 blur-3xl md:blur-2xl" />
          <div className="flex h-[340px] items-end justify-center gap-5 md:h-[380px]">
            <PhoneCard
              src="/vertical-video-frame-cinematic-portrait-scene.jpg"
              className="-rotate-6 translate-y-4"
              floatDelay={0.2}
              enterDelay={0.05}
            />
            <PhoneCard src="/vertical-video-frame-snowy-mountain.jpg" className="translate-y-0" floatDelay={0.0} enterDelay={0.15} />
            <PhoneCard
              src="/vertical-video-frame-astronaut-cockpit.jpg"
              className="rotate-6 translate-y-6"
              floatDelay={0.35}
              enterDelay={0.25}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function PhoneCard({
  src,
  className,
  floatDelay = 0,
  enterDelay = 0,
}: {
  src: string
  className?: string
  floatDelay?: number
  enterDelay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: enterDelay }}
      whileHover={{ rotate: 0, scale: 1.03 }}
      animate={{ y: [0, -8, 0] }}
      transition={{
        duration: 6,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
        delay: floatDelay,
      }}
      className={`relative aspect-[9/16] w-[164px] overflow-hidden rounded-[22px] border border-border bg-card shadow-2xl ring-1 ring-black/10 md:w-[210px] ${className || ""}`}
    >
      <Image src={src || "/placeholder.svg"} alt="Video preview" fill className="object-cover" />
      <div className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-inset ring-black/10" />
      <div className="pointer-events-none absolute left-0 top-0 h-8 w-full bg-gradient-to-b from-black/30 to-transparent" />
    </motion.div>
  )
}

function cn(...c: Array<string | undefined>) {
  return c.filter(Boolean).join(" ")
}
