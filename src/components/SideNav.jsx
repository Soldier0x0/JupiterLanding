import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Info, Briefcase, Mail, Menu } from 'lucide-react';

const SideNav = () => {
  const links = [
    { path: '/', label: 'Dashboard', icon: Home },
    { path: '/about', label: 'About', icon: Info },
    { path: '/services', label: 'Features', icon: Briefcase },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav className="bg-zinc-900/80 backdrop-blur-sm w-64 h-screen border-r border-zinc-800 p-4">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-lg"></div>
          <span className="font-bold text-lg">Jupiter</span>
        </div>
        <button className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-200 transition-all duration-200">
          <Menu size={16} />
        </button>
      </div>
      
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'nav-link-active' : ''}`
              }
            >
              <link.icon size={20} />
              <span>{link.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
      
      <div className="mt-8 p-4 bg-zinc-800 rounded-xl">
        <h3 className="text-sm font-medium text-zinc-300 mb-2">Security Status</h3>
        <div className="space-y-2 text-xs text-zinc-400">
          <div className="flex justify-between">
            <span>Threats</span>
            <span className="text-red-400">3</span>
          </div>
          <div className="flex justify-between">
            <span>Sources</span>
            <span className="text-teal-400">12</span>
          </div>
          <div className="flex justify-between">
            <span>Privacy Score</span>
            <span className="text-green-400">85%</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideNav;