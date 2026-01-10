import { motion } from 'framer-motion';
import { Code, Layers, Wrench } from 'lucide-react';
import { cvData } from '../data/cv';

export default function Skills() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } as const }
    };

    const categories = [
        {
            title: "Languages",
            skills: cvData.skills.languages,
            icon: <Code className="w-5 h-5" />,
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            title: "Frameworks",
            skills: cvData.skills.frameworks,
            icon: <Layers className="w-5 h-5" />,
            gradient: "from-purple-500 to-pink-500"
        },
        {
            title: "Tools & Platforms",
            skills: [...cvData.skills.tools, ...cvData.skills.databases],
            icon: <Wrench className="w-5 h-5" />,
            gradient: "from-emerald-500 to-teal-500"
        },
    ];

    return (
        <section id="skills" className="section bg-gradient-to-b from-slate-50/50 to-white">
            <div className="container max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">Tech Stack</h2>
                    <p className="text-center text-slate-600 text-lg mb-12 max-w-2xl mx-auto">
                        Technologies and tools I use to bring ideas to life
                    </p>
                </motion.div>

                <div className="space-y-10">
                    {categories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-2xl p-8 border border-slate-200 shadow-soft hover:shadow-medium transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`p-2.5 rounded-lg bg-gradient-to-br ${category.gradient} text-white shadow-sm`}>
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
                            </div>

                            <motion.div
                                variants={container}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="flex flex-wrap gap-3"
                            >
                                {category.skills.map((skill) => (
                                    <motion.span
                                        key={skill}
                                        variants={item}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="px-4 py-2.5 bg-gradient-to-br from-slate-50 to-white rounded-xl text-sm font-semibold text-slate-700 border border-slate-200 shadow-sm hover:shadow-medium hover:border-accent/50 transition-all cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
