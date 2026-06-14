import { SectionHeading } from "./ui/SectionHeading";
import * as motion from "motion/react-client";
import { ArrowRight, Clock } from "lucide-react";
import type { BlogPost } from "../types";

const posts: BlogPost[] = [
  { 
    id: "1", 
    title: "Understanding the Link Between Stress and Heart Health", 
    category: "Cardiology", 
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600&h=400", 
    readTime: "5 min read" 
  },
  { 
    id: "2", 
    title: "Essential Vitamins for Immune System Support", 
    category: "Nutrition", 
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600&h=400", 
    readTime: "4 min read" 
  },
  { 
    id: "3", 
    title: "The Importance of Regular Health Screenings After 40", 
    category: "Preventive Care", 
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=600&h=400", 
    readTime: "6 min read" 
  },
];

export function Blog() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <SectionHeading 
            title="Health Insights & Articles" 
            subtitle="Stay Informed"
            align="left"
          />
          <button className="hidden md:inline-flex items-center font-medium text-brand-600 hover:text-brand-700 pb-2">
            View All Articles <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.a 
              href="#blog"
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1 }}
              className="block bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 outline-none"
              aria-label={`Read article: ${post.title}`}
            >
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-semibold px-3 py-1 rounded-full text-slate-800">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg text-slate-900 mb-3 line-clamp-2 group-hover:text-brand-600 transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-slate-500 mt-4">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <button className="inline-flex items-center justify-center font-medium text-brand-600 hover:text-brand-700 bg-brand-50 px-6 py-3 rounded-full w-full">
                View All Articles <ArrowRight className="ml-2 w-4 h-4" />
            </button>
        </div>
      </div>
    </section>
  );
}
