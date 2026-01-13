"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-background relative">
      <div className="container mx-auto px-4 md:px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-primary text-center mb-24 font-heading"
        >
          Validated Results
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              quote: "Fluix completely transformed how we handle patient bookings. We save 20 hours a week!",
              author: "Dr. Sarah Firdous",
              role: "Dental Clinic Owner",
            },
            {
              quote: "The lead qualification bot increased our conversion rate by 40% in just two months.",
              author: "James Wilson",
              role: "Real Estate Agency Director",
            },
            {
              quote: "I can finally focus on strategy instead of copy-pasting data. The ROI was immediate.",
              author: "Elena Rodriguez",
              role: "E-commerce Founder",
            },
          ].map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="glass-card p-10 rounded-3xl border border-gray-100/50 shadow-2xl relative"
            >
              <div className="flex gap-1 mb-8">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Zap
                    key={star}
                    className="w-4 h-4 text-accent fill-current shadow-[0_0_10px_rgba(59,169,255,0.5)]"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-10 italic text-lg leading-relaxed font-light">
                “{testimonial.quote}”
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-primary">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
