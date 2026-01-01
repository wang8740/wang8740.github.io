import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection({ bio, education, researchInterests, imageUrl }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-32 bg-white" ref={ref}>
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="grid lg:grid-cols-5 gap-16 items-start"
                >
                    {/* Image Column */}
                    <div className="lg:col-span-2">
                        <div className="relative">
                            <div className="aspect-[4/5] bg-slate-100 rounded-sm overflow-hidden">
                                <img
                                    src={imageUrl || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&crop=face"}
                                    alt="Profile"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-full h-full border border-amber-400/30 rounded-sm -z-10" />
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="lg:col-span-3 space-y-10">
                        <div>
                            <p className="text-amber-600 text-sm font-medium tracking-[0.2em] uppercase mb-4">
                                About
                            </p>
                            <h2 className="font-serif text-4xl md:text-5xl text-slate-800 font-light mb-8">
                                Background & Vision
                            </h2>
                            <div className="prose prose-lg prose-slate max-w-none">
                                <p className="text-slate-600 leading-relaxed font-light">
                                    {bio}
                                </p>
                            </div>
                        </div>

                        {/* Education */}
                        <div>
                            <h3 className="text-sm font-medium tracking-[0.15em] uppercase text-slate-400 mb-4">
                                Education
                            </h3>
                            <div className="space-y-4">
                                {education.map((edu, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                        className="border-l-2 border-slate-200 pl-4 hover:border-amber-400 transition-colors duration-300"
                                    >
                                        <p className="font-medium text-slate-800">{edu.degree}</p>
                                        <p className="text-slate-500 text-sm">{edu.institution}, {edu.year}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Research Interests */}
                        <div>
                            <h3 className="text-sm font-medium tracking-[0.15em] uppercase text-slate-400 mb-4">
                                Research Interests
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {researchInterests.map((interest, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                                        className="px-4 py-2 bg-slate-50 text-slate-600 text-sm rounded-full border border-slate-100 hover:border-amber-400/50 hover:bg-amber-50 transition-all duration-300"
                                    >
                                        {interest}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}