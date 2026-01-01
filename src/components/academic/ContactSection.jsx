import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

export default function ContactSection({ email, location, office, twitter, linkedin, github, googleScholar }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="contact" className="py-32 bg-white" ref={ref}>
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <p className="text-amber-600 text-sm font-medium tracking-[0.2em] uppercase mb-4">
                        Contact
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl text-slate-800 font-light mb-6">
                        Let's Connect
                    </h2>
                    <p className="text-slate-500 font-light mb-12 max-w-xl mx-auto">
                        I'm actively seeking tenure-track faculty positions. I'd love to discuss potential opportunities and collaborations.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-slate-50 rounded-sm p-10 md:p-16"
                >
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <a 
                                href={`mailto:${email}`}
                                className="flex items-start gap-4 group"
                            >
                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:bg-amber-50 transition-all duration-300">
                                    <Mail size={20} className="text-slate-400 group-hover:text-amber-600 transition-colors duration-300" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Email</p>
                                    <p className="text-slate-700 group-hover:text-amber-700 transition-colors duration-300">
                                        {email}
                                    </p>
                                </div>
                            </a>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                                    <MapPin size={20} className="text-slate-400" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Location</p>
                                    <p className="text-slate-700">{location}</p>
                                    {office && <p className="text-slate-500 text-sm">{office}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <p className="text-xs text-slate-400 uppercase tracking-wide mb-4">Connect</p>
                            <div className="flex flex-wrap gap-3">
                                {twitter && (
                                    <a 
                                        href={twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md hover:bg-amber-50 transition-all duration-300 group"
                                    >
                                        <Twitter size={20} className="text-slate-400 group-hover:text-amber-600 transition-colors duration-300" />
                                    </a>
                                )}
                                {linkedin && (
                                    <a 
                                        href={linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md hover:bg-amber-50 transition-all duration-300 group"
                                    >
                                        <Linkedin size={20} className="text-slate-400 group-hover:text-amber-600 transition-colors duration-300" />
                                    </a>
                                )}
                                {github && (
                                    <a 
                                        href={github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md hover:bg-amber-50 transition-all duration-300 group"
                                    >
                                        <Github size={20} className="text-slate-400 group-hover:text-amber-600 transition-colors duration-300" />
                                    </a>
                                )}
                                {googleScholar && (
                                    <a 
                                        href={googleScholar}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h-12 px-4 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md hover:bg-amber-50 transition-all duration-300 group text-slate-400 group-hover:text-amber-600 text-sm font-medium"
                                    >
                                        Google Scholar
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}