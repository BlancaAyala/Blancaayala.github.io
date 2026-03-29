import { useState } from "react";
import { motion } from "framer-motion";
import workflowReservas from "@/assets/workflow-reservas.png";
import workflowRag from "@/assets/workflow-rag.png";
import workflowPedidos from "@/assets/workflow-pedidos.png";
import workflowAtencion from "@/assets/workflow-atencion.png";
import { Bot, MessageSquare, Calendar, CheckCircle, Zap, Clock, Headphones, Mail, Database, Search, Brain, RefreshCw, Server, Workflow, ClipboardList, ShieldCheck, PackageCheck, Bell, FileSpreadsheet, AlertTriangle, Image, Mic, FileText, Volume2, MessageCircle, Github } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export const ProjectsSection = () => {
  const [openProject, setOpenProject] = useState<string | null>(null);

  const projects = [
    {
      id: "whatsapp",
      title: "Asistente de reservas con IA para WhatsApp",
      description: "Asistente inteligente que gestiona automáticamente reservas de restaurante a través de WhatsApp mediante IA.",
      icon: <Bot className="w-8 h-8 text-rose" />,
      tags: [
        { icon: "🤖", label: "IA Agent" },
        { icon: "⚙️", label: "Automatización" },
        { icon: "📲", label: "WhatsApp" },
        { icon: "🔗", label: "Integraciones" },
      ],
      problem: "Los restaurantes pierden reservas por no responder a tiempo o por depender de atención manual.",
      solution: "Diseño de un asistente inteligente conectado a WhatsApp que gestiona automáticamente las reservas mediante IA, interpretando mensajes de texto y audio, y sincronizando la información con el sistema de calendario.",
      steps: [
        "Cliente (WhatsApp)",
        "IA interpreta mensaje (texto o audio)",
        "Comprueba disponibilidad",
        "Gestiona reserva (crear, modificar o cancelar)",
        "Confirma automáticamente al cliente",
      ],
      features: [
        { icon: <Bot className="w-4 h-4" />, text: "Gestión automática de reservas" },
        { icon: <Headphones className="w-4 h-4" />, text: "Soporte para mensajes de voz y texto" },
        { icon: <Clock className="w-4 h-4" />, text: "Comprobación de disponibilidad en tiempo real" },
        { icon: <Calendar className="w-4 h-4" />, text: "Modificación y cancelación de reservas" },
        { icon: <MessageSquare className="w-4 h-4" />, text: "Envío automático de confirmaciones" },
        { icon: <Mail className="w-4 h-4" />, text: "Integración con calendario y email" },
      ],
      impacts: [
        "Automatización completa del proceso de reservas",
        "Reducción de carga operativa",
        "Atención 24/7 sin intervención humana",
        "Mejora en la experiencia del cliente",
      ],
    },
    {
      id: "rag",
      title: "Sistema de base de conocimiento con IA (RAG)",
      description: "Permite a cualquier equipo consultar toda su información como si hablara con un experto.",
      icon: <Brain className="w-8 h-8 text-rose" />,
      tags: [
        { icon: "🤖", label: "IA Agent" },
        { icon: "📊", label: "Data" },
        { icon: "🧠", label: "RAG" },
        { icon: "🔗", label: "Integraciones" },
      ],
      problem: "Las empresas tienen información dispersa (documentos, PDFs, bases de datos) que no pueden consultar de forma rápida ni eficiente.",
      solution: "Diseño de un sistema de base de conocimiento inteligente basado en IA (RAG) que centraliza la información de múltiples fuentes y permite consultarla en lenguaje natural a través de un asistente.",
      steps: [
        "Documentos / archivos",
        "Procesamiento y almacenamiento en base de datos vectorial",
        "IA indexa la información",
        "Usuario hace una pregunta",
        "IA busca la información relevante",
        "Responde de forma precisa y contextualizada",
      ],
      features: [
        { icon: <Database className="w-4 h-4" />, text: "Indexación automática de documentos" },
        { icon: <Search className="w-4 h-4" />, text: "Búsqueda semántica mediante IA" },
        { icon: <MessageSquare className="w-4 h-4" />, text: "Respuestas contextuales en lenguaje natural" },
        { icon: <RefreshCw className="w-4 h-4" />, text: "Actualización dinámica de la base de conocimiento" },
        { icon: <Server className="w-4 h-4" />, text: "Integración con base de datos vectorial (PostgreSQL + embeddings)" },
        { icon: <Workflow className="w-4 h-4" />, text: "Automatización completa del flujo de datos" },
      ],
      impacts: [
        "Acceso instantáneo a información compleja",
        "Eliminación de búsquedas manuales en documentos",
        "Mejora en la toma de decisiones",
        "Centralización del conocimiento empresarial",
        "Escalabilidad en la gestión de información",
      ],
    },
    {
      id: "inventario",
      title: "Automatización de gestión de pedidos e inventario",
      description: "Convierte una hoja de cálculo en un sistema automatizado de gestión de pedidos.",
      icon: <ClipboardList className="w-8 h-8 text-rose" />,
      tags: [
        { icon: "⚙️", label: "Automatización" },
        { icon: "📊", label: "Data" },
        { icon: "🧾", label: "Operaciones" },
        { icon: "🔗", label: "Integraciones" },
      ],
      problem: "La gestión manual de pedidos e inventario genera errores, pérdida de tiempo y falta de control sobre el stock disponible.",
      solution: "Diseño de un sistema automatizado que gestiona pedidos en tiempo real desde Google Sheets, valida el inventario disponible y actualiza automáticamente los datos, enviando notificaciones según el estado de cada solicitud.",
      steps: [
        "Nuevo pedido (Google Sheets)",
        "Filtrado y validación de datos",
        "Consulta de inventario",
        "Verificación de stock disponible",
        "Actualización automática del inventario",
        "Registro del resultado",
        "Envío de notificación por email",
      ],
      features: [
        { icon: <PackageCheck className="w-4 h-4" />, text: "Procesamiento automático de pedidos" },
        { icon: <ShieldCheck className="w-4 h-4" />, text: "Validación de datos en tiempo real" },
        { icon: <Database className="w-4 h-4" />, text: "Consulta y control de inventario" },
        { icon: <RefreshCw className="w-4 h-4" />, text: "Actualización automática del stock" },
        { icon: <AlertTriangle className="w-4 h-4" />, text: "Gestión de errores y pedidos sin disponibilidad" },
        { icon: <Bell className="w-4 h-4" />, text: "Notificación automática por email" },
        { icon: <FileSpreadsheet className="w-4 h-4" />, text: "Integración con Google Sheets" },
      ],
      impacts: [
        "Reducción de errores humanos",
        "Ahorro de tiempo en gestión operativa",
        "Control en tiempo real del inventario",
        "Automatización del flujo completo de pedidos",
        "Mejora en la eficiencia y organización interna",
      ],
    },
    {
      id: "atencion-cliente",
      title: "Automatización de atención al cliente con IA para WhatsApp",
      description: "Atiende a tus clientes automáticamente, sin importar cómo te escriban.",
      icon: <MessageCircle className="w-8 h-8 text-rose" />,
      tags: [
        { icon: "🤖", label: "IA Agent" },
        { icon: "📲", label: "WhatsApp" },
        { icon: "🧠", label: "Multimodal" },
        { icon: "⚙️", label: "Automatización" },
      ],
      problem: "Las empresas no pueden atender todas las consultas de clientes de forma rápida y eficiente, especialmente cuando llegan por distintos formatos (texto, audio, imágenes o documentos).",
      solution: "Diseño de un asistente inteligente conectado a WhatsApp que interpreta y responde automáticamente a consultas de clientes, independientemente del formato del mensaje, utilizando IA para ofrecer respuestas precisas y contextualizadas.",
      steps: [
        "Cliente envía mensaje (texto, audio, imagen o documento)",
        "Sistema identifica el tipo de mensaje",
        "Procesa y extrae la información (transcripción o análisis)",
        "IA interpreta la consulta",
        "Genera respuesta inteligente",
        "Envía respuesta en texto o audio automáticamente",
      ],
      features: [
        { icon: <Clock className="w-4 h-4" />, text: "Atención automática 24/7" },
        { icon: <FileText className="w-4 h-4" />, text: "Procesamiento de mensajes de texto, audio, imágenes y documentos" },
        { icon: <Mic className="w-4 h-4" />, text: "Transcripción de audios" },
        { icon: <Image className="w-4 h-4" />, text: "Análisis de imágenes y documentos" },
        { icon: <Brain className="w-4 h-4" />, text: "Respuestas generadas con IA" },
        { icon: <Volume2 className="w-4 h-4" />, text: "Envío de respuestas en texto o voz" },
        { icon: <Database className="w-4 h-4" />, text: "Memoria de conversación" },
        { icon: <MessageSquare className="w-4 h-4" />, text: "Integración con WhatsApp" },
      ],
      impacts: [
        "Reducción de carga en atención al cliente",
        "Respuesta inmediata a usuarios",
        "Mejora en la experiencia del cliente",
        "Automatización completa del soporte básico",
        "Escalabilidad sin aumentar equipo",
      ],
    },
  ];

  return (
    <section id="proyectos" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-center">
            Mis <span className="text-rose">proyectos</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-rose to-violet mx-auto mb-12 rounded-full" />

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                onClick={() => setOpenProject(project.id)}
                className="gradient-card rounded-xl overflow-hidden shadow-elevated border border-border group hover:shadow-[0_0_30px_hsl(340_85%_60%/0.2)] transition-smooth cursor-pointer"
              >
                {/* Tags */}
                <div className="flex flex-wrap gap-2 px-6 pt-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className="px-3 py-1 bg-rose/10 border border-rose/20 rounded-full text-xs font-medium text-rose"
                    >
                      {tag.icon} {tag.label}
                    </span>
                  ))}
                </div>

                {/* Card visual */}
                {/* Subtitle */}
                <p className="text-xs text-muted-foreground italic px-6 mt-3">
                  {project.id === "atencion-cliente" ? "Asistente capaz de entender y responder mensajes en múltiples formatos" : ""}
                </p>

                <div className="aspect-video bg-secondary/50 relative overflow-hidden flex items-center justify-center mx-6 mt-3 rounded-lg">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-rose/10 border-2 border-rose/20 flex items-center justify-center">
                      {project.icon}
                    </div>
                    <span className="text-sm text-muted-foreground">Click para ver detalles</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-display font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-muted-foreground mt-12 text-lg"
          >
            Más proyectos próximamente...
          </motion.p>
        </motion.div>
      </div>

      {/* Detail Dialogs */}
      {projects.map((project) => (
        <Dialog key={project.id} open={openProject === project.id} onOpenChange={(v) => !v && setOpenProject(null)}>
          <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto gradient-card border-border">
            <DialogHeader>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className="px-3 py-1 bg-rose/10 border border-rose/20 rounded-full text-xs font-medium text-rose"
                  >
                    {tag.icon} {tag.label}
                  </span>
                ))}
              </div>
              <DialogTitle className="text-2xl font-display font-bold">
                {project.title}
              </DialogTitle>
              <DialogDescription className="sr-only">
                Detalles del proyecto {project.title}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 mt-2">
              {/* Problema */}
              <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                <h4 className="font-display font-bold text-destructive mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4" /> Problema
                </h4>
                <p className="text-sm text-muted-foreground">{project.problem}</p>
              </div>

              {/* Solución */}
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                <h4 className="font-display font-bold text-primary mb-2 flex items-center gap-2">
                  <Bot className="w-4 h-4" /> Solución
                </h4>
                <p className="text-sm text-muted-foreground">{project.solution}</p>
              </div>

              {/* Cómo funciona */}
              <div>
                <h4 className="font-display font-bold text-foreground mb-3">Cómo funciona</h4>
                <div className="flex flex-col gap-2">
                  {project.steps.map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-rose/20 border border-rose/30 flex items-center justify-center text-xs font-bold text-rose shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-sm text-muted-foreground">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Workflow image for reservas project */}
              {project.id === "whatsapp" && (
                <div className="rounded-lg overflow-hidden border border-border">
                  <img
                    src={workflowReservas}
                    alt="Flujo de trabajo del asistente de reservas con IA para WhatsApp"
                    className="w-full h-auto"
                  />
                </div>
              )}

              {project.id === "rag" && (
                <div className="rounded-lg overflow-hidden border border-border">
                  <img
                    src={workflowRag}
                    alt="Flujo de trabajo del sistema de base de conocimiento con IA (RAG)"
                    className="w-full h-auto"
                  />
                </div>
              )}

              {project.id === "inventario" && (
                <div className="rounded-lg overflow-hidden border border-border">
                  <img
                    src={workflowPedidos}
                    alt="Flujo de trabajo de automatización de gestión de pedidos e inventario"
                    className="w-full h-auto"
                  />
                </div>
              )}

              {project.id === "atencion-cliente" && (
                <div className="rounded-lg overflow-hidden border border-border">
                  <img
                    src={workflowAtencion}
                    alt="Flujo de trabajo de automatización de atención al cliente con IA para WhatsApp"
                    className="w-full h-auto"
                  />
                </div>
              )}

              {/* Funcionalidades clave */}
              <div>
                <h4 className="font-display font-bold text-foreground mb-3">Funcionalidades clave</h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {project.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-muted/50 border border-border text-sm text-muted-foreground">
                      <span className="text-rose">{f.icon}</span>
                      {f.text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Resultado / impacto */}
              <div>
                <h4 className="font-display font-bold text-foreground mb-3">Resultado / impacto</h4>
                <div className="space-y-2">
                  {project.impacts.map((impact, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                      {impact}
                    </div>
                  ))}
                </div>
              </div>

              {/* GitHub button for atencion-cliente */}
              <div className="pt-2 flex justify-end">
                <a
                  href={project.id === "inventario" ? "https://github.com/BlancaAyala/Inventory-Order-Management-Automation" : project.id === "rag" ? "https://github.com/BlancaAyala/Sistema-de-base-de-conocimiento-con-IA-RAG-" : project.id === "whatsapp" ? "https://github.com/BlancaAyala/Asistente-de-reservas-con-IA-para-WhatsApp" : "https://github.com/BlancaAyala/AI-WhatsApp-Multimodal-Assistant"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background font-medium text-sm hover:opacity-90 transition-smooth"
                >
                  <Github className="w-4 h-4" />
                  Descargar JSON en GitHub
                </a>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </section>
  );
};
