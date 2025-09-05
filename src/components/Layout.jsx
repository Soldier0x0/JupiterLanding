import React from 'react';
import TopBar from './TopBar';
import SideNav from './SideNav';
import WebGLBackground from './WebGLBackground';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <WebGLBackground />
      <div className="relative z-10 flex">
        <SideNav />
        <div className="flex-1">
          <TopBar />
          <main className="p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;