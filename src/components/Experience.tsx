import { motion } from 'framer-motion';
import { cvData } from '../data/cv';

export default function Experience() {
    return (
        <section id="experience" className="section bg-white">
            <div className="container max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">Professional Experience</h2>
                    <p className="text-center text-slate-600 text-lg mb-12 max-w-2xl mx-auto">
                        My professional journey building impactful software solutions
                    </p>
                </motion.div>

                {/* Timeline Layout */}
                <div className="relative">
                    {/* Animated gradient line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/20 via-accent/40 to-accent/20" />

                    <div className="space-y-12">
                        {cvData.experience.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.2, type: "spring", stiffness: 50 }}
                                className="relative pl-20 group"
                            >
                                {/* Enhanced timeline dot */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: (index * 0.2) + 0.2, type: "spring" }}
                                    className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-accent to-accent-light shadow-glow flex items-center justify-center group-hover:scale-125 transition-transform duration-300"
                                >
                                    <div className="w-2 h-2 bg-white rounded-full" />
                                </motion.div>

                                {/* Card */}
                                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                                    <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-3 gap-2">
                                        <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                                        <span className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                                            {job.period}
                                        </span>
                                    </div>

                                    <p className="text-lg font-semibold text-accent mb-4">{job.company}</p>

                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        {job.summary}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
