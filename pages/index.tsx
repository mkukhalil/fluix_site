import Head from "next/head";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight, Mail, MapPin, Linkedin, Twitter, Instagram, ShoppingCart, Users, Briefcase } from "lucide-react";

import { ServiceCard } from "../client/src/components/ServiceCard";
import { useSubmitContact } from "../client/src/hooks/use-contact";
import { Button } from "../client/src/components/ui/button";
import { Input } from "../client/src/components/ui/input";
import { Textarea } from "../client/src/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../client/src/components/ui/form";

import { insertContactMessageSchema, type InsertContactMessage } from "../shared/schema";

export default function Home() {
  const submitContact = useSubmitContact();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = (data: InsertContactMessage) => submitContact.mutate(data, { onSuccess: () => form.reset() });

  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  // Dynamic sections (SSR disabled)
  const OurProcess = dynamic(() => import("../client/src/components/OurProcess"), { ssr: false });
  const AiAdvantage = dynamic(() => import("../client/src/components/AiAdvantage"), { ssr: false });
  const Testimonials = dynamic(() => import("../client/src/components/Testimonials"), { ssr: false });
  const Services = dynamic(() => import("../client/src/components/Services"), { ssr: false });
  const CallToAction = dynamic(() => import("../client/src/components/CallToAction"), { ssr: false });

  return (
    <>
      <Head>
        <title>AI Automation Services for Businesses | Fluix</title>
        <meta name="description" content="Fluix provides AI automation services for local businesses, agencies, and enterprises. Automate leads, customer support, reporting, and workflows with scalable AI systems." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://fluix-site.vercel.app/" />

        {/* Open Graph */}
        <meta property="og:title" content="AI Automation Services for Businesses | Fluix" />
        <meta property="og:description" content="AI automation for local businesses, agencies, and enterprises. Reduce manual work and scale operations with Fluix." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fluix-site.vercel.app/" />
        <meta property="og:image" content="https://fluix-site.vercel.app/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Automation Services for Businesses | Fluix" />
        <meta name="twitter:description" content="AI automation for local businesses, agencies, and enterprises. Reduce manual work and scale operations with Fluix." />
        <meta name="twitter:image" content="https://fluix-site.vercel.app/og-image.png" />
      </Head>

      <div className="min-h-screen bg-background font-sans overflow-x-hidden">
        {/* Scroll Progress Bar */}
        <motion.div className="scroll-progress" style={{ scaleX }} />

        {/* Hero Section */}
        <header id="home" className="relative h-screen flex items-center justify-center bg-mesh text-white pt-10 overflow-hidden">
          <div className="absolute inset-0 bg-black/40" />
          <div className="container relative z-10 px-4 sm:px-6 md:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 50, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="max-w-3xl mx-auto">
              <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="inline-block mb-4 sm:mb-6 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-[0_0_12px_rgba(59,169,255,0.3)]">
                <span className="text-xs sm:text-sm font-medium text-blue-200">AI-Powered Business Future</span>
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading tracking-tight mb-4 sm:mb-6 leading-snug sm:leading-tight">
                AI Automation for Businesses That Want to
                <span className="block text-accent italic"> Scale Faster</span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 sm:mb-10 max-w-xl sm:max-w-2xl mx-auto font-light leading-relaxed">
                We design and deploy AI systems for local businesses, agencies, and enterprises, automating leads, customer support, reporting, and workflows.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Button onClick={scrollToContact} size="lg" className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 rounded-full bg-accent text-white font-semibold shadow-[0_0_15px_rgba(59,169,255,0.5)] transition-transform active:scale-95">
                  Start Automating <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
                </Button>
                <Button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} variant="outline" size="lg" className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 rounded-full border-white/30 bg-white/5 backdrop-blur-md text-white hover:bg-white/10">
                  View Solutions
                </Button>
              </div>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-20 sm:h-24 bg-gradient-to-t from-background to-transparent" />
        </header>

        <main>
          {/* Who We Work With */}
          <section className="section-padding bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <div className="text-center mb-16 md:mb-24">
                <motion.h2 initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 font-heading">
                  Who we work with
                </motion.h2>
              </div>
              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <ServiceCard icon={<ShoppingCart className="w-10 h-10 text-primary" />} title="Local Businesses" description="Automate customer interactions, booking systems, and reporting to save time and grow locally." delay={0.05} />
                <ServiceCard icon={<Users className="w-10 h-10 text-primary" />} title="Agencies" description="Streamline client campaigns, automate reporting, and manage multiple accounts effortlessly." delay={0.1} />
                <ServiceCard icon={<Briefcase className="w-10 h-10 text-primary" />} title="Enterprises" description="Integrate AI into large-scale workflows, CRMs, and analytics for maximum operational efficiency." delay={0.15} />
              </div>
            </div>
          </section>

          <OurProcess />
          <AiAdvantage />
          <Services />
          <Testimonials />
          <CallToAction />

          {/* Contact Form */}
          <section id="contact" className="section-padding bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-6xl mx-auto glass-card rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border-none">
                {/* Info Side */}
                <div className="md:w-5/12 futuristic-gradient p-8 sm:p-12 md:p-16 text-white flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl sm:text-4xl md:text-4xl font-bold font-heading mb-6 sm:mb-8 glow-text">Let's Build.</h3>
                    <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 sm:mb-12 font-light">Our engineers are ready to architect your next breakthrough.</p>
                    <div className="space-y-6 sm:space-y-10">
                      <div className="flex items-center gap-4 sm:gap-6">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20 shadow-lg">
                          <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm text-blue-200 uppercase tracking-[0.15em] font-bold mb-1">Secure Channel</div>
                          <div className="text-base sm:text-lg font-medium">contactfluix@gmail.com</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 sm:gap-6">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20 shadow-lg">
                          <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm text-blue-200 uppercase tracking-[0.15em] font-bold mb-1">HQ Location</div>
                          <div className="text-base sm:text-lg font-medium">Islamabad, Pakistan</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 sm:mt-16 pt-4 sm:pt-10 border-t border-white/10 flex gap-4 sm:gap-6">
                    {[Linkedin, Twitter, Instagram].map((Icon, idx) => (
                      <a key={idx} href="#" aria-label={Icon.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,169,255,0.4)]">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Form Side */}
                <div className="md:w-7/12 p-6 sm:p-12 md:p-16">
                  <p className="mb-6 sm:mb-8">Fill out the form and our team will get back to you within 24 hours.</p>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                      <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="h-12 sm:h-14 bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary/10 rounded-xl" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@company.com" className="h-12 sm:h-14 bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary/10 rounded-xl" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="message" render={({ field }) => (
                        <FormItem>
                          <FormLabel>How can we help?</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Tell us about your manual processes..." className="min-h-[120px] bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary/10 rounded-xl resize-none" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <Button type="submit" disabled={submitContact.isPending} className="w-full h-12 sm:h-14 text-lg rounded-xl bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                        {submitContact.isPending ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
