import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download, Award, Briefcase, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CVSection({ cvUrl, awards, experience, service }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="cv" className="py-32 bg-slate-50" ref={ref}>
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <p className="text-amber-600 text-sm font-medium tracking-[0.2em] uppercase mb-4">
                        Curriculum Vitae
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl text-slate-800 font-light mb-8">
                        Academic Profile
                    </h2>
                    
                    <Button
                        variant="outline"
                        className="group border-slate-300 hover:border-amber-500 hover:bg-amber-50 transition-all duration-300"
                        onClick={() => window.open(cvUrl || '#', '_blank')}
                    >
                        <Download size={18} className="mr-2 group-hover:text-amber-600" />
                        <span className="group-hover:text-amber-600">Download Full CV</span>
                    </Button>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-12">
                    {/* Awards */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Award size={20} className="text-amber-600" />
                            <h3 className="text-lg font-medium text-slate-800 tracking-wide">
                                Awards & Honors
                            </h3>
                        </div>
                        <div className="space-y-4">
                            {awards.map((award, index) => (
                                <div 
                                    key={index}
                                    className="border-l-2 border-slate-200 pl-4 hover:border-amber-400 transition-colors duration-300"
                                >
                                    <p className="font-medium text-slate-700">{award.name}</p>
                                    <p className="text-slate-400 text-sm">{award.org}, {award.year}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Experience */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Briefcase size={20} className="text-amber-600" />
                            <h3 className="text-lg font-medium text-slate-800 tracking-wide">
                                Experience
                            </h3>
                        </div>
                        <div className="space-y-4">
                            {experience.map((exp, index) => (
                                <div 
                                    key={index}
                                    className="border-l-2 border-slate-200 pl-4 hover:border-amber-400 transition-colors duration-300"
                                >
                                    <p className="font-medium text-slate-700">{exp.role}</p>
                                    <p className="text-slate-500 text-sm">{exp.org}</p>
                                    <p className="text-slate-400 text-sm">{exp.period}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Service */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Globe size={20} className="text-amber-600" />
                            <h3 className="text-lg font-medium text-slate-800 tracking-wide">
                                Professional Service
                            </h3>
                        </div>
                        <div className="space-y-4">
                            {service.map((item, index) => (
                                <div 
                                    key={index}
                                    className="border-l-2 border-slate-200 pl-4 hover:border-amber-400 transition-colors duration-300"
                                >
                                    <p className="font-medium text-slate-700">{item.role}</p>
                                    <p className="text-slate-400 text-sm">{item.venue}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}