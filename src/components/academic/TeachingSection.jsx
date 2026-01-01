import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Users, BookOpen } from 'lucide-react';

export default function TeachingSection({ philosophy, courses, mentoring }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="teaching" className="py-32 bg-slate-900 text-white" ref={ref}>
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <p className="text-amber-400 text-sm font-medium tracking-[0.2em] uppercase mb-4">
                        Teaching
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl text-white font-light mb-8">
                        Philosophy & Experience
                    </h2>
                    <p className="text-slate-400 text-lg font-light leading-relaxed max-w-3xl">
                        {philosophy}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Courses */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/5 backdrop-blur-sm rounded-sm p-8 border border-white/10"
                    >
                        <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-6">
                            <BookOpen size={24} className="text-amber-400" />
                        </div>
                        <h3 className="text-xl font-medium text-white mb-4">Courses Taught</h3>
                        <ul className="space-y-3">
                            {courses.map((course, index) => (
                                <li key={index} className="text-slate-400 font-light">
                                    <span className="text-white">{course.code}</span>
                                    <span className="mx-2">—</span>
                                    {course.name}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Teaching Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-white/5 backdrop-blur-sm rounded-sm p-8 border border-white/10"
                    >
                        <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-6">
                            <GraduationCap size={24} className="text-amber-400" />
                        </div>
                        <h3 className="text-xl font-medium text-white mb-4">Experience</h3>
                        <div className="space-y-6">
                            <div>
                                <p className="text-4xl font-serif text-amber-400 mb-1">4+</p>
                                <p className="text-slate-400 text-sm">Years Teaching Experience</p>
                            </div>
                            <div>
                                <p className="text-4xl font-serif text-amber-400 mb-1">500+</p>
                                <p className="text-slate-400 text-sm">Students Taught</p>
                            </div>
                            <div>
                                <p className="text-4xl font-serif text-amber-400 mb-1">4.8/5</p>
                                <p className="text-slate-400 text-sm">Average Evaluation Score</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Mentoring */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-white/5 backdrop-blur-sm rounded-sm p-8 border border-white/10"
                    >
                        <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-6">
                            <Users size={24} className="text-amber-400" />
                        </div>
                        <h3 className="text-xl font-medium text-white mb-4">Mentoring</h3>
                        <p className="text-slate-400 font-light leading-relaxed">
                            {mentoring}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}