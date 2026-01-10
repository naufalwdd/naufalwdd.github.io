import { motion } from 'framer-motion';
import { ExternalLink, Code2, X } from 'lucide-react';
import { useState, useEffect } from 'react';

// Import images
import PWAImage from '../assets/PWA.png';
import POSImage from '../assets/POS.jpg';
import POS2Image from '../assets/POS2.jpg';
import PLIImage from '../assets/PLI.png';
import IACImage from '../assets/IAC.png';
import IAC2Image from '../assets/IAC2.png';

const projects = [
    {
        title: "PWA POS System",
        description: "A Progressive Web App-based Point of Sale system designed for UMKM (Micro, Small, and Medium Enterprises) with offline support, real-time transactions, and responsive UI. Features fast performance and seamless synchronization for reliable business operations.",
        tech: ["Next.js", "Django", "PostgreSQL", "Tailwind CSS"],
        gradient: "from-blue-500/10 via-cyan-500/10 to-teal-500/10",
        span: "md:col-span-2",
        link: "https://www.linkedin.com/posts/naufalwdd_i-am-excited-to-share-my-latest-achievement-activity-7220758151925571595-55O8?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAB5RRi4B4l9Qfc26lk9tHE3GiEZeK0O5T-0",
        image: PWAImage
    },
    {
        title: "Mobile POS System",
        description: "A mobile Point of Sale application for Android, specifically built for retail businesses. Features inventory management, transaction history, and local-first storage with server synchronization for reliable usage in low-connectivity environments.",
        tech: ["React Native", "Flask", "PostgreSQL", "SQLite", "Tailwind CSS"],
        gradient: "from-emerald-500/10 via-teal-500/10 to-green-500/10",
        span: "md:col-span-1",
        images: [POSImage, POS2Image]
    },
    {
        title: "Cognex Hardware Integration System",
        description: "A desktop-based QR code scanning application developed for PT. Pacific Lubritama Indonesia as a freelance project. Integrated with Cognex DM260, enabling fast data capture, validation, and automatic upload to a production database for manufacturing workflows.",
        tech: ["Flask", "flaskwebgui", "SQLite", "Tailwind CSS"],
        gradient: "from-violet-500/10 via-purple-500/10 to-fuchsia-500/10",
        span: "md:col-span-1",
        image: PLIImage
    },
    {
        title: "Indonesian Al Quran Center Website",
        description: "A full-stack website developed for Indonesian Al Quran Center. Features dynamic content management, event registration system with integrated payment gateway, online ticketing platform, and comprehensive admin functionality for managing community information and educational resources.",
        tech: ["Alpine.js", "Flask", "PostgreSQL", "Tailwind CSS"],
        gradient: "from-orange-500/10 via-amber-500/10 to-yellow-500/10",
        span: "md:col-span-2",
        link: "https://indonesianalqurancenter.or.id",
        images: [IAC2Image, IACImage]
    }
];

