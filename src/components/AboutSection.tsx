import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Rocket, Code2, Factory, TrendingUp, Cpu } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              <span className="text-primary font-mono text-xl">01.</span> About Me
            </h2>
            <div className="h-px flex-1 max-w-xs bg-border" />
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Left Column - Bio */}
            <div className="lg:col-span-2 space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a <span className="text-foreground">final-year B.Tech student</span> at 
                Pune Institute of Computer Technology (PICT), expected to graduate in June 2026. 
                My passion lies in building robust, user-centric applications that solve real-world problems.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                With strong experience in <span className="text-primary">React Native, Node.js, MongoDB, 
                and AI integrations</span>, I've developed a deep understanding of the full software 
                development lifecycle—from ideation to deployment.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                Experience in working as an <span className="text-primary">IoT Web Developer Intern</span> at 
                C-Tech Engineers, where I build real-time web monitoring system for industrial CNC machines, 
                processing data from 100+ machines and improving operational efficiency.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                My proudest achievement is building and launching <span className="text-primary">Caliro AI</span>, 
                a startup-level mobile application, completely solo. It's currently live on the 
                Google Play Store, demonstrating my ability to deliver production-ready solutions.
              </p>
            </div>

            {/* Right Column - Info Cards */}
            <div className="lg:col-span-3 grid md:grid-cols-2 gap-4">
              {/* Education Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6 rounded-xl card-gradient border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">Education</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  B.Tech in Electronics & Telecom<br />
                  <span className="text-foreground">PICT, Pune</span> • Jun 2026
                </p>
              </motion.div>

              {/* Founder Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-6 rounded-xl card-gradient border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Rocket className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">Founder</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Solo founder & developer of Caliro AI<br />
                  <span className="text-foreground">Live on Google Play Store</span>
                </p>
              </motion.div>

              {/* Location Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-6 rounded-xl card-gradient border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">Location</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Based in <span className="text-foreground">Pune, Maharashtra</span><br />
                </p>
              </motion.div>

              {/* C-Tech Experience Card - Featured */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="p-6 rounded-xl card-gradient border border-primary/30 hover:border-primary/60 transition-colors bg-primary/5"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Factory className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-foreground">Experience</h3>
                    <p className="text-xs text-muted-foreground">Jun 2025 - Jan 2026</p>
                  </div>
                </div>
                <p className="text-sm text-foreground font-medium mb-2">
                  IoT Web Developer Intern
                </p>
                <p className="text-xs text-muted-foreground mb-3">
                  C-Tech Engineers Pvt. Ltd.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-mono">
                    Node.js
                  </span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-mono">
                    Arduino
                  </span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-mono">
                    IoT
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Experience Highlights Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 pt-12 border-t border-border"
          >
            <h3 className="text-xl font-display font-semibold text-foreground mb-6 flex items-center gap-3">
              <Cpu className="w-5 h-5 text-primary" />
              Key Achievements at C-Tech
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-6 rounded-lg border border-border group-hover:border-primary/40 transition-colors">
                  <div className="flex items-baseline gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-3xl font-bold text-primary font-mono">100+</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    CNC machines monitored in real-time for production tracking
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-6 rounded-lg border border-border group-hover:border-primary/40 transition-colors">
                  <div className="flex items-baseline gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-3xl font-bold text-primary font-mono">60%</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Reduction in manual logging through automated dashboards
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-6 rounded-lg border border-border group-hover:border-primary/40 transition-colors">
                  <div className="flex items-baseline gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-3xl font-bold text-primary font-mono">40%</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Improvement in data accuracy using validation logic
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;