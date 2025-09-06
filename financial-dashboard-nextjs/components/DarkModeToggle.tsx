'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-10 h-8 skeleton animate-shimmer rounded-lg" />;

  const current = theme === 'system' ? systemTheme : theme;
  return (
    <button
      onClick={() => setTheme(current === 'dark' ? 'light' : 'dark')}
      className="btn btn-outline rounded-lg"
      aria-label="Toggle Dark Mode"
      title="Toggle dark mode"
    >
      {current === 'dark' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}
