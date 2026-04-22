import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  ChevronRight, 
  Building2, 
  Pickaxe, 
  Warehouse, 
  Sprout, 
  Mail, 
  Phone, 
  MapPin,
  Globe,
  Factory
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CONTENT, IMAGES } from "../constants";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-luxury-cream">
      <div className="absolute inset-0 z-0 opacity-10">
        <img 
          src={IMAGES.hero} 
          alt="Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron/10 border border-saffron/20 text-saffron text-xs font-bold uppercase tracking-widest mb-6">
              <Globe size={14} />
              Diversified Industrial Excellence
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-[1.1] mb-8">
              {CONTENT.tagline}
            </h1>
            <p className="text-xl text-slate-600 mb-6 leading-relaxed max-w-xl">
              {CONTENT.heroDescription}
            </p>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-xl italic">
              {CONTENT.heroSubtext}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#businesses">
                <Button className="bg-green-deep hover:bg-green-muted text-white rounded-full px-8 py-6 text-lg group">
                  Explore Our Businesses
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#about">
                <Button variant="outline" className="border-slate-300 rounded-full px-8 py-6 text-lg hover:bg-white">
                  About the Group
                </Button>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src={IMAGES.hero} 
                alt="Axis Group Industrial" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[200px]">
              <div className="text-3xl font-serif font-bold text-green-deep mb-1">4+</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Core Industrial Verticals</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-saffron uppercase tracking-[0.3em] mb-4">About Axis Group</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">
              A Legacy of Industrial Growth & Strategic Asset Management
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {CONTENT.about.overview}
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed italic">
              {CONTENT.about.legacy}
            </p>
            
            <div className="space-y-6 mb-10">
              {CONTENT.strategicPositioning.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full bg-green-deep/10 flex items-center justify-center flex-shrink-0">
                    <ChevronRight size={14} className="text-green-deep" />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                <img src={IMAGES.about} alt="Office" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg">
                <img src={IMAGES.jute} alt="Jute Industry" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 pt-8"
            >
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg">
                <img src={IMAGES.mining} alt="Mining" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                <img src={IMAGES.warehousing} alt="Warehouse" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface BusinessCardProps {
  vertical: any;
  index: number;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ vertical, index }) => {
  const icons = [
    <Factory className="text-green-deep" size={24} />,
    <Pickaxe className="text-green-deep" size={24} />,
    <Building2 className="text-green-deep" size={24} />,
    <Warehouse className="text-green-deep" size={24} />
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/business/${vertical.id}`}>
        <Card className="h-full group border-none shadow-xl hover:shadow-2xl transition-all duration-500 rounded-[2rem] overflow-hidden bg-white/60 backdrop-blur-md border border-white/20 cursor-pointer">
          <div className="aspect-video overflow-hidden relative">
            <img 
              src={vertical.image} 
              alt={vertical.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <span className="text-white font-medium flex items-center gap-2">
                Learn More <ArrowRight size={16} />
              </span>
            </div>
          </div>
          <CardHeader className="pt-8 px-8">
            <div className="w-12 h-12 rounded-2xl bg-luxury-cream flex items-center justify-center mb-4 group-hover:bg-saffron/20 transition-colors">
              {icons[index % icons.length]}
            </div>
            <CardTitle className="text-2xl font-serif font-bold text-slate-900 mb-2">{vertical.title}</CardTitle>
            <CardDescription className="text-slate-600 text-base leading-relaxed">
              {vertical.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <div className="pt-4 border-t border-slate-100">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Strategic Focus</h4>
              <ul className="space-y-2">
                {vertical.focus.slice(0, 2).map((f: string, i: number) => (
                  <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-saffron" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

const BusinessVerticals = () => {
  return (
    <section id="businesses" className="py-24 bg-luxury-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-saffron uppercase tracking-[0.3em] mb-4">Our Businesses</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
            Diversified Operations, Unified Excellence
          </h3>
          <p className="text-lg text-slate-600">
            Axis Group operates across high-growth industrial sectors, leveraging strategic assets and operational expertise to drive value.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {CONTENT.verticals.map((v, i) => (
            <BusinessCard key={v.id} vertical={v} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const LeadershipSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-green-deep rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-saffron/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32 blur-3xl" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold text-saffron uppercase tracking-[0.3em] mb-6">Leadership</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
                Visionary Leadership for Multi-Generational Growth
              </h3>
              <p className="text-xl text-white/80 mb-8 leading-relaxed italic font-serif">
                "{CONTENT.leadership.vision}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-1 bg-saffron rounded-full" />
                <div>
                  <div className="text-xl font-serif font-bold text-white">{CONTENT.leadership.name}</div>
                  <div className="text-saffron text-sm font-bold uppercase tracking-widest">Group Chairman</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[2/2] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={IMAGES.leadership} 
                  alt="Leadership" 
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SustainabilitySection = () => {
  return (
    <section id="sustainability" className="py-24 bg-luxury-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-green-deep/10 flex items-center justify-center mb-6">
                  <Sprout className="text-green-deep" size={24} />
                </div>
                <h4 className="text-xl font-serif font-bold text-slate-900 mb-3">Environmental</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Eco-friendly jute production and responsible mining practices ensuring long-term viability.
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 mt-8">
                <div className="w-12 h-12 rounded-2xl bg-saffron/10 flex items-center justify-center mb-6">
                  <Globe className="text-saffron-muted" size={24} />
                </div>
                <h4 className="text-xl font-serif font-bold text-slate-900 mb-3">Axis Foundation</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Supporting education, healthcare, and community development for economically weaker sections.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-sm font-bold text-saffron uppercase tracking-[0.3em] mb-4">Sustainability & CSR</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">
              Balancing Economic Growth with Social Responsibility
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              {CONTENT.sustainability.approach}
            </p>
            <Link to="/sustainability">
              <Button className="bg-green-deep hover:bg-green-muted text-white rounded-full px-8 py-6">
                Learn More About Axis Foundation
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message. We will get back to you soon.");
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-saffron uppercase tracking-[0.3em] mb-4">Contact Us</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">
              Let's Build the Future Together
            </h3>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Have questions about our operations or looking for strategic partnerships? Reach out to us.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-luxury-cream flex items-center justify-center flex-shrink-0">
                  <Mail className="text-green-deep" size={20} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Email Us</div>
                  <div className="text-lg font-medium text-slate-900">info@axisgroup.in</div>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-luxury-cream flex items-center justify-center flex-shrink-0">
                  <Phone className="text-green-deep" size={20} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Call Us</div>
                  <div className="text-lg font-medium text-slate-900">+91 (0) 33 2230 0000</div>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-luxury-cream flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-green-deep" size={20} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Visit Us</div>
                  <div className="text-lg font-medium text-slate-900">Kolkata, West Bengal, India</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-luxury-cream p-8 md:p-12 rounded-[3rem] shadow-xl border border-slate-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-700 font-medium">Full Name</Label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    className="bg-white border-slate-200 rounded-xl h-12"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700 font-medium">Email Address</Label>
                  <Input 
                    id="email" 
                    type="text"
                    placeholder="john@example.com" 
                    className="bg-white border-slate-200 rounded-xl h-12"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-slate-700 font-medium">Subject</Label>
                <Input 
                  id="subject" 
                  placeholder="Business Inquiry" 
                  className="bg-white border-slate-200 rounded-xl h-12"
                  value={formState.subject}
                  onChange={(e) => setFormState({...formState, subject: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-700 font-medium">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="How can we help you?" 
                  className="bg-white border-slate-200 rounded-xl min-h-[150px]"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-green-deep hover:bg-green-muted text-white rounded-xl py-6 text-lg font-bold">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <BusinessVerticals />
      <LeadershipSection />
      <SustainabilitySection />
      <ContactSection />
    </>
  );
};

export default Home;
