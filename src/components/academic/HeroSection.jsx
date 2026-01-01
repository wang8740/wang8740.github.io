import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroSection({ name, title, institution, tagline, imageUrl }) {
    const scrollToAbout = () => {
        const element = document.getElementById('about');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
                    <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-slate-700/30 via-transparent to-transparent" />
                </div>
                {/* Subtle grid pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                     linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '100px 100px'
                }} />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-shrink-0"
                    >
                        <div className="relative">
                            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-amber-400/30 shadow-2xl">
                                <img
                                    src={imageUrl || "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face"}
                                    alt={name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <div className="flex-1 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <p className="text-amber-400/80 text-sm font-medium tracking-[0.3em] uppercase mb-4">
                                {title}
                            </p>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light tracking-tight mb-4"
                        >
                            {name}
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="space-y-3"
                        >
                            <p className="text-slate-400 text-lg md:text-xl font-light tracking-wide">
                                {institution}
                            </p>
                            <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed max-w-2xl md:max-w-none">
                                {tagline}
                            </p>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-12 text-center w-full"
                >
                    <button
                        onClick={scrollToAbout}
                        className="group inline-flex flex-col items-center text-slate-500 hover:text-amber-400 transition-colors duration-300"
                    >
                        <span className="text-xs tracking-[0.2em] uppercase mb-3">Explore</span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <ChevronDown size={20} />
                        </motion.div>
                    </button>
                </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </section>
    );
}