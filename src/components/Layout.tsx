import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Users, BookOpen, History, Settings, Search, GraduationCap } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#f9f9f6] text-[#2f3331] font-sans selection:bg-[#acf4a4] selection:text-[#1b5e20]">
      {/* Top Header */}
      <header className="fixed top-0 w-full z-50 bg-[#f9f9f6]/60 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#fadcd2] flex items-center justify-center overflow-hidden border-2 border-[#2a6c2c]/10">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" 
                alt="Teacher" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-bold text-[#2a6c2c] text-2xl tracking-tight font-display">Scholastic Atelier</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/checkout" className="text-xs font-bold uppercase tracking-widest text-[#2a6c2c] bg-[#acf4a4] px-4 py-2 rounded-full hover:bg-[#2a6c2c] hover:text-white transition-all">
              Student Mode
            </Link>
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors">
              <Search className="w-5 h-5 text-[#2a6c2c]" />
            </button>
          </div>
        </div>
      </header>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-20 flex-col items-center py-8 bg-[#f3f4f0] z-40 border-r border-black/5">
        <div className="mb-12">
          <GraduationCap className="w-8 h-8 text-[#2a6c2c]" />
        </div>
        <nav className="flex flex-col gap-8">
          <NavItem to="/" icon={<Home className="w-6 h-6" />} label="Home" />
          <NavItem to="/students" icon={<Users className="w-6 h-6" />} label="Students" />
          <NavItem to="/books" icon={<BookOpen className="w-6 h-6" />} label="Books" />
          <NavItem to="/records" icon={<History className="w-6 h-6" />} label="Records" />
        </nav>
        <div className="mt-auto">
          <button className="w-12 h-12 rounded-full text-[#5c605d] hover:bg-white flex items-center justify-center transition-colors">
            <Settings className="w-6 h-6" />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="pt-24 pb-32 md:pb-12 md:pl-28 px-6 max-w-7xl mx-auto">
        {children}
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-[#f9f9f6]/80 backdrop-blur-xl z-50 border-t border-black/5 px-4 pb-6 pt-3 flex justify-around items-center">
        <MobileNavItem to="/" icon={<Home className="w-6 h-6" />} label="Home" />
        <MobileNavItem to="/students" icon={<Users className="w-6 h-6" />} label="Students" />
        <MobileNavItem to="/books" icon={<BookOpen className="w-6 h-6" />} label="Books" />
        <MobileNavItem to="/records" icon={<History className="w-6 h-6" />} label="Records" />
      </nav>
    </div>
  );
};

const NavItem: React.FC<{ to: string; icon: React.ReactNode; label: string }> = ({ to, icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `w-12 h-12 rounded-full flex items-center justify-center transition-all ${
        isActive ? 'bg-[#2a6c2c] text-white shadow-lg' : 'text-[#5c605d] hover:bg-white'
      }`
    }
    title={label}
  >
    {icon}
  </NavLink>
);

const MobileNavItem: React.FC<{ to: string; icon: React.ReactNode; label: string }> = ({ to, icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex flex-col items-center justify-center px-4 py-2 rounded-2xl transition-all ${
        isActive ? 'bg-[#2a6c2c] text-white shadow-md' : 'text-[#5c605d]'
      }`
    }
  >
    {icon}
    <span className="text-[10px] font-bold uppercase tracking-wider mt-1">{label}</span>
  </NavLink>
);

export default Layout;
