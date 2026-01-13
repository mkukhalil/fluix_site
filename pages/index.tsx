import { ServiceCard } from "../client/src/components/ServiceCard";
import { useSubmitContact } from "../client/src/hooks/use-contact";
import { Button } from "../client/src/components/ui/button";
import { Input } from "../client/src/components/ui/input";
import { Textarea } from "../client/src/components/ui/textarea";
import { Form,FormControl,FormField,FormItem,FormLabel,FormMessage,} from "../client/src/components/ui/form";
import { ArrowRight,Mail,MapPin,Linkedin,Twitter,Instagram,ShoppingCart,Users,Briefcase} from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "../shared/schema";
import Head from "next/head";
import dynamic from "next/dynamic";

export default function Home() {
  const submitContact = useSubmitContact();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
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

  const OurProcess = dynamic(() => import("../client/src/components/OurProcess"), { ssr: false });
  const AiAdvantage = dynamic(() => import("../client/src/components/AiAdvantage"), { ssr: false });
  const Testimonials = dynamic(() => import("../client/src/components/Testimonials"), { ssr: false });
  const Services = dynamic(() => import("../client/src/components/Services"), { ssr: false });
  const CallToAction = dynamic(() => import("../client/src/components/CallToAction"), { ssr: false });

  return (
    <>
      <Head>
    <title>AI Automation Services for Businesses | Fluix</title>
    <meta
      name="description"
      content="Fluix provides AI automation services for local businesses, agencies, and enterprises. Automate leads, customer support, reporting, and workflows with scalable AI systems."
    />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://fluix-site.vercel.app/" />

    {/* Open Graph */}
    <meta property="og:title" content="AI Automation Services for Businesses | Fluix" />
    <meta
      property="og:description"
      content="AI automation for local businesses, agencies, and enterprises. Reduce manual work and scale operations with Fluix."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://fluix-site.vercel.app/" />
    <meta property="og:image" content="https://fluix-site.vercel.app/og-image.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="AI Automation Services for Businesses | Fluix" />
    <meta name="twitter:description" content="AI automation for local businesses, agencies, and enterprises. Reduce manual work and scale operations with Fluix." />
    <meta name="twitter:image" content="https://fluix-site.vercel.app/og-image.png" />

  </Head>
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <motion.div className="scroll-progress" style={{ scaleX }} />

      {/* Hero Section */}
      <section
        id="home"
        className=" relative h-screen flex items-center justify-center bg-mesh text-white pt-24 overflow-hidden"
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
              AI Automation for Businesses That Want to 
              <span className="text-accent glow-text italic"> Scale.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              We design and deploy AI systems for local businesses, agencies, and enterprises,
              automating leads, customer support, reporting, and workflows securely at scale.
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
      <h2 className="sr-only">AI Automation for Local Businesses, Agencies, and Enterprises</h2>

<main>
  {/* Who we work with section */}
 <section
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
              Who we work with
            </motion.h2>
          </div>
            <h2 className="sr-only">AI Automation for Local Businesses</h2>
            <h2 className="sr-only">AI Automation for Agencies</h2>
            <h2 className="sr-only">Enterprise-Grade AI Automation</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
            icon={<ShoppingCart className="w-10 h-10 text-primary" />}
            title="Local Businesses"
            description="Automate customer interactions, booking systems, and reporting to save time and grow locally."
            delay={0.05}
          />
          <ServiceCard
            icon={<Users className="w-10 h-10 text-primary" />}
            title="Agencies"
            description="Streamline client campaigns, automate reporting, and manage multiple accounts effortlessly."
            delay={0.1}
          />
          <ServiceCard
            icon={<Briefcase className="w-10 h-10 text-primary" />}
            title="Enterprises"
            description="Integrate AI into large-scale workflows, CRMs, and analytics for maximum operational efficiency."
            delay={0.15}
          />
          </div>
        </div>
      </section>

    <OurProcess />
    <AiAdvantage />
    <Services />
    <Testimonials />
    <CallToAction />

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
                      <div className="text-lg font-medium">contactfluix@gmail.com</div>
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
      </main>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is AI automation for businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI automation helps businesses automate tasks like lead handling, customer support, reporting, and internal workflows using artificial intelligence."
          }
        },
        {
          "@type": "Question",
          "name": "Who can benefit from AI automation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Local businesses, agencies, and enterprises can all benefit from AI automation to reduce manual work, improve response times, and scale operations efficiently."
          }
        },
        {
          "@type": "Question",
          "name": "Does Fluix work with enterprise systems?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Fluix designs scalable AI workflows that integrate with existing enterprise systems using secure APIs and modular automation architecture."
          }
        }
      ]
    })
  }}
/>

    </div>
    </>
  );
}
