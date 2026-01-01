import React from 'react';
import Navigation from '@/components/academic/Navigation';
import HeroSection from '@/components/academic/HeroSection';
import AboutSection from '@/components/academic/AboutSection';
import ResearchSection from '@/components/academic/ResearchSection';
import PublicationsSection from '@/components/academic/PublicationsSection';
import IndustrialSection from '@/components/academic/IndustrialSection';
import TeachingSection from '@/components/academic/TeachingSection';
import TalksSection from '@/components/academic/TalksSection';
import LeadershipSection from '@/components/academic/LeadershipSection';
import CVSection from '@/components/academic/CVSection';
import ContactSection from '@/components/academic/ContactSection';
import Footer from '@/components/academic/Footer';

// ============================================
// EDIT YOUR INFORMATION BELOW
// ============================================

const profileData = {
    // Hero Section
    name: "Xinran Wang",
    title: "PhD Candidate in Computer Science",
    institution: "University of Minnesota",
    tagline: "Advancing AI alignment with human values, safety and incentive mechanisms, and the ethical deployment of large language models",

    // About Section
    bio: "I am a PhD candidate in Computer Science at the University of Minnesota, expected to graduate in May 2026. My research focuses on the alignment of AI with human values, safety and incentive mechanisms in AI systems, efficient and ethical deployment of AI, and the development and applications of large language models (LLM). Prior to my PhD, I earned a Master of Science in Statistics from the University of Minnesota, and hold degrees in Economics and Finance from Tsinghua University. I also served as a Visiting Research Fellow at Harvard Law School. My work has been recognized with spotlight and oral presentations at top-tier conferences including NeurIPS and ICLR.",
    
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=750&fit=crop&crop=face",
    
    education: [
        { degree: "Ph.D. in Computer Science", institution: "University of Minnesota", year: "Expected May 2026" },
        { degree: "M.S. in Statistics, minor in Computer Science", institution: "University of Minnesota", year: "Jan 2021" },
        { degree: "Visiting Research Fellow", institution: "Harvard Law School", year: "Jan - Nov 2015" },
        { degree: "M.S. in Economics", institution: "Tsinghua University", year: "Jul 2016" },
        { degree: "B.S. in Economics and Finance", institution: "Tsinghua University", year: "Jul 2012" }
    ],
    
    researchInterests: [
        "AI Alignment with Human Values",
        "Safety and Incentive Mechanisms in AI",
        "Ethical AI Deployment",
        "Large Language Models (LLM)",
        "Federated Learning",
        "Model Privacy and Security"
    ],

    // Research Section
    projects: [
        {
            title: "Quantile-Guided Alignment for Risk-Calibrated Language Models",
            description: "Developing risk-calibrated language models through quantile-guided alignment techniques to better align AI systems with human values and safety requirements.",
            status: "NeurIPS 2025 Spotlight",
            keywords: ["AI Alignment", "LLMs", "Risk Calibration"]
        },
        {
            title: "Multi-Human-Value Alignment Palette (MAP)",
            description: "Creating a comprehensive framework for aligning AI systems with multiple human values simultaneously, addressing the complexity of diverse ethical considerations.",
            status: "ICLR 2025 Oral",
            keywords: ["AI Safety", "Human Values", "Ethics"]
        },
        {
            title: "Adaptive Integration of Detectors for Safe AI",
            description: "Building adaptive systems that integrate multiple safety detectors for large language models to ensure responsible AI deployment.",
            status: "NAACL 2025",
            keywords: ["AI Safety", "LLMs", "Detection Systems"]
        },
        {
            title: "Incentivized Collaborative Learning Framework",
            description: "Designing incentive mechanisms for collaborative machine learning that encourage participation while maintaining privacy and fairness.",
            status: "IEEE BigData 2024",
            keywords: ["Federated Learning", "Incentives", "Privacy"]
        }
    ],

    // Publications Section
    publications: [
        {
            title: "Beyond Expectations: Quantile-Guided Alignment for Risk-Calibrated Language Models",
            authors: "X. Wang, J. Du, A. Khan, Q. Le, E. Diao, J. Zhou, J. Ding, A. Anwar",
            venue: "Advances in Neural Information Processing Systems (NeurIPS)",
            year: "2025",
            link: "#",
            note: "spotlight presentation (top 3.5%)"
        },
        {
            title: "MAP: Multi-Human-Value Alignment Palette",
            authors: "X. Wang, Q. Le, A. Ahmed, E. Diao, Y. Zhou, N. Baracaldo, J. Ding, A. Anwar",
            venue: "International Conference on Learning Representations (ICLR)",
            year: "2025",
            link: "#",
            note: "oral presentation (top 1.8%)"
        },
        {
            title: "AID: Adaptive Integration of Detectors for Safe AI with Large Language Models",
            authors: "X. Wang, E. Diao, Q. Le, J. Ding, A. Anwar",
            venue: "Nations of the Americas Chapter of the Association for Computational Linguistics (NAACL)",
            year: "2025",
            link: "#"
        },
        {
            title: "Probe Pruning: Accelerating LLMs through Dynamic Pruning via Model-Probing",
            authors: "Q. Le, E. Diao, Z. Wang, X. Wang, J. Ding, L. Yang, A. Anwar",
            venue: "International Conference on Learning Representations (ICLR)",
            year: "2025",
            link: "#"
        },
        {
            title: "Accelerating LLM Reasoning via Early Rejection with Partial Reward Modeling",
            authors: "S. Cheshmi, A. Khan, X. Wang, Z. Liu, A. Anwar",
            venue: "Empirical Methods in Natural Language Processing (EMNLP)",
            year: "2025",
            link: "#"
        },
        {
            title: "PI-FL: Personalized and Incentivized Federated Learning",
            authors: "A. Khan, X. Wang, Q. Le, A. Khan, H. Ali, J. Ding, A. Butt, A. Anwar",
            venue: "IEEE International Parallel & Distributed Processing Symposium (IPDPS)",
            year: "2025",
            link: "#"
        },
        {
            title: "ICL: An Incentivized Collaborative Learning Framework",
            authors: "X. Wang, Q. Le, A. Khan, J. Ding, A. Anwar",
            venue: "IEEE International Conference on Big Data (BigData)",
            year: "2024",
            link: "#"
        },
        {
            title: "DynamicFL: Dynamic Federated Learning with Communication Resource Allocation",
            authors: "Q. Le, E. Diao, X. Wang, V. Tarokh, J. Ding, A. Anwar",
            venue: "IEEE International Conference on Big Data (BigData)",
            year: "2024",
            link: "#",
            note: "best student paper award"
        },
        {
            title: "Information Laundering for Model Privacy",
            authors: "X. Wang, Y. Xiang, J. Gao, J. Ding",
            venue: "International Conference on Learning Representations (ICLR)",
            year: "2021",
            link: "#",
            note: "spotlight presentation (top 5.6%)"
        },
        {
            title: "Assisted Learning: A Framework for Multiple Organizations' Learning",
            authors: "X. Xian, X. Wang, J. Ding, R. Ghanadan",
            venue: "Advances in Neural Information Processing Systems (NeurIPS)",
            year: "2020",
            link: "#",
            note: "spotlight presentation (top 4.1%)"
        },
        {
            title: "Parallel Assisted Learning",
            authors: "X. Wang, J. Zhang, M. Hong, Y. Yang, J. Ding",
            venue: "IEEE Transactions on Signal Processing",
            year: "2022",
            link: "#"
        },
        {
            title: "Balancing Costs and Durability for Serverless Data",
            authors: "A. Merenstein, X. Wang, V. Tarasov, P. Agarwal, S. Guthridge, K. Thakkar, K. Wu, A. Anwar, E. Zadok",
            venue: "International Conference on Massive Storage Systems and Technology (MSST)",
            year: "2024",
            link: "#"
        },
        {
            title: "Robust and Efficient Quantum Communication",
            authors: "C. Howe, X. Wang, and A. Anwar",
            venue: "Proceedings of the International Workshop on Quantum Classical Cooperative",
            year: "2023",
            link: "#"
        },
        {
            title: "Towards cost-effective and resource-aware aggregation at Edge for Federated Learning",
            authors: "A. Khan, Y. Li, X. Wang, S. Haroon, H. Ali, Y. Cheng, A. Anwar",
            venue: "IEEE International Conference on Big Data (BigData)",
            year: "2023",
            link: "#"
        },
        {
            title: "Personalized Federated Recommender Systems with Private and Partially Federated AutoEncoders",
            authors: "Q. Le, E. Diao, X. Wang, A. Anwar, V. Tarokh and J. Ding",
            venue: "Asilomar Conference on Signals, Systems, and Computers",
            year: "2022",
            link: "#"
        }
    ],

    // Teaching Section
    teachingPhilosophy: "I am dedicated to fostering engaging and inclusive learning environments that promote student success. As a Teaching Assistant at the University of Minnesota from 2018 to 2021, I served five core undergraduate and graduate courses with consistently high student ratings. My approach emphasizes clear explanations, hands-on practice, and creating supportive spaces where students feel comfortable asking questions and developing their skills.",
    
    courses: [
        { code: "STAT 3021", name: "Introduction to Probability and Statistics (Fall 2020)" },
        { code: "STAT 5302", name: "Applied Regression Analysis - Graduate (Spring 2020)" },
        { code: "STAT 4051", name: "Applied Statistics I (Fall 2019)" },
        { code: "STAT 3032", name: "Regression and Correlated Data (Spring 2019)" },
        { code: "STAT 3022", name: "Data Analysis (Fall 2018)" }
    ],
    
    mentoring: "I am actively involved in the Women in Machine Learning & Data Science Twin Cities community since February 2020. I am committed to supporting diversity and inclusion in computer science and data science, and believe in creating opportunities for students from all backgrounds to thrive in technical fields.",

    // CV Section
    cvUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6956f4434c20bda51db596f7/6e0a9d58c_Xinran_CV1.pdf",
    
    awards: [
        { name: "Doctoral Dissertation Fellowship", org: "University of Minnesota", year: "2025" },
        { name: "3M Science and Technology Graduate Fellowship (4-year)", org: "University of Minnesota", year: "2023-2027" },
        { name: "CS-IDEA Fellowship", org: "Department of Computer Science & Engineering, UMN", year: "2023" },
        { name: "John N. Quiring Fellowship in Statistics (one per year)", org: "School of Statistics, University of Minnesota", year: "2020" },
        { name: "Outstanding Graduate Award (top 2%)", org: "Tsinghua University", year: "2016" },
        { name: "Outstanding Thesis Award (top 2%)", org: "Tsinghua University", year: "2016" }
    ],
    
    experience: [
        { role: "Applied Scientist Intern", org: "Amazon", period: "Jun 2025 - Oct 2025" },
        { role: "Senior Data Scientist", org: "General Mills", period: "Apr 2021 - Nov 2022" },
        { role: "Algorithms and Software Engineer", org: "Kolmostar Inc.", period: "Jun - Aug 2019" },
        { role: "HQ Management Trainee", org: "Shanghai Pudong Development Bank", period: "Jul 2016 - Dec 2018" }
    ],
    
    service: [
        { role: "Reviewer", venue: "NeurIPS (2021-25), ICLR (2022-25), AAAI (2024-25)" },
        { role: "Reviewer", venue: "ACL (2024-25), EuroSys (2023-2025), COLM (2025)" },
        { role: "Guest Lecturer", venue: "CSCI 8735, University of Minnesota (2024)" },
        { role: "Community Leadership", venue: "Women in ML & Data Science Twin Cities" }
    ],

    // Contact Section
    email: "wang8740@umn.edu",
    location: "Minneapolis, Minnesota",
    office: "Department of Computer Science and Engineering",
    twitter: "",
    linkedin: "",
    github: "https://wang8740.github.io",
    googleScholar: "",
    
    // Additional sections
    industrialExperience: [
        {
            role: "Applied Scientist Intern",
            org: "Amazon",
            location: "Seattle, WA",
            period: "Jun 2025 - Oct 2025",
            description: "Studied how LLMs can optimize Amazon's e-commerce search page, benchmarking against deep learning baselines. Built an end-to-end pipeline of data annotation, prompt engineering, and LLM alignment for search optimization."
        },
        {
            role: "Senior Data Scientist",
            org: "General Mills",
            location: "Minneapolis, MN",
            period: "Apr 2021 - Nov 2022",
            description: "Focused on Strategy and Growth. Used machine learning to identify novel growth opportunities. Led the development and implementation of predictive intelligence models to support business objectives."
        },
        {
            role: "Algorithms and Software Engineer",
            org: "Kolmostar Inc.",
            location: "Fremont, CA",
            period: "Jun - Aug 2019",
            description: "Built a root cause analysis tool for chip malfunctioning using online streaming data from satellite signals. Developed an anomaly detection system that increased antenna malfunction detection accuracy by 20%."
        },
        {
            role: "HQ Management Trainee",
            org: "Shanghai Pudong Development Bank",
            location: "Shanghai, China",
            period: "Jul 2016 - Dec 2018",
            description: "Rotated in corporate banking, credit card, and financial market. Performed risk management and reported to the Chief Risk Officer."
        }
    ],
    
    talks: [
        { event: "NeurIPS (Spotlight)", location: "San Diego, California", date: "Dec 2025" },
        { event: "NAACL", location: "Albuquerque, New Mexico", date: "May 2025" },
        { event: "ICLR (Oral)", location: "Singapore", date: "Apr 2025" },
        { event: "IBM Research", location: "Virtual", date: "Mar 2025" },
        { event: "IEEE BigData (Best Student Paper Award)", location: "Washington DC", date: "Dec 2024" },
        { event: "CSCI 8735 Guest Lecturer", location: "University of Minnesota", date: "Oct 2024" },
        { event: "IEEE BigData", location: "Virtual", date: "Dec 2023" },
        { event: "I2Q (ISCA workshop)", location: "Chicago, Illinois", date: "Jun 2023" },
        { event: "Asilomar Conference", location: "Pacific Grove, California", date: "Oct-Nov 2022" },
        { event: "ICLR (Spotlight)", location: "Virtual", date: "May 2021" },
        { event: "Women in ML & Data Science Twin Cities", location: "Virtual", date: "Feb 2021" },
        { event: "NeurIPS (Spotlight)", location: "Virtual", date: "Dec 2020" }
    ],
    
    leadership: [
        { role: "Member", org: "Women in Machine Learning & Data Science Twin Cities", period: "Feb 2020 - present" },
        { role: "Consultant", org: "Department of Neurosurgery, University of Minnesota", period: "Jun - Aug 2020" },
        { role: "Participant", org: "Cross-Cultural Leadership Retreat", period: "Mar 2019" },
        { role: "Volunteer", org: "Harvard Law School Commencement 2015", period: "May 2015" }
    ]
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
            
            <IndustrialSection experiences={profileData.industrialExperience} />
            
            <TeachingSection
                philosophy={profileData.teachingPhilosophy}
                courses={profileData.courses}
                mentoring={profileData.mentoring}
            />
            
            <TalksSection talks={profileData.talks} />
            
            <LeadershipSection leadership={profileData.leadership} />
            
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