import React from 'react';
import { Bell, User, Settings } from 'lucide-react';
import InteractiveButton from './InteractiveButton';

const TopBar = () => {
  return (
    <div className="bg-zinc-900/80 backdrop-blur-sm border-b border-zinc-800 shadow-card p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold gradient-text">Jupiter Landing</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-200 transition-all duration-200">
          <Bell size={20} />
        </button>
        
        <InteractiveButton variant="gradient" successText="Welcome!">
          Get Started
        </InteractiveButton>
        
        <div className="flex items-center space-x-2 bg-zinc-800 px-4 py-2 rounded-xl">
          <User size={16} className="text-zinc-400" />
          <span className="text-sm text-zinc-300">Profile</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;