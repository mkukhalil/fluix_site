"use client";

import { motion } from "framer-motion";
import { Clock, MessageSquare, TrendingUp, Workflow, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AiAdvantage() {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-red-500" />,
      title: "Zero Delay Leads",
      problem: "Slow follow-ups cost deals",
      solution: "Instant AI lead qualification & notifications",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-accent" />,
      title: "Always-On Communication",
      problem: "Manual responses waste hours",
      solution: "24/7 AI chatbots for Email & WhatsApp",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: "Hyper-Efficiency",
      problem: "Repetitive workflows slow your growth",
      solution: "End-to-end AI automation for all processes",
    },
    {
      icon: <Workflow className="w-8 h-8 text-blue-500" />,
      title: "Scalable Solutions",
      problem: "Small systems can’t handle growth",
      solution: "Flexible AI that grows with your business",
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "Agency & Enterprise Ready",
      problem: "One-size-fits-all solutions fail",
      solution: "Tailored tools for agencies & large teams",
    },
  ];

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-primary mb-6 font-heading"
          >
            The AI Advantage
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Stop wasting time on repetitive tasks. Automate, scale, and grow with intelligent solutions tailored for businesses of any size.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-3xl text-center hover:scale-105 transition-all duration-500 group"
            >
              <div className="inline-flex items-center justify-center p-6 bg-primary/5 rounded-2xl mb-8 group-hover:bg-accent/10 transition-colors shadow-inner">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">
                {item.title}
              </h3>
              <p className="text-red-500 font-semibold mb-6 uppercase tracking-widest text-xs">
                {item.problem}
              </p>
              <div className="h-px w-20 bg-gray-100 mx-auto mb-6" />
              <p className="text-green-600 font-bold flex items-center justify-center gap-3">
                <Zap className="w-5 h-5 fill-current" />
                {item.solution}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Button
            onClick={() =>
              window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
            }
            className="rounded-full bg-accent hover:bg-accent/90 text-white px-10 py-4 text-lg font-semibold shadow-lg shadow-accent/25"
          >
            Book Your Free Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
