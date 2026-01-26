import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Smartphone, 
  Server, 
  Database, 
  Sparkles, 
  Globe, 
  Wrench 
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Mobile Development',
    icon: Smartphone,
    skills: ['React Native', 'Expo', 'Expo Prebuild', 'React Navigation', 'AsyncStorage', 'Android Build'],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'HMAC Authentication', 'RevenueCat', 'Render'],
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['MongoDB', 'Schema Design', 'Data Modeling'],
  },
  {
    title: 'AI & APIs',
    icon: Sparkles,
    skills: ['Gemini API', 'Hugging Face API', 'Image Analysis', 'Prompt Engineering'],
  },
  {
    title: 'Web Development',
    icon: Globe,
    skills: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    title: 'Tools & DevOps',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'Postman', 'Google Play Console', 'VS Code'],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-24 md:py-32 bg-card/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              <span className="text-primary font-mono text-xl">02.</span> Skills & Technologies
            </h2>
            <div className="h-px flex-1 max-w-xs bg-border" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="group p-6 rounded-xl card-gradient border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;