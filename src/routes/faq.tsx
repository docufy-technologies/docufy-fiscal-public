import { createFileRoute } from "@tanstack/react-router";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/constants";

export const Route = createFileRoute("/faq")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-30 mt-10">
      <div className="mb-10 max-w-3xl">
        <h1>Frequently Asked Questions</h1>
        <p className="mt-4 text-lg">
          Clear answers on pricing, support, compliance, and platform features.
        </p>
      </div>

      <div className="space-y-10">
        {faqItems.map((section) => (
          <div key={section.category} className="space-y-4">
            <h2 className="text-accent">{section.category}</h2>
            <Accordion type="multiple">
              {section.questionnaire.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`${section.category}-${index}`}
                >
                  <AccordionTrigger className="text-base sm:text-lg font-body hover:no-underline hover:text-accent">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base sm:text-lg text-muted-foreground">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>

      <p className="mt-12 text-base sm:text-lg text-muted-foreground">
        Need a tailored quote? Reach us at{" "}
        <a
          href="mailto:info@docufybd.com"
          className="text-accent underline underline-offset-3 transition-colors duration-150 hover:text-primary"
        >
          info@docufybd.com
        </a>{" "}
        .
      </p>
    </section>
  );
}
