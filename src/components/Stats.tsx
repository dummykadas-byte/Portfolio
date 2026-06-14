import * as motion from "motion/react-client";

const stats = [
  { value: "15+", label: "Years Experience", suffix: "" },
  { value: "10k+", label: "Happy Patients", suffix: "" },
  { value: "100%", label: "Board Certified", suffix: "" },
  { value: "50+", label: "Medical Awards", suffix: "" },
];

export function Stats() {
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center justify-center text-center px-2 md:px-4"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-2 font-heading tracking-tight" aria-label={`${stat.value} ${stat.label}`}>
                {stat.value}
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-medium whitespace-nowrap md:whitespace-normal">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
