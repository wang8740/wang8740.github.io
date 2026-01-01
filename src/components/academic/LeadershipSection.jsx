import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Heart, Award } from 'lucide-react';

export default function LeadershipSection({ leadership, service }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="leadership" className="py-32 bg-white" ref={ref}>
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <p className="text-amber-600 text-sm font-medium tracking-[0.2em] uppercase mb-4">
                        Community
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl text-slate-800 font-light mb-8">
                        Leadership & Service
                    </h2>
                </motion.div>

                {/* Professional Service */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-12 bg-slate-50 p-8 rounded-sm border border-slate-200"
                >
                    <h3 className="text-xl font-medium text-slate-800 mb-6">Professional Service</h3>
                    <div className="space-y-4">
                        {service.map((item, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-amber-600 mt-2 flex-shrink-0" />
                                <div>
                                    <p className="font-medium text-slate-700">{item.role}</p>
                                    <p className="text-slate-600 text-sm">{item.venue}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Community Leadership */}
                <div>
                    <h3 className="text-xl font-medium text-slate-800 mb-6">Community Leadership</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {leadership.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                className="bg-slate-50 p-6 rounded-sm border border-slate-200 hover:border-amber-400/50 hover:shadow-md transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
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
            </div>
        </section>
    );
}