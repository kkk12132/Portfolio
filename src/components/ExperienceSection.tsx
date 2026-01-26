import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Rocket, Shield, Cpu, CreditCard } from 'lucide-react';

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

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <h3 className="text-xl font-display font-semibold text-foreground mb-8">Education</h3>
            <div className="relative pl-8 border-l-2 border-border">
              <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-primary glow-primary" />
              <div className="pb-8">
                <span className="text-primary font-mono text-sm">2022 - 2026 (Expected)</span>
                <h4 className="text-lg font-display font-semibold text-foreground mt-1">
                  B.Tech in Computer Engineering
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