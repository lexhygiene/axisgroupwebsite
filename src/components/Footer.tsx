import React from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-green-deep flex items-center justify-center rounded-lg">
                <span className="text-saffron font-serif text-2xl font-bold">A</span>
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight text-white">
                AXIS <span className="text-green-deep">GROUP</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed mb-8">
              Building enduring industrial businesses across core sectors with a focus on asset-driven growth and long-term value creation.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-400 hover:text-saffron transition-colors">Home</Link></li>
              <li><Link to="/#about" className="text-slate-400 hover:text-saffron transition-colors">About Us</Link></li>
              <li><Link to="/sustainability" className="text-slate-400 hover:text-saffron transition-colors">Sustainability</Link></li>
              <li><Link to="/#contact" className="text-slate-400 hover:text-saffron transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Our Businesses</h4>
            <ul className="space-y-4">
              <li><Link to="/business/jute" className="text-slate-400 hover:text-saffron transition-colors">Jute Industry</Link></li>
              <li><Link to="/business/mining" className="text-slate-400 hover:text-saffron transition-colors">Mining & Crushing</Link></li>
              <li><Link to="/business/real-estate" className="text-slate-400 hover:text-saffron transition-colors">Real Estate</Link></li>
              <li><Link to="/business/warehousing" className="text-slate-400 hover:text-saffron transition-colors">Warehousing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-6">Subscribe to receive updates on our latest projects and industrial insights.</p>
            <div className="flex gap-2">
              <Input placeholder="Email Address" className="bg-slate-800 border-slate-700 rounded-lg text-white" />
              <Button className="bg-green-deep hover:bg-green-muted text-white rounded-lg">Join</Button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Axis Group. All rights reserved.
          </div>
          <div className="flex gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
