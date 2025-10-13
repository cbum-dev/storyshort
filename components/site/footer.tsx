import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 md:flex-row">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"></path>
            </svg>
          </span>
          <span className="font-semibold">StoryShort</span>
        </div>
        <nav className="flex gap-4 text-sm text-muted-foreground">
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
          <Link href="#">Contact</Link>
        </nav>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} StoryShort. All rights reserved.</p>
      </div>
    </footer>
  )
}
