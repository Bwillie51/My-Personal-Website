import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import ProPic from '../assets/Bwaiyon.jpeg';

export default function Header({ identity }) {
  const [isOpen, setIsOpen] = useState(false);

  const getLinkStyles = ({ isActive }) => {
    return isActive
      ? "bg-[#6D28D9] text-white border border-[#A78BFA] px-4 py-1.5 rounded-md font-semibold text-sm shadow-[0_0_15px_rgba(109,40,217,0.5)] transition-all duration-300"
      : "text-[#94A3B8] hover:text-[#C084FC] font-medium text-sm px-4 py-1.5 rounded-md transition-colors duration-200";
  };

  return (
    <nav className="bg-[#1D153A]/90 backdrop-blur-md text-white sticky top-0 z-50 px-6 py-3 border-b border-[#31255C] shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Dynamic Logo Image Container & Profile Identifier Link */}
        <div className="flex items-center gap-3">
          {/* }
          <div className="flex items-center justify-center border border-[#4C1D95] rounded-full p-0.5 shadow-[0_0_10px_rgba(139,92,246,0.3)] w-9 h-9 overflow-hidden bg-[#120E24]">
            {identity?.avatarUrl ? (
              <img src={identity.avatarUrl} alt={`${identity.fullName || 'User'} avatar`} className="w-full h-full object-cover" />
            ) : (
              <span className="text-xs">👤</span>
            )}
          </div>
          <Link to="/" className="text-base font-bold tracking-wide text-white hover:text-[#A78BFA] transition-colors duration-200">
            {identity?.fullName || "Brian WILLIE"}
          </Link>
          */}
          <Link to="/" className="flex items-center gap-2">
            <img src={ProPic} alt="Brian Willie" className="w-9 h-9 rounded-full border border-[#4C1D95] shadow-[0_0_10px_rgba(139,92,246,0.3)]" />
            <span className="text-base font-bold tracking-wide text-white hover:text-[#A78BFA] transition-colors duration-200">
              {identity?.fullName || "Brian WILLIE"}
            </span>
          </Link>
        </div>

        {/* Desktop View Tab Bars links */}
        <div className="hidden md:flex items-center space-x-1">
          <NavLink to="/" className={getLinkStyles}>Home</NavLink>
          <NavLink to="/profile" className={getLinkStyles}>Profile</NavLink>
          <NavLink to="/contact" className={getLinkStyles}>Contact</NavLink>
        </div>

        {/* Mobile View Hamburger Action Button Trigger Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-[#94A3B8] hover:text-white transition-colors">
          <div className="w-6 h-5 flex flex-col justify-between items-center relative">
            <span className={`w-6 h-0.5 bg-current rounded transform transition-all duration-300 origin-left ${isOpen ? 'rotate-45 translate-x-1' : ''}`} />
            <span className={`w-6 h-0.5 bg-current rounded transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-current rounded transform transition-all duration-300 origin-left ${isOpen ? '-rotate-45 translate-x-1' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Drawer Slide Container Box */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-60 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col space-y-2 bg-[#0F0C1B] p-3 rounded-lg border border-[#31255C]">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={getLinkStyles}>Home</NavLink>
          <NavLink to="/profile" onClick={() => setIsOpen(false)} className={getLinkStyles}>Profile</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className={getLinkStyles}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}
