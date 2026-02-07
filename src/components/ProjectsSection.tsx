import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Star, Smartphone, Lock, Image, Fingerprint, Gamepad2 } from 'lucide-react';

const projects = [
  {
    title: 'Caliro AI – Diet Tracker',
    featured: true,
    description: 'A full-stack AI-powered mobile app to track calories, BMI, steps, and weight changes. Built with React Native (Expo prebuild), Node.js backend, MongoDB, and AI image analysis. Includes HMAC authentication, subscriptions with RevenueCat, deployed on Render.',
    status: 'Live on Google Play Store (50+ downloads)',
    tech: ['React Native', 'Node.js', 'MongoDB', 'Gemini API', 'RevenueCat', 'HMAC Auth'],
    icon: Smartphone,
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.caliai.caliai',
      github: 'https://github.com/KK2574',
    },
  },
  {
    title: 'GameZone Gaming Website',
    featured: false,
    description: 'A modern, responsive gaming website showcasing game collection. Built with modern web technologies and deployed on Vercel for optimal performance.',
    tech: ['React', 'Tailwind CSS', 'Vercel', 'Responsive Design'],
    icon: Gamepad2,
    links: {
      demo: 'https://gamezone-drab-ten.vercel.app/',
      live: 'https://gamezone-drab-ten.vercel.app/',
    },
  },
  {
    title: 'Hidden Calculator Vault',
    featured: false,
    description: 'A disguised calculator app that unlocks a secure private gallery using a hidden passcode. Focus on privacy, encryption, and secure media storage.',
    tech: ['React Native', 'Encryption', 'Secure Storage', 'Media Gallery'],
    icon: Lock,
    links: {},
  },
  {
    title: 'Text-to-Image AI Web App',
    featured: false,
    description: 'Web application that converts text prompts into images using Hugging Face API. Backend built with Node.js + Express, MongoDB for storing prompts and generated images.',
    tech: ['React', 'Node.js', 'Express', 'Hugging Face API', 'MongoDB'],
    icon: Image,
    links: {
      demo: 'https://textfrontend-sigma.vercel.app/',
    },
  },
  {
    title: 'Fingerprint Attendance System',
    featured: false,
    description: 'Arduino + fingerprint sensor attendance system with Node.js backend and MongoDB. Includes web dashboard to view and manage attendance records.',
    tech: ['Arduino', 'IoT', 'Node.js', 'MongoDB', 'React Dashboard'],
    icon: Fingerprint,
    links: {},
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              <span className="text-primary font-mono text-xl">03.</span> Featured Projects
            </h2>
            <div className="h-px flex-1 max-w-xs bg-border" />
          </div>

          <div className="space-y-8">
            {/* Featured Project */}
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-primary rounded-2xl opacity-20 group-hover:opacity-30 blur transition-opacity" />
                  <div className="relative p-6 md:p-8 rounded-xl card-gradient border border-primary/30 hover:border-primary/50 transition-all">
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="w-5 h-5 text-primary" />
                      <span className="text-primary text-sm font-medium">Featured Project</span>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <project.icon className="w-8 h-8 text-primary" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {project.description}
                        </p>
                        
                        {project.status && (
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            {project.status}
                          </div>
                        )}
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-sm rounded-full bg-secondary text-muted-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex gap-4">
                          {project.links.playStore && (
                            <a
                              href={project.links.playStore}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground font-medium hover:shadow-lg glow-primary transition-all"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Play Store
                            </a>
                          )}
                          {project.links.github && (
                            <a
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-foreground hover:border-primary hover:text-primary transition-all"
                            >
                              <Github className="w-4 h-4" />
                              GitHub
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

            {/* Other Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {projects
                .filter((p) => !p.featured)
                .map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="group p-6 rounded-xl card-gradient border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <project.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex gap-3">
                        {(project.links.demo || project.links.live) && (
                          <a
                            href={project.links.live || project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Github size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;