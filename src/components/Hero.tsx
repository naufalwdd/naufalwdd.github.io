import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, MapPin, Sparkles } from 'lucide-react';
import { cvData } from '../data/cv';

export default function Hero() {
  return (
    <section id="about" className="section grid-bg relative flex min-h-[760px] items-center overflow-hidden pt-32 md:min-h-screen">
      <div className="pointer-events-none absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-lime/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[560px] w-[560px] rounded-full bg-cyan-300/[0.08] blur-[140px]" />
      <div className="noise pointer-events-none absolute inset-0 opacity-[0.025]" />
      <div className="section-shell grid items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 }} className="mb-8 inline-flex items-center gap-2 rounded-full border border-lime/25 bg-lime/[0.07] px-3 py-2 text-xs font-bold text-lime"><span className="h-2 w-2 animate-pulse rounded-full bg-lime" /> Available for select projects <Sparkles size={13} /></motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .25 }} className="eyebrow mb-5">Software developer · Bandung, Indonesia</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3, duration: .7 }} className="text-balance text-5xl font-extrabold leading-[1.02] tracking-[-0.065em] md:text-7xl lg:text-[5.5rem]">I turn complex ideas into <span className="gradient-text">useful products.</span></motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .45 }} className="mt-7 max-w-xl text-base leading-8 text-white/60 md:text-lg">Hi, I’m <span className="font-bold text-white">{cvData.personalInfo.name}</span> — a full-stack and mobile developer with 5+ years of experience shipping reliable tools for teams, retailers, and growing businesses.</motion.p>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .55 }} className="mt-9 flex flex-wrap gap-3"><a href="#projects" className="btn-primary">See selected work <ArrowDownRight size={17} /></a><a href="#contact" className="btn-ghost">Start a conversation <ArrowUpRight size={17} /></a></motion.div>
          <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs text-white/45"><span className="inline-flex items-center gap-2"><MapPin size={14} className="text-lime" /> Bandung · GMT+7</span><span className="h-1 w-1 rounded-full bg-white/20" /><span>React · Python · TypeScript</span></div>
        </div>
        <motion.div initial={{ opacity: 0, scale: .94, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: .35, duration: .7 }} className="relative mx-auto w-full max-w-sm lg:ml-auto">
          <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-lime/20 via-transparent to-cyan/[0.12] blur-2xl" />
          <div className="glass relative rounded-[2rem] p-5 md:p-6">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-5"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-lime font-mono font-bold text-ink">NW</span><div><p className="text-sm font-extrabold">Product systems</p><p className="font-mono text-[10px] uppercase tracking-[.16em] text-white/35">Web · mobile · on-prem</p></div></div><span className="h-2 w-2 rounded-full bg-lime shadow-[0_0_12px_rgba(200,255,90,.8)]" /></div>
            <div className="mt-5 grid grid-cols-2 gap-3"><div className="glass-soft rounded-xl p-4"><p className="font-mono text-[10px] uppercase tracking-[.14em] text-lime">01</p><p className="mt-5 text-base font-extrabold">Inventory</p><p className="mt-1 text-xs leading-5 text-white/40">Clear stock, calmer ops.</p></div><div className="glass-soft rounded-xl p-4"><p className="font-mono text-[10px] uppercase tracking-[.14em] text-lime">02</p><p className="mt-5 text-base font-extrabold">Point of sale</p><p className="mt-1 text-xs leading-5 text-white/40">Fast at the moment of truth.</p></div></div>
            <div className="glass-soft mt-3 rounded-xl p-4"><div className="flex items-center justify-between"><p className="font-mono text-[10px] uppercase tracking-[.14em] text-white/35">Shipping status</p><span className="font-mono text-[10px] text-lime">LIVE / 2026</span></div><div className="mt-5 flex h-16 items-end gap-2">{[35, 52, 42, 68, 56, 84, 72, 94].map((height, index) => <span key={index} className={`flex-1 rounded-t-sm ${index > 5 ? 'bg-lime' : 'bg-white/15'}`} style={{ height: `${height}%` }} />)}</div><p className="mt-3 text-xs text-white/45">Reliable systems, designed for real teams.</p></div>
            <div className="flex items-center justify-between px-1 pb-1 pt-5"><span className="font-mono text-[10px] uppercase tracking-[.18em] text-white/35">Naufal / 2026</span><span className="text-xs font-bold text-white/45">01 — 04</span></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
