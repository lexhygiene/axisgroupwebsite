import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTENT } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBusinesses, setShowBusinesses] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Contact", href: "/#contact" },
  ];

  const isHome = location.pathname === "/";

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    setIsOpen(false);
    setShowBusinesses(false);
    
    if (href === "/") {
      if (isHome) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.substring(2);
      if (isHome) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate(`/${href}`);
        // Small delay to allow navigation to complete
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-white/90 backdrop-blur-xl border-b border-white/20 py-2 shadow-sm" : "bg-transparent py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              onClick={(e) => handleLinkClick(e, "/")}
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 bg-green-deep flex items-center justify-center rounded-lg shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-saffron font-serif text-2xl font-bold">A</span>
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight text-slate-900">
                AXIS <span className="text-green-deep">GROUP</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              onClick={(e) => handleLinkClick(e, "/")}
              className="text-xs font-bold text-slate-600 hover:text-green-deep transition-colors uppercase tracking-[0.2em]"
            >
              Home
            </Link>
            
            <Link
              to="/#about"
              onClick={(e) => handleLinkClick(e, "/#about")}
              className="text-xs font-bold text-slate-600 hover:text-green-deep transition-colors uppercase tracking-[0.2em]"
            >
              About
            </Link>

            {/* Businesses Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setShowBusinesses(true)}
              onMouseLeave={() => setShowBusinesses(false)}
            >
              <button 
                className="flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-green-deep transition-colors uppercase tracking-[0.2em]"
              >
                Businesses <ChevronDown size={14} className={`transition-transform duration-300 ${showBusinesses ? "rotate-180" : ""}`} />
              </button>
              
              <AnimatePresence>
                {showBusinesses && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden py-2"
                  >
                    {CONTENT.verticals.map((v) => (
                      <Link
                        key={v.id}
                        to={`/business/${v.id}`}
                        onClick={() => setShowBusinesses(false)}
                        className="block px-6 py-3 text-xs font-bold text-slate-600 hover:bg-luxury-cream hover:text-green-deep transition-all uppercase tracking-wider"
                      >
                        {v.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/sustainability"
              className="text-xs font-bold text-slate-600 hover:text-green-deep transition-colors uppercase tracking-[0.2em]"
            >
              Sustainability
            </Link>

            <Link
              to="/#contact"
              onClick={(e) => handleLinkClick(e, "/#contact")}
              className="text-xs font-bold text-slate-600 hover:text-green-deep transition-colors uppercase tracking-[0.2em]"
            >
              Contact
            </Link>

            <Link to="/#contact" onClick={(e) => handleLinkClick(e, "/#contact")}>
              <Button className="bg-green-deep hover:bg-green-muted text-white rounded-full px-6 shadow-md hover:shadow-lg transition-all">
                Get in Touch
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile Businesses Submenu */}
              <div className="px-3 py-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">Our Businesses</div>
                <div className="grid grid-cols-1 gap-2">
                  {CONTENT.verticals.map((v) => (
                    <Link
                      key={v.id}
                      to={`/business/${v.id}`}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 text-sm text-slate-600 hover:text-green-deep"
                    >
                      {v.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="px-3 pt-4">
                <Link to="/#contact" onClick={(e) => handleLinkClick(e, "/#contact")}>
                  <Button className="w-full bg-green-deep hover:bg-green-muted text-white rounded-full">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
