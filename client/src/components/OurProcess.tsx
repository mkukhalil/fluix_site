import { motion } from "framer-motion";
import { Zap, Workflow, Clock } from "lucide-react";

export default function OurProcess() {
  const steps = [
    {
      icon: <Clock className="w-10 h-10 text-accent" />,
      title: "Discover & Analyze",
      description:
        "We evaluate your current operations, identify repetitive tasks, and pinpoint areas where automation adds the most value.",
    },
    {
      icon: <Workflow className="w-10 h-10 text-accent" />,
      title: "Design AI Workflows",
      description:
        "Custom workflows are architected for your business needs, ensuring seamless integration and scalable automation.",
    },
    {
      icon: <Zap className="w-10 h-10 text-accent" />,
      title: "Deploy & Optimize",
      description:
        "We implement, monitor, and continuously optimize AI systems to maximize efficiency, reduce errors, and scale growth.",
    },
  ];

  return (
    <section id="our-process" className="section-padding bg-gray-50 relative">
      <div className="container mx-auto px-4 md:px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-primary mb-16 font-heading"
        >
          How Fluix Automates Your Business
        </motion.h2>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 rounded-3xl text-center"
            >
              <div className="inline-flex items-center justify-center p-6 bg-primary/5 rounded-2xl mb-6">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">
                {step.title}
              </h3>
              <p className="text-gray-600 font-light">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
