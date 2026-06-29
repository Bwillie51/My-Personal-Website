// src/components/layout/Footer.jsx

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0F0C1B] border-t border-[#31255C] mt-20 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side: Brand and short bio */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-extrabold text-white tracking-tight mb-1">
            Brian Willie
          </h2>
          <p className="text-[#94A3B8] text-xs max-w-sm leading-relaxed">
            Full-Stack Software Engineer specializing in secure enterprise systems, database modeling, and fluid web applications.
          </p>
        </div>

        {/* Center: Real Professional Credentials */}
        <div className="text-center">
          <p className="text-[#A78BFA] text-xs font-semibold uppercase tracking-wider mb-1">
            Industry Experience
          </p>
          <div className="text-[#94A3B8] text-[11px] space-y-0.5">
            <p>• Developer at Bank South Pacific (BSP) Financial Group Ltd</p>
            <p>• HIMS Analyst at Enga Provincial Hospital</p>
            <p>• Graduate ICT Engineer at Hausman Designs Ltd</p>
          </div>
        </div>

        {/* Right Side: Links & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex gap-4 text-xs font-semibold text-[#C084FC]">
            <a href="https://www.linkedin.com/in/brian-willie-8b4499206" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn ↗</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:underline">GitHub ↗</a>
            <a href="mailto:your.email@example.com" className="hover:underline">Email ↗</a>
          </div>
        </div>

        <div className="mt-4 md:mt-0 text-center md:text-right">
          <p className="text-[#64748B] text-[11px]">
            Crafted with care by Brian Willie.
          </p>
          <p className="text-[#64748B] text-[11px]">
            &copy; {currentYear} Brian Willie. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
