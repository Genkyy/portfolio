'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, ArrowUpRight, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/khoirultarmidzi', label: 'Instagram' },
    { icon: <Mail size={20} />, href: 'mailto:ktarmidzi@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-6 font-heading">
                Khoirul <span className="text-primary italic">Tarmidzi</span>.
              </h2>
              <p className="text-slate-500 max-w-sm leading-relaxed mb-8 font-medium">
                Digital Architect & Systems Specialist. Membangun infrastruktur digital yang handal dan aplikasi yang berperforma tinggi.
              </p>
              
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-100">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-black text-emerald-700 uppercase tracking-widest">Available for Hire</span>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
             <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-8">Navigation</h4>
             <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="group flex items-center gap-2 text-slate-600 hover:text-primary transition-colors font-bold text-sm uppercase tracking-widest"
                    >
                      <span className="w-0 group-hover:w-4 h-[1px] bg-primary transition-all duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
             </ul>
          </div>

          {/* Social Columns */}
          <div className="lg:col-span-4">
             <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-8">Connect</h4>
             <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a 
                    key={social.label}
                    href={social.href}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all group"
                  >
                    <div className="text-slate-400 group-hover:text-primary transition-colors">
                      {social.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">{social.label}</span>
                    <ArrowUpRight size={12} className="ml-auto text-slate-300 group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all" />
                  </a>
                ))}
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
              <span>&copy; {currentYear} // KHOIRUL.ID</span>
           </div>
           
           <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                 <span className="text-slate-200">Local Time:</span>
                 <span suppressHydrationWarning>
                    {mounted ? new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) : '--:--'} WIB
                 </span>
              </div>
              <div className="h-4 w-[1px] bg-slate-200" />
              <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                 Built with Next.js
              </div>
           </div>
        </div>

      </div>
    </footer>
  );
};
