import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Rocket, Shield, Cpu, CreditCard, Factory, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Rocket,
    title: 'Solo Founder & Developer',
    description: 'Built Caliro AI from concept to production—handling everything from system architecture to deployment on Google Play Store.',
  },
  {
    icon: Shield,
    title: 'Production-Ready Solutions',
    description: 'Experience implementing secure authentication systems using HMAC signatures and JWT tokens.',
  },
  {
    icon: CreditCard,
    title: 'Payment Integration',
    description: 'Integrated RevenueCat for subscription management with multiple pricing tiers and in-app purchases.',
  },
  {
    icon: Cpu,
    title: 'AI Integration Expertise',
    description: 'Leveraged Gemini and Hugging Face APIs for intelligent features like image analysis and text generation.',
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 md:py-32 bg-card/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              <span className="text-primary font-mono text-xl">04.</span> Experience & Highlights
            </h2>
            <div className="h-px flex-1 max-w-xs bg-border" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300" />
                <div className="relative p-6 rounded-xl border border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Professional Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <h3 className="text-xl font-display font-semibold text-foreground mb-8">Professional Experience</h3>
            <div className="space-y-8">
              {/* C-Tech Engineers */}
              <div className="relative pl-8 border-l-2 border-primary">
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-primary glow-primary animate-pulse" />
                <div className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-primary font-mono text-sm">Jun 2025 - Jan 2026</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">Current</span>
                  </div>
                  <h4 className="text-lg font-display font-semibold text-foreground mt-1">
                    IoT Web Developer Intern
                  </h4>
                  <p className="text-muted-foreground font-medium">
                    C-Tech Engineers Pvt. Ltd.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Pune, Maharashtra (Hybrid)
                  </p>
                  
                  <ul className="mt-4 space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Built a real-time CNC machine monitoring system using Node.js and Arduino, processing data from <strong className="text-foreground">100+ machines</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Implemented machine state classification (Manufacturing, Idle, OFF) with shift-wise efficiency analytics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Reduced manual machine runtime logging by <strong className="text-foreground">60%</strong> through automated dashboards and reports</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Improved data accuracy by <strong className="text-foreground">40%</strong> using debounce and validation logic for hardware inputs</span>
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground font-mono">
                      Node.js
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground font-mono">
                      Arduino
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground font-mono">
                      IoT
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground font-mono">
                      Real-time Systems
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground font-mono">
                      Data Analytics
                    </span>
                  </div>
                </div>
              </div>

              {/* Plasmid */}
              <div className="relative pl-8 border-l-2 border-border">
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-primary/60" />
                <div className="pb-4">
                  <span className="text-primary font-mono text-sm">Feb 2025 - Apr 2025</span>
                  <h4 className="text-lg font-display font-semibold text-foreground mt-1">
                    Embedded System Intern
                  </h4>
                  <p className="text-muted-foreground font-medium">
                    Plasmid
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Pune, Maharashtra (Remote)
                  </p>
                  
                  <ul className="mt-4 space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Worked on real-world embedded systems projects used in industry applications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Wrote and tested Embedded C/C++ code for microcontroller-based systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Interfaced sensors, modules, and peripherals with hardware components</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Debugged hardware and firmware issues and improved system stability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Learned industry practices for testing, validation, and deployment</span>
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground font-mono">
                      Embedded C/C++
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground font-mono">
                      Microcontrollers
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground font-mono">
                      Hardware Integration
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground font-mono">
                      Firmware
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16"
          >
            <h3 className="text-xl font-display font-semibold text-foreground mb-8">Education</h3>
            <div className="relative pl-8 border-l-2 border-border">
              <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-primary/60" />
              <div className="pb-8">
                <span className="text-primary font-mono text-sm">2022 - 2026 (Expected)</span>
                <h4 className="text-lg font-display font-semibold text-foreground mt-1">
                  B.Tech in Electronics and Telecommunication
                </h4>
                <p className="text-muted-foreground">
                  Pune Institute of Computer Technology (PICT)
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  Pune, Maharashtra, India
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;