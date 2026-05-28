import { ChevronDown } from "lucide-react";
import { useState } from "react";

type Item = {
  question: string;
  answer: string;
};

export function FAQAccordion({ items }: { items: Item[] }) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const active = activeIndex === index;

        return (
          <div key={item.question} className="card-surface overflow-hidden">
            <button
              type="button"
              onClick={() => setActiveIndex(active ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-lg font-semibold text-text">{item.question}</span>
              <ChevronDown
                className={`shrink-0 text-accent transition ${active ? "rotate-180" : ""}`}
                size={20}
              />
            </button>
            {active ? <div className="px-6 pb-6 text-base leading-8 text-text-secondary">{item.answer}</div> : null}
          </div>
        );
      })}
    </div>
  );
}
