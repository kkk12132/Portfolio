import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    document.title = 'Kiran Patil | Mobile & Full-Stack Developer';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Kiran Patil - Mobile & Full-Stack Developer specializing in React Native, Node.js, and AI-powered applications. Creator of Caliro AI.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Kiran Patil - Mobile & Full-Stack Developer specializing in React Native, Node.js, and AI-powered applications. Creator of Caliro AI.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;