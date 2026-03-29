import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "bayalav@hotmail.com",
    href: "mailto:bayalav@hotmail.com",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Barcelona, España",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/blanca-ayala-vázquez-817765381/",
    color: "hover:text-[#0A66C2]",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/BlancaAyala",
    color: "hover:text-foreground",
  },
];

export const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-violet via-rose to-gold bg-clip-text text-transparent">Contacto</span>
          </h2>
          
          <div className="h-1 w-20 bg-gradient-to-r from-violet via-rose to-gold mx-auto mb-12 rounded-full" />

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="gradient-card rounded-xl p-8 md:p-12 shadow-elevated border border-border text-center mb-8"
            >
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                ¿Interesado en colaborar o tienes alguna pregunta? 
                <br className="hidden md:block" />
                No dudes en contactarme. Estaré encantada de conversar sobre nuevas oportunidades.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="bg-muted/50 rounded-lg p-6 border border-border"
                  >
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-violet/10 flex items-center justify-center border border-violet/20">
                        <item.icon className="w-5 h-5 text-violet" />
                      </div>
                      <span className="font-semibold text-lg">{item.label}</span>
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-violet transition-smooth"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.value}</p>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center justify-center gap-4">
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className={`w-12 h-12 rounded-full transition-smooth ${link.color}`}
                      asChild
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                      >
                        <link.icon className="w-5 h-5" />
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center text-sm text-muted-foreground"
            >
              © {new Date().getFullYear()} Blanca Ayala Vázquez. Todos los derechos reservados.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
