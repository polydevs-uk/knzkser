"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Mail, Github, Linkedin } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Nothing",
    desc: "Nothing",
    tags: ["Nothing"],
    url: "#",
  },
  {
    id: 2,
    title: "Nothing",
    desc: "Nothing",
    tags: ["Nothing"],
    url: "#",
  },
  {
    id: 3,
    title: "Nothing",
    desc: "Nothing",
    tags: ["Nothing"],
    url: "#",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function PortfolioAnimated() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-800 text-slate-100 antialiased">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center font-bold shadow-2xl">NG</div>
          <div>
            <div className="text-sm font-medium">KnzkSer</div>
            <div className="text-xs text-slate-400">Fullstack • Competitive Programmer • Interaction</div>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-slate-300">
          <a className="hover:text-white transition" href="#projects">Projects</a>
          <a className="hover:text-white transition" href="#about">About</a>
          <a className="hover:text-white transition" href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 py-12 grid gap-12 lg:grid-cols-2 items-center">
        <section>
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300"
          >
            Hi Guys
            <br />
            nothing here for now
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-6 text-slate-300 max-w-xl"
          >
            I am a developer in the field website system and infrastructure development. Supporting the leader in deploying AI/ML projects to production and optimizing performance.


          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-8 flex gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-gradient-to-r from-indigo-600 to-pink-600 shadow-lg font-medium transform hover:-translate-y-1 transition"
            >
              <Code size={16} />
              My Projects
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 border border-slate-700 text-slate-200 hover:border-slate-500 transition"
            >
              <Mail size={16} />
              Contact
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-8 flex gap-4 items-center text-slate-400 text-sm"
          >
            <div className="flex items-center gap-3">
              <a className="hover:opacity-90" href="#"><Github size={18} /></a>
              <a className="hover:opacity-90" href="#"><Linkedin size={18} /></a>
            </div>
            <div className="px-3 py-1 rounded-full bg-slate-800/60">Available for hire</div>
          </motion.div>
        </section>

        {/* Visual / floating cards */}
        <section className="relative hidden lg:block">
          <div className="absolute -inset-6 blur-3xl opacity-30" style={{ background: "linear-gradient(135deg,#7c3aed,#06b6d4)" }} />

          <motion.div
            initial={{ scale: 0.98, rotate: -6, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative p-6 rounded-2xl bg-gradient-to-tr from-slate-800/70 to-slate-900/60 backdrop-blur-md shadow-2xl"
          >
            <div className="grid grid-cols-2 gap-4">
              <FloatingCard title="Interactive UI" subtitle="Micro-interactions & Motion" />
              <FloatingCard title="Competitive Programming" subtitle="Segment Tree, DFS, BFS" />
              <FloatingCard title="Design" subtitle="High-fidelity mockups" />
              <FloatingCard title="Tools" subtitle="React, Unity, Prisma" />
            </div>
          </motion.div>
        </section>
      </main>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 pb-12">
        <motion.h2 whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} className="text-2xl font-bold">Selected Projects</motion.h2>
        <motion.div variants={container} initial="hidden" whileInView="show" className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.id}
              href={p.url}
              variants={fadeUp}
              className="group block rounded-2xl p-6 bg-gradient-to-br from-slate-900/70 to-slate-800/60 border border-slate-700 hover:scale-105 transform transition-shadow shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold">{p.title}</div>
                <div className="text-xs text-slate-400">View</div>
              </div>

              <p className="mt-3 text-slate-300 text-sm">{p.desc}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-700/60">{t}</span>
                ))}
              </div>

              <div className="mt-4 opacity-0 group-hover:opacity-100 transition">
                <div className="text-xs text-slate-400">Tech: React · Tailwind · Framer Motion</div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="max-w-4xl mx-auto px-6 pb-12">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="rounded-2xl p-6 bg-slate-900/60 border border-slate-700">
          <h3 className="text-xl font-semibold">About me</h3>
          <p className="mt-4 text-slate-300">Website system and infrastructure development expert. Supporting the leader in deploying AI/ML projects to production and optimizing performance.

</p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <Skill name="Front-end" level={0.5} />
            <Skill name="Competitive-Programming" level={0.6} />
            <Skill name="Design" level={0.4} />
            <Skill name="Backend" level={0.8} />
          </div>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-6 pb-20">
        <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} className="rounded-2xl p-6 bg-gradient-to-tr from-slate-900/60 to-slate-800/60 border border-slate-700">
          <h3 className="text-xl font-semibold">Say hi 👋</h3>
          <p className="mt-2 text-slate-300">Want to collaborate? Drop a short message — I'll respond within a few days.</p>

          <form className="mt-6 grid gap-4 sm:grid-cols-2">
            <input className="col-span-2 sm:col-span-1 rounded-xl p-3 bg-slate-800/60 border border-slate-700" placeholder="Your name" />
            <input className="col-span-2 sm:col-span-1 rounded-xl p-3 bg-slate-800/60 border border-slate-700" placeholder="Your email" />
            <textarea className="col-span-2 rounded-xl p-3 bg-slate-800/60 border border-slate-700 min-h-[120px]" placeholder="Message..." />
            <button className="col-span-2 inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 bg-gradient-to-r from-indigo-600 to-pink-600 shadow-md">Send</button>
          </form>
        </motion.div>
      </section>

      <footer className="py-8 text-center text-slate-500 text-sm">© {new Date().getFullYear()} KnzkSer — Built with ❤️ & Framer Motion</footer>
    </div>
  );
}

function FloatingCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <motion.div whileHover={{ y: -8 }} className="rounded-xl p-4 bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-slate-700/60 shadow-lg">
      <div className="text-sm font-semibold">{title}</div>
      <div className="text-xs mt-1 text-slate-400">{subtitle}</div>
      <div className="mt-3 text-[10px] px-2 py-1 rounded-full bg-slate-700/50 inline-block">Interactive</div>
    </motion.div>
  );
}

function Skill({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <div className="flex justify-between text-sm">
        <div>{name}</div>
        <div className="text-slate-400">{Math.round(level * 100)}%</div>
      </div>
      <div className="mt-2 w-full bg-slate-800/50 rounded-full h-2 overflow-hidden">
        <motion.div initial={{ width: 0 }} whileInView={{ width: `${Math.round(level * 100)}%` }} transition={{ duration: 0.8 }} className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500" />
      </div>
    </div>
  );
}
