'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const dark = mounted && resolvedTheme === 'dark';
  const label = dark ? 'Switch to light mode' : 'Switch to dark mode';

  return <button type="button" aria-label={label} title={label} disabled={!mounted}
    onClick={() => setTheme(dark ? 'light' : 'dark')}
    className="flex min-h-9 items-center justify-center gap-2 rounded-md border border-border px-2.5 text-sm text-muted-foreground hover:bg-accent hover:text-foreground">
    {dark ? <Sun size={16} /> : <Moon size={16} />}
    {!compact && <span>{dark ? 'Light mode' : 'Dark mode'}</span>}
  </button>;
}
