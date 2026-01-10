import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cvData } from '../data/cv';

export default function Hero() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } as const },
    };

    return (
        <section id="about" className="min-h-screen flex items-center justify-center pt-32 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50/30">
            {/* Animated Background Elements */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-accent/10 to-accent-light/5 rounded-full blur-[120px] -z-10 animate-float"
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
                className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-blue-500/5 to-purple-500/5 rounded-full blur-[100px] -z-10 animate-float"
                style={{ animationDelay: '1s' }}
            />

            <div className="container mx-auto px-6 text-center relative z-10">
                <div className="max-w-4xl mx-auto flex flex-col items-center">

                    {/* Enhanced Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mb-8 px-5 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-accent/20 shadow-glow flex items-center gap-2.5 hover:shadow-glow-lg transition-shadow duration-300"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-sm"></span>
                        </span>
                        <span className="text-sm font-semibold text-slate-700">Open to exciting collaborations</span>
                    </motion.div>

                    {/* Main Typography */}
                    <motion.h1
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="text-6xl md:text-8xl font-bold mb-8 leading-[1.1] tracking-tighter text-slate-900"
                    >
                        <div className="block">
                            <motion.span className="inline-block mr-3" variants={item}>Building</motion.span>
                            <motion.span className="inline-block mr-3" variants={item}>digital</motion.span>
                        </div>

                        <div className="block">
                            <span className="gradient-text">
                                <motion.span className="inline-block mr-3" variants={item}>products</motion.span>
                                <motion.span className="inline-block mr-3" variants={item}>&</motion.span>
                                <motion.span className="inline-block" variants={item}>experiences.</motion.span>
                            </span>
                        </div>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="text-xl text-slate-600 mb-12 max-w-2xl leading-relaxed"
                    >
                        Hi, I'm <span className="font-bold text-slate-900">{cvData.personalInfo.name}</span>, a software developer with <span className="font-bold text-accent">4+ years of experience</span>. {cvData.personalInfo.summary}
                    </motion.p>

                    {/* Enhanced CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                        className="mb-20 flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <a
                            href="#projects"
                            className="btn-secondary flex items-center justify-center gap-2 group"
                        >
                            View My Work
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#contact"
                            className="btn-primary flex items-center justify-center gap-2 group"
                        >
                            Get In Touch
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>

                    {/* Scroll Indicator */}
                    {/* <motion.a
                        href="#experience"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="flex flex-col items-center gap-2 text-slate-400 hover:text-accent transition-colors cursor-pointer group"
                    >
                        <span className="text-sm font-medium">Scroll to explore</span>
                        <ChevronDown size={24} className="animate-bounce group-hover:text-accent" />
                    </motion.a> */}
                </div>
            </div>
        </section>
    );
}