export default function Projects() {
    const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);
    const [carouselIndices, setCarouselIndices] = useState<Record<number, number>>({});

    // Auto-rotate carousel images
    useEffect(() => {
        const interval = setInterval(() => {
            setCarouselIndices(prev => {
                const newIndices = { ...prev };
                projects.forEach((project, index) => {
                    if ((project as any).images) {
                        const currentIndex = prev[index] || 0;
                        const imagesLength = (project as any).images.length;
                        newIndices[index] = (currentIndex + 1) % imagesLength;
                    }
                });
                return newIndices;
            });
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } as const }
    };

    return (
        <section id="projects" className="section bg-gradient-to-b from-white to-slate-50/50">
            <div className="container max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">Selected Works</h2>
                    <p className="text-center text-slate-600 text-lg mb-12 max-w-2xl mx-auto">
                        A showcase of projects I've built, from web applications to mobile solutions
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ y: -8 }}
                            className={`group relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-soft hover:shadow-large transition-all duration-500 ${project.span}`}
                        >
                            {/* Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            {/* Project Image or Carousel */}
                            {((project as any).images || (project as any).image) && (
                                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center rounded-t-2xl">
                                    {(project as any).images ? (
                                        // Carousel for multiple images
                                        <>
                                            <div
                                                onClick={() => {
                                                    const currentIndex = carouselIndices[index] || 0;
                                                    setSelectedImage({
                                                        src: (project as any).images[currentIndex],
                                                        title: project.title
                                                    });
                                                }}
                                                className="w-full h-full cursor-pointer group/image"
                                            >
                                                <img
                                                    src={(project as any).images[carouselIndices[index] || 0]}
                                                    alt={`${project.title} - Image ${(carouselIndices[index] || 0) + 1}`}
                                                    className="w-full h-full object-contain p-4 group-hover/image:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/5 transition-colors duration-300 flex items-center justify-center">
                                                    <span className="text-white bg-accent/90 px-4 py-2 rounded-full text-sm font-semibold opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                                                        Click to preview
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Carousel Navigation */}
                                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                                {(project as any).images.map((_: any, imgIndex: number) => (
                                                    <button
                                                        key={imgIndex}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setCarouselIndices(prev => ({ ...prev, [index]: imgIndex }));
                                                        }}
                                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${(carouselIndices[index] || 0) === imgIndex
                                                            ? 'bg-accent w-8'
                                                            : 'bg-slate-300 hover:bg-slate-400'
                                                            }`}
                                                        aria-label={`View image ${imgIndex + 1}`}
                                                    />
                                                ))}
                                            </div>

                                            {/* Previous/Next Buttons */}
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    const currentIndex = carouselIndices[index] || 0;
                                                    const newIndex = currentIndex === 0
                                                        ? (project as any).images.length - 1
                                                        : currentIndex - 1;
                                                    setCarouselIndices(prev => ({ ...prev, [index]: newIndex }));
                                                }}
                                                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                                                aria-label="Previous image"
                                            >
                                                <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    const currentIndex = carouselIndices[index] || 0;
                                                    const newIndex = (currentIndex + 1) % (project as any).images.length;
                                                    setCarouselIndices(prev => ({ ...prev, [index]: newIndex }));
                                                }}
                                                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                                                aria-label="Next image"
                                            >
                                                <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </>
                                    ) : (
                                        // Single image (existing behavior)
                                        <div
                                            onClick={() => setSelectedImage({ src: (project as any).image!, title: project.title })}
                                            className="w-full h-full cursor-pointer group/image"
                                        >
                                            <img
                                                src={(project as any).image}
                                                alt={project.title}
                                                className="w-full h-full object-contain p-4 group-hover/image:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/5 transition-colors duration-300 flex items-center justify-center">
                                                <span className="text-white bg-accent/90 px-4 py-2 rounded-full text-sm font-semibold opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                                                    Click to preview
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Content */}
                            <div className="relative z-10 p-8 flex flex-col">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-6">
                                    <div className="p-3 bg-gradient-to-br from-accent/10 to-accent-light/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                        <Code2 className="w-6 h-6 text-accent" />
                                    </div>
                                    {project.link ? (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-lg bg-slate-50 text-slate-400 hover:text-accent hover:bg-accent/10 transition-all opacity-0 group-hover:opacity-100"
                                        >
                                            <ExternalLink size={20} strokeWidth={2} />
                                        </a>
                                    ) : (
                                        <div className="p-2 rounded-lg bg-slate-50 text-slate-400 transition-all opacity-0 group-hover:opacity-100">
                                            <ExternalLink size={20} strokeWidth={2} />
                                        </div>
                                    )}
                                </div>

                                {/* Title & Description */}
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 mt-auto">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 hover:border-accent hover:text-accent transition-colors"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Image Preview Modal */}
            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedImage(null)}
                    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
                    >
                        <X size={24} />
                    </button>
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 100 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative max-w-6xl max-h-[90vh] w-full cursor-default"
                    >
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            className="w-full h-full object-contain rounded-lg"
                        />
                        <p className="text-white text-center mt-4 text-lg font-semibold">
                            {selectedImage.title}
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
}
