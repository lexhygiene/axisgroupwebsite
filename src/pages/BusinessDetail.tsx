import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ChevronRight, Factory, Pickaxe, Building2, Warehouse } from "lucide-react";
import { CONTENT } from "../constants";
import { Button } from "@/components/ui/button";

const BusinessDetail = () => {
  const { id } = useParams();
  const business = CONTENT.verticals.find((v) => v.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (business) {
      document.title = `${business.title} | Axis Group Industrial Verticals`;
    }
  }, [id, business]);

  if (!business) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-luxury-white">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Business Not Found</h1>
          <Link to="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const icons: Record<string, React.ReactNode> = {
    jute: <Factory className="text-green-deep" size={48} />,
    mining: <Pickaxe className="text-green-deep" size={48} />,
    "real-estate": <Building2 className="text-green-deep" size={48} />,
    warehousing: <Warehouse className="text-green-deep" size={48} />,
  };

  return (
    <div className="pt-20 bg-luxury-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={business.image} 
            alt={business.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/#businesses" className="inline-flex items-center text-saffron hover:text-white transition-colors mb-6 uppercase tracking-widest text-xs font-bold">
              <ArrowLeft size={16} className="mr-2" /> Back to Businesses
            </Link>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">{business.title}</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl font-light italic">
              {business.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="prose prose-lg max-w-none"
              >
                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Overview</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {business.overview}
                </p>
                
                {business.impact && (
                  <>
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Industry Impact</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                      {business.impact}
                    </p>
                  </>
                )}

                {business.infrastructure && (
                  <>
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Infrastructure</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                      {business.infrastructure}
                    </p>
                  </>
                )}

                {business.model && (
                  <>
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Business Model</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                      {business.model}
                    </p>
                  </>
                )}

                {business.role && (
                  <>
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Industry Role</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                      {business.role}
                    </p>
                  </>
                )}

                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Key Operations</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {(business.operations || business.portfolio || business.capabilities)?.map((item: string, index: number) => (
                    <div key={index} className="flex items-start gap-4 p-6 bg-luxury-cream rounded-2xl border border-slate-100">
                      <div className="mt-1 w-6 h-6 rounded-full bg-green-deep flex items-center justify-center flex-shrink-0">
                        <ChevronRight size={14} className="text-white" />
                      </div>
                      <span className="text-slate-800 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="sticky top-32"
              >
                <div className="bg-white/60 backdrop-blur-md p-8 rounded-[2rem] shadow-xl border border-white/20 mb-8">
                  <div className="w-20 h-20 rounded-3xl bg-luxury-cream flex items-center justify-center mb-6">
                    {icons[business.id]}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">Strategic Focus</h3>
                  <ul className="space-y-4">
                    {business.focus.map((f: string, i: number) => (
                      <li key={i} className="flex items-center gap-3 text-slate-600">
                        <div className="w-2 h-2 rounded-full bg-saffron" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-green-deep/90 backdrop-blur-md p-8 rounded-[2rem] text-white shadow-xl border border-white/10">
                  <h3 className="text-2xl font-serif font-bold mb-4">Inquire About {business.title}</h3>
                  <p className="text-white/70 mb-8 text-sm leading-relaxed">
                    Interested in learning more about our {business.title.toLowerCase()} operations or exploring partnership opportunities?
                  </p>
                  <Link to="/#contact">
                    <Button className="w-full bg-saffron hover:bg-white hover:text-green-deep text-slate-900 font-bold rounded-xl py-6">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessDetail;
