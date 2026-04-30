'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Works', href: '#projects' },
  { name: 'Services', href: '#skills' },
  { name: 'About me', href: '#experience' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      scrolled ? "bg-white/90 backdrop-blur-xl py-3 shadow-md" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-black tracking-tighter text-foreground flex items-center group">
            khoir<span className="text-primary transition-transform group-hover:scale-125 duration-300">.</span>
          </Link>

          {/* Center Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.2em] font-black text-muted-foreground hover:text-primary transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden md:block">
            <Link 
              href="#contact"
              className="px-8 py-3 rounded-xl bg-primary text-white font-black text-[10px] uppercase tracking-[0.15em] shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 block"
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-foreground p-1.5" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>


      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-border shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-black text-foreground hover:text-primary transition-colors tracking-tighter"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full py-5 text-center rounded-2xl bg-primary text-white font-black uppercase tracking-widest text-sm"
              >
                Let's Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

