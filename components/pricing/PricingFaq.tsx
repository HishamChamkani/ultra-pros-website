import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { pricingFaqs } from "@/content/pricing";

export function PricingFaq() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {pricingFaqs.map((faq, i) => (
        <AccordionItem key={faq.question} value={`item-${i}`}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
