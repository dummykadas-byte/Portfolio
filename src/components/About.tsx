import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import * as motion from "motion/react-client";
import { Award, GraduationCap, Clock } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 flex flex-col items-center text-center">
        <SectionHeading 
          title="Committed to Your Long-Term Wellness" 
          subtitle="About The Doctor" 
          align="center"
          className="mb-8"
        />
        
        <p className="text-slate-600 text-lg mb-8 leading-relaxed">
          Dr. Elena Smith brings over 15 years of specialized experience in internal medicine, focusing on proactive health management and personalized treatment plans. She believes in treating the whole person, not just the symptoms.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 w-full mb-10 text-left">
          <div className="flex-1 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col gap-4 items-center md:items-start text-center md:text-left">
            <div className="p-3 bg-brand-50 text-brand-600 rounded-xl inline-block">
              <GraduationCap size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 font-heading text-lg">Harvard Medical School</h4>
              <p className="text-slate-500 text-sm mt-1">MD, Internal Medicine (Class of 2008)</p>
            </div>
          </div>
          
          <div className="flex-1 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col gap-4 items-center md:items-start text-center md:text-left">
            <div className="p-3 bg-accent-50 text-accent-500 rounded-xl inline-block">
              <Award size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 font-heading text-lg">American College of Physicians</h4>
              <p className="text-slate-500 text-sm mt-1">Fellow & Board Certified Specialist</p>
            </div>
          </div>
        </div>

        <Button variant="outline" className="group">
          View Full Credentials
        </Button>
      </div>
    </section>
  );
}
