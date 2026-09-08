import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight, Code2, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import PWAImage from '../assets/PWA.png';
import POSImage from '../assets/POS.jpg';
import POS2Image from '../assets/POS2.jpg';
import PLIImage from '../assets/PLI.png';
import IACHomeImage from '../assets/IAC-home.png';
import IACDashboardImage from '../assets/IAC-dashboard.png';
import IACProgramImage from '../assets/IAC-program.png';
import KITAImage from '../assets/KITA.png';
import KITA2Image from '../assets/KITA2.png';
import NarvaLandingImage from '../assets/Narva-landing.png';
import NarvaPurchaseOrderImage from '../assets/Narva-purchase-order.png';
import NarvaStockAdjustmentImage from '../assets/Narva-stock-adjustment.png';

const projects = [
  { title: 'Narva — Inventory & POS', tag: 'SaaS + on-premise platform', description: 'A flexible operations platform for inventory, POS, purchasing, and stock control. Built to run as a multi-tenant SaaS or be deployed on-premise when teams need full infrastructure and data control.', tech: ['React', 'Flask', 'PostgreSQL'], images: [NarvaLandingImage, NarvaPurchaseOrderImage, NarvaStockAdjustmentImage], link: 'https://narva.fun' },
  { title: 'Indonesian Al Quran Center', tag: 'Community platform', description: 'Full-stack ecosystem with a public-facing website, admin dashboard, program pages, event registration, ticketing, and integrated payment gateway for a national learning community.', tech: ['Flask', 'PostgreSQL', 'Alpine.js'], images: [IACHomeImage, IACDashboardImage, IACProgramImage], link: 'https://indonesianalqurancenter.or.id' },
  { title: 'PWA POS System', tag: 'Retail operations', description: 'Offline-first point of sale for UMKM teams. Built for speed, reliable sync, and calm workflows even with unstable connectivity.', tech: ['Next.js', 'Django', 'PostgreSQL'], image: PWAImage, link: 'https://www.linkedin.com/posts/naufalwdd_i-am-excited-to-share-my-latest-achievement-activity-7220758151925571595-55O8' },
  { title: 'Mobile POS System', tag: 'Mobile product', description: 'Local-first Android POS with inventory, transaction history, and server synchronization for retail teams on the move.', tech: ['React Native', 'Flask', 'SQLite'], images: [POSImage, POS2Image] },
  { title: 'Cognex integration', tag: 'Manufacturing', description: 'Desktop QR scanning workflow connecting Cognex hardware to production data with validation and automated upload.', tech: ['Flask', 'SQLite', 'Hardware'], image: PLIImage },
  { title: 'Shell KITA Dashboard', tag: 'Analytics', description: 'Sales, inventory, and distribution intelligence for teams managing performance across multiple locations.', tech: ['Angular', '.NET', 'SQL Server'], images: [KITA2Image, KITAImage], link: 'https://www.kita-dashboard.id' },
];

