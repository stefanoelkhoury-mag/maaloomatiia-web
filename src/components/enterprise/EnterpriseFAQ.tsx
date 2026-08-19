import { FAQAccordion } from "../FAQAccordion";

const FAQ_ITEMS = [
  {
    question: "Can training be customized to our platforms and data?",
    answer:
      "Yes — that's the point of the ADOPT method. The Assess and Design phases scope your actual stack, workflows, and roles before any curriculum is built.",
  },
  {
    question: "Do you deliver in Arabic?",
    answer: "Yes. Every program is available in Arabic and English, and can be delivered on-site, virtual, or hybrid.",
  },
  {
    question: "How is a cohort sized and scheduled?",
    answer: "Cohort size and scheduling are scoped during the Assess phase to match your team's structure and timeline, not a fixed template.",
  },
  {
    question: "How do you handle our data and platform access?",
    answer:
      "Engagements run inside your environment under your own data-governance controls. Access, sandboxing, and any compliance requirements are agreed during scoping.",
  },
  {
    question: "What happens after the program ends?",
    answer:
      "The Transfer phase hands your team documentation, playbooks, and the platform ownership to run things independently — training isn't a one-off event.",
  },
];

export function EnterpriseFAQ() {
  return (
    <section className="section-pad bg-white">
      <div className="mx-auto max-w-3xl px-6">
        <p className="eyebrow">Frequently Asked</p>
        <h2 className="mt-4 text-3xl font-semibold leading-tight text-[var(--foreground)] sm:text-4xl">
          Questions enterprise teams <span className="text-teal-500">actually ask.</span>
        </h2>

        <div className="mt-10">
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </div>
    </section>
  );
}
