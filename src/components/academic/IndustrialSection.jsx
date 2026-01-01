import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

export default function IndustrialSection({ experiences }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="industry" className="py-32 bg-white" ref={ref}>
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <p className="text-amber-600 text-sm font-medium tracking-[0.2em] uppercase mb-4">
                        Industry
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl text-slate-800 font-light">
                        Professional Experience
                    </h2>
                </motion.div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="group bg-slate-50 p-8 rounded-sm border border-slate-100 hover:border-amber-400/30 hover:shadow-lg transition-all duration-500"
                        >
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:border-amber-400 group-hover:bg-amber-50 transition-all duration-300">
                                        <Briefcase size={24} className="text-slate-400 group-hover:text-amber-600 transition-colors duration-300" />
                                    </div>
                                </div>
                                
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                                        <div>
                                            <h3 className="font-serif text-2xl text-slate-800 group-hover:text-amber-700 transition-colors duration-300">
                                                {exp.role}
                                            </h3>
                                            <p className="text-lg text-slate-600 mt-1">{exp.org}</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="flex items-center gap-2 text-slate-500 text-sm mb-1">
                                                <Calendar size={14} />
                                                <span>{exp.period}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-slate-500 text-sm">
                                                <MapPin size={14} />
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <p className="text-slate-600 font-light leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}