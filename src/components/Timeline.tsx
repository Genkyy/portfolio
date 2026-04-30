'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const events = [
  {
    type: 'work',
    title: 'Admin TI',
    location: 'PTPN I Regional I',
    date: 'Oktober 2025 - Sekarang',
    description: 'Mengoptimalkan performa Employee Information System (SIK) melalui fitur mass-upload dan debugging modul SDM. Mengelola infrastruktur jaringan termasuk instalasi rak server dan perencanaan Fiber Optic.',
  },
  {
    type: 'work',
    title: 'Informatics Teacher & IT Coordinator',
    location: 'SMA Pertiwi Medan',
    date: 'Juli 2025 - Okt 2025',
    description: 'Guru Informatika, Mengelola laboratorium komputer dan mentor program ekstrakurikuler Multimedia. Membangun portal resmi sekolah dan sistem pendaftaran siswa online (SPMB).',
  },
  {
    type: 'edu',
    title: 'S1 Sistem Informasi',
    location: 'UPN Veteran Jawa Timur',
    date: '2020 - 2024',
    description: 'Jurusan Sistem Informasi mempelajari gabungan ilmu komputer, manajemen, dan bisnis untuk merancang sistem teknologi yang mendukung kebutuhan operasional perusahaan.',
  },
];

export const Timeline = () => {
  return (
    <section id="experience" className="py-24 bg-white relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="max-w-xl mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-[1.5px] bg-primary" />
            <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-primary font-mono">History Log</h3>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-none uppercase font-heading text-slate-900 italic">Experience<span className="text-primary not-italic">_</span></h2>
        </div>

        {/* Terminal Window Experience */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full bg-[#0d1117] rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.2)] border border-white/5"
        >
          {/* Terminal Title Bar */}
          <div className="bg-[#161b22] px-6 py-4 border-b border-white/5 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            </div>
            <div className="text-[9px] font-mono text-white/30 uppercase tracking-[0.2em] hidden sm:block">User: Khoirul — bash — 80x24</div>
            <div className="w-12 h-1 bg-white/5 rounded-full sm:hidden" />
          </div>

          {/* Terminal Body */}
          <div className="p-4 md:p-10 font-mono text-[11px] md:text-sm leading-relaxed">
            {events.map((event, idx) => (
              <div key={idx} className="mb-10 last:mb-0 relative group">
                {/* Visual Line */}
                {idx !== events.length - 1 && (
                  <div className="absolute top-8 left-[9px] w-[2px] h-[calc(100%+16px)] bg-white/5 group-hover:bg-primary/20 transition-colors" />
                )}

                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Icon & Pointer */}
                  <div className="flex items-center gap-4 min-w-[20px]">
                    <div className="w-[20px] h-[20px] rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary z-10 shrink-0">
                      {event.type === 'work' ? <Briefcase size={10} /> : <GraduationCap size={10} />}
                    </div>
                    {/* Header for Mobile */}
                    <span className="md:hidden text-primary font-bold tracking-tight">{event.date}</span>
                  </div>

                  {/* Content Container */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                      <div>
                        <h4 className="text-white text-base md:text-lg font-black tracking-tight group-hover:text-primary transition-colors flex items-center gap-2">
                          <ChevronRight size={14} className="text-primary opacity-50" />
                          {event.title}
                        </h4>
                        <p className="text-white/40 text-[10px] md:text-xs uppercase tracking-widest mt-1">@ {event.location}</p>
                      </div>
                      {/* Date for Desktop */}
                      <span className="hidden md:block px-3 py-1 rounded-full bg-white/5 text-white/40 text-[10px] font-bold border border-white/5">
                        {event.date}
                      </span>
                    </div>
                    <p className="text-white/60 text-xs md:text-sm leading-relaxed max-w-3xl">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Simulated blinking cursor at the end */}
            <div className="flex items-center gap-3 mt-12 text-primary">
               <span className="w-2.5 h-5 bg-primary animate-pulse" />
               <span className="text-[10px] font-black uppercase tracking-[0.4em]">End of History</span>
            </div>
          </div>

          {/* Terminal Footer */}
          <div className="bg-[#161b22] px-6 md:px-10 py-4 border-t border-white/5 flex items-center justify-between">
             <div className="flex items-center gap-4">
                <span className="text-[#238636] font-bold text-[10px] animate-pulse">● LIVE</span>
                <span className="text-white/20 font-mono text-[9px] uppercase tracking-widest">System stabilized.</span>
             </div>
             <div className="text-white/20 font-mono text-[9px] hidden md:block">UTF-8 // Indonesian</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
