import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProjectShowcase } from '@/components/ProjectShowcase';
import { TechStack } from '@/components/TechStack';
import { Timeline } from '@/components/Timeline';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { LoadingScreen } from '@/components/LoadingScreen';
import { CustomCursor } from '@/components/CustomCursor';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <main className="relative min-h-screen mesh-gradient text-foreground selection:bg-primary/30 selection:text-foreground">
        <Navbar />
        <Hero />
        <ProjectShowcase />
        <TechStack />
        <Timeline />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
