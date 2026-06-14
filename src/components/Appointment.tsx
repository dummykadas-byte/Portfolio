import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import * as motion from "motion/react-client";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export function Appointment() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
        (e.target as HTMLFormElement).reset();
      }, 5000);
    }, 1500);
  };

  return (
    <section id="booking" className="py-24 bg-brand-50 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
         <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-brand-200/50 rounded-full blur-3xl opacity-50 mix-blend-multiply" />
         <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-accent-200/40 rounded-full blur-3xl opacity-50 mix-blend-multiply" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="bg-white rounded-[2.5rem] shadow-xl p-8 lg:p-16 border border-white relative overflow-hidden backdrop-blur-sm">
          
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Form Info text */}
            <div className="flex flex-col justify-center">
              <span className="text-sm font-semibold tracking-wider uppercase text-brand-600 mb-3 block">Consultation</span>
              <h2 className="text-4xl lg:text-5xl font-bold font-heading text-slate-900 mb-6 leading-tight">
                Schedule Your Next Visit Easily.
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                Your health journey starts with a conversation. Fill out the form, and our dedicated team will confirm your appointment within 24 hours.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-brand-50/50 border border-brand-50">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-600 shadow-sm">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Direct Line</p>
                    <p className="font-semibold text-slate-900 text-lg">+1 (555) 234-5678</p>
                  </div>
                </div>
              </div>
            </div>

            {/* The Form */}
            <div className="relative">
              {isSuccess ? (
                <div className="bg-slate-50 p-8 rounded-3xl border border-emerald-100 flex flex-col items-center justify-center h-full text-center gap-4 animate-in fade-in zoom-in duration-500">
                   <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-2">
                     <CheckCircle2 size={32} />
                   </div>
                   <h3 className="text-2xl font-bold font-heading text-slate-900">Request Sent</h3>
                   <p className="text-slate-600">We have received your appointment request. Our team will contact you shortly to confirm the details.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col gap-5 transition-all">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</label>
                      <input type="text" id="name" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all font-sans" required aria-required="true" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                      <input type="email" id="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all font-sans" required aria-required="true" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number</label>
                      <input type="tel" id="phone" placeholder="(555) 000-0000" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all font-sans" required aria-required="true" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="service" className="text-sm font-medium text-slate-700">Service Required</label>
                      <select id="service" required aria-required="true" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-slate-700 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2394a3b8%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_1rem_center] bg-[length:0.8rem_auto] font-sans">
                        <option value="">Select a service</option>
                        <option value="consultation">Initial Consultation</option>
                        <option value="checkup">Annual Checkup</option>
                        <option value="followup">Follow-up Visit</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="date" className="text-sm font-medium text-slate-700">Preferred Date</label>
                      <input type="date" id="date" required aria-required="true" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-slate-700 font-sans" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="time" className="text-sm font-medium text-slate-700">Preferred Time</label>
                      <input type="time" id="time" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-slate-700 font-sans" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-sm font-medium text-slate-700">Message (Optional)</label>
                    <textarea id="message" rows={3} placeholder="Briefly describe your reason for visit..." className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all resize-none font-sans"></textarea>
                  </div>

                  <Button type="submit" size="lg" className="w-full mt-2 relative" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : "Confirm Booking Request"}
                  </Button>
                  <p className="text-center text-xs text-slate-500 mt-2">Your information is secure and HIPAA compliant.</p>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
