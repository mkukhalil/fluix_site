import { Navbar } from "@/components/Navbar";
import { ServiceCard } from "@/components/ServiceCard";
import { useSubmitContact } from "@/hooks/use-contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
  Instagram
} from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function Home() {
  const submitContact = useSubmitContact();
  
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
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-mesh text-white pt-20">
        <div className="absolute inset-0 bg-black/20" /> {/* Subtle overlay */}
        
        <div className="container relative z-10 px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <span className="text-sm font-medium text-blue-200">🚀 AI-Powered Business Growth</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 leading-tight">
              Automate Your Business. <br />
              <span className="text-accent">Save Time.</span> Increase Revenue.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              We help SMEs, Clinics, Real Estate, and E-commerce businesses eliminate manual work and scale effortlessly with custom AI solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="w-full sm:w-auto text-lg h-14 px-8 rounded-full bg-accent hover:bg-accent/90 text-white font-semibold shadow-xl shadow-accent/20 transition-transform hover:-translate-y-1"
              >
                Book Your Free Automation Audit
              </Button>
              <Button 
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto text-lg h-14 px-8 rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                Explore Services
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Problem/Solution Section */}
      <section id="about" className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-heading">
              Still Doing Manual Work?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your time is valuable. Don't waste it on tasks that AI can handle instantly and more accurately.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                icon: <Clock className="w-8 h-8 text-red-500" />, 
                title: "Manual Leads", 
                problem: "Missed sales due to slow follow-up", 
                solution: "Instant AI qualification & booking" 
              },
              { 
                icon: <MessageSquare className="w-8 h-8 text-orange-500" />, 
                title: "Emails & WhatsApp", 
                problem: "Hours lost responding to FAQs", 
                solution: "24/7 Intelligent Chatbots" 
              },
              { 
                icon: <TrendingUp className="w-8 h-8 text-yellow-500" />, 
                title: "Repetitive Tasks", 
                problem: "Low efficiency and burnout", 
                solution: "End-to-end workflow automation" 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg text-center hover:border-accent/20 transition-colors"
              >
                <div className="inline-flex items-center justify-center p-4 bg-gray-50 rounded-full mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-red-500 font-medium mb-4 text-sm">{item.problem}</p>
                <div className="h-px w-16 bg-gray-100 mx-auto mb-4" />
                <p className="text-green-600 font-medium flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  {item.solution}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-xl font-medium text-primary">
              We automate all these workflows with AI.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gray-50 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-heading">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cutting-edge automation solutions tailored to your specific business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <section id="testimonials" className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-16 font-heading">
            What Our Clients Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "AutoAI completely transformed how we handle patient bookings. We save 20 hours a week!",
                author: "Dr. Sarah Mitchell",
                role: "Dental Clinic Owner"
              },
              {
                quote: "The lead qualification bot increased our conversion rate by 40% in just two months.",
                author: "James Wilson",
                role: "Real Estate Agency Director"
              },
              {
                quote: "I can finally focus on strategy instead of copy-pasting data. The ROI was immediate.",
                author: "Elena Rodriguez",
                role: "E-commerce Founder"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(star => (
                    <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-bold text-primary">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        {/* Unsplash abstract tech background */}
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Book a free demo today and see exactly how much time and money you can save.
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="h-14 px-8 text-lg rounded-full bg-accent hover:bg-accent/90 text-white font-semibold shadow-xl shadow-black/20"
          >
            Book a Free Demo <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            
            {/* Contact Info Side */}
            <div className="md:w-5/12 bg-primary p-10 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold font-heading mb-6">Get in Touch</h3>
                <p className="text-blue-100 mb-8">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-xs text-blue-200 uppercase tracking-wider font-semibold">Email</div>
                      <div className="font-medium">hello@autoai.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-xs text-blue-200 uppercase tracking-wider font-semibold">Location</div>
                      <div className="font-medium">San Francisco, CA</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="md:w-7/12 p-10">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="h-12 bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary/10 rounded-xl" {...field} />
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
                          <Input type="email" placeholder="john@company.com" className="h-12 bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary/10 rounded-xl" {...field} />
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
                          <Textarea placeholder="Tell us about your manual processes..." className="min-h-[120px] bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary/10 rounded-xl resize-none" {...field} />
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
      <footer className="bg-primary text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="bg-white/10 p-2 rounded-lg">
                <Bot className="h-5 w-5 text-accent" />
              </div>
              <span className="text-xl font-bold font-heading">AutoAI Solutions</span>
            </div>
            
            <div className="text-sm text-blue-200">
              © {new Date().getFullYear()} AutoAI Solutions. All rights reserved.
            </div>

            <div className="flex gap-6 text-sm text-blue-200">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
