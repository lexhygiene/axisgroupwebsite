import React, { useEffect } from "react";
import { motion } from "motion/react";
import { Sprout, Globe, Heart, ShieldCheck, ArrowRight } from "lucide-react";
import { CONTENT, IMAGES } from "../constants";
import { Button } from "@/components/ui/button";

const Sustainability = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Sustainability & CSR | Axis Group - Building a Better Future";
  }, []);

  return (
    <div className="pt-20 bg-luxury-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.about} 
            alt="Sustainability" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Sustainability & CSR</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl font-light italic">
              Balancing economic growth with environmental responsibility and social impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold text-saffron uppercase tracking-[0.3em] mb-4">Our Approach</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">
                Integrating Sustainability into Core Operations
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {CONTENT.sustainability.approach}
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 rounded-2xl bg-green-deep/10 flex items-center justify-center flex-shrink-0">
                    <Sprout className="text-green-deep" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif font-bold text-slate-900 mb-2">Eco-friendly Jute Production</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Leveraging natural fibers to support India’s leadership in sustainable packaging and industrial materials.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 rounded-2xl bg-green-deep/10 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="text-green-deep" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif font-bold text-slate-900 mb-2">Responsible Mining</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Implementing best practices in mineral extraction and processing to minimize environmental footprint.
                    </p>
                  </div>
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
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src={IMAGES.jute} 
                  alt="Sustainable Jute" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CSR Section */}
      <section className="py-24 bg-luxury-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-saffron uppercase tracking-[0.3em] mb-4">Axis Foundation</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
              Empowering Communities
            </h3>
            <p className="text-lg text-slate-600">
              {CONTENT.sustainability.socialImpact}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Education Initiatives",
                description: "Improving access to quality education and social infrastructure for economically weaker sections.",
                icon: <Globe className="text-green-deep" size={24} />
              },
              {
                title: "Healthcare Programs",
                description: "Supporting community health through targeted medical initiatives and infrastructure development.",
                icon: <Heart className="text-green-deep" size={24} />
              },
              {
                title: "Community Development",
                description: "Building resilient local communities through sustainable infrastructure and social support systems.",
                icon: <ShieldCheck className="text-green-deep" size={24} />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/60 backdrop-blur-md p-10 rounded-[2.5rem] shadow-xl border border-white/20 group hover:bg-green-deep transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-luxury-cream flex items-center justify-center mb-8 group-hover:bg-white/10 transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-serif font-bold text-slate-900 mb-4 group-hover:text-white transition-colors">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed group-hover:text-white/70 transition-colors">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-deep/20 rounded-full -mr-48 -mt-48 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-saffron/10 rounded-full -ml-48 -mb-48 blur-3xl" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">
                Join Our Vision for a Sustainable Future
              </h3>
              <p className="text-xl text-white/70 mb-12 leading-relaxed">
                We are always looking for ways to improve our impact. If you have ideas or want to partner with Axis Foundation, reach out to us.
              </p>
              <Button className="bg-saffron hover:bg-white hover:text-green-deep text-slate-900 font-bold rounded-full px-12 py-8 text-xl group">
                Contact Axis Foundation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
