import React, { useEffect, useState } from 'react';
import { BiSolidSun, BiSolidMoon } from 'react-icons/bi';

const DarkMode = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="relative">
      {theme === 'dark' ? (
        <BiSolidSun 
          onClick={() => setTheme('light')} 
          className="text-2xl cursor-pointer transition-all duration-300" 
        />
      ) : (
        <BiSolidMoon 
          onClick={() => setTheme('dark')} 
          className="text-2xl cursor-pointer transition-all duration-300" 
        />
      )}
    </div>
  );
};

export default DarkMode;