import { ReactNode, cloneElement } from "react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export function ServiceCard({ icon, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="h-14 w-14 rounded-xl bg-blue-50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        {cloneElement(icon as React.ReactElement, { className: "w-10 h-10 stroke-current" })}
      </div>

      <h3 className="text-xl font-bold text-primary mb-3 font-heading">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm lg:text-base">{description}</p>
    </motion.div>
  );
}
