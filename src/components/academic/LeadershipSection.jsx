import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Heart, Award } from 'lucide-react';

export default function LeadershipSection({ leadership }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="leadership" className="py-32 bg-slate-50" ref={ref}>
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <p className="text-amber-600 text-sm font-medium tracking-[0.2em] uppercase mb-4">
                        Community
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl text-slate-800 font-light">
                        Leadership & Service
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {leadership.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white p-6 rounded-sm border border-slate-200 hover:border-amber-400/50 hover:shadow-md transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center mb-4">
                                {index % 3 === 0 ? (
                                    <Users size={20} className="text-amber-600" />
                                ) : index % 3 === 1 ? (
                                    <Heart size={20} className="text-amber-600" />
                                ) : (
                                    <Award size={20} className="text-amber-600" />
                                )}
                            </div>
                            <h3 className="font-medium text-slate-800 mb-2">
                                {item.role}
                            </h3>
                            <p className="text-slate-600 text-sm mb-2">
                                {item.org}
                            </p>
                            <p className="text-slate-400 text-xs">
                                {item.period}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}