import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Presentation, MapPin, Calendar } from 'lucide-react';

export default function TalksSection({ talks }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="talks" className="py-32 bg-slate-900 text-white" ref={ref}>
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <p className="text-amber-400 text-sm font-medium tracking-[0.2em] uppercase mb-4">
                        Presentations
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl text-white font-light">
                        Talks & Conference Presentations
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {talks.map((talk, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="bg-white/5 backdrop-blur-sm rounded-sm p-6 border border-white/10 hover:border-amber-400/30 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                                        <Presentation size={18} className="text-amber-400" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-white font-medium mb-2 leading-tight">
                                        {talk.event}
                                    </h3>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                                            <MapPin size={14} className="flex-shrink-0" />
                                            <span>{talk.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-amber-400/80 text-sm">
                                            <Calendar size={14} className="flex-shrink-0" />
                                            <span>{talk.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}