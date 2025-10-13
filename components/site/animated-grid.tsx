"use client"
import { cn } from "@/lib/utils"

type Props = {
  className?: string
  fade?: boolean
}

export function AnimatedGrid({ className, fade = true }: Props) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className={cn("bg-dot-grid h-full w-full", fade && "grid-fade-mask")} />
    </div>
  )
}
