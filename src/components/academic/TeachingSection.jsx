import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Users, BookOpen, ChevronDown, ExternalLink } from 'lucide-react';

export default function TeachingSection({ philosophy, courses, mentoring }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [expandedCourse, setExpandedCourse] = useState(null);

    const toggleCourse = (index) => {
        setExpandedCourse(expandedCourse === index ? null : index);
    };

    return (
        <section id="teaching" className="py-32 bg-slate-50" ref={ref}>
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <p className="text-amber-600 text-sm font-medium tracking-[0.2em] uppercase mb-4">
                        Teaching
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl text-slate-800 font-light mb-8">
                        Philosophy & Experience
                    </h2>
                    <p className="text-slate-600 text-lg font-light leading-relaxed max-w-3xl">
                        {philosophy}
                    </p>
                </motion.div>

                {/* Courses with Expandable Details */}
                <div className="mb-16">
                    <h3 className="text-2xl font-serif text-slate-800 mb-8">Courses Taught</h3>
                    <div className="space-y-4">
                        {courses.map((course, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-sm border border-slate-200 overflow-hidden hover:border-amber-400/50 transition-all duration-300"
                            >
                                <button
                                    onClick={() => toggleCourse(index)}
                                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors duration-300"
                                >
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-1">
                                            <span className="font-mono text-amber-600 font-medium">{course.code}</span>
                                            <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600">
                                                {course.level}
                                            </span>
                                        </div>
                                        <h4 className="font-medium text-slate-800">{course.name}</h4>
                                        <p className="text-sm text-slate-500 mt-1">{course.semester}</p>
                                    </div>
                                    <ChevronDown 
                                        className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                                            expandedCourse === index ? 'rotate-180' : ''
                                        }`}
                                    />
                                </button>
                                
                                {expandedCourse === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-6 pb-4 border-t border-slate-100"
                                    >
                                        <p className="text-slate-600 leading-relaxed mt-4 mb-4">
                                            {course.description}
                                        </p>
                                        <a 
                                            href={course.catalogLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 text-sm font-medium transition-colors duration-300"
                                        >
                                            <ExternalLink size={14} />
                                            Course Catalog
                                        </a>
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Teaching Stats and Mentoring */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Teaching Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-white rounded-sm p-8 border border-slate-200"
                    >
                        <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                            <GraduationCap size={24} className="text-amber-600" />
                        </div>
                        <h3 className="text-xl font-medium text-slate-800 mb-4">Experience</h3>
                        <div className="space-y-6">
                            <div>
                                <p className="text-4xl font-serif text-amber-600 mb-1">2.5+</p>
                                <p className="text-slate-600 text-sm">Years Teaching Experience</p>
                            </div>
                            <div>
                                <p className="text-4xl font-serif text-amber-600 mb-1">5</p>
                                <p className="text-slate-600 text-sm">Courses as Teaching Assistant</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Mentoring */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-white rounded-sm p-8 border border-slate-200"
                    >
                        <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                            <Users size={24} className="text-amber-600" />
                        </div>
                        <h3 className="text-xl font-medium text-slate-800 mb-4">Community Engagement</h3>
                        <p className="text-slate-600 font-light leading-relaxed">
                            {mentoring}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}