"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="dark text-foreground bg-background min-h-screen">
      <section className="flex flex-col items-center justify-center pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold tracking-tighter"
        >
          Hola, soy <span className="text-blue-500">Fede</span>
        </motion.h1>

        <p className="text-xl text-default-500 mt-4">
          Estudiante de Ingenieria en Sistemas
        </p>
      </section>
    </main>
  );
}