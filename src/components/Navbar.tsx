import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Work', href: '#projects' },
  { name: 'Skills', href: '#skills' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState('about');

    useEffect(() => {
        const onScroll = () => {
            const current = navLinks.find(({ href }) => { const el = document.querySelector(href) as HTMLElement | null; return el && window.scrollY + 180 >= el.offsetTop && window.scrollY + 180 < el.offsetTop + el.offsetHeight; });
            if (current) setActive(current.href.slice(1));
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8"
        >
            <div className="glass mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl px-4 md:px-6">
                <a href="#about" className="flex items-center gap-3 text-sm font-extrabold tracking-tight"><span className="grid h-8 w-8 place-items-center rounded-lg bg-lime font-mono text-sm text-ink">NW</span><span className="hidden sm:inline">Muhammad Naufal Widad</span></a>
                <div className="hidden items-center gap-1 md:flex">
                    {navLinks.map((link) => <a key={link.name} href={link.href} className={`relative rounded-xl px-4 py-2 text-xs font-bold transition ${active === link.href.slice(1) ? 'text-lime' : 'text-white/55 hover:text-white'}`}>{active === link.href.slice(1) && <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-xl bg-lime/10" />}{link.name}</a>)}
                    <a href="#contact" className="ml-3 inline-flex items-center gap-1 rounded-xl border border-lime/40 px-4 py-2 text-xs font-bold text-lime transition hover:bg-lime hover:text-ink">Let's talk <ArrowUpRight size={14} /></a>
                </div>
                <button aria-label="Toggle menu" className="rounded-lg p-2 text-white/70 md:hidden" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={21} /> : <Menu size={21} />}</button>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-3 md:hidden">
                        {navLinks.map((link) => <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-bold text-white/70 hover:bg-white/5 hover:text-lime">{link.name}</a>)}
                        <a href="#contact" onClick={() => setIsOpen(false)} className="mt-1 block rounded-xl bg-lime px-4 py-3 text-sm font-extrabold text-ink">Let's talk →</a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
