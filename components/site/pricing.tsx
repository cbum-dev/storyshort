import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Pricing() {
  return (
    <section id="pricing" className="container mx-auto px-4 py-16 md:py-24">
      <h2 className="text-center text-2xl font-semibold md:text-3xl">Simple, transparent pricing</h2>
      <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-muted-foreground">
        Start free. Upgrade as you grow.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        <Plan
          name="Starter"
          price="$0"
          tagline="Try the basics"
          features={["10 video credits", "Basic styles", "Watermark"]}
          cta="Get Started"
          highlight={false}
        />
        <Plan
          name="Creator"
          price="$19"
          tagline="Powerful tools"
          features={["200 credits", "All styles", "HD export", "No watermark"]}
          cta="Start Creator"
          highlight
        />
        <Plan
          name="Pro"
          price="$49"
          tagline="For teams"
          features={["1000 credits", "Priority rendering", "Team workspace"]}
          cta="Start Pro"
          highlight={false}
        />
      </div>
    </section>
  )
}

function Plan({
  name,
  price,
  tagline,
  features,
  cta,
  highlight,
}: {
  name: string
  price: string
  tagline: string
  features: string[]
  cta: string
  highlight?: boolean
}) {
  return (
    <Card className={highlight ? "border-2 border-primary" : ""}>
      <CardHeader>
        <CardTitle className="flex items-baseline justify-between">
          <span>{name}</span>
          <span className="text-2xl font-semibold">
            {price}
            <span className="text-sm text-muted-foreground">/mo</span>
          </span>
        </CardTitle>
        <p className="text-sm text-muted-foreground">{tagline}</p>
      </CardHeader>
      <CardContent className="space-y-3">
        <ul className="space-y-2 text-sm">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                ✓
              </span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <Button className="w-full mt-4">{cta}</Button>
      </CardContent>
    </Card>
  )
}
