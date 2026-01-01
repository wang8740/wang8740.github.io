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
                    {/* Content Column - Full Width */}
                    <div className="lg:col-span-5 space-y-10">
                        <div>
                            <p className="text-amber-600 text-sm font-medium tracking-[0.2em] uppercase mb-4">
                                About Me
                            </p>
                            <div className="prose prose-lg prose-slate max-w-none">
                                <div className="text-slate-600 leading-relaxed font-light space-y-4">
                                    {bio.split('\n\n').map((paragraph, idx) => (
                                        <p key={idx}>{paragraph}</p>
                                    ))}
                                </div>
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