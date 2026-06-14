/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { Blog } from "./components/Blog";
import { FAQ } from "./components/FAQ";
import { Appointment } from "./components/Appointment";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 selection:bg-brand-200 selection:text-brand-900 overflow-x-hidden">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <Stats />
        <Services />
        <About />
        <Testimonials />
        <Appointment />
        <Blog />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
