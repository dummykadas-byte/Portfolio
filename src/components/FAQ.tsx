import { SectionHeading } from "./ui/SectionHeading";
import * as motion from "motion/react-client";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/src/lib/utils";

const faqs = [
  { id: "faq-1", question: "What medical services do you provide?", answer: "I offer comprehensive internal medicine services, including preventive care, chronic disease management, advanced diagnostics, and mental wellness evaluations. My goal is holistic, patient-centered care." },
  { id: "faq-2", question: "How can I make an appointment?", answer: "You can easily book an appointment using the secure online form below, or by calling our clinic directly during office hours. We offer both in-person and telehealth consultations." },
  { id: "faq-3", question: "What are your office hours?", answer: "Our clinic operates Monday through Friday from 8:00 AM to 5:00 PM. We also offer extended telehealth hours on Tuesdays and Thursdays until 7:00 PM." },
  { id: "faq-4", question: "Do you accept insurance?", answer: "Yes, we are in-network with most major insurance providers. Please contact our front desk with your specific insurance details prior to your visit to verify coverage." },
  { id: "faq-5", question: "What should I bring to my first visit?", answer: "Please bring your photo ID, insurance card, a list of current medications (or the bottles themselves), and any relevant past medical records to help us establish a complete health history." },
];

function AccordionItem({ id, question, answer, isOpen, onClick }: { id: string, question: string, answer: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border border-slate-100 rounded-2xl bg-white overflow-hidden transition-all duration-300">
      <button 
        id={`${id}-button`}
        aria-expanded={isOpen}
        aria-controls={`${id}-content`}
        className="w-full flex items-center justify-between p-6 text-left focus-visible:bg-slate-50 transition-colors"
        onClick={onClick}
      >
        <span className={cn("font-heading font-medium text-lg transition-colors", isOpen ? "text-brand-600" : "text-slate-900")}>
          {question}
        </span>
        <div className={cn("w-8 h-8 rounded-full flex items-center justify-center transition-colors shrink-0", isOpen ? "bg-brand-50 text-brand-600" : "bg-slate-50 text-slate-400")}>
          {isOpen ? <Minus size={18} aria-hidden="true" /> : <Plus size={18} aria-hidden="true" />}
        </div>
      </button>
      <div 
        id={`${id}-content`}
        role="region"
        aria-labelledby={`${id}-button`}
        className={cn("overflow-hidden transition-all duration-300 ease-in-out", isOpen ? "max-h-96 opacity-100 visibility-visible" : "max-h-0 opacity-0 visibility-hidden")}
      >
        <p className="px-6 pb-6 text-slate-600 leading-relaxed text-sm">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading 
          title="Frequently Asked Questions" 
          subtitle="Clear Answers"
          className="mb-12"
        />

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <AccordionItem 
                id={faq.id}
                question={faq.question} 
                answer={faq.answer} 
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
