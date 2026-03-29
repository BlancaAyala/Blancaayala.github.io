import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-center">
            Sobre <span className="text-gold">mí</span>
          </h2>
          
          <div className="h-1 w-20 bg-gradient-to-r from-gold to-gold-light mx-auto mb-12 rounded-full" />

          <div className="gradient-card rounded-2xl p-8 md:p-12 shadow-elevated border border-border">
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-center">
              Especialista en AI Automation y optimización de procesos, enfocada en diseñar agentes de IA, integraciones y sistemas que transforman procesos complejos en soluciones eficientes, escalables y orientadas a resultados. Con formación en Desarrollo de Aplicaciones Multiplataforma, combino base técnica y visión estratégica para crear automatizaciones que realmente aportan valor.
            </p>

            <div className="flex justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-glow transition-smooth group"
              >
                <a href="https://drive.google.com/file/d/1v0vWtMYZQ3wg_y3NuZgLnwz_flmvy1lc/view" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Descargar CV
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
