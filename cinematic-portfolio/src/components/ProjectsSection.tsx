import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  githubUrl: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'MCI – Multi Channel Insights',
    category: 'ENTERPRISE AI / FIRSTSOURCE',
    description:
      'Engineered backend AI services for an enterprise multi-channel agent platform, building MCP server tools to power agent-to-agent workflows and integrations. Also contributed a lightweight Token Cost Estimation module to monitor LLM API usage across agents.',
    githubUrl: '#',
    tech: ['Node.js', 'MCP Server', 'AI Agents', 'REST APIs', 'LLM APIs'],
    metrics: [
      { label: 'DOMAIN', value: 'Enterprise AI' },
      { label: 'MODULE', value: 'MCP Server Tools' },
      { label: 'SCALE', value: 'Multi-Agent' },
    ],
  },
  {
    number: '02',
    title: 'Disability Copilot',
    category: 'HEALTHCARE AI / FIRSTSOURCE',
    description:
      'Performed advanced prompt engineering for a healthcare AI agent that generates real-time clinical suggestions for physicians before patient consultations, improving diagnostic preparation and care quality for a medical organisation.',
    githubUrl: '#',
    tech: ['Prompt Engineering', 'LLM Integration', 'Healthcare AI', 'Python'],
    metrics: [
      { label: 'DOMAIN', value: 'Healthcare' },
      { label: 'OUTPUT', value: 'Clinical Suggestions' },
      { label: 'IMPACT', value: 'Real-Time Assist' },
    ],
  },
  {
    number: '03',
    title: 'ETS – Email Automation Pipeline',
    category: 'AI AUTOMATION / FIRSTSOURCE',
    description:
      'Owned the Entity Module within a global AI email automation pipeline for ETS – an international educational assessment organisation. Handled entity extraction, classification, and intelligent email routing at scale. Resolved GDPR compliance tickets ensuring regulatory adherence.',
    githubUrl: '#',
    tech: ['Entity Extraction', 'NLP', 'Email Routing', 'GDPR', 'Python', 'AI Pipeline'],
    metrics: [
      { label: 'CLIENT', value: 'ETS Global' },
      { label: 'MODULE', value: 'Entity Extraction' },
      { label: 'COMPLIANCE', value: 'GDPR Resolved' },
    ],
  },
  {
    number: '04',
    title: 'IVR Automation – AWS Connect',
    category: 'CLOUD AUTOMATION / FIRSTSOURCE',
    description:
      'Designed and implemented an end-to-end IVR automation solution using AWS Connect, configuring contact flows, Lambda integrations, and dynamic prompts to reduce average handle time and improve customer self-service resolution.',
    githubUrl: '#',
    tech: ['AWS Connect', 'AWS Lambda', 'IVR', 'Contact Flows', 'Automation'],
    metrics: [
      { label: 'PLATFORM', value: 'AWS Connect' },
      { label: 'BACKEND', value: 'Lambda Functions' },
      { label: 'IMPACT', value: 'Reduced AHT' },
    ],
  },
  {
    number: '05',
    title: 'QC Auditor – Document AI',
    category: 'FINTECH AI / FIRSTSOURCE',
    description:
      'Built the backend for an AI document auditing agent that autonomously audits loan documents – extracting entities, flagging discrepancies, and generating structured audit reports, significantly reducing manual review effort on high-volume financial files.',
    githubUrl: '#',
    tech: ['AI Agents', 'Entity Extraction', 'Document AI', 'Python', 'REST APIs'],
    metrics: [
      { label: 'DOMAIN', value: 'Fintech / Loans' },
      { label: 'AGENT', value: 'Autonomous Audit' },
      { label: 'OUTPUT', value: 'Structured Reports' },
    ],
  },
  {
    number: '06',
    title: 'N8N Workflow Automation',
    category: 'PROCESS AUTOMATION / FIRSTSOURCE',
    description:
      'Designed multiple production-grade automation workflows integrating APIs, databases, and AI services to eliminate manual handoffs across operational processes using the N8N platform.',
    githubUrl: '#',
    tech: ['N8N', 'Workflow Automation', 'API Integration', 'Databases', 'AI Services'],
    metrics: [
      { label: 'PLATFORM', value: 'N8N Engine' },
      { label: 'SCOPE', value: 'Production-Grade' },
      { label: 'IMPACT', value: 'Zero Manual Handoff' },
    ],
  },
  {
    number: '07',
    title: 'Crowdfunding Platform',
    category: 'FULL-STACK / MICROSERVICES',
    description:
      'Engineered a full-stack microservice-based crowdfunding platform for NGOs, donors, and fundraisers, enabling secure campaign creation, donation tracking, and transparent fund flows. Integrated Razorpay payment gateway, Python chatbot (Flask + Rasa), and deployed on Azure App Services with CI/CD via GitHub Actions.',
    githubUrl: 'https://github.com/bodlapatir',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Azure', 'Docker', 'Razorpay', 'Flask', 'Rasa', 'JWT'],
    metrics: [
      { label: 'ARCHITECTURE', value: 'Microservices' },
      { label: 'CHATBOT', value: 'Flask + Rasa' },
      { label: 'DEPLOYMENT', value: 'Azure + CI/CD' },
    ],
  },
  {
    number: '08',
    title: 'Resource Management System',
    category: 'FULL-STACK / ENTERPRISE TOOL',
    description:
      'Built a full-stack employee time-tracking and resource allocation system to monitor project workloads, featuring role-based access and real-time data updates across teams. Integrated Chart.js interactive dashboards for visualising time distribution patterns.',
    githubUrl: 'https://github.com/bodlapatir',
    tech: ['Node.js', 'React.js', 'Express.js', 'PHPMyAdmin', 'Chart.js', 'REST APIs'],
    metrics: [
      { label: 'DASHBOARD', value: 'Chart.js Interactive' },
      { label: 'ACCESS', value: 'Role-Based (RBAC)' },
      { label: 'DATA', value: 'Real-Time Updates' },
    ],
  },
  {
    number: '09',
    title: 'Fitness Tracker Web App',
    category: 'MERN STACK / HEALTH TECH',
    description:
      'MERN stack application with real-time activity tracking, BMI calculations, personalised insights, and user authentication via a secure RESTful API. Deployed on Vercel for seamless access.',
    githubUrl: 'https://react-frontend-amber.vercel.app/',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST API', 'JWT'],
    metrics: [
      { label: 'STACK', value: 'MERN Full-Stack' },
      { label: 'AUTH', value: 'JWT Secured' },
      { label: 'DEPLOY', value: 'Vercel Live' },
    ],
  },
  {
    number: '10',
    title: 'Heart Disease Prediction',
    category: 'MACHINE LEARNING / HEALTHCARE',
    description:
      'Developed a machine learning model with 89% accuracy to enable proactive medical interventions. Orchestrated end-to-end project phases including data cleaning, feature engineering, and model validation, achieving a 25% increase in predictive accuracy.',
    githubUrl: 'https://github.com/bodlapatir',
    tech: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Machine Learning'],
    metrics: [
      { label: 'ACCURACY', value: '89% Precision' },
      { label: 'IMPROVEMENT', value: '+25% Predictive' },
      { label: 'DOMAIN', value: 'Healthcare ML' },
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-20 pb-32 px-6 sm:px-12 lg:px-20"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / FEATURED WORK
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              SELECTED WORKS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              ENGINEERED VALUE.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Scroll down to unfold the system architecture cards. Each platform was built to solve complex operational challenges.
          </p>
        </motion.div>

        {/* React Bits Stacking Deck */}
        {/* React Bits Stacking Deck */}
<ScrollStack
  itemDistance={20}
  itemScale={0.035}
  itemStackDistance={28}
  stackPosition="15%"
  scaleEndPosition="6%"
  baseScale={0.88}
  useWindowScroll={true}
>
          {projects.map((project) => (
            <ScrollStackItem key={project.title}>
              <div className="relative w-full rounded-2xl border border-[#8C6D4F]/50 bg-[#0E0C0A] p-8 sm:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-[#D4AF37]">
                
                {/* Top Gold Border Light Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

                {/* Corner Minimal L-Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                {/* Big Background Watermark Number */}
                <span
                  className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[#EAD8C7]/5 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {project.number}
                </span>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  
                  {/* Left Column (7 Cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-xs font-mono font-bold text-[#D4AF37]">
                          {project.number} //
                        </span>
                        <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#A8988B]">
                          {project.category}
                        </span>
                      </div>

                      <h3
                        className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4 group-hover:text-[#F7E7C4] transition-colors uppercase leading-[0.9]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      <p
                        className="text-xs sm:text-sm md:text-[14px] font-light text-[#BDB0A4] leading-[1.85] tracking-wide mb-8 max-w-2xl"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-[#8C6D4F]/25">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#16120E] text-[#E8D7C5] group-hover:border-[#D4AF37]/50 transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column (5 Cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-6 lg:border-l lg:border-[#8C6D4F]/25">
                    <div className="space-y-3">
                      <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] block mb-2">
                        // ARCHITECTURE METRICS
                      </span>
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3.5 rounded-sm border border-[#8C6D4F]/25 bg-[#050403] flex items-center justify-between"
                        >
                          <span className="text-[10px] font-mono text-[#A8988B]">
                            {m.label}
                          </span>
                          <span className="text-[11px] font-mono font-medium text-[#F7E7C4]">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-3 px-6 py-3.5 border border-[#8C6D4F] bg-[#16120E] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#EAD8C7] hover:text-black text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      <span>VIEW ON GITHUB</span>
                      <span className="text-xs">↗</span>
                    </a>
                  </div>

                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

      </div>
    </section>
  );
};

export default ProjectsSection;