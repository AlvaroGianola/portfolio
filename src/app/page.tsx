"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedMode = localStorage.getItem("mode");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const nextMode =
      savedMode === "light" || savedMode === "dark"
        ? savedMode
        : prefersDark
          ? "dark"
          : "light";
    setMode(nextMode);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-mode", mode);
    document.documentElement.setAttribute("data-theme", "forest");
    localStorage.setItem("mode", mode);
  }, [mode]);

  const modeText = useMemo(() => (mode === "light" ? "Modo claro" : "Modo oscuro"), [mode]);

  const quickNav = [
    { id: "inicio", label: "Inicio" },
    { id: "experiencia", label: "Experiencia" },
    { id: "stack", label: "Stack" },
    { id: "formacion", label: "Formacion" },
    { id: "contacto", label: "Contacto" },
  ];

  return (
    <main className="app-shell relative">
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="site-header"
      >
        <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-3">
          <nav className="quick-nav">
            {quickNav.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="quick-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mode-switch" aria-label="Selector de modo">
            <button
              onClick={() => setMode("light")}
              className={`mode-btn ${mode === "light" ? "is-active" : ""}`}
              aria-pressed={mode === "light"}
              title="Modo claro"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
                <path d="M12 2.5V5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M12 19V21.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M2.5 12H5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M19 12h2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              Claro
            </button>
            <button
              onClick={() => setMode("dark")}
              className={`mode-btn ${mode === "dark" ? "is-active" : ""}`}
              aria-pressed={mode === "dark"}
              title="Modo oscuro"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                <path
                  d="M20 14.2A8 8 0 1 1 9.8 4 7 7 0 0 0 20 14.2Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
              Oscuro
            </button>
          </div>
        </div>
      </motion.header>

      <section className="mx-auto flex w-full max-w-5xl flex-col px-6 pb-16 pt-28" aria-label={modeText}>

        <section id="inicio" className="panel p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="muted text-sm uppercase tracking-[0.2em]">Portfolio tecnico</p>
                <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                  Alvaro Federico <span className="accent">Gianola</span>
                </h1>
                <p className="muted mt-3 max-w-2xl text-base md:text-lg">
                  Estudiante avanzado de Ingenieria en Sistemas, con foco en backend, automatizacion
                  y soluciones de scraping orientadas a negocio.
                </p>
              </div>

              <img
                src="/images/perfil.jpg"
                alt="Foto de Alvaro Federico"
                className="h-24 w-24 rounded-2xl border border-[var(--border)] object-cover md:h-28 md:w-28"
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <a className="contact-link" href="mailto:alvarogianolao@gmail.com">
                <span className="icon-wrap" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M4 7h16v10H4z" stroke="currentColor" strokeWidth="1.7" />
                    <path d="m5 8 7 5 7-5" stroke="currentColor" strokeWidth="1.7" />
                  </svg>
                </span>
                Email
              </a>
              <a className="contact-link" href="https://www.linkedin.com/in/alvaro-federico-gianola-otamendi/" target="_blank" rel="noreferrer">
                <span className="icon-wrap" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M6 9v9" stroke="currentColor" strokeWidth="1.7" />
                    <circle cx="6" cy="6" r="1.3" fill="currentColor" />
                    <path d="M11 18v-5a3 3 0 0 1 6 0v5" stroke="currentColor" strokeWidth="1.7" />
                    <path d="M11 9v9" stroke="currentColor" strokeWidth="1.7" />
                  </svg>
                </span>
                LinkedIn
              </a>
              <a className="contact-link" href="https://github.com/AlvaroGianola" target="_blank" rel="noreferrer">
                <span className="icon-wrap" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 19c-4 1.2-4-2-6-2m12 4v-3.2A3 3 0 0 0 14 15c3.6-.4 7.4-1.8 7.4-8a6 6 0 0 0-1.6-4.2 5.5 5.5 0 0 0-.1-4.1s-1.3-.4-4.3 1.6a14.5 14.5 0 0 0-7.8 0c-3-2-4.3-1.6-4.3-1.6a5.5 5.5 0 0 0-.1 4.1A6 6 0 0 0 1.6 7c0 6.2 3.8 7.6 7.4 8a3 3 0 0 0-.9 2.4V21"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                GitHub
              </a>
              <a className="contact-link" href="/cv/alvaro-federico-gianola.pdf" target="_blank" rel="noreferrer">
                <span className="icon-wrap" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M7 3h7l5 5v13H7z" stroke="currentColor" strokeWidth="1.7" />
                    <path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.7" />
                    <path d="M10 13h6M10 16h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  </svg>
                </span>
                CV PDF
              </a>
            </div>
          </motion.div>
        </section>

        <section id="experiencia" className="panel mt-6 p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="grid gap-4"
          >
            <h2 className="section-title">Experiencia profesional</h2>

            <article className="mini-card timeline-card">
              <p className="muted text-sm">Noviembre 2025 - Actualidad</p>
              <h3 className="card-title mt-1">ESG Latam · Automatizacion y scraping</h3>
              <p className="muted">
                Desarrollo de flujos de extraccion de datos desde PDFs y sitios web para acelerar
                procesos operativos y centralizar informacion util para el equipo.
              </p>
              <ul className="muted mt-3 list-disc pl-5 text-sm">
                <li>Scraping de documentos PDF y fuentes web con enfoque en calidad de datos.</li>
                <li>Construccion de bots en Python para descargas masivas y tareas repetitivas.</li>
                <li>Armado de scripts reutilizables para reducir tiempos manuales de procesamiento.</li>
              </ul>
            </article>

            <article className="mini-card timeline-card">
              <p className="muted text-sm">Modalidad independiente</p>
              <h3 className="card-title mt-1">Freelance · Soluciones a medida</h3>
              <p className="muted">
                Desarrollo de trabajos freelance en automatizacion, scripts backend y resolucion de
                problemas puntuales para clientes y proyectos chicos.
              </p>
              <ul className="muted mt-3 list-disc pl-5 text-sm">
                <li>Automatizacion de reportes y pipelines sencillos con Python.</li>
                <li>Integraciones REST y mantenimiento de APIs en Node.js/Express.</li>
                <li>Soporte tecnico para mejoras rapidas y entregas iterativas.</li>
              </ul>
            </article>
          </motion.div>
        </section>

        <section id="stack" className="panel mt-6 p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className=""
          >
            <h2 className="section-title">Stack principal</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Python",
                "Go",
                "C",
                "JavaScript",
                "TypeScript",
                "Node.js",
                "Express",
                "React",
                "MongoDB",
                "Docker",
                "Git",
                "Postman",
              ].map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="formacion" className="panel mt-6 p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3 }}
            className="grid gap-4 md:grid-cols-2"
          >
            <article className="mini-card">
              <h2 className="section-title">Formacion</h2>
              <p className="mt-2 font-medium">Ingenieria en Sistemas de Informacion</p>
              <p className="muted">UTN FRBA · 2022 - Actualidad</p>
            </article>

            <article className="mini-card">
              <h2 className="section-title">Idiomas y soft skills</h2>
              <p className="muted mt-2">Ingles intermedio-alto · Trabajo en equipo · Resolucion analitica</p>
            </article>
          </motion.div>
        </section>

        <section id="contacto" className="panel mt-6 p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a className="btn btn-primary" href="/cv/alvaro-federico-gianola.pdf" target="_blank" rel="noreferrer">
              Ver CV en PDF
            </a>
            <span className="muted text-sm">Subi tu CV en public/cv/alvaro-federico-gianola.pdf</span>
            <span className="muted text-sm">Subi tu foto en public/images/perfil.jpg</span>
          </motion.div>
        </section>
      </section>
    </main>
  );
}