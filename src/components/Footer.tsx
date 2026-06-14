import { Stethoscope, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "./ui/Button";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6 text-white">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white">
                <Stethoscope size={20} />
              </div>
              <span className="font-heading font-semibold text-2xl tracking-tight">Dr. Elena</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering your health journey with compassionate, expert care and modern medical practices.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook Page" className="text-slate-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-brand-500 rounded-sm p-1 -ml-1"><Facebook size={20} aria-hidden="true" /></a>
              <a href="#" aria-label="Twitter Profile" className="text-slate-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-brand-500 rounded-sm p-1"><Twitter size={20} aria-hidden="true" /></a>
              <a href="#" aria-label="Instagram Profile" className="text-slate-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-brand-500 rounded-sm p-1"><Instagram size={20} aria-hidden="true" /></a>
              <a href="#" aria-label="LinkedIn Profile" className="text-slate-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-brand-500 rounded-sm p-1"><Linkedin size={20} aria-hidden="true" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-brand-400 transition-colors">About Dr. Elena</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">Medical Services</a></li>
              <li><a href="#testimonials" className="hover:text-brand-400 transition-colors">Patient Stories</a></li>
              <li><a href="#blog" className="hover:text-brand-400 transition-colors">Health Insights</a></li>
              <li><a href="#faq" className="hover:text-brand-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>123 Medical Pl, Suite 400<br/>San Francisco, CA 94102</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-brand-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>+1 (555) 234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-brand-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>hello@drelenasmith.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-6">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-4">Subscribe for health tips and clinic updates.</p>
            <form className="flex gap-2">
              <label htmlFor="newsletter" className="sr-only">Email address for newsletter</label>
              <input type="email" id="newsletter" placeholder="Your email address" className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm transition-shadow" required aria-required="true" />
              <Button type="submit" variant="primary" size="icon" className="shrink-0 rounded-lg" aria-label="Subscribe to newsletter">
                <svg className="w-4 h-4" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Dr. Elena Smith. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
