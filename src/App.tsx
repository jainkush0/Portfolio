/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Portfolio App - Kush Chopra
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronDown, 
  ShieldCheck, 
  Search, 
  Zap, 
  Database,
  ArrowRight,
  Phone,
  MapPin,
  GraduationCap,
  Award
} from 'lucide-react';

const Section = ({ children, className = "", id }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`min-h-screen flex flex-col justify-center px-6 md:px-24 py-20 ${className}`}>
    {children}
  </section>
);

const ExpertiseCard = ({ title, description, tags, index }: { title: string, description: string, tags: string[], index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="glass group p-8 rounded-3xl hover:border-emerald-500/50 transition-all duration-500 cursor-pointer"
  >
    <div className="flex justify-between items-start mb-6">
      <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform duration-500">
        <ShieldCheck size={24} />
      </div>
    </div>
    <h3 className="text-2xl font-display font-bold mb-3">{title}</h3>
    <p className="text-white/60 mb-6 leading-relaxed text-sm">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <span key={tag} className="text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative overflow-x-hidden glow-mesh">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 px-6 py-8 flex justify-between items-center mix-blend-difference">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-display text-xl font-bold tracking-tighter"
        >
          KC.
        </motion.span>
        <div className="flex gap-8 text-xs font-semibold uppercase tracking-widest text-white/70">
          {['Experience', 'Expertise', 'Education', 'Contact'].map((item, i) => (
            <motion.a 
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              href={`#${item.toLowerCase()}`} 
              className="hover:text-emerald-400 transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <Section className="relative">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-6 block">
              Senior Fraud Officer @ RBC
            </span>
            <h1 className="text-6xl md:text-8xl font-display font-extrabold leading-[0.9] tracking-tighter mb-8 text-gradient">
              SECURING THE <br />
              <span className="text-emerald-500 italic">FINANCIAL</span> <br />
              FRONTIER.
            </h1>
            <p className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed mb-10">
              Senior Fraud Officer at RBC with 3+ years of experience in detecting, investigating, and preventing fraud across digital banking channels. Skilled in transaction monitoring, real-time alert analysis, and case investigations using advanced fraud detection tools. Strong understanding of fraud typologies, AML compliance, and risk management with a proven track record of safeguarding clients and minimizing financial losses. Passionate about leveraging technology and analytics to stay ahead of emerging threats.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <a href="#contact" className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-emerald-500 hover:text-white transition-all duration-300 flex items-center gap-2 group">
                Get in Touch
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex gap-4">
                <a href="https://github.com/jainkush0" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full glass hover:text-emerald-400 transition-colors"><Github size={20} /></a>
                <a href="https://www.linkedin.com/in/kushchopra98" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full glass hover:text-emerald-400 transition-colors"><Linkedin size={20} /></a>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/20"
        >
          <ChevronDown size={32} />
        </motion.div>
      </Section>

      {/* Stats Section */}
      <div className="px-6 md:px-24 py-20 grid grid-cols-2 md:grid-cols-3 gap-8 border-y border-white/5 bg-white/[0.02]">
        {[
          { label: 'Years Experience', value: '03+' },
          { label: 'SLA Compliance', value: '100%' },
          { label: 'Customer Satisfaction', value: '90%+' },
        ].map((stat, i) => (
          <div key={i} className="text-center md:text-left">
            <div className="text-4xl font-display font-bold mb-1">{stat.value}</div>
            <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Experience Section */}
      <Section id="experience" className="bg-white/[0.02]">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-4 uppercase">Professional Journey</h2>
          <div className="h-1 w-20 bg-emerald-500" />
        </div>
        
        <div className="space-y-12">
          {[
            {
              company: 'Royal Bank Of Canada',
              role: 'Senior Fraud Officer',
              period: '04/2022 — PRESENT',
              desc: 'Conducted end-to-end investigations into financial crime, including account takeovers, SIM swap fraud, and e-transfer scams. Analyzed large datasets using device fingerprinting and velocity analysis to remediate fraudulent activity.'
            },
            {
              company: 'Rogers Communication',
              role: 'Technical Support Analyst',
              period: '12/2021 — 04/2022',
              desc: 'Provided technical support for network and computer issues. Managed account maintenance and permissions using Active Directory and ITSM tools like ServiceNow.'
            },
            {
              company: 'Kelly',
              role: 'Technical Support Analyst',
              period: '02/2021 — 07/2021',
              desc: 'Resolved support-related tickets using JIRA. Identified hardware and software solutions while maintaining over 90% customer satisfaction surveys.'
            }
          ].map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-8 glass rounded-3xl hover:bg-white/[0.05] transition-colors"
            >
              <div className="flex-1">
                <div className="text-emerald-400 font-mono text-xs tracking-widest mb-2">{exp.period}</div>
                <h3 className="text-2xl font-display font-bold">{exp.role}</h3>
                <div className="text-white/40 font-bold uppercase tracking-widest text-xs mt-1">{exp.company}</div>
              </div>
              <p className="max-w-md text-white/50 text-sm leading-relaxed">
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Expertise Section */}
      <Section id="expertise">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-4 uppercase">Core Expertise</h2>
          <div className="h-1 w-20 bg-emerald-500" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ExpertiseCard 
            title="Fraud Detection & Analytics"
            description="Expertise in identifying suspicious patterns, account takeovers, and card-not-present fraud using advanced detection systems."
            tags={['Transaction Monitoring', 'Risk Assessment', 'Data Analysis']}
            index={0}
          />
          <ExpertiseCard 
            title="Compliance & AML"
            description="Deep knowledge of KYC, AML, ATF, and regulatory guidelines including FINTRAC and FATF. Experienced in writing STRs."
            tags={['FINTRAC', 'FATF', 'KYC', 'STR']}
            index={1}
          />
          <ExpertiseCard 
            title="Technical Investigations"
            description="Utilizing device fingerprinting, geolocation anomalies, and velocity analysis to remediate fraudulent activity."
            tags={['SQL', 'TSYS', 'VRM', 'Genesys']}
            index={2}
          />
          <ExpertiseCard 
            title="Digital Assets & Crypto"
            description="Investigating complex transactions involving cryptocurrencies and tokenized securities using AML frameworks."
            tags={['Blockchain', 'Crypto', 'Digital Assets']}
            index={3}
          />
        </div>
      </Section>

      {/* Education & Certs */}
      <Section id="education" className="bg-white/[0.01]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <div className="flex items-center gap-4 mb-12">
              <GraduationCap className="text-emerald-500" size={40} />
              <h2 className="text-4xl font-display font-bold tracking-tighter">EDUCATION</h2>
            </div>
            <div className="space-y-8">
              {[
                { school: 'Conestoga College', degree: 'Computer Applications Development', year: '2020' },
                { school: 'Conestoga College', degree: 'Big Data Solution Architecture', year: '2019' },
                { school: 'GLS University', degree: 'Bachelors Of Computer Applications', year: '2015 — 2018' },
              ].map((edu, i) => (
                <div key={i} className="p-6 glass rounded-2xl">
                  <div className="text-emerald-400 font-mono text-xs mb-2">{edu.year}</div>
                  <h4 className="font-bold text-lg">{edu.degree}</h4>
                  <p className="text-white/40 text-sm uppercase tracking-widest font-bold mt-1">{edu.school}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4 mb-12">
              <Award className="text-blue-500" size={40} />
              <h2 className="text-4xl font-display font-bold tracking-tighter">CERTIFICATES</h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                'Internal AML/Fraud training programs',
                'Combating Money Laundering And Terrorist Financing',
                'RBC Code of Conduct & Compliance',
                'Anti Money Laundering Concepts 1/1',
                'Financial Crime: Processes & Technology'
              ].map((cert, i) => (
                <div key={i} className="p-4 glass rounded-xl flex items-center gap-4 hover:bg-white/5 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-sm font-medium text-white/70">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-6 block">Let's Connect</span>
          <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-12">
            SECURE YOUR <br /> FUTURE <span className="text-emerald-500">TODAY</span>.
          </h2>
          
          <div className="flex flex-col items-center gap-8 mb-16">
            <a 
              href="mailto:jainkush0@gmail.com" 
              className="inline-flex items-center gap-4 text-2xl md:text-4xl font-display font-bold hover:text-emerald-400 transition-colors group"
            >
              <Mail size={32} />
              jainkush0@gmail.com
              <ArrowRight size={32} className="group-hover:translate-x-4 transition-transform" />
            </a>
            <div className="flex flex-wrap justify-center gap-12 text-white/50 font-bold uppercase tracking-widest text-xs">
              <div className="flex items-center gap-2"><Phone size={16} /> 226-972-2429</div>
              <div className="flex items-center gap-2"><MapPin size={16} /> Mississauga, Canada</div>
            </div>
          </div>
          
          <div className="flex justify-center gap-12 text-white/30 font-bold uppercase tracking-[0.2em] text-[10px]">
            <a href="https://github.com/jainkush0" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Github</a>
            <a href="https://www.linkedin.com/in/kushchopra98" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </motion.div>
      </Section>

      {/* Footer */}
      <footer className="px-6 md:px-24 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-[10px] uppercase tracking-widest font-bold">
        <div>© 2026 KUSH CHOPRA. ALL RIGHTS RESERVED.</div>
        <div className="flex gap-8">
          <span>Senior Fraud Officer</span>
          <span>Mississauga, ON</span>
        </div>
      </footer>
    </div>
  );
}
