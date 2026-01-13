"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-32 futuristic-gradient text-white relative overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 text-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <h2 className="text-4xl md:text-7xl font-bold font-heading mb-8">
            Initiate Hyperscale.
          </h2>

          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Unlock the full potential of your business with autonomous AI integration.
          </p>

          <Button
            onClick={scrollToContact}
            size="lg"
            className="h-20 px-12 text-xl rounded-full bg-white text-primary hover:bg-blue-50 font-bold shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all hover:scale-110 active:scale-95"
          >
            Get Started Now <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