export default function Projects() {
  const [indices, setIndices] = useState<Record<number, number>>({});
  const [preview, setPreview] = useState<{ projectIndex: number; imageIndex: number } | null>(null);
  useEffect(() => { const timer = setInterval(() => setIndices((prev) => { const next = { ...prev }; projects.forEach((p, i) => { if (p.images) next[i] = ((prev[i] ?? 0) + 1) % p.images.length; }); return next; }), 4200); return () => clearInterval(timer); }, []);
  const previewProject = preview ? projects[preview.projectIndex] : null;
  const previewImages = previewProject ? (previewProject.images ?? (previewProject.image ? [previewProject.image] : [])) : [];
  const previewSrc = previewImages[preview?.imageIndex ?? 0] ?? previewImages[0];
  const movePreview = (direction: 1 | -1) => setPreview((current) => {
    if (!current) return current;
    const project = projects[current.projectIndex];
    const images = project.images ?? (project.image ? [project.image] : []);
    if (images.length < 2) return current;
    return { ...current, imageIndex: (current.imageIndex + direction + images.length) % images.length };
  });
  return <section id="projects" className="section border-t border-white/[0.06] bg-[#0b0e11]">
    <div className="section-shell"><div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow mb-4">02 / selected work</p><h2 className="section-title">Proof, not promises.</h2></div><p className="max-w-md text-sm leading-7 text-white/50">A few systems I’ve designed and shipped across web, mobile, and connected hardware.</p></div>
      <div className="grid gap-4 md:grid-cols-2">{projects.map((project, index) => { const src = project.images ? project.images[indices[index] ?? 0] : project.image; return <motion.article key={project.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }} className={`glass group overflow-hidden rounded-2xl ${index === 0 ? 'md:col-span-2 md:grid md:grid-cols-[1.05fr_.95fr]' : ''}`}>
          <button onClick={() => src && setPreview({ projectIndex: index, imageIndex: project.images ? (indices[index] ?? 0) : 0 })} className="relative flex min-h-[220px] w-full items-center justify-center overflow-hidden bg-[#12171b] p-4 text-left md:min-h-[250px]">{src ? <img src={src} alt={project.title} className="h-full w-full object-contain opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100" /> : <Code2 size={42} className="text-lime/50" />}{project.images ? <div className="absolute bottom-4 right-4 flex gap-1.5">{project.images.map((_, dot) => <span key={dot} className={`h-1.5 rounded-full transition-all ${dot === (indices[index] ?? 0) ? 'w-6 bg-lime' : 'w-1.5 bg-white/40'}`} />)}</div> : null}</button>
          <div className="flex flex-col p-6 md:p-7"><div className="flex items-start justify-between gap-4"><span className="eyebrow text-[10px]">{project.tag}</span>{project.link && <a href={project.link} target="_blank" rel="noreferrer" className="text-white/35 transition hover:text-lime"><ArrowUpRight size={18} /></a>}</div><h3 className="mt-4 text-xl font-extrabold tracking-tight group-hover:text-lime transition-colors">{project.title}</h3><p className="mt-3 text-sm leading-7 text-white/52">{project.description}</p><div className="mt-auto flex flex-wrap gap-2 pt-7">{project.tech.map((tech) => <span key={tech} className="rounded-md bg-white/[0.06] px-2.5 py-1.5 font-mono text-[10px] text-white/50">{tech}</span>)}</div></div>
        </motion.article> })}</div>
    </div>
    <AnimatePresence>{preview && previewProject && previewSrc && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setPreview(null)} className="fixed inset-0 z-[60] grid place-items-center bg-black/85 p-5 backdrop-blur-xl"><button aria-label="Close preview" onClick={() => setPreview(null)} className="absolute right-5 top-5 rounded-full bg-white/10 p-3 text-white transition hover:bg-lime hover:text-ink"><X size={20} /></button><motion.div initial={{ scale: .94 }} animate={{ scale: 1 }} onClick={(e) => e.stopPropagation()} className="relative flex w-full max-w-5xl items-center justify-center"><img src={previewSrc} alt={previewProject.title} className="max-h-[78vh] w-auto rounded-2xl object-contain" />{previewImages.length > 1 && <><button aria-label="Previous image" onClick={() => movePreview(-1)} className="absolute left-1 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/60 p-3 text-white transition hover:border-lime hover:bg-lime hover:text-ink md:left-4"><ChevronLeft size={22} /></button><button aria-label="Next image" onClick={() => movePreview(1)} className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/60 p-3 text-white transition hover:border-lime hover:bg-lime hover:text-ink md:right-4"><ChevronRight size={22} /></button></>}</motion.div><div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"><p className="font-bold text-white">{previewProject.title}</p>{previewImages.length > 1 && <p className="mt-1 font-mono text-[10px] uppercase tracking-[.18em] text-white/45">Image {(preview.imageIndex % previewImages.length) + 1} / {previewImages.length}</p>}</div></motion.div>}</AnimatePresence>
  </section>;
}
