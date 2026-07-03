'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    id: 'gencamp',
    title: 'Gencamp',
    category: 'Web App',
    description: 'Platform penyewaan perlengkapan camping premium tanpa ribet. Menyediakan alat bersih, lengkap, dan siap antar. Memberikan pengalaman pemesanan yang mulus bagi para petualang modern.',
    tech: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
    link: 'https://gencamp.vercel.app/',
    image: '/gencamp.png',
  },
  {
    id: 'kebun',
    title: 'Kebun Enterprise',
    category: 'Web App',
    description: 'Smart dashboard memonitoring KPI perkebunan, capaian lahan, dan operasional harian. Solusi digital terpusat untuk memaksimalkan hasil panen melalui pemantauan data secara real-time.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    link: 'https://monitoring-kebun.vercel.app/',
    image: '/monitoring-kebun.png',
  },
  {
    id: 'sma',
    title: 'SMA Pertiwi',
    category: 'Web App',
    description: 'Sistem manajemen sekolah terintegrasi, mencakup pendaftaran siswa online, administrasi akademik, dan pendataan guru untuk efisiensi operasional harian sekolah secara digital.',
    tech: ['Laravel', 'MySQL', 'Alpine.js'],
    link: 'https://smapertiwimedan.sch.id',
    image: '/smapertiwi.png',
  },
  {
    id: 'libspace',
    title: 'LibSpace',
    category: 'Desktop App',
    description: 'Aplikasi manajemen inventaris dan sirkulasi buku perpustakaan. Mengotomatisasi pencatatan peminjaman dan pengembalian, dilengkapi dengan dashboard analitik operasional.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    link: 'https://perpus-exe.vercel.app/',
    image: '/libspace.png',
  },
  {
    id: 'gentok',
    title: 'Gentok App',
    category: 'Desktop App',
    description: 'Aplikasi interaktif yang dirancang khusus untuk kebutuhan live streaming TikTok dengan fitur overlay yang mulus, mendukung interaksi penonton yang lebih tinggi dan real-time.',
    tech: ['Electron.js', 'HTML', 'CSS', 'JavaScript'],
    link: '#',
    image: '/gentok.png',
  },
  {
    id: 'corporate-it-inventory',
    title: 'CorpIT-Hub',
    category: 'Web App',
    description: 'Sistem manajemen inventaris IT perusahaan secara terpusat. Mencakup pelacakan aset, IT helpdesk ticketing, manajemen lisensi & jaringan, serta employee lifecycle untuk efisiensi operasional IT.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'PostgreSQL'],
    link: 'https://vercel.com/genkys-projects/corporate-it-inventory',
    image: '/corporate-it-inventory.png',
  },
];

// Animasi ringan: once:true agar tidak re-trigger saat scroll balik
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const ProjectShowcase = () => {
  return (
    <section id="projects" className="py-32 bg-white relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6">
        
        {/* Header - Sesuai dengan TechStack.tsx dan Hero.tsx */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-24 md:mb-32"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
               <span className="w-12 h-[1.5px] bg-primary" />
               <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-primary font-mono">Curated Work</h3>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] uppercase font-heading text-slate-900 italic">
               Project <br/>
               <span className="text-gradient-blue not-italic">Showcase.</span>
            </h2>
          </div>
        </motion.div>

        {/* 
          Zig-Zag Layout Container 
          Setiap proyek punya card dan ruangnya masing-masing secara bergantian (Kiri-Kanan)
        */}
        <div className="flex flex-col gap-24 md:gap-40">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div 
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`flex flex-col lg:items-center gap-10 lg:gap-16 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Visual Section - Setiap Proyek Punya Card Gambar Sendiri */}
                <div className="w-full lg:w-3/5 group">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block relative w-full aspect-[4/3] md:aspect-[16/10] bg-slate-50 p-4 md:p-6 rounded-[3rem] border border-slate-100/50 hover:border-primary/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-[box-shadow,border-color] duration-300"
                  >
                    {/* Inner frame untuk memotong gambar */}
                    <div className="w-full h-full relative rounded-[2rem] overflow-hidden border border-slate-100 bg-slate-50">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        loading="lazy"
                        className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />
                      
                      {/* Tombol Hover di tengah gambar */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 text-slate-900 p-5 rounded-2xl opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-[opacity,transform] duration-300 shadow-xl border border-slate-100 hidden md:block">
                        <ArrowUpRight size={28} />
                      </div>
                    </div>
                  </a>
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-2/5 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                     <span className="text-4xl md:text-5xl font-black text-slate-200 font-heading leading-none">
                       0{idx + 1}
                     </span>
                     <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                     <span className="text-[10px] uppercase font-black tracking-widest text-primary font-mono">
                       {project.category}
                     </span>
                  </div>

                  <h4 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 font-heading text-slate-900 leading-[0.9]">
                    {project.title}
                  </h4>
                  
                  <p className="text-base text-slate-500 leading-relaxed font-medium mb-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-500 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit flex items-center gap-3 px-6 py-3 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-primary transition-colors duration-300 group shadow-xl hover:shadow-primary/20"
                  >
                    Visit Project
                    <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
