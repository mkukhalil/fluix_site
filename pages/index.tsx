import { Navbar } from "../client/src/components/Navbar";
import { ServiceCard } from "../client/src/components/ServiceCard";
import { useSubmitContact } from "../client/src/hooks/use-contact";
import { Button } from "../client/src/components/ui/button";
import { Input } from "../client/src/components/ui/input";
import { Textarea } from "../client/src/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../client/src/components/ui/form";
import {
  Bot,
  CheckCircle2,
  Clock,
  TrendingUp,
  MessageSquare,
  Users,
  FileBarChart,
  Workflow,
  ArrowRight,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Zap,
} from "lucide-react";

import { motion , useScroll, useSpring } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "../shared/schema";

export default function Home() {
  const submitContact = useSubmitContact();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    submitContact.mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center bg-mesh text-white pt-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-[0_0_15px_rgba(59,169,255,0.3)]"
            >
              <span className="text-sm font-medium text-blue-200">
                🚀 AI-Powered Business Future
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-6 leading-tight tracking-tighter">
              Automate Your <br />
              <span className="text-accent glow-text italic">Future Today.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              We eliminate manual overhead and scale operations effortlessly with bespoke AI architectures.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="w-full sm:w-auto text-lg h-16 px-10 rounded-full bg-accent hover:bg-accent/90 text-white font-bold shadow-[0_0_20px_rgba(59,169,255,0.5)] transition-all hover:scale-105 active:scale-95"
              >
                Start Automating <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-lg h-16 px-10 rounded-full border-white/30 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 hover:border-white transition-all hover:scale-105"
              >
                Explore Solutions
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Problem/Solution Section */}
      <section id="about" className="section-padding bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-primary mb-6 font-heading"
            >
              The AI Advantage
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Stop fighting manual bottlenecks. Start scaling with intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              {
                icon: <Clock className="w-10 h-10 text-red-500" />,
                title: "Zero Delay Leads",
                problem: "Slow follow-ups kill deals",
                solution: "Instant AI qualification",
              },
              {
                icon: <MessageSquare className="w-10 h-10 text-accent" />,
                title: "Emails & WhatsApp",
                problem: "Hours lost responding to FAQs",
                solution: "24/7 Intelligent Chatbots",
              },
              {
                icon: <TrendingUp className="w-10 h-10 text-green-500" />,
                title: "Hyper-Efficiency",
                problem: "Manual repetitive overhead",
                solution: "End-to-End Workflow automation",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: i * 0.2, type: "spring", stiffness: 100 }}
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
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="section-padding bg-gray-50 relative overflow-hidden"
      >
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
            <ServiceCard
              icon={<MessageSquare className="w-6 h-6" />}
              title="WhatsApp Chatbots"
              description="Intelligent conversational agents that handle customer support, bookings, and inquiries 24/7 on WhatsApp."
              delay={0}
            />
            <ServiceCard
              icon={<Users className="w-6 h-6" />}
              title="Lead Automation & CRM"
              description="Automatically capture, qualify, and organize leads from all channels directly into your CRM system."
              delay={0.1}
            />
            <ServiceCard
              icon={<FileBarChart className="w-6 h-6" />}
              title="Reports & Invoicing"
              description="Generate detailed reports and send professional invoices automatically based on your business logic."
              delay={0.2}
            />
            <ServiceCard
              icon={<Workflow className="w-6 h-6" />}
              title="Custom AI Workflows"
              description="Bespoke automation architectures designed specifically for your unique operational bottlenecks."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
                    <Zap key={star} className="w-4 h-4 text-accent fill-current shadow-[0_0_10px_rgba(59,169,255,0.5)]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-10 italic text-lg leading-relaxed font-light">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-primary">{testimonial.author}</div>
                    <div className="text-sm text-gray-500 font-medium">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

      {/* Contact Form Section */}
      <section id="contact" className="section-padding bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto glass-card rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border-none">
            {/* Contact Info Side */}
            <div className="md:w-5/12 futuristic-gradient p-16 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-4xl font-bold font-heading mb-8 glow-text">
                  Let's Build.
                </h3>
                <p className="text-xl text-blue-100 mb-12 font-light">
                  Our engineers are ready to architect your next breakthrough.
                </p>
                

                <div className="space-y-10">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20 shadow-lg">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="text-xs text-blue-200 uppercase tracking-[0.2em] font-bold mb-1">
                        Secure Channel
                      </div>
                      <div className="text-lg font-medium">khalil@gmail.com</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20 shadow-lg">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="text-xs text-blue-200 uppercase tracking-[0.2em] font-bold mb-1">
                        HQ Location
                      </div>
                      <div className="text-lg font-medium">Islamabad, Pakistan</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-white/10">
                <div className="flex gap-6">
                  {[Linkedin, Twitter, Instagram].map((Icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,169,255,0.4)]"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="md:w-7/12 p-16">
            <p className=" mb-8">
                  Fill out the form and our team will get back to you within 24
                  hours.
                </p>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            className="h-12 bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary/10 rounded-xl"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@company.com"
                            className="h-12 bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary/10 rounded-xl"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>How can we help?</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your manual processes..."
                            className="min-h-[120px] bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary/10 rounded-xl resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={submitContact.isPending}
                    className="w-full h-12 text-lg rounded-xl bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20"
                  >
                    {submitContact.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-20 border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-4">
              <img
  src="/logo.png"
  alt="Fluix Logo"
  className="h-10 w-10 object-contain"
/>

              <span className="text-3xl font-bold font-heading tracking-tighter glow-text">
                Fluix
              </span>
            </div>

            <div className="text-blue-200/60 font-light tracking-wide">
              © {new Date().getFullYear()} Fluix. All rights reserved.
            </div>

            <div className="flex gap-10 text-sm font-bold uppercase tracking-widest text-blue-200">
              <a href="#" className="hover:text-accent transition-colors">Privacy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
