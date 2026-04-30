'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Code2, Wifi, Wrench } from 'lucide-react';

const coreExpertise = [
  {
    title: 'Software Development',
    description: 'Membangun aplikasi web dan desktop berperforma tinggi dengan fokus pada skalabilitas dan pengalaman pengguna.',
    icon: <Code2 size={24} />,
    color: 'blue',
    skills: ['PHP', 'Laravel', 'React JS', 'Next.js', 'Tauri / Rust', 'Filament'],
  },
  {
    title: 'Network Engineering',
    description: 'Perancangan dan implementasi infrastruktur jaringan modern, mulai dari Fiber Optic hingga konfigurasi server.',
    icon: <Wifi size={24} />,
    color: 'emerald',
    skills: ['Network Security', 'Server Management'],
  },
  {
    title: 'System Support',
    description: 'Diagnostik mendalam dan pemeliharaan sistem komputer untuk menjamin kestabilan operasional TI secara penuh.',
    icon: <Wrench size={24} />,
    color: 'orange',
    skills: ['Troubleshooting', 'Hardware Repair', 'IT Support'],
  },
];



const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const TechStack = () => {
  return (
    <section id="skills" className="py-32 bg-white relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
               <span className="w-12 h-[1.5px] bg-primary" />
               <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-primary font-mono">Expertise Pillars</h3>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] uppercase font-heading text-slate-900 italic">
               Technical <br/>
               <span className="text-gradient-blue not-italic">Skills.</span>
            </h2>
          </div>
        </motion.div>

        {/* The 3 Pillars Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
           {coreExpertise.map((pillar, idx) => (
             <motion.div
               key={idx}
               variants={itemVariants}
               className="group relative p-10 rounded-[3rem] bg-slate-50 border border-slate-100/50 hover:bg-white hover:shadow-[0_40px_100px_rgba(0,0,0,0.06)] hover:border-primary/20 transition-all duration-500"
             >
                {/* Icon Circle */}
                <div className={`w-16 h-16 rounded-3xl mb-8 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6
                  ${pillar.color === 'blue' ? 'bg-blue-50 text-blue-600' : ''}
                  ${pillar.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' : ''}
                  ${pillar.color === 'orange' ? 'bg-orange-50 text-orange-600' : ''}
                `}>
                   {pillar.icon}
                </div>

                <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 font-heading group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>
                
                <p className="text-sm text-slate-500 leading-relaxed mb-8 font-medium">
                  {pillar.description}
                </p>

                <div className="flex flex-wrap gap-2">
                   {pillar.skills.map(skill => (
                     <span key={skill} className="px-3 py-1.5 bg-white rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-400 border border-slate-100 group-hover:border-primary/10 group-hover:text-slate-600 transition-all font-mono">
                        {skill}
                     </span>
                   ))}
                </div>

                {/* Decorative Index */}
                <span className="absolute top-10 right-10 text-4xl font-black text-slate-100 opacity-50 group-hover:text-primary/10 transition-all pointer-events-none">
                  0{idx + 1}
                </span>
             </motion.div>
           ))}
        </motion.div>
      </div>
    </section>
  );
};
