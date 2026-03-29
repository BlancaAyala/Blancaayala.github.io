import { motion } from "framer-motion";

const skills = [
  { name: "AI Automation & Agentes IA", level: 85 },
  { name: "Automatización de procesos (workflows)", level: 85 },
  { name: "N8N", level: 85 },
  { name: "Integraciones y APIs", level: 80 },
  { name: "SQL & Gestión de datos", level: 65 },
  { name: "Desarrollo de aplicaciones (Kotlin / Java)", level: 55 },
];

export const SkillsSection = () => {
  return (
    <section id="conocimiento" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-center">
            <span className="text-cyan">Conocimientos</span> técnicos
          </h2>
          
          <div className="h-1 w-20 bg-gradient-to-r from-cyan to-cyan-light mx-auto mb-12 rounded-full" />

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="gradient-card rounded-xl p-6 shadow-elevated border border-border"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-semibold">{skill.name}</span>
                    <span className="text-cyan font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-cyan to-cyan-light rounded-full shadow-[0_0_20px_hsl(185_85%_50%/0.4)]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 gradient-card rounded-xl p-8 shadow-elevated border border-border"
            >
              <h3 className="text-2xl font-display font-bold mb-6 text-center">
                Otras <span className="text-cyan">tecnologías</span>
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {["Visual Studio", "Chatbot", "JavaScript", "Python", "RAG", "LLM", "Webhooks", "Prompt", "GitHub", "HTML", "CSS"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-cyan/10 border border-cyan/20 rounded-lg text-sm font-medium text-foreground hover:bg-cyan/20 transition-smooth"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
