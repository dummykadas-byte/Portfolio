import { SectionHeading } from "./ui/SectionHeading";
import * as motion from "motion/react-client";
import { Activity, Beaker, Brain, HeartPulse, Shield, Syringe } from "lucide-react";
import type { Service } from "../types";

const services: Service[] = [
  { id: "1", title: "Preventive Care", description: "Comprehensive annual exams, screenings, and personalized wellness plans to keep you healthy.", icon: "Shield" },
  { id: "2", title: "Chronic Disease Management", description: "Expert ongoing care for diabetes, hypertension, asthma, and other chronic conditions.", icon: "Activity" },
  { id: "3", title: "Advanced Diagnostics", description: "State-of-the-art laboratory testing and imaging coordination for accurate diagnosis.", icon: "Beaker" },
  { id: "4", title: "Heart Health", description: "Cardiovascular risk assessments, ECGs, and lifestyle management programs.", icon: "HeartPulse" },
  { id: "5", title: "Mental Wellness", description: "Compassionate evaluation and treatment plans for anxiety, depression, and stress.", icon: "Brain" },
  { id: "6", title: "Immunizations", description: "Routine adult vaccinations, travel medication, and flu shot clinics.", icon: "Syringe" },
];

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield size={28} />,
  Activity: <Activity size={28} />,
  Beaker: <Beaker size={28} />,
  HeartPulse: <HeartPulse size={28} />,
  Brain: <Brain size={28} />,
  Syringe: <Syringe size={28} />
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Comprehensive Medical Services" 
          subtitle="Explore Our Expertise"
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.a 
              href="#booking"
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1 }}
              className="block bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-100 transition-all duration-300 group cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-500 outline-none"
              aria-label={`Book appointment for ${service.title}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 shrink-0" aria-hidden="true">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-xl font-semibold font-heading text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">{service.description}</p>
              
              <div className="inline-flex items-center text-sm font-medium text-brand-600 group-hover:text-brand-700 mt-auto">
                Learn more
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
