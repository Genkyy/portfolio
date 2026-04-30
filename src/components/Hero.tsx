'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Instagram, Mail, ArrowRight, Terminal, Wifi, Wrench } from 'lucide-react';
import Image from 'next/image';
import { TechBanner } from './TechBanner';

const ROLES = [
  "Full-Stack Web Developer",
  "Network Administrator",
  "System Troubleshooter"
];

export const Hero = () => {
  const [currentRoleIdx, setCurrentRoleIdx] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Magnetic Button Logic
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      
      // Limit magnetic pull range
      if (Math.abs(distanceX) < 100 && Math.abs(distanceY) < 100) {
        x.set(distanceX * 0.4);
        y.set(distanceY * 0.4);
      } else {
        x.set(0);
        y.set(0);
      }
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    const handleTyping = () => {
      const currentFullText = ROLES[currentRoleIdx];
      
      if (isDeleting) {
        setDisplayText(prev => prev.substring(0, prev.length - 1));
        setTypingSpeed(50);
      } else {
        setDisplayText(prev => currentFullText.substring(0, prev.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentRoleIdx((prev) => (prev + 1) % ROLES.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIdx, typingSpeed]);

  const socialLinks = [
    { icon: <Instagram size={18} />, href: 'https://www.instagram.com/khoirultarmidzi' },
    { icon: <Mail size={18} />, href: 'mailto:ktarmidzi@gmail.com' },
  ];

  return (
    <section className="relative min-h-[100vh] flex flex-col pt-24 overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#0088ff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-1 py-12">
        <div className="lg:col-span-7 z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
              <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full border border-primary/20">
                Portfolio
              </span>
              <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">System Online</span>
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter mb-8 uppercase font-heading text-slate-900 italic text-center lg:text-left">
               Khoirul <br/>
               <span className="text-gradient-blue not-italic">Tarmidzi<span className="text-primary italic">.</span></span>
            </h1>

            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12 justify-center lg:justify-start">
               <div className="h-px w-12 bg-slate-200 hidden md:block" />
               <p className="text-xl md:text-3xl font-bold text-slate-900 tracking-tight text-center lg:text-left font-mono min-h-[40px]">
                  <span className="text-primary italic">I am </span> {displayText}<span className="text-primary animate-pulse">|</span>
               </p>
            </div>

            <p className="text-base md:text-lg text-slate-500 mb-12 max-w-xl leading-relaxed font-medium mx-auto lg:mx-0 text-center lg:text-left">
               Membangun jembatan antara <span className="text-slate-900">arsitektur kode</span> berkualitas tinggi dan <span className="text-slate-900">infrastruktur jaringan</span> yang handal. 
            </p>

            <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start">
              <motion.a
                ref={buttonRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ x: mouseX, y: mouseY }}
                href="#projects"
                className="group flex items-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all hover:bg-primary shadow-xl"
              >
                Explore Solution
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <div className="flex items-center gap-3">
                {socialLinks.map((item, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ y: -3, scale: 1.1 }}
                    href={item.href}
                    className="w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-50 border border-slate-100 text-slate-400 hover:text-primary hover:border-primary/20 transition-all font-mono"
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center lg:justify-end z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative w-[260px] h-[340px] md:w-[300px] md:h-[400px] group">
              <div className="absolute inset-0 bg-primary/10 rounded-[2.5rem] rotate-3 blur-2xl group-hover:rotate-6 transition-transform duration-700" />
              <div className="absolute inset-0 bg-white border border-slate-100 rounded-[2.5rem] shadow-xl overflow-hidden">
                <Image
                  src="/khoirul-v2.png"
                  alt="Khoirul Profile"
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 350px"
                  priority
                />
              </div>

              {/* Tag 1: Developer - Only visible on LG+ for mobile clarity */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-12 glass p-4 rounded-2xl shadow-xl border-white/50 hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500"><Terminal size={16} /></div>
                  <p className="text-[10px] font-black text-slate-900 uppercase tracking-wider font-mono">Developer</p>
                </div>
              </motion.div>

              {/* Tag 2: Network - Only visible on LG+ */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-1/2 -left-20 glass p-4 rounded-2xl shadow-xl border-white/50 hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-500"><Wifi size={16} /></div>
                  <p className="text-[10px] font-black text-slate-900 uppercase tracking-wider font-mono">Network</p>
                </div>
              </motion.div>

              {/* Tag 3: Troubleshooting - Only visible on LG+ */}
              <motion.div 
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-8 right-0 glass p-4 rounded-2xl shadow-xl border-white/50 hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500"><Wrench size={16} /></div>
                  <p className="text-[10px] font-black text-slate-900 uppercase tracking-wider font-mono">Troubleshooting</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-auto pb-20">
         <TechBanner />
      </div>
    </section>
  );
};
