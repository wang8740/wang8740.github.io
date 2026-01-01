import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText, ExternalLink, ChevronDown, FileDown } from 'lucide-react';

export default function PublicationsSection({ publications }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [showAll, setShowAll] = useState(false);

    const displayedPubs = showAll ? publications : publications.slice(0, 5);

    return (
        <section id="publications" className="py-32 bg-white" ref={ref}>
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <p className="text-amber-600 text-sm font-medium tracking-[0.2em] uppercase mb-4">
                        Publications
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl text-slate-800 font-light">
                        Selected Works
                    </h2>
                </motion.div>

                <div className="space-y-6">
                    {displayedPubs.map((pub, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-6 border-b border-slate-100 hover:bg-slate-50/50 transition-all duration-300"
                        >
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-amber-100 transition-colors duration-300">
                                        <FileText size={18} className="text-slate-400 group-hover:text-amber-600 transition-colors duration-300" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-medium text-slate-800 mb-2 group-hover:text-amber-700 transition-colors duration-300">
                                        {pub.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm mb-2">
                                        {pub.authors}
                                    </p>
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                                        <span className="text-slate-400 italic">
                                            {pub.venue}
                                        </span>
                                        <span className="text-amber-600 font-medium">
                                            {pub.year}
                                        </span>
                                        {pub.note && (
                                            <span className="text-green-600 text-xs font-medium bg-green-50 px-2 py-1 rounded">
                                                {pub.note}
                                            </span>
                                        )}
                                        {pub.link && (
                                            <a 
                                                href={pub.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-amber-600 hover:text-amber-700 transition-colors duration-300 font-medium"
                                            >
                                                <FileDown size={16} />
                                                <span>PDF</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {publications.length > 5 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mt-12 text-center"
                    >
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="inline-flex items-center gap-2 text-slate-500 hover:text-amber-600 transition-colors duration-300 text-sm font-medium tracking-wide"
                        >
                            {showAll ? 'Show Less' : `View All ${publications.length} Publications`}
                            <ChevronDown 
                                size={16} 
                                className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                            />
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}