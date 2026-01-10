import { cvData } from '../data/cv';
import { Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-12 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200">
            <div className="container max-w-4xl mx-auto px-6">
                <div className="flex flex-col items-center gap-6">
                    {/* Logo */}
                    <div className="text-2xl font-bold font-mono text-slate-900">
                        Naufal<span className="gradient-text">.dev</span>
                    </div>

                    {/* Copyright */}
                    <p className="text-slate-600 text-sm text-center flex items-center gap-2">
                        © {new Date().getFullYear()} {cvData.personalInfo.name}.
                        <span className="flex items-center gap-1">
                            Built with <Heart size={14} className="text-red-500 fill-red-500" /> using React & Tailwind CSS
                        </span>
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap justify-center gap-2 text-xs text-slate-400">
                        <span className="px-3 py-1 bg-slate-100 rounded-full">React</span>
                        <span className="px-3 py-1 bg-slate-100 rounded-full">TypeScript</span>
                        <span className="px-3 py-1 bg-slate-100 rounded-full">Tailwind CSS</span>
                        <span className="px-3 py-1 bg-slate-100 rounded-full">Framer Motion</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
