'use client';

import { motion } from 'framer-motion';
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Globe, 
  Database, 
  Layout, 
  Box, 
  Workflow
} from 'lucide-react';

const techItems = [
  { name: 'Laravel', slug: 'laravel', color: 'hover:text-[#FF2D20]' },
  { name: 'React', slug: 'react', color: 'hover:text-[#61DAFB]' },
  { name: 'Next.js', slug: 'nextdotjs', color: 'hover:text-black' },
  { name: 'MySQL', slug: 'mysql', color: 'hover:text-[#4479A1]' },
  { name: 'Tailwind', slug: 'tailwindcss', color: 'hover:text-[#06B6D4]' },
  { name: 'Filament', slug: 'filament', color: 'hover:text-[#FFA500]' }, // Custom hex if needed
  { name: 'Tauri', slug: 'tauri', color: 'hover:text-[#24C8DB]' },
  { name: 'Rust', slug: 'rust', color: 'hover:text-[#000000]' },
  { name: 'Electron', slug: 'electron', color: 'hover:text-[#47848F]' },
  { name: 'JavaScript', slug: 'javascript', color: 'hover:text-[#F7DF1E]' },
  { name: 'PHP', slug: 'php', color: 'hover:text-[#777BB4]' },
  { name: 'Visual Basic', slug: 'dotnet', color: 'hover:text-[#512BD4]' },
];

export const TechBanner = () => {
  return (
    <div className="w-full py-10 bg-white border-y border-border overflow-hidden relative">
      <div className="flex overflow-hidden">
      <motion.div 
          animate={{ x: [0, -1500] }}
          transition={{ 
            duration: 50, 
            repeat: Infinity, 
            ease: "linear",
            repeatType: "loop"
          }}
          className="flex flex-nowrap gap-16 items-center px-8 min-w-max"
        >
          {[...techItems, ...techItems].map((tech, i) => (
            <div key={i} className="flex items-center gap-5 group cursor-default">
              <div className="relative w-7 h-7 filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-[filter,opacity,transform] duration-500 transform group-hover:scale-110">
                <img 
                  src={`https://cdn.simpleicons.org/${tech.slug}`} 
                  alt={tech.name}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                {tech.name}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-border ml-8" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative gradient masks for a smooth fade effect */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
    </div>
  );
};
