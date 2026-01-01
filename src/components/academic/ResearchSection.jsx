import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ResearchSection({ projects }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="research" className="py-32 bg-slate-50" ref={ref}>
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <p className="text-amber-600 text-sm font-medium tracking-[0.2em] uppercase mb-4">
                        Research
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl text-slate-800 font-light">
                        Current Projects
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="group bg-white p-8 rounded-sm border border-slate-100 hover:border-amber-400/30 hover:shadow-xl transition-all duration-500"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-amber-600/70 text-xs font-medium tracking-[0.15em] uppercase">
                                    {project.status}
                                </span>
                                <ArrowUpRight 
                                    size={20} 
                                    className="text-slate-300 group-hover:text-amber-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" 
                                />
                            </div>
                            
                            <h3 className="font-serif text-2xl text-slate-800 mb-4 group-hover:text-amber-700 transition-colors duration-300">
                                {project.title}
                            </h3>
                            
                            <p className="text-slate-500 font-light leading-relaxed mb-6">
                                {project.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2">
                                {project.keywords.map((keyword, kidx) => (
                                    <span 
                                        key={kidx}
                                        className="text-xs text-slate-400 bg-slate-50 px-3 py-1 rounded-full"
                                    >
                                        {keyword}
                                    </span>
                                ))}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}