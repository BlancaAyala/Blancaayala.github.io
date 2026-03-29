import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, ExternalLink, Calendar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import diplomaN8n from "@/assets/diploma-n8n-mcp.jpg";
import diplomaFounderz from "@/assets/diploma-founderz.png";
import diplomaBigschool from "@/assets/diploma-bigschool.png";

interface EducationItem {
  title: string;
  institution: string;
  period: string;
  diploma?: string;
}

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies?: string[];
  url?: string;
}

const education: EducationItem[] = [
  {
    title: "Curso n8n + MCP: Automatización y agentes de IA inteligentes",
    institution: "Udemy",
    period: "Enero 2026 - Marzo 2026",
    diploma: diplomaN8n,
  },
  {
    title: "Curso online IA Responsable y Prompt Engineering",
    institution: "Founderz",
    period: "Enero 2026",
    diploma: diplomaFounderz,
  },
  {
    title: "Curso de iniciación a los flujos de trabajo con Inteligencia Artificial",
    institution: "BIG School",
    period: "Noviembre 2025",
    diploma: diplomaBigschool,
  },
  {
    title: "Ciclo formativo de grado superior en desarrollo de aplicaciones multiplataforma",
    institution: "Centro de formación profesional Ilerna",
    period: "2022 - 2025",
  },
];

const experiences: ExperienceItem[] = [
  {
    title: "AI Automation & Integration Specialist",
    company: "Freelance",
    period: "Diciembre 2024 - Actualidad",
    description: [
      "Diseño e implementación de soluciones de automatización e inteligencia artificial orientadas a optimizar procesos y mejorar la eficiencia operativa en entornos digitales.",
      "Desarrollo de workflows automatizados e integraciones entre servicios utilizando herramientas como n8n, conectando APIs y sistemas para automatizar tareas y orquestar procesos.",
      "Creación de agentes de IA, chatbots conversacionales y asistentes inteligentes, capaces de interactuar con usuarios, procesar información y ejecutar acciones dentro de flujos automatizados.",
      "Implementación de sistemas basados en LLMs y arquitecturas RAG, orientados a la gestión y consulta de información de forma eficiente.",
    ],
    technologies: ["n8n", "APIs", "LLM", "RAG", "Chatbots", "AI Agents", "Workflow Automation", "REST APIs", "Webhooks", "Botpress"],
  },
  {
    title: "Formación en prácticas",
    company: "Talens IA",
    period: "2024 - 2025",
    description: [
      "Colaboración en proyectos de marketing digital, newsletters y landing pages creando contenido digital.",
      "Renovación y mejora de la web corporativa y diseño de la nueva identidad visual de la marca (logo, elementos gráficos).",
      "Desarrollo de un bot conversacional para la web con Botpress.",
    ],
    technologies: ["Botpress", "Marketing Digital", "Newsletters", "Landing pages", "Branding", "Content Marketing"],
  },
  {
    title: "Coordinadora de sección / Servicio técnico",
    company: "Media Markt-Saturn",
    period: "2016 - 2024",
    description: [
      "Experiencia en soporte técnico y uso de sistemas ERP/CRM, orientada a la resolución de incidencias, optimización de procesos y mejora de la experiencia de usuario.",
    ],
    technologies: ["Coordinación de procesos", "Gestión de equipos", "ERP/CRM", "Hardware", "Software", "Soporte técnico"],
  },
];

export const EducationSection = () => {
  const [openDiploma, setOpenDiploma] = useState<string | null>(null);

  return (
    <section id="formacion" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-center">
            Formación y <span className="text-violet">experiencia</span>
          </h2>
          
          <div className="h-1 w-20 bg-gradient-to-r from-violet to-cyan mx-auto mb-12 rounded-full" />

          <div className="max-w-4xl mx-auto">
            {/* Formación */}
            <div className="mb-16">
              <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-violet/10 flex items-center justify-center border border-violet/20">
                  <GraduationCap className="w-5 h-5 text-violet" />
                </div>
                <span className="text-violet">Formación</span> académica
              </h3>
              
              <div className="space-y-4 ml-2 border-l-2 border-violet/30 pl-8">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-violet border-4 border-background" />
                    <div className="gradient-card rounded-xl p-6 shadow-elevated border border-border">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                        <h4 className="text-lg font-display font-bold text-foreground">
                          {item.title}
                        </h4>
                        <span className="text-sm text-violet font-medium bg-violet/10 px-3 py-1 rounded-full border border-violet/20 whitespace-nowrap">
                          {item.period}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-muted-foreground">{item.institution}</p>
                        {item.diploma && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-violet/30 text-violet hover:bg-violet/10"
                            onClick={() => setOpenDiploma(item.title)}
                          >
                            <Award className="w-4 h-4 mr-2" />
                            Ver diploma
                          </Button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Experiencia */}
            <div>
              <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center border border-cyan/20">
                  <Briefcase className="w-5 h-5 text-cyan" />
                </div>
                <span className="text-cyan">Experiencia</span> laboral
              </h3>
              
              <div className="space-y-4 ml-2 border-l-2 border-cyan/30 pl-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-cyan border-4 border-background" />
                    <div className="gradient-card rounded-xl p-6 shadow-elevated border border-border hover:shadow-[0_0_30px_hsl(185_85%_50%/0.1)] transition-smooth">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                        <div>
                          <h4 className="text-lg font-display font-bold text-foreground">
                            {exp.title}
                          </h4>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                        <div className="flex items-center gap-2 text-secondary font-medium bg-secondary/10 px-3 py-1.5 rounded-full border border-secondary/20 text-sm whitespace-nowrap">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </div>
                      </div>

                      <ul className="space-y-1.5 mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                            <span className="text-cyan mt-0.5">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      {exp.technologies && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 bg-cyan/10 border border-cyan/20 rounded text-xs font-medium text-cyan"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                      {exp.url && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-cyan/30 text-cyan hover:bg-cyan/10"
                          asChild
                        >
                          <a href={exp.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Ver proyecto
                          </a>
                        </Button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Diploma Dialogs */}
      {education.filter(item => item.diploma).map((item) => (
        <Dialog key={item.title} open={openDiploma === item.title} onOpenChange={(v) => !v && setOpenDiploma(null)}>
          <DialogContent className="max-w-3xl gradient-card border-border">
            <DialogHeader>
              <DialogTitle className="text-xl font-display font-bold">{item.title}</DialogTitle>
              <DialogDescription className="text-muted-foreground">{item.institution} · {item.period}</DialogDescription>
            </DialogHeader>
            <div className="rounded-lg overflow-hidden border border-border">
              <img
                src={item.diploma}
                alt={`Diploma de ${item.title}`}
                className="w-full h-auto"
              />
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </section>
  );
};
