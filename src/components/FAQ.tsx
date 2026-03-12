import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Will I receive an internship certificate?",
    answer: "GradScale initially offers a Skill & Training Development Program, and students who successfully complete the program receive a training certificate. Top-performing students may receive internship opportunities with GradScale or companies within our industry network.",
  },
  {
    question: "Is there a limit to how much students can earn?",
    answer: "No. Earnings are performance-based and depend on the opportunities students help generate.",
  },
  {
    question: "Do I need technical knowledge?",
    answer: "No technical background is required. The program focuses on professional communication, business understanding, and client engagement.",
  },
  {
    question: "Is the program remote?",
    answer: "Yes. The program is fully remote and students can participate from anywhere.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-minimal text-muted-foreground mb-4">FAQ</h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left text-lg font-light text-architectural hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
