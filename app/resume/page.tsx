'use client';

import { useEffect, useState, FormEvent } from 'react';
import { Lock, Mail, Eye, EyeOff, FileText } from 'lucide-react';
import { validatePassword } from './actions';

export default function ResumePage() {
  const [windowHeight, setWindowHeight] = useState('100vh');
  const [password, setPassword] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [lockTime, setLockTime] = useState(0);
  
  // Check for URL parameter or localStorage token on load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Check if we have a token in localStorage
        if (typeof window !== 'undefined') {
          const token = localStorage.getItem('resume_auth_token');
          if (token) {
            try {
              const isValid = await validatePassword({ token });
              if (isValid) {
                setIsAuthorized(true);
                return;
              } else {
                // Remove invalid token
                localStorage.removeItem('resume_auth_token');
              }
            } catch (error) {
              localStorage.removeItem('resume_auth_token');
            }
          }
        }
        
        // Check URL parameter
        const searchParams = new URLSearchParams(window.location.search);
        const urlPassword = searchParams.get('password');
        
        if (urlPassword) {
          try {
            setIsLoading(true);
            const isValid = await validatePassword({ password: urlPassword });
            if (isValid) {
              localStorage.setItem('resume_auth_token', isValid);
              setIsAuthorized(true);
            }
          } catch (error) {
            // URL parameter invalid
          } finally {
            setIsLoading(false);
          }
        }
      } catch (error) {
        console.error("Authentication error:", error);
      }
    };
    
    checkAuth();
    
    // Set window height for iframe
    setWindowHeight(`${window.innerHeight}px`);
    const handleResize = () => setWindowHeight(`${window.innerHeight}px`);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Check for lockout timer
  useEffect(() => {
    if (isLocked) {
      const interval = setInterval(() => {
        setLockTime(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            setIsLocked(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      
      return () => clearInterval(interval);
    }
  }, [isLocked]);

  const handlePasswordSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Check if account is locked
    if (isLocked) {
      return;
    }
    
    try {
      setIsLoading(true);
      const isValid = await validatePassword({ password });
      
      if (isValid) {
        localStorage.setItem('resume_auth_token', isValid);
        setIsAuthorized(true);
        setErrorMessage('');
      } else {
        const newAttempts = attempts + 1;
        setAttempts(newAttempts);
        
        // Lock account after 5 failed attempts
        if (newAttempts >= 5) {
          setIsLocked(true);
          setLockTime(30); // 30 second lockout
          setErrorMessage('Too many failed attempts. Please try again in 30 seconds.');
        } else {
          setErrorMessage('Incorrect password. Please try again.');
        }
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isAuthorized) {
    return (
      <div className="relative flex items-center justify-center min-h-screen p-4">
        {/* Blurred background with resume preview */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-md opacity-20"
          style={{ backgroundImage: 'url(/resume-preview.png)' }}
        />
        
        {/* NoScript fallback for users without JavaScript */}
        <noscript>
          <div className="fixed inset-0 bg-white dark:bg-neutral-900 z-50 flex items-center justify-center p-4">
            <div className="max-w-md p-6 bg-neutral-100 dark:bg-neutral-800 rounded-lg shadow-xl text-center">
              <FileText className="w-12 h-12 mx-auto mb-4 text-neutral-700 dark:text-neutral-300" />
              <h1 className="text-2xl font-bold mb-2 text-neutral-800 dark:text-neutral-200">JavaScript Required</h1>
              <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                Please enable JavaScript to view this protected resume or contact me directly.
              </p>
              <a 
                href="mailto:vincentiusrogerk@gmail.com"
                className="inline-flex items-center px-4 py-2 bg-neutral-800 text-white rounded-md hover:bg-neutral-700"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </a>
            </div>
          </div>
        </noscript>
        
        <div className="relative w-full max-w-md p-8 bg-white/90 backdrop-blur-sm rounded-lg shadow-xl dark:bg-neutral-900/90">
          <div className="flex flex-col items-center mb-6">
            <div className="p-3 mb-4 text-white bg-neutral-800 rounded-full">
              <Lock size={24} />
            </div>
            <h1 className="text-2xl font-bold text-center text-neutral-800 dark:text-neutral-200">
              Protected Resume
            </h1>
            <p className="mt-2 text-center text-neutral-600 dark:text-neutral-400">
              Please enter the password to view the resume
            </p>
          </div>
          
          <form onSubmit={handlePasswordSubmit}>
            <div className="relative mb-4">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Lock className="w-5 h-5 text-neutral-500" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-10 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white"
                placeholder="Enter password"
                disabled={isLocked || isLoading}
                required
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5 text-neutral-500" />
                ) : (
                  <Eye className="w-5 h-5 text-neutral-500" />
                )}
              </button>
            </div>
            
            {errorMessage && (
              <div className="mb-4 p-2 bg-red-100 border-l-4 border-red-500 text-sm text-red-700 dark:bg-red-900/30 dark:text-red-400">
                {errorMessage}
              </div>
            )}
            
            {isLocked && (
              <div className="mb-4 text-sm text-center text-neutral-600 dark:text-neutral-400">
                Account locked. Try again in {lockTime} seconds.
              </div>
            )}
            
            <button
              type="submit"
              disabled={isLocked || isLoading}
              className="w-full px-4 py-3 text-white bg-neutral-800 rounded-md hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Verifying..." : "Access Resume"}
            </button>
          </form>
          
          <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-700">
            <p className="text-sm text-center text-neutral-600 dark:text-neutral-400">
              Need access? Contact me at:
            </p>
            <a 
              href="mailto:vincentiusrogerk@gmail.com" 
              className="flex items-center justify-center mt-2 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
            >
              <Mail className="w-4 h-4 mr-2" />
              vincentiusrogerk@gmail.com
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: windowHeight }}>
      <iframe
        src="/resume.pdf"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        title="Resume PDF"
        aria-label="Resume Document"
        loading="lazy"
        referrerPolicy="no-referrer"
        allow="fullscreen"
      />
    </div>
  );
}
