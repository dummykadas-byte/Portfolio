import { SectionHeading } from "./ui/SectionHeading";
import * as motion from "motion/react-client";
import { Star } from "lucide-react";
import type { Testimonial } from "../types";

const testimonials: Testimonial[] = [
  { id: "1", name: "Sarah Jenkins", role: "Patient for 3 years", content: "Dr. Elena is incredibly thorough and truly listens. I've never felt rushed during an appointment. She caught a minor issue before it became major, and I am forever grateful for her proactive approach to my health.", rating: 5 },
  { id: "2", name: "Michael Chang", role: "Patient for 1 year", content: "Finding a doctor who combines top-tier medical expertise with genuine empathy is rare. The clinic environment is serene, and the staff is wonderful. By far the best healthcare experience I've had.", rating: 5 },
  { id: "3", name: "Emily Robinson", role: "Patient for 5 years", content: "I appreciate the holistic view Dr. Smith takes. She doesn't just prescribe medication; she looks at my lifestyle, stress levels, and diet. It's refreshing to have a doctor who acts as a true partner in wellness.", rating: 5 },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Soft background decor */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-50 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          title="Patient Success Stories" 
          subtitle="Real Experiences"
          className="mb-16"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface-100 rounded-[2rem] p-8 border border-slate-100 shadow-sm relative group flex flex-col"
            >
              <div className="absolute top-6 right-6 md:top-8 md:right-8 text-6xl font-serif leading-none text-brand-100 group-hover:text-brand-200 transition-colors select-none pointer-events-none" aria-hidden="true">"</div>
              
              <div className="flex gap-1 mb-6" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star key={index} fill="currentColor" className="w-4 h-4 text-accent-500" aria-hidden="true" />
                ))}
              </div>
              
              <blockquote className="text-slate-600 mb-8 leading-relaxed relative z-10 flex-1">"{testimonial.content}"</blockquote>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-semibold font-heading shrink-0" aria-hidden="true">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 font-heading">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
