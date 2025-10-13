"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className={cn("sticky top-3 z-50 transition-[top]", scrolled ? "top-3" : "top-6")}>
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between px-3 md:px-4 transition-all nav-capsule",
          scrolled ? "h-12" : "h-[58px]",
        )}
      >
        <Link href="/" className="flex items-center gap-2 pl-1">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"></path>
            </svg>
          </span>
          <span className="font-semibold">StoryShort</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground">
            Pricing
          </Link>
          <Link href="#blog" className="text-sm text-muted-foreground hover:text-foreground">
            Blog
          </Link>
          <Link
            href="#affiliate"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            Affiliate Program
            <span className="rounded-full border border-primary/40 bg-primary/20 px-1.5 py-0.5 text-[10px] font-medium text-primary">
              New
            </span>
          </Link>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link href="#signin" className="text-sm text-muted-foreground hover:text-foreground">
            Sign in
          </Link>
          <Button size="sm" className="shadow-lg shadow-primary/20">
            Get Started
          </Button>
        </div>

        <button
          aria-label="Toggle Menu"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60"
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" fill="none">
            <path strokeWidth="2" strokeLinecap="round" d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"} />
          </svg>
        </button>
      </div>

      {open && (
        <div className="absolute left-0 right-0 mt-3 px-4">
          <div className="nav-capsule mx-auto max-w-6xl p-3">
            <div className="flex flex-col gap-2">
              <Link href="#pricing" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md hover:bg-white/5">
                Pricing
              </Link>
              <Link href="#blog" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md hover:bg-white/5">
                Blog
              </Link>
              <Link href="#affiliate" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md hover:bg-white/5">
                <span className="mr-2">Affiliate Program</span>
                <span className="rounded-full border border-primary/40 bg-primary/20 px-1.5 py-0.5 text-[10px] font-medium text-primary">
                  New
                </span>
              </Link>
              <div className="flex gap-2 pt-1">
                <Link href="#signin" className="flex-1">
                  <Button variant="ghost" className="w-full">
                    Sign in
                  </Button>
                </Link>
                <Link href="#get-started" className="flex-1">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
