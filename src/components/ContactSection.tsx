import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MapPin, Github, ExternalLink, Send } from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-primary font-mono text-sm">05. What's Next?</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-4 mb-6">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question, a project idea, or just want to say hi—I'll 
            try my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <a href="mailto:kiranrajpatil29@gmail.com" className="hover:text-primary transition-colors">
                kiranrajpatil29@gmail.com
              </a>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-border" />
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Pune, Maharashtra</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center gap-6 mt-12"
          >
            <a
              href="https://github.com/KK2574"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all hover:-translate-y-1"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.caliai.caliai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all hover:-translate-y-1"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;