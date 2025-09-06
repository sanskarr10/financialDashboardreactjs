'use client';
import { useTheme } from 'next-themes';
import DarkModeToggle from './DarkModeToggle';
import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-30 border-b border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 backdrop-blur">
      <div className="container py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold">Wealth Portal</span>
          <div className="hidden md:flex items-center gap-2 text-sm">
            {['CRM','Utilities','Insurance','Assets','Mutual','Research','Transact Online','Goal GPS','Financial Planning','Wealth Report','Other'].map(item => (
              <button key={item} className="btn btn-outline rounded-lg px-2 py-1">{item}</button>
            ))}
          </div>
        </div>
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default NavBar;
