'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'SMA Pertiwi Medan',
    category: 'Web App',
    type: 'web',
    description: 'Sistem manajemen sekolah terintegrasi di SMA Pertiwi Medan, mencakup pendaftaran siswa online, data akademik, dan administrasi.',
    tech: ['Laravel', 'MySQL', 'Tailwind', 'Alpine.js'],
    link: 'https://smapertiwimedan.sch.id',
    image: '/smapertiwi.png',
  },
  {
    title: 'LibSpace Inventory',
    category: 'Desktop App',
    type: 'desktop',
    description: 'Aplikasi manajemen inventaris dan sirkulasi buku dengan dashboard analitik untuk memantau performa bisnis.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'SQLite'],
    link: '#',
    image: '/libspace.png',
  },
  {
    title: 'Gentok App',
    category: 'Desktop App',
    type: 'desktop',
    description: 'Aplikasi interaktif yang dirancang khusus untuk kebutuhan live streaming TikTok dengan fitur yang mulus.',
    tech: ['Electron.js', 'HTML', 'CSS', 'JavaScript'],
    link: '#',
    image: '/gentok.png',
  },
];

/* ─── Mobile Card Carousel ─── */
const MobileShowcase = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (dir: number) => {
    setDirection(dir);
    setActive((prev) => {
      const next = prev + dir;
      if (next < 0) return projects.length - 1;
      if (next >= projects.length) return 0;
      return next;
    });
  };

  // Touch / swipe handling
  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) paginate(delta < 0 ? 1 : -1);
  };

  const project = projects[active];

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0, scale: 0.92 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0, scale: 0.92 }),
  };

  return (
    <section id="projects" className="relative bg-white py-20 overflow-hidden">
      {/* Header */}
      <div className="px-5 mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-6 h-[1.5px] bg-primary" />
          <h3 className="text-[8px] uppercase tracking-[0.4em] font-black text-primary font-mono">
            Curated Work
          </h3>
        </div>
        <h2 className="text-[2rem] font-black tracking-tighter leading-[0.9] uppercase font-heading text-slate-900 italic">
          Project{' '}
          <span className="text-gradient-blue not-italic">Showcase.</span>
        </h2>
      </div>

      {/* Card Carousel */}
      <div
        className="px-4 relative"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={active}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="w-full"
          >
            {/* ── Single Card ── */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_8px_40px_rgba(0,0,0,0.06)] overflow-hidden">
              {/* Image Section */}
              <div className="relative bg-slate-50 p-3">
                <div className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden flex flex-col">
                  {/* Browser frame bar */}
                  <div className="h-5 bg-slate-50/90 flex items-center px-2.5 gap-1 border-b border-slate-100 shrink-0">
                    <div className="flex gap-[3px]">
                      <div className="w-[5px] h-[5px] rounded-full bg-red-300/60" />
                      <div className="w-[5px] h-[5px] rounded-full bg-yellow-300/60" />
                      <div className="w-[5px] h-[5px] rounded-full bg-green-300/60" />
                    </div>
                    <div className="flex-1 mx-2">
                      <div className="bg-slate-100 rounded-md h-3 flex items-center justify-center">
                        <span className="text-[6px] font-medium text-slate-400 truncate px-2">
                          {project.type === 'web'
                            ? project.link.replace('https://', '')
                            : `${project.title.toLowerCase().replace(/\s/g, '-')}.app`}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Screenshot */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-white">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 800px"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-5 py-5">
                {/* Counter + Category */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-black text-slate-100 font-heading leading-none">
                      0{active + 1}
                    </span>
                    <span className="text-[8px] font-black uppercase tracking-[0.25em] text-primary font-mono bg-primary/5 px-2.5 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <a
                    href={project.link}
                    className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 active:bg-primary active:text-white active:border-primary transition-all"
                  >
                    <ExternalLink size={13} />
                  </a>
                </div>

                {/* Title */}
                <h4 className="text-xl font-black uppercase tracking-tight mb-2 font-heading text-slate-900 leading-[0.95]">
                  {project.title}
                </h4>

                {/* Description */}
                <p className="text-[13px] text-slate-500 leading-[1.6] font-medium mb-5 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-slate-50 rounded-lg text-[8px] font-black uppercase tracking-[0.12em] text-slate-400 border border-slate-100 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation controls */}
      <div className="flex items-center justify-center gap-6 mt-6 px-5">
        <button
          onClick={() => paginate(-1)}
          className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 active:bg-primary active:text-white active:border-primary transition-all"
          aria-label="Previous project"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Dots indicator */}
        <div className="flex items-center gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > active ? 1 : -1);
                setActive(i);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active
                  ? 'w-6 bg-primary'
                  : 'w-1.5 bg-slate-200 hover:bg-slate-300'
              }`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => paginate(1)}
          className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 active:bg-primary active:text-white active:border-primary transition-all"
          aria-label="Next project"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
};

/* ─── Desktop Horizontal Scroll ─── */
const DesktopShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', `-${(projects.length - 1) * 100}%`]
  );

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative h-[400vh] bg-white pt-32"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-start overflow-hidden pt-24">
        {/* Section Header */}
        <div className="container max-w-6xl mx-auto px-6 mb-10 shrink-0">
          <div className="flex items-end justify-between">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-[1.5px] bg-primary" />
                <h3 className="text-[9px] uppercase tracking-[0.4em] font-black text-primary font-mono">
                  Curated Work
                </h3>
              </div>
              <h2 className="text-6xl font-black tracking-tighter leading-[0.85] uppercase font-heading text-slate-900 italic">
                Project <br />
                <span className="text-gradient-blue not-italic">Showcase.</span>
              </h2>
            </div>
            <div className="text-right pb-4 text-slate-200">
              <p className="text-[9px] font-black uppercase tracking-[0.3em] mb-2 font-mono italic text-slate-400">
                0% — 100%
              </p>
              <div className="w-32 h-1 bg-slate-100 ml-auto rounded-full overflow-hidden">
                <motion.div
                  style={{ scaleX: scrollYProgress }}
                  className="h-full bg-primary origin-left"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Content */}
        <div className="flex-1 flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="w-full flex-shrink-0 flex items-center justify-center px-24"
              >
                <motion.div className="w-full max-w-[75rem] bg-slate-50/50 rounded-[3rem] overflow-hidden border border-slate-100 shadow-[0_30px_80px_rgba(0,0,0,0.03)] flex flex-row h-[460px] group/card">
                  {/* Visual Side (60%) */}
                  <div className="w-[60%] h-full relative overflow-hidden bg-slate-100/50 flex items-center justify-center">
                    <div className="w-full h-full p-12 flex items-center justify-center">
                      <div className="w-full h-full bg-white rounded-xl shadow-[0_25px_50px_rgba(0,0,0,0.1)] border border-white relative overflow-hidden flex flex-col transition-all duration-700 group-hover/card:shadow-[0_30px_60px_rgba(0,136,255,0.15)] group-hover/card:scale-[1.02]">
                        {/* Frame Header */}
                        <div className="h-6 bg-slate-50/80 flex items-center px-3 gap-1.5 border-b border-slate-100 shrink-0">
                          <div className="flex gap-1 w-full">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                            <span className="ml-auto text-[7px] font-black text-slate-300 uppercase tracking-widest">
                              {project.type === 'web'
                                ? 'web.stream'
                                : `${project.title.toLowerCase()}.sys`}
                            </span>
                          </div>
                        </div>
                        {/* Screenshot */}
                        <div className="flex-1 relative overflow-hidden bg-white">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-contain object-top transition-transform duration-1000"
                            sizes="800px"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Side (40%) */}
                  <div className="w-[40%] p-12 flex flex-col justify-center bg-white">
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-5xl font-black text-slate-100 font-heading leading-none">
                        0{idx + 1}
                      </span>
                      <div className="flex gap-3">
                        <a
                          href={project.link}
                          className="text-slate-300 hover:text-primary transition-all"
                        >
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>

                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary mb-2 font-mono">
                      {project.category}
                    </p>
                    <h4 className="text-3xl font-black uppercase tracking-tighter mb-6 font-heading text-slate-900 leading-[0.85]">
                      {project.title}
                    </h4>

                    <p className="text-sm text-slate-500 leading-relaxed font-medium mb-8">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1.5 bg-slate-50 rounded-lg text-[8px] font-black uppercase tracking-[0.15em] text-slate-400 border border-slate-100 font-mono transition-colors group-hover/card:border-primary/20 group-hover/card:text-slate-600"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ─── Responsive Wrapper ─── */
export const ProjectShowcase = () => {
  return (
    <>
      {/* Mobile & Tablet: vertical carousel */}
      <div className="block lg:hidden">
        <MobileShowcase />
      </div>
      {/* Desktop: horizontal scroll */}
      <div className="hidden lg:block">
        <DesktopShowcase />
      </div>
    </>
  );
};
