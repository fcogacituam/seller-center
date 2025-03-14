'use client';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { useEffect, useState } from 'react';
import { Button } from './ui/button';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="flex items-center space-x-2 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
      <Button variant={'link'} onClick={toggleTheme} className="cursor-pointer ">
        {theme === 'dark' ? (
          <Sun
            className={`h-[1.2rem] w-[1.2rem] transition-all  duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
              theme === 'dark' ? 'text-secondary rotate-12' : 'text-secondary  rotate-0'
            }`}
          />
        ) : (
          <Moon
            className={`h-[1.2rem] w-[1.2rem] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
              theme === 'light' ? 'text-secondary rotate-12' : 'text-secondary  rotate-0'
            }`}
          />
        )}
      </Button>
    </div>
  );
}
