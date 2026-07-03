'use client';

import React, { useEffect, useRef } from 'react';
import { useSpring, useMotionValue, motion } from 'framer-motion';

export const CustomCursor = () => {
  // useMotionValue instead of state — no re-renders
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const scale = useMotionValue(1);
  const ringScale = useMotionValue(1);
  const ringOpacity = useMotionValue(0.4);

  const springX = useSpring(mouseX, { stiffness: 500, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 28 });
  const ringSpringX = useSpring(mouseX, { stiffness: 180, damping: 22 });
  const ringSpringY = useSpring(mouseY, { stiffness: 180, damping: 22 });

  // Use ref to track hover state — avoids triggering re-renders
  const isHoveringRef = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      const isInteractive = !!(
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.classList.contains('cursor-pointer')
      );

      // Only update motion values when state actually changes
      if (isInteractive !== isHoveringRef.current) {
        isHoveringRef.current = isInteractive;
        scale.set(isInteractive ? 1.5 : 1);
        ringScale.set(isInteractive ? 2.2 : 1);
        ringOpacity.set(isInteractive ? 0.8 : 0.4);
      }
    };

    const handleMouseDown = () => scale.set(0.8);
    const handleMouseUp = () => scale.set(isHoveringRef.current ? 1.5 : 1);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseX, mouseY, scale, ringScale, ringOpacity]);

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          scale,
        }}
      />
      {/* Magnetic Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-primary/30 rounded-full pointer-events-none z-[9998] hidden md:block"
        style={{
          x: ringSpringX,
          y: ringSpringY,
          translateX: '-50%',
          translateY: '-50%',
          scale: ringScale,
          opacity: ringOpacity,
        }}
      />
    </>
  );
};
