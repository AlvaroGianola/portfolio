"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { IconType } from "react-icons";
import { FiDatabase, FiFileText, FiGithub, FiLinkedin, FiMail, FiMonitor, FiMoon, FiSun } from "react-icons/fi";
import {
  SiC,
  SiCss,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostman,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";

type ExperienceId = "esg" | "freelance";
type Locale = "es" | "en";

const techIcons: Record<string, IconType> = {
  Python: SiPython,
  Go: SiGo,
  C: SiC,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  HTML: SiHtml5,
  CSS: SiCss,
  React: SiReact,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  SQLServer: FiDatabase,
  Git: SiGit,
  GitHub: SiGithub,
  Docker: SiDocker,
  Postman: SiPostman,
  "MongoDB Compass": SiMongodb,
  "Linux (Ubuntu, MSYS2)": SiLinux,
  Windows: FiMonitor,
};

const content = {
  es: {
    nav: [
      { id: "inicio", label: "Inicio" },
      { id: "experiencia", label: "Experiencia" },
      { id: "proyectos", label: "Proyectos" },
      { id: "stack", label: "Stack" },
      { id: "formacion", label: "Formacion" },
      { id: "contacto", label: "Contacto" },
    ],
    modeLabel: "Selector de modo",
    modeLight: "Claro",
    modeDark: "Oscuro",
    langLabel: "Idioma",
    heroText:
      "Estudiante avanzado de Ingenieria en Sistemas, con foco en backend, automatizacion y scraping para productos digitales.",
    experienceTitle: "Experiencia profesional",
    esgPeriod: "Noviembre 2025 - Actualidad",
    esgTitle: "ESG Latam · Automatizacion y scraping",
    esgDesc:
      "Desarrollo de flujos de extraccion de datos desde PDFs y sitios web para acelerar procesos operativos y centralizar informacion util para el equipo.",
    esgPoints: [
      "Scraping de PDF y web con foco en calidad de datos.",
      "Bots de descarga en Python para tareas repetitivas.",
      "Scripts reutilizables para reducir tiempos manuales.",
    ],
    freePeriod: "Modalidad independiente",
    freeTitle: "Freelance · Soluciones a medida",
    freeDesc:
      "Desarrollo de trabajos freelance en automatizacion, scripts backend y resolucion de problemas puntuales para clientes.",
    freePoints: [
      "Automatizacion de reportes y pipelines.",
      "Integraciones REST y mantenimiento en Node.js/Express.",
      "Soporte tecnico iterativo con entregas rapidas.",
    ],
    projectsTitle: "Proyectos academicos y profesionales",
    projectCards: [
      {
        placeholder: "Placeholder BirBnb",
        title: "BirBnb (clon AirBnb)",
        desc: "Aplicacion web de reservas con registro de propiedades, filtros de busqueda, notificaciones y despliegue en la nube.",
        href: "https://github.com/AlvaroGianola/Birbnb",
      },
      {
        placeholder: "Placeholder Sistema Operativo Distribuido",
        title: "Sistema Operativo Distribuido",
        desc: "Simulador de sistema operativo con modulos Kernel, CPU, Memoria, IO y Swap comunicados por HTTP.",
        href: "https://github.com/AlvaroGianola/sistemaOperativo-2025",
      },
      {
        placeholder: "Placeholder Metamapa de Hechos",
        title: "Metamapa de Hechos",
        desc: "Plataforma colaborativa de mapeo de acontecimientos con gestion de datos, estadisticas y visualizacion web.",
      },
      

    ],
    stackTitle: "Stack",
    stackGroups: [
      { title: "Lenguajes", items: ["Python", "Go", "C", "JavaScript"] },
      { title: "Frontend", items: ["HTML", "CSS", "React"] },
      { title: "Backend", items: ["Node.js", "Express.js", "TypeScript"] },
      { title: "Bases de datos", items: ["MongoDB", "MySQL", "SQLServer"] },
      { title: "Herramientas", items: ["Git", "GitHub", "Docker", "Postman", "MongoDB Compass"] },
      { title: "Sistemas operativos", items: ["Linux (Ubuntu, MSYS2)", "Windows"] },
    ],
    educationTitle: "Formacion",
    educationDegree: "Ingenieria en Sistemas de Informacion",
    educationSchool: "UTN FRBA · 2022 - Actualidad",
    skillsTitle: "Habilidades",
    skills: [
      "Trabajo en equipo",
      "Proactividad",
      "Aprendizaje continuo",
      "Adaptabilidad",
      "Diseno y analisis de sistemas",
      "Gestion de proyectos IT",
    ],
    contactCta: "Ver CV en PDF",

  },
  en: {
    nav: [
      { id: "inicio", label: "Home" },
      { id: "experiencia", label: "Experience" },
      { id: "proyectos", label: "Projects" },
      { id: "stack", label: "Stack" },
      { id: "formacion", label: "Education" },
      { id: "contacto", label: "Contact" },
    ],
    modeLabel: "Theme mode",
    modeLight: "Light",
    modeDark: "Dark",
    langLabel: "Language",
    heroText:
      "Advanced Systems Engineering student focused on backend development, automation, and scraping for digital products.",
    experienceTitle: "Professional experience",
    esgPeriod: "November 2025 - Present",
    esgTitle: "ESG Latam · Automation and scraping",
    esgDesc:
      "Built data extraction flows from PDFs and websites to speed up operations and centralize useful team data.",
    esgPoints: [
      "PDF and web scraping with data-quality focus.",
      "Python download bots for repetitive tasks.",
      "Reusable scripts to reduce manual processing time.",
    ],
    freePeriod: "Independent work",
    freeTitle: "Freelance · Custom solutions",
    freeDesc:
      "Freelance work on automation, backend scripts, and focused technical problem solving for clients.",
    freePoints: [
      "Report and pipeline automation.",
      "REST integrations and Node.js/Express maintenance.",
      "Iterative support with fast deliveries.",
    ],
    projectsTitle: "Academic and professional projects",
    projectCards: [
    {
        placeholder: "Placeholder BirBnb",
        title: "BirBnb (AirBnb clone)",
        desc: "Booking web app with property listing, filtered search, notifications, and cloud deployment.",
        href: "https://github.com/AlvaroGianola/Birbnb",
      },
      {
        placeholder: "Placeholder Distributed OS",
        title: "Distributed Operating System",
        desc: "Operating system simulator with Kernel, CPU, Memory, IO and Swap modules connected over HTTP.",
        href: "https://github.com/AlvaroGianola/sistemaOperativo-2025",
      },
      {
        placeholder: "Placeholder Metamapa de Hechos",
        title: "Metamapa de Hechos",
        desc: "Collaborative event-mapping platform with data management, analytics, and web visualization.",
      },
      

    ],
    stackTitle: "Stack",
    stackGroups: [
      { title: "Languages", items: ["Python", "Go", "C", "JavaScript"] },
      { title: "Frontend", items: ["HTML", "CSS", "React"] },
      { title: "Backend", items: ["Node.js", "Express.js", "TypeScript"] },
      { title: "Databases", items: ["MongoDB", "MySQL", "SQLServer"] },
      { title: "Tools", items: ["Git", "GitHub", "Docker", "Postman", "MongoDB Compass"] },
      { title: "Operating systems", items: ["Linux (Ubuntu, MSYS2)", "Windows"] },
    ],
    educationTitle: "Education",
    educationDegree: "Information Systems Engineering",
    educationSchool: "UTN FRBA · 2022 - Present",
    skillsTitle: "Skills",
    skills: [
      "Teamwork",
      "Proactivity",
      "Continuous learning",
      "Adaptability",
      "Systems design and analysis",
      "IT project management",
    ],
    contactCta: "View Resume",

  },
};

export default function Home() {
  const emailAddress = "alvarogianolao@gmail.com";
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [locale, setLocale] = useState<Locale>("es");
  const [openExperience, setOpenExperience] = useState<ExperienceId | null>(null);
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("mode");
    const savedLocale = localStorage.getItem("locale");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const nextMode =
      savedMode === "light" || savedMode === "dark"
        ? savedMode
        : prefersDark
          ? "dark"
          : "light";

    const nextLocale = savedLocale === "en" ? "en" : "es";

    setMode(nextMode);
    setLocale(nextLocale);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-mode", mode);
    document.documentElement.setAttribute("data-theme", "forest");
    localStorage.setItem("mode", mode);
  }, [mode]);

  useEffect(() => {
    document.documentElement.lang = locale;
    localStorage.setItem("locale", locale);
  }, [locale]);

  const t = content[locale];
  const modeText = useMemo(() => (mode === "light" ? t.modeLight : t.modeDark), [mode, t.modeDark, t.modeLight]);
  const resumeHref =
    locale === "en"
      ? "/cv/Resume_Alvaro_Gianola_Backend_Developer.pdf"
      : "/cv/CV_Alvaro_Gianola_Backend_Developer.pdf";

  const toggleExperience = (id: ExperienceId) => {
    setOpenExperience((prev) => (prev === id ? null : id));
  };

  const handleEmailClick = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    try {
      await navigator.clipboard.writeText(emailAddress);
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 1800);
    } catch {
      // Clipboard may be blocked; continue with mailto fallback.
    }
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <main className="app-shell relative">
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="site-header"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-3 md:px-8">
          <nav className="quick-nav">
            {t.nav.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="quick-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-controls">
            <div className="mode-switch" aria-label={t.langLabel}>
              <button onClick={() => setLocale("es")} className={`mode-btn ${locale === "es" ? "is-active" : ""}`}>
                ES
              </button>
              <button onClick={() => setLocale("en")} className={`mode-btn ${locale === "en" ? "is-active" : ""}`}>
                EN
              </button>
            </div>

            <div className="mode-switch" aria-label={t.modeLabel}>
              <button
                onClick={() => setMode("light")}
                className={`mode-btn ${mode === "light" ? "is-active" : ""}`}
                aria-pressed={mode === "light"}
                title={t.modeLight}
              >
                <FiSun aria-hidden="true" />
                {t.modeLight}
              </button>
              <button
                onClick={() => setMode("dark")}
                className={`mode-btn ${mode === "dark" ? "is-active" : ""}`}
                aria-pressed={mode === "dark"}
                title={t.modeDark}
              >
                <FiMoon aria-hidden="true" />
                {t.modeDark}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <section className="mx-auto flex w-full max-w-6xl flex-col px-6 pb-24 pt-32 md:px-8" aria-label={modeText}>
        <section id="inicio" className="panel p-10 md:p-14 xl:p-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.22 }}
            transition={{ duration: 0.45 }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-[clamp(2.2rem,6vw,5.4rem)] font-bold leading-[1.02] tracking-tight">
                  Alvaro Federico <span className="accent">Gianola Otamendi</span>
                </h1>
                <p className="muted mt-4 max-w-3xl text-[clamp(1.05rem,2.1vw,1.45rem)] leading-relaxed">{t.heroText}</p>
              </div>

              <img
                src="/images/fotoLinkedin.jpg"
                alt="Foto de Alvaro Federico"
                className="h-44 w-44 rounded-3xl border border-[var(--border)] object-cover shadow-lg shadow-black/10 md:h-56 md:w-56 lg:h-64 lg:w-64"
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <a className="contact-link" href={`mailto:${emailAddress}`} onClick={handleEmailClick} title={emailAddress}>
                <span className="icon-wrap" aria-hidden="true">
                  <FiMail />
                </span>
                {emailCopied ? (locale === "en" ? "Email copied" : "Email copiado") : "Email"}
              </a>
              <a className="contact-link" href="https://www.linkedin.com/in/alvaro-federico-gianola-otamendi/" target="_blank" rel="noreferrer">
                <span className="icon-wrap" aria-hidden="true">
                  <FiLinkedin />
                </span>
                LinkedIn
              </a>
              <a className="contact-link" href="https://github.com/AlvaroGianola" target="_blank" rel="noreferrer">
                <span className="icon-wrap" aria-hidden="true">
                  <FiGithub />
                </span>
                GitHub
              </a>
              <a className="contact-link" href={resumeHref} target="_blank" rel="noreferrer">
                <span className="icon-wrap" aria-hidden="true">
                  <FiFileText />
                </span>
                {locale === "en" ? "Resume" : "Curriculum Vitae"}
              </a>
            </div>
          </motion.div>
        </section>

        <section id="experiencia" className="panel mt-8 p-10 md:p-14 xl:p-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="grid gap-4"
          >
            <h2 className="section-title">{t.experienceTitle}</h2>

            <article
              className="mini-card timeline-card clickable-card"
              role="button"
              tabIndex={0}
              onClick={() => toggleExperience("esg")}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  toggleExperience("esg");
                }
              }}
              aria-expanded={openExperience === "esg"}
              aria-controls="exp-esg-content"
            >
              <div className="accordion-trigger">
                <span>
                  <p className="muted text-sm">{t.esgPeriod}</p>
                  <h3 className="card-title mt-1">{t.esgTitle}</h3>
                </span>
                <span className={`accordion-chevron ${openExperience === "esg" ? "is-open" : ""}`} aria-hidden="true">
                  ▾
                </span>
              </div>

              <AnimatePresence initial={false}>
                {openExperience === "esg" && (
                  <motion.div
                    id="exp-esg-content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="accordion-content"
                  >
                    <p className="muted text-lg leading-relaxed">{t.esgDesc}</p>
                    <ul className="muted mt-3 list-disc pl-5 text-base leading-relaxed">
                      {t.esgPoints.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </article>

            <article
              className="mini-card timeline-card clickable-card"
              role="button"
              tabIndex={0}
              onClick={() => toggleExperience("freelance")}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  toggleExperience("freelance");
                }
              }}
              aria-expanded={openExperience === "freelance"}
              aria-controls="exp-freelance-content"
            >
              <div className="accordion-trigger">
                <span>
                  <p className="muted text-sm">{t.freePeriod}</p>
                  <h3 className="card-title mt-1">{t.freeTitle}</h3>
                </span>
                <span className={`accordion-chevron ${openExperience === "freelance" ? "is-open" : ""}`} aria-hidden="true">
                  ▾
                </span>
              </div>

              <AnimatePresence initial={false}>
                {openExperience === "freelance" && (
                  <motion.div
                    id="exp-freelance-content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="accordion-content"
                  >
                    <p className="muted text-lg leading-relaxed">{t.freeDesc}</p>
                    <ul className="muted mt-3 list-disc pl-5 text-base leading-relaxed">
                      {t.freePoints.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
          </motion.div>
        </section>

        <section id="proyectos" className="panel mt-8 p-10 md:p-14 xl:p-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.18 }}
            transition={{ duration: 0.45, delay: 0.18 }}
            className="grid gap-6"
          >
            <h2 className="section-title">{t.projectsTitle}</h2>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {t.projectCards.map((project) =>
                project.href ? (
                  <a
                    key={project.title}
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mini-card project-card project-link clickable-card"
                  >
                    <h3 className="card-title mt-3">{project.title}</h3>
                    <p className="muted text-sm">{project.desc}</p>
                  </a>
                ) : (
                  <article key={project.title} className="mini-card project-card">
                    <h3 className="card-title mt-3">{project.title}</h3>
                    <p className="muted text-sm">{project.desc}</p>
                  </article>
                ),
              )}
            </div>
          </motion.div>
        </section>

        <section id="stack" className="panel mt-8 p-10 md:p-14 xl:p-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="grid gap-4"
          >
            <h2 className="section-title">{t.stackTitle}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {t.stackGroups.map((group) => (
                <article key={group.title} className="mini-card">
                  <h3 className="card-title">{group.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((tech) => {
                      const Icon = techIcons[tech];
                      return (
                        <span key={tech} className="chip stack-chip">
                          <span className="stack-symbol" aria-hidden="true">
                            {Icon ? <Icon /> : <FiFileText />}
                          </span>
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </article>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="formacion" className="panel mt-8 p-10 md:p-14 xl:p-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.22 }}
            transition={{ duration: 0.45, delay: 0.3 }}
            className="grid gap-4 md:grid-cols-2"
          >
            <article className="mini-card">
              <h2 className="section-title">{t.educationTitle}</h2>
              <p className="mt-2 font-medium">{t.educationDegree}</p>
              <p className="muted">{t.educationSchool}</p>
            </article>

            <article className="mini-card">
              <h2 className="section-title">{t.skillsTitle}</h2>
              <ul className="muted mt-3 list-disc pl-5 text-base leading-relaxed">
                {t.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          </motion.div>
        </section>

        <section id="contacto" className="panel mt-8 p-10 md:p-14 xl:p-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.45, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a className="btn btn-primary" href={resumeHref} target="_blank" rel="noreferrer">
              {t.contactCta}
            </a>

          </motion.div>
        </section>
      </section>
    </main>
  );
}
