import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}))
  // In a real app, store to DB or email provider here.
  console.log("[v0] Subscribe body:", body)
  return NextResponse.json({ ok: true })
}
