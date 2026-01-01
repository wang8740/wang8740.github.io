import React from 'react';
import Navigation from '@/components/academic/Navigation';
import HeroSection from '@/components/academic/HeroSection';
import AboutSection from '@/components/academic/AboutSection';
import ResearchSection from '@/components/academic/ResearchSection';
import PublicationsSection from '@/components/academic/PublicationsSection';
import TeachingSection from '@/components/academic/TeachingSection';
import CVSection from '@/components/academic/CVSection';
import ContactSection from '@/components/academic/ContactSection';
import Footer from '@/components/academic/Footer';

// ============================================
// EDIT YOUR INFORMATION BELOW
// ============================================

const profileData = {
    // Hero Section
    name: "Dr. Alexandra Chen",
    title: "PhD Candidate in Computer Science",
    institution: "Stanford University",
    tagline: "Researching the intersection of machine learning and human-computer interaction to build more intuitive AI systems",

    // About Section
    bio: "I am a PhD candidate at Stanford University, advised by Professor Michael Chen. My research focuses on developing machine learning systems that can better understand and adapt to human behavior. Prior to Stanford, I earned my Master's degree from MIT and worked as a research scientist at Google AI. I am passionate about creating AI systems that are not only technically sophisticated but also accessible and beneficial to all users.",
    
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=750&fit=crop&crop=face",
    
    education: [
        { degree: "Ph.D. in Computer Science", institution: "Stanford University", year: "Expected 2025" },
        { degree: "M.S. in Computer Science", institution: "MIT", year: "2020" },
        { degree: "B.S. in Computer Science", institution: "UC Berkeley", year: "2018" }
    ],
    
    researchInterests: [
        "Machine Learning",
        "Human-Computer Interaction",
        "Natural Language Processing",
        "Explainable AI",
        "Computational Social Science",
        "Fairness in ML"
    ],

    // Research Section
    projects: [
        {
            title: "Adaptive User Interfaces Through Reinforcement Learning",
            description: "Developing RL-based systems that dynamically adapt interface layouts and interactions based on individual user behavior patterns and preferences.",
            status: "Ongoing",
            keywords: ["Reinforcement Learning", "HCI", "Personalization"]
        },
        {
            title: "Explainable AI for Healthcare Decision Support",
            description: "Creating interpretable machine learning models for clinical decision support systems that provide transparent reasoning to healthcare professionals.",
            status: "Ongoing",
            keywords: ["Explainable AI", "Healthcare", "Decision Support"]
        },
        {
            title: "Fairness-Aware Language Models",
            description: "Investigating methods to reduce bias in large language models while maintaining performance across diverse demographic groups.",
            status: "In Review",
            keywords: ["NLP", "Fairness", "Bias Mitigation"]
        },
        {
            title: "Multimodal Learning for Accessibility",
            description: "Building multimodal AI systems that improve technology accessibility for users with diverse abilities.",
            status: "Completed",
            keywords: ["Accessibility", "Multimodal", "Inclusive Design"]
        }
    ],

    // Publications Section
    publications: [
        {
            title: "Adaptive Interface Generation through Deep Reinforcement Learning",
            authors: "Chen, A., Smith, J., & Johnson, M.",
            venue: "CHI 2024 - ACM Conference on Human Factors in Computing Systems",
            year: "2024",
            link: "#"
        },
        {
            title: "Towards Explainable Clinical Decision Support: A Survey",
            authors: "Chen, A., & Williams, R.",
            venue: "Nature Machine Intelligence",
            year: "2024",
            link: "#"
        },
        {
            title: "Fairness Constraints in Large Language Models",
            authors: "Chen, A., Brown, T., & Davis, L.",
            venue: "NeurIPS 2023",
            year: "2023",
            link: "#"
        },
        {
            title: "Multimodal Approaches to Accessible Technology Design",
            authors: "Chen, A., & Lee, K.",
            venue: "ASSETS 2023 - ACM SIGACCESS Conference",
            year: "2023",
            link: "#"
        },
        {
            title: "User-Centered Machine Learning: A Framework",
            authors: "Chen, A., Martinez, S., & Chen, M.",
            venue: "UIST 2022",
            year: "2022",
            link: "#"
        },
        {
            title: "Understanding User Trust in AI Systems",
            authors: "Chen, A., & Johnson, M.",
            venue: "CSCW 2022",
            year: "2022",
            link: "#"
        },
        {
            title: "Personalized Interaction Patterns in Mobile Applications",
            authors: "Chen, A., Park, J., & Smith, J.",
            venue: "MobileHCI 2021",
            year: "2021",
            link: "#"
        }
    ],

    // Teaching Section
    teachingPhilosophy: "I believe in creating inclusive learning environments where students are encouraged to ask questions, make mistakes, and learn through hands-on experience. My teaching approach combines theoretical foundations with practical applications, ensuring students understand both the 'how' and the 'why' behind concepts.",
    
    courses: [
        { code: "CS 229", name: "Machine Learning (TA)" },
        { code: "CS 147", name: "Human-Computer Interaction (TA)" },
        { code: "CS 106A", name: "Programming Methodology (Lead TA)" },
        { code: "CS 224N", name: "Natural Language Processing (Guest Lecturer)" }
    ],
    
    mentoring: "I have mentored 8 undergraduate students through the Stanford CURIS program, with 3 students co-authoring publications. I am committed to supporting students from underrepresented backgrounds in computer science.",

    // CV Section
    cvUrl: "#",
    
    awards: [
        { name: "NSF Graduate Research Fellowship", org: "National Science Foundation", year: "2021" },
        { name: "Outstanding Graduate Student Award", org: "Stanford CS Department", year: "2023" },
        { name: "Best Paper Honorable Mention", org: "CHI 2024", year: "2024" },
        { name: "Google PhD Fellowship", org: "Google", year: "2022" }
    ],
    
    experience: [
        { role: "Research Intern", org: "Google AI", period: "Summer 2023" },
        { role: "Research Intern", org: "Microsoft Research", period: "Summer 2022" },
        { role: "Research Scientist", org: "Google AI", period: "2018-2020" }
    ],
    
    service: [
        { role: "Reviewer", venue: "CHI, NeurIPS, ICML, AAAI" },
        { role: "Program Committee", venue: "AAAI 2024" },
        { role: "Workshop Organizer", venue: "Human-Centered AI @ NeurIPS 2023" },
        { role: "Student Volunteer Coordinator", venue: "CHI 2022" }
    ],

    // Contact Section
    email: "achen@stanford.edu",
    location: "Stanford, California",
    office: "Gates Building, Room 392",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    googleScholar: "https://scholar.google.com"
};

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            
            <HeroSection
                name={profileData.name}
                title={profileData.title}
                institution={profileData.institution}
                tagline={profileData.tagline}
            />
            
            <AboutSection
                bio={profileData.bio}
                education={profileData.education}
                researchInterests={profileData.researchInterests}
                imageUrl={profileData.imageUrl}
            />
            
            <ResearchSection projects={profileData.projects} />
            
            <PublicationsSection publications={profileData.publications} />
            
            <TeachingSection
                philosophy={profileData.teachingPhilosophy}
                courses={profileData.courses}
                mentoring={profileData.mentoring}
            />
            
            <CVSection
                cvUrl={profileData.cvUrl}
                awards={profileData.awards}
                experience={profileData.experience}
                service={profileData.service}
            />
            
            <ContactSection
                email={profileData.email}
                location={profileData.location}
                office={profileData.office}
                twitter={profileData.twitter}
                linkedin={profileData.linkedin}
                github={profileData.github}
                googleScholar={profileData.googleScholar}
            />
            
            <Footer name={profileData.name} />
        </div>
    );
}