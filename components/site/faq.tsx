"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      q: "How does AI create videos?",
      a: "We generate script, images, voiceover, and captions automatically, then render to MP4.",
    },
    {
      q: "Can I choose different styles?",
      a: "Yes, pick from multiple visual styles and caption themes, or provide custom prompts.",
    },
    { q: "Do I own the output?", a: "Yes, you own the videos you generate subject to model and content policies." },
    { q: "Can I cancel anytime?", a: "Absolutely—plans are monthly and can be canceled anytime." },
  ]
  return (
    <section id="faq" className="container mx-auto px-4 py-16 md:py-24">
      <h2 className="text-center text-2xl font-semibold md:text-3xl">Frequently asked questions</h2>
      <div className="mx-auto mt-6 max-w-2xl">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
