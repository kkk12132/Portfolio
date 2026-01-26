import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Rocket, Code2 } from 'lucide-react';

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

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
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
                My proudest achievement is building and launching <span className="text-primary">Caliro AI</span>, 
                a startup-level mobile application, completely solo. It's currently live on the 
                Google Play Store, demonstrating my ability to deliver production-ready solutions.
              </p>
            </div>

            <div className="space-y-6">
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
                <p className="text-muted-foreground">
                  B.Tech in Computer Engineering<br />
                  <span className="text-foreground">PICT, Pune</span> • Expected June 2026
                </p>
              </motion.div>

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
                <p className="text-muted-foreground">
                  Solo founder & developer of Caliro AI<br />
                  <span className="text-foreground">Live on Google Play Store</span>
                </p>
              </motion.div>

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
                <p className="text-muted-foreground">
                  Based in <span className="text-foreground">Pune, Maharashtra</span><br />
                  Open to remote opportunities
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;