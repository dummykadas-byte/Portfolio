import { Button } from "./ui/Button";
import * as motion from "motion/react-client";
import { ArrowRight, Star, ShieldCheck, HeartPulse } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Soft Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-200/40 rounded-full blur-3xl opacity-50 -translate-y-1/4 translate-x-1/4 mix-blend-multiply pointer-events-none" />
      <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-accent-200/30 rounded-full blur-3xl opacity-50 -translate-x-1/4 mix-blend-multiply pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Column: Content */}
        <div className="flex flex-col items-start text-left max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-100 shadow-sm mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-brand-500"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-700">Accepting New Patients</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="block text-slate-900">Modern Healthcare.</span>
            <span className="block text-gradient">Personalized for You.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg"
          >
            Experience compassionate, expert medical care tailored to your unique wellness journey by Dr. Elena Smith, leading internal medicine specialist.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button href="#booking" size="lg" className="group w-full sm:w-auto">
              Book Appointment
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Button>
            <Button href="#about" size="lg" variant="outline" className="w-full sm:w-auto">
              Learn More
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-12 flex items-center gap-6 text-sm text-slate-500"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-500" />
              <span>Board Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-accent-500 fill-accent-500" />
              <span>4.9/5 Patient Rating</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Image & Floating Cards */}
        <div className="relative w-full aspect-square md:aspect-[4/5] lg:aspect-square max-w-lg mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 rounded-t-[100px] rounded-b-[40px] overflow-hidden border-[8px] border-white shadow-2xl bg-brand-50"
          >
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800&h=1000" 
              alt="Portrait of Dr. Elena Smith, Internal Medicine Specialist" 
              className="w-full h-full object-cover object-top"
              fetchpriority="high"
              decoding="async"
            />
          </motion.div>

          {/* Floating Elements */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -bottom-4 right-4 md:top-1/3 md:bottom-auto md:-right-8 glass rounded-2xl p-4 flex gap-4 items-center shadow-xl z-20 focus-within:ring-2 focus-within:ring-brand-500"
            role="region"
            aria-label="Key Advantage"
          >
             <div className="bg-emerald-100 text-emerald-600 p-3 rounded-full shrink-0" aria-hidden="true">
               <HeartPulse size={24} />
             </div>
             <div>
               <p className="text-sm font-semibold text-slate-900">Advanced Care</p>
               <p className="text-xs text-slate-500">Holistic approach</p>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
