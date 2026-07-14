// src/components/wizard/Profile.jsx
import { useState, useEffect } from 'react';
import { client } from '../../sanity/client'; 
import Footer from './Footer';
import ProPic from '../../assets/Bwaiyon.jpeg';
//import { urlFor } from '../../sanity/client';

export default function Profile({ identity }) {
  const [dynamicContent, setDynamicContent] = useState({ experiences: [], skillCategories: [], projects: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Consolidated GROQ batch fetch pipeline string
    const query = `{
      "experiences": *[_type == "experience"] | order(order asc) { role, company, period, desc },
      "skillCategories": *[_type == "skillset"] | order(order asc) { title, skills },
      "projects": *[_type == "project"] | order(_createdAt asc) { title, stack, desc, videoUrl, status, github, live }
    }`;

    client.fetch(query)
      .then((data) => {
        setDynamicContent({
          experiences: data?.experiences || [],
          skillCategories: data?.skillCategories || [],
          projects: data?.projects || []
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error("Database initialization stream crash:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto mt-10 px-4 py-24 text-center text-[#94A3B8] text-sm animate-pulse bg-[#0F0C1B]">
        Establishing secure full-stack database stream...
      </div>
    );
  }

  const { experiences, skillCategories, projects } = dynamicContent;

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4 pb-16 bg-[#0F0C1B]">
      
      {/* PAGE TITLE & ACTION BAR */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between border-b border-[#31255C] pb-6 gap-4">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-extrabold text-white tracking-tight mb-1">Professional Profile</h1>
          <p className="text-[#94A3B8] text-base">My engineering path and specialized full-stack project systems.</p>
          
          <div className="flex gap-4 mt-3 justify-center md:justify-start text-xs font-semibold text-[#C084FC]">
            <a href="https://www.linkedin.com/in/brian-willie-8b4499206" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn ↗</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:underline">GitHub ↗</a>
            <a href="mailto:your.email@example.com" className="hover:underline">Email ↗</a>
          </div>
        </div>

        <div className="text-center">
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md border border-[#31255C] bg-[#120E24] px-4 py-2 text-xs font-semibold text-[#E2E8F0] hover:border-[#C084FC] hover:bg-[#1D153A] transition-all">
            📄 Download Resume
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* LEFT COLUMN */}
        <div className="space-y-6 lg:col-span-1">
          
          {/* Dynamic Profile ID Widget Box 
          <div className="bg-[#1D153A] p-6 rounded-lg border border-[#31255C] hover:border-[#C084FC] hover:shadow-[0_0_25px_rgba(168,85,247,0.35)] transition-all duration-300 shadow-sm flex flex-col items-center text-center">
            <div className="w-32 h-40 rounded-lg overflow-hidden border-2 border-[#31255C] shadow-inner mb-4 relative group-hover:border-[#C084FC] transition-colors duration-300 bg-[#120E24] flex items-center justify-center">


                {identity?.avatarUrl ? (
                  <img src={identity.avatarUrl} alt={`${identity.fullName || "User"} avatar`} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-[#31255C] text-2xl">👤</span>
                )}
              </div>
              <h3 className="text-lg font-bold text-white mb-0.5">{identity?.fullName || "Brian Willie"}</h3>
            <p className="text-xs font-semibold text-[#A78BFA] uppercase tracking-wider">Full-Stack Software Engineer</p>
          </div>
          */}
          {/* Not fetched Dynamically - Static overview of the profile identity */}
          <div className="bg-[#1D153A] p-6 rounded-lg border border-[#31255C] hover:border-[#C084FC] hover:shadow-[0_0_25px_rgba(168,85,247,0.35)] transition-all duration-300 shadow-sm flex flex-col items-center text-center">
            <div className="w-32 h-40 rounded-lg overflow-hidden border-2 border-[#31255C] shadow-inner mb-4 relative group-hover:border-[#C084FC] transition-colors duration-300 bg-[#120E24] flex items-center justify-center">
              <img src={ProPic} alt="Brian Willie avatar" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-bold text-white mb-0.5">Brian Willie</h3>
            <p className="text-xs font-semibold text-[#A78BFA] uppercase tracking-wider">Full-Stack Software Engineer</p>
          </div>

          {/* Dynamic Experience History Box */}
          <div className="bg-[#1D153A] p-6 rounded-lg border border-[#31255C] hover:border-[#C084FC] hover:shadow-[0_0_25px_rgba(168,85,247,0.35)] transition-all duration-300 shadow-sm">
            <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">💼 Experience History</h2>
            {experiences.length === 0 ? (
              <p className="text-[#64748B] text-xs">No experience timeline documented.</p>
            ) : (
              <div className="space-y-6 relative border-l border-[#31255C] pl-4 ml-2">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[25px] top-1.5 w-2 h-2 bg-[#C084FC] rounded-full shadow-[0_0_8px_rgba(192,132,252,0.8)]" />
                    <span className="text-xs font-semibold text-[#A78BFA] uppercase tracking-wider block">{exp.period}</span>
                    <h3 className="text-sm font-bold text-white mt-0.5">{exp.role}</h3>
                    <p className="text-xs font-medium text-[#94A3B8] mb-2">{exp.company}</p>
                    <p className="text-[#94A3B8] text-xs leading-relaxed">{exp.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Dynamic Technical Skillset Box */}
          <div className="bg-[#1D153A] p-6 rounded-lg border border-[#31255C] hover:border-[#C084FC] hover:shadow-[0_0_25px_rgba(168,85,247,0.35)] transition-all duration-300 shadow-sm">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">🛠️ Technical Skillset</h2>
            <div className="space-y-4">
              {skillCategories.map((cat, idx) => (
                <div key={idx}>
                  <h4 className="text-xs font-bold text-[#A78BFA] uppercase tracking-wider mb-2">{cat.title}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills && cat.skills.map((skill, i) => (
                      <span key={i} className="text-xs bg-[#6d28d9]/20 text-[#C084FC] font-semibold px-2.5 py-0.5 rounded-full border border-[#A78BFA]/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-4">💻 System Architecture</h2>
            <div className="space-y-4">
              {projects.length === 0 ? (
                <div className="text-center py-12 text-[#64748B] text-sm">No active project logs found.</div>
              ) : (
                projects.map((proj, idx) => (
                  <div key={idx} className="bg-[#1D153A] p-6 rounded-lg border border-[#31255C] hover:border-[#C084FC] hover:shadow-[0_0_25px_rgba(168,85,247,0.35)] transition-all duration-300 shadow-sm flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{proj.title}</h3>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {proj.stack && proj.stack.map((tech, i) => (
                          <span key={i} className="text-xs bg-[#120E24] text-[#94A3B8] font-medium px-2 py-0.5 rounded-md border border-[#31255C]">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">{proj.desc}</p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-2 border-t border-[#31255C] pt-4">
                      <a href={proj.github || "https://github.com"} target="_blank" rel="noreferrer" className="w-full sm:flex-1 text-center text-xs font-bold text-[#E2E8F0] border border-[#31255C] bg-[#120E24] hover:bg-[#1D153A] py-2 rounded-md transition">
                        GitHub Repo
                      </a>
                      {proj.status === "In Progress" ? (
                        <span className="w-full sm:flex-1 text-center text-xs font-bold text-[#A78BFA] bg-[#6d28d9]/10 border border-[#A78BFA]/20 py-2 rounded-md cursor-default">
                          ⏳ Development Underway
                        </span>
                      ) : (
                        <a href={proj.live || "#"} target="_blank" rel="noreferrer" className="w-full sm:flex-1 text-center text-xs font-bold text-[#120E24] bg-[#C084FC] hover:bg-[#A78BFA] py-2 rounded-md transition">
                          Live Preview ↗
                        </a>
                      )}
                    </div>
                  </div> 
                ))
              )}
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}