import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Github } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-mono text-sm md:text-base mb-4"
          >
            Hi, my name is
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-4"
          >
            Kiran Patil.
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-muted-foreground mb-6"
          >
            Mobile & Full-Stack Developer
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            Building production-ready mobile apps and AI-powered web solutions. 
            Currently focused on React Native development and creating impactful 
            digital experiences.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-medium transition-all duration-300 hover:shadow-lg glow-primary flex items-center gap-2"
            >
              View Projects
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
           
            
            <a
              href="#contact"
              className="px-6 py-3 border border-border text-foreground rounded-lg font-medium transition-all duration-300 hover:border-primary hover:text-primary flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Contact
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 flex items-center gap-6"
          >
            <a
              href="https://github.com/KK2574"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <div className="h-px w-32 bg-border" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;