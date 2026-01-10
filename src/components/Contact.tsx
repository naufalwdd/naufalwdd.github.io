import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { cvData } from '../data/cv';

export default function Contact() {
    const socialLinks = [
        {
            icon: <Mail size={24} />,
            href: `mailto:${cvData.personalInfo.email}`,
            label: "Email",
            color: "from-red-500 to-orange-500"
        },
        {
            icon: <Linkedin size={24} />,
            href: `https://${cvData.personalInfo.linkedin}`,
            label: "LinkedIn",
            color: "from-blue-600 to-blue-500"
        },
        {
            icon: <Github size={24} />,
            href: "https://github.com/naufalwdd",
            label: "GitHub",
            color: "from-gray-700 to-gray-600"
        }
    ];

    return (
        <section id="contact" className="section bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgb(13, 148, 136) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="container max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Get in Touch</h2>
                    <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                        I'm currently open to exciting collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center gap-4 mb-12">
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target={link.label !== "Email" ? "_blank" : undefined}
                                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -4, scale: 1.05 }}
                                className="group relative p-4 bg-white rounded-2xl border border-slate-200 shadow-soft hover:shadow-large transition-all duration-300"
                                title={link.label}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                                <div className="relative text-slate-600 group-hover:text-slate-900 transition-colors">
                                    {link.icon}
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <motion.a
                        href={`mailto:${cvData.personalInfo.email}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-accent-dark to-accent text-white font-bold text-lg rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105 group"
                    >
                        Say Hello
                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
