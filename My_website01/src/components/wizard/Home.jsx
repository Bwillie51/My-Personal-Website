import { Link } from 'react-router-dom';
import Img2BG from '../../assets/img2BG.jpg';
import Footer from './Footer';

export default function Home() {
  return (
    <div className="w-full min-h-screen pb-16 bg-[#0F0C1B]">
      
      {/* PART 1: Hero Canvas Viewport */}
      <div 
        className="relative w-full min-h-[70vh] flex flex-col md:flex-row items-stretch overflow-hidden bg-cover bg-center bg-no-repeat md:bg-none"
        style={{ backgroundImage: `url(${Img2BG})` }}
      >
        {/* Deep Violet Filter Overlay matching the image tone */}
        <div className="absolute inset-0 bg-[#0F0C1B]/85 md:hidden z-0" />

        <div className="relative z-10 w-full md:w-1/2 bg-transparent md:bg-[#0F0C1B] text-white flex flex-col justify-center px-6 py-20 md:py-0 md:px-16 text-left">
          <div className="hidden md:block absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-r from-[#0F0C1B] to-transparent translate-x-full pointer-events-none z-20" />

          <div className="max-w-md relative z-10 mx-auto md:mx-0">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
              Building secure, scalable, and high-performance applications.
            </h1>
            <p className="text-[#94A3B8] max-w-md mb-6 text-base md:text-lg">
              Full-Stack Developer specializing in building scalable, secure, and user-centric web applications.
            </p>
            <Link to="/profile" className="inline-block bg-[#6D28D9] hover:bg-[#7C3AED] text-white px-5 py-2.5 rounded-md font-semibold text-sm shadow-[0_0_15px_rgba(109,40,217,0.4)] transition duration-300">
              Explore Profile
            </Link>
          </div>
        </div>

        <div className="hidden md:block md:w-1/2 relative opacity-60 mix-blend-screen">
          <img src={Img2BG} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
        </div>

        {/* Desktop Wave Shape Curve - Matches deep midnight base canvas fill */}
        <div className="hidden md:block absolute bottom-0 left-0 right-0 w-full overflow-hidden z-30">
          <svg className="relative block w-full h-[60px]" xmlns="http://w3.org" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,1045.92,101.55c64,13.54,129.3,14.12,194.08,3.9V120H0V0c21.2,12,41.9,24.5,62.8,37.3C139.7,85,234.3,95.4,321.39,56.44Z" className="fill-[#0F0C1B]"></path>
          </svg>
        </div>
      </div>

      <div className="md:hidden w-full h-0.5 bg-[#8B5CF6]" />

      {/* PART 2: Explore Callouts */}
      <div className="flex flex-col items-center justify-center text-center px-4 mt-16 md:mt-24">
        <div className="text-xs font-bold tracking-wider text-[#C084FC] uppercase bg-[#6d28d9]/20 border border-[#A78BFA]/30 px-3 py-1 rounded-full mb-3 shadow-[0_0_10px_rgba(109,40,217,0.2)]">
          Workflow
        </div>
        
        <h2 className="text-3xl font-extrabold text-white mb-3 tracking-tight">Explore the Features</h2>
        

        <p className="text-[#94A3B8] max-w-md mb-8 text-sm md:text-base">Building responsive frontends and robust, scalable backend systems using modern web frameworks and deployment pipelines.</p>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto px-4 justify-center">
          <Link to="/profile" className="bg-[#6D28D9] hover:bg-[#7C3AED] text-white px-5 py-2.5 rounded-md font-semibold text-sm shadow-[0_0_15px_rgba(109,40,217,0.4)] transition sm:w-44 text-center">
            Go to Profile
          </Link>
          <Link to="/contact" className="border border-[#31255C] bg-[#1D153A] text-[#E2E8F0] hover:bg-[#251A4A] px-5 py-2.5 rounded-md font-semibold text-sm transition sm:w-44 text-center">
            Contact Me
          </Link>
        </div>
      </div>

      {/* MAGICAL AMBIENT VIDEO ZONE - Place below your core features row */}
        <div className="relative w-full py-12 my-10 overflow-visible flex flex-col items-center">
          
          {/* The Magical Backdrop Glow Effects */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] max-w-[900px] h-[500px] bg-gradient-to-r from-purple-600/10 via-fuchsia-500/15 to-indigo-500/10 blur-[120px] rounded-full pointer-events-none animate-pulse duration-[8000ms]" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[60%] h-[200px] bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none" />
          

          {/* Header Info - Floating seamlessly without a background card */}
          <div className="relative text-center max-w-2xl mx-auto mb-8 px-4 z-10">
            {/* Live Walkthrough Badge 
            <div className="inline-flex items-center gap-2 bg-[#C084FC]/10 border border-[#C084FC]/30 rounded-full px-3 py-1 text-xs font-semibold text-[#C084FC] uppercase tracking-widest mb-3 backdrop-blur-sm shadow-[0_0_15px_rgba(168,85,247,0.15)] animate-bounce duration-1000">
              ⚡ Live Walkthrough
            </div>
            */}
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              Portfolio & Architecture Overview
            </h2>
            <p className="text-[#94A3B8] text-sm md:text-base max-w-lg mx-auto">
              An end-to-end screen capture detailing my production databases, system security pipelines, and interactive deployment states.
            </p>
          </div>
          

          {/* The Floating Video Canvas Frame */}
          <div className="relative w-full max-w-4xl px-4 z-10 group">
            {/* Animated Corner Border Accent Lights */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#31255C] via-[#C084FC] to-[#31255C] rounded-2xl opacity-40 group-hover:opacity-100 group-hover:blur-[2px] transition duration-700 pointer-events-none shadow-[0_0_30px_rgba(168,85,247,0.1)] group-hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]" />
            
            {/* Inner Clean Player Container */}
            <div className="relative bg-[#0F0C1B]/90 rounded-2xl p-1.5 backdrop-blur-md shadow-2xl border border-white/5">
              <div className="rounded-[10px] overflow-hidden aspect-video bg-black shadow-inner relative">
                <video 
                  src="https://w3schools.com" // 👈 Replace with your real walkthrough video path
                  controls 
                  className="w-full h-full object-cover relative z-10"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

        </div>

      {/* PARTS 3 & 4: Glow-Out Dashboard Widgets */}
      <div className="px-4 max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#1D153A] p-6 rounded-lg border border-[#31255C] hover:border-[#C084FC] hover:shadow-[0_0_25px_rgba(168,85,247,0.35)] md:col-span-2 transition-all duration-300">
          <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">ℹ️ About This Site</h2>
          <p className="text-[#94A3B8] text-sm md:text-base leading-relaxed">
            Thanks for stopping by! This is my personal space to share the full-stack web applications, tools, and open-source contributions I have engineered. 
            Feel free to explore my work and view my resume using the menu above
          </p>
        </div>
        
        <div className="bg-[#1D153A] p-6 rounded-lg border border-[#31255C] hover:border-[#C084FC] hover:shadow-[0_0_25px_rgba(168,85,247,0.35)] transition-all duration-300">
          <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">🚀 Core Stack</h2>
          <ul className="space-y-2 text-[#94A3B8] text-sm md:text-base">
            <li className="flex items-center gap-2">
              <span className="text-[#C084FC] font-bold">✓</span> 
              <span><strong>Frontend:</strong> HTML, JavaScript, React, Tailwind CSS</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#C084FC] font-bold">✓</span> 
              <span><strong>Backend:</strong> Node.js, Java, PHP, Python</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#C084FC] font-bold">✓</span> 
              <span><strong>Databases:</strong> MariaDB, PostgreSQL, MongoDB</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#C084FC] font-bold">✓</span> 
              <span><strong>DevOps:</strong> Git, Docker, Cloud Hosting</span>
            </li>
          </ul>
        </div>
        <div className="bg-[#1D153A] p-6 rounded-lg border border-[#31255C] hover:border-[#C084FC] hover:shadow-[0_0_25px_rgba(168,85,247,0.35)] transition-all duration-300">
          <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">🏁 Next Steps</h2>
          <p className="text-[#94A3B8] text-sm md:text-base leading-relaxed">
            To see my development work in action, head over to the <strong>Projects</strong> tab to view live deployments and source code links. If you are looking to hire a full-stack engineer, feel free to download my resume or drop me a line via the <strong>Contact</strong> page.
          </p>
        </div>
      </div>
      <Footer />
    </div>

  );
}
