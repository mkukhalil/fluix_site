"use client";

import { motion } from "framer-motion";
import { MessageSquare, Users, FileBarChart, Workflow } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";

export default function Services() {
  const services = [
    {
      icon: <MessageSquare />,
      title: "WhatsApp Chatbots",
      description:
        "Intelligent conversational agents that handle customer support, bookings, and inquiries 24/7 on WhatsApp.",
      delay: 0,
    },
    {
      icon: <Users />,
      title: "Lead Automation & CRM",
      description:
        "Automatically capture, qualify, and organize leads from all channels directly into your CRM system.",
      delay: 0.1,
    },
    {
      icon: <FileBarChart />,
      title: "Reports & Invoicing",
      description:
        "Generate detailed reports and send professional invoices automatically based on your business logic.",
      delay: 0.2,
    },
    {
      icon: <Workflow />,
      title: "Custom AI Workflows",
      description:
        "Bespoke automation architectures designed specifically for your unique operational bottlenecks.",
      delay: 0.3,
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">

        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-primary mb-6 font-heading"
          >
            Proprietary Solutions
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            We architect the neural pathways of your business automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <ServiceCard
              key={i}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
