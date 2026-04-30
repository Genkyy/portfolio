'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Mail, Instagram } from 'lucide-react';
import Image from 'next/image';

export const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Motion values for drag and tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for rotation
  const rotateX = useSpring(useTransform(y, [-100, 100], [25, -25]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-25, 25]), { stiffness: 150, damping: 20 });

  // Spring for lanyard movement
  const springX = useSpring(x, { stiffness: 80, damping: 20 });
  
  // Custom transform for the strap curvature based on x movement
  const strapPath = useTransform(springX, (val) => {
    const controlledVal = val * 0.5; // Reduce intensity for natural look
    return `M 160,0 Q ${160 + controlledVal},80 160,140`;
  });

  const socialLinks = [
    { name: 'Instagram', icon: <Instagram size={20} />, href: 'https://www.instagram.com/khoirultarmidzi' },
  ];

  return (
    <section id="contact" className="py-32 bg-[#fafafa] relative overflow-hidden flex items-center justify-center min-h-[850px]">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
        
        {/* Playable Card Area */}
        <div ref={containerRef} className="lg:col-span-6 flex flex-col items-center justify-center relative h-[650px] cursor-grab active:cursor-grabbing">
          
          {/* Enhanced Realistic Lanyard Strap (SVG Path) */}
          <div className="absolute top-0 w-80 h-40 -translate-y-16 pointer-events-none -z-10 flex justify-center">
             <svg width="320" height="200" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
               {/* Behind part of the strap loop */}
               <motion.path 
                 d={strapPath}
                 stroke="currentColor" 
                 strokeWidth="12" 
                 strokeLinecap="round"
                 className="text-primary/10"
               />
               {/* Main visible strap with gradient look */}
               <motion.path 
                 d={strapPath}
                 stroke="currentColor" 
                 strokeWidth="6" 
                 strokeLinecap="round"
                 className="text-primary/30"
               />
               <motion.circle cx="160" cy="145" r="4" fill="currentColor" className="text-gray-400" />
             </svg>
          </div>

          <motion.div
            drag={!isMobile}
            dragConstraints={containerRef}
            dragElastic={0.2}
            onDragEnd={() => {
              x.set(0);
              y.set(0);
            }}
            style={{ x, y, rotateX, rotateY }}
            whileDrag={{ scale: 1.05 }}
            className="relative w-80 h-[480px] bg-white rounded-[2.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden flex flex-col preserve-3d"
          >
            {/* Card Header with Physical Clip Detail */}
            <div className="h-20 bg-primary flex flex-col items-center justify-center gap-2 relative">
               {/* The Clip/Hole */}
               <div className="w-14 h-4 bg-neutral-900/30 rounded-full shadow-inner flex items-center justify-center">
                  <div className="w-8 h-1 bg-white/20 rounded-full" />
               </div>
               <p className="text-[10px] font-black text-white/50 tracking-[0.3em] uppercase">Auth-ID System</p>
               
               {/* Glossy Overlay */}
               <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
            </div>

            {/* Card Content */}
            <div className="p-8 flex flex-col items-center flex-1 text-center">
              {/* Profile Photo with ID frame */}
              <div className="relative w-36 h-36 rounded-3xl overflow-hidden mb-6 ring-8 ring-slate-50 shadow-xl bg-slate-100">
                <Image
                  src="/khoirul-v2.png"
                  alt="Identity Photo"
                  fill
                  className="object-contain p-2"
                  sizes="150px"
                />
              </div>

              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Khoirul Tarmidzi</h3>
              <p className="text-primary font-bold text-xs uppercase tracking-widest mb-6">Full-Stack IT Specialist</p>

              {/* Status & Stats - Improved Contrast */}
              <div className="w-full space-y-3 mb-8">
                 <div className="flex items-center justify-between px-5 py-3 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm transition-all hover:bg-white hover:border-primary/20">
                    <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Employee</span>
                    <span className="text-[11px] font-black text-slate-900 uppercase">Verified</span>
                 </div>
                 <div className="flex items-center justify-between px-5 py-3 bg-slate-100/50 rounded-2xl border border-dashed border-slate-300">
                    <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Network</span>
                    <div className="flex gap-2 items-center">
                       <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                       <span className="text-[11px] font-bold text-primary uppercase">Active</span>
                    </div>
                 </div>
              </div>

              {/* Barcode Authenticity - Deterministic pattern for hydration safety */}
              <div className="mt-auto w-full flex flex-col items-center gap-3">
                 <div className="w-full h-10 flex gap-[2px] items-end justify-center grayscale opacity-30">
                   {[...Array(35)].map((_, i) => (
                     <div 
                        key={i} 
                        className="bg-black" 
                        style={{ 
                          width: i % 3 === 0 ? '3px' : '1px', 
                          height: `${40 + (i % 7) * 8}%` 
                        }} 
                      />
                   ))}
                 </div>
              </div>
            </div>
          </motion.div>
          
          <div className="mt-8 flex flex-col items-center gap-2">
             <p className="text-[10px] uppercase font-black tracking-[0.3em] text-slate-400 italic">
               {isMobile ? "Tap to Interact" : "Drag & Throw Me"}
             </p>
             <div className="w-1 h-1 rounded-full bg-primary animate-ping" />
          </div>
        </div>

        {/* Right Content: Message */}
        <div className="lg:col-span-6">
           <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="pl-0 lg:pl-12 text-center lg:text-left"
           >
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                Let&apos;s Build <br/>
                <span className="text-gradient-blue italic">Something.</span>
              </h2>
              <p className="text-lg text-slate-500 mb-12 max-w-md leading-relaxed mx-auto lg:mx-0">
                Experience in bridging heavy backend systems with high-end frontend aesthetics.
              </p>

              <div className="space-y-4">
                <a href="mailto:ktarmidzi@gmail.com" className="flex items-center gap-6 p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all group overflow-hidden relative">
                   <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
                   <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <Mail size={24} />
                   </div>
                   <div className="relative z-10 text-left">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Email</p>
                      <p className="text-lg font-bold text-slate-900 tracking-tight">ktarmidzi@gmail.com</p>
                   </div>
                </a>

                <div className="grid grid-cols-2 gap-4">
                   {socialLinks.map((social) => (
                      <a 
                        key={social.name}
                        href={social.href}
                        className="flex flex-col items-center justify-center gap-3 p-5 rounded-3xl bg-white border border-slate-100 hover:border-primary/40 hover:shadow-xl transition-all text-slate-400 hover:text-primary group"
                      >
                         <div className="group-hover:scale-110 transition-transform">{social.icon}</div>
                         <span className="text-[10px] font-black uppercase tracking-widest">{social.name}</span>
                      </a>
                   ))}
                </div>
              </div>
           </motion.div>
        </div>

      </div>
    </section>
  );
};
