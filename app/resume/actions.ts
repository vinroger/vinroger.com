'use server';

import { cookies } from 'next/headers';
import { SignJWT, jwtVerify } from 'jose';
import { headers } from 'next/headers';

// In a real app, store this in environment variables
const PASSWORD = '1gOaxs/1xuUC+S9zQ03LvQ==';
const JWT_SECRET = new TextEncoder().encode('c3ca0eb9a76dc0f974a34da8bbb36a9d67a2e8dd93c4df07c8c29a5e5d5a3a71');
const MAX_ATTEMPTS = 5;
const LOCKOUT_TIME = 30 * 1000; // 30 seconds in milliseconds

// This type defines the expected parameters for the validatePassword function
type ValidationParams = {
  password?: string;
  token?: string;
};

// Track failed attempts by IP to prevent brute force
const failedAttempts = new Map<string, { count: number; timestamp: number }>();

// Instead of using setInterval, we'll clean up on each validation attempt
function cleanupOldLockouts() {
  const now = Date.now();
  Array.from(failedAttempts.keys()).forEach(ip => {
    const data = failedAttempts.get(ip);
    if (data && now - data.timestamp > LOCKOUT_TIME) {
      failedAttempts.delete(ip);
    }
  });
}

export async function validatePassword(params: ValidationParams): Promise<string | false> {
  // Clean up old lockouts on each validation attempt
  cleanupOldLockouts();
  
  const { password, token } = params;
  
  // Get client IP for rate limiting
  const headersList = headers();
  const forwarded = headersList.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(/, /)[0] : headersList.get('x-real-ip') || 'unknown';
  
  // Check if IP is locked out
  const ipData = failedAttempts.get(ip);
  if (ipData && ipData.count >= MAX_ATTEMPTS) {
    const timeSinceLockout = Date.now() - ipData.timestamp;
    if (timeSinceLockout < LOCKOUT_TIME) {
      // Still locked out
      return false;
    } else {
      // Lockout expired, reset counter
      failedAttempts.delete(ip);
    }
  }
  
  // If a token is provided, verify it
  if (token) {
    try {
      const { payload } = await jwtVerify(token, JWT_SECRET);
      
      // Check if the token is valid and not expired
      if (payload && payload.sub === 'resume_access' && typeof payload.exp === 'number' && Date.now() < payload.exp * 1000) {
        return token;
      }
    } catch (error) {
      // Token is invalid
      return false;
    }
  }
  
  // If password is provided, verify it
  if (password) {
    // Check if the password is correct
    if (password === PASSWORD) {
      // Reset failed attempts for this IP
      failedAttempts.delete(ip);
      
      // Create a JWT token that expires in 24 hours
      const token = await new SignJWT({ role: 'viewer' })
        .setProtectedHeader({ alg: 'HS256' })
        .setSubject('resume_access')
        .setIssuedAt()
        .setExpirationTime('24h')
        .sign(JWT_SECRET);
      
      // Store in cookies for extra security
      cookies().set('resume_auth', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24, // 24 hours
        path: '/resume',
      });
      
      return token;
    } else {
      // Increment failed attempts for this IP
      const current = failedAttempts.get(ip) || { count: 0, timestamp: Date.now() };
      failedAttempts.set(ip, {
        count: current.count + 1,
        timestamp: Date.now()
      });
      
      // If max attempts reached, set lockout timestamp
      if (current.count + 1 >= MAX_ATTEMPTS) {
        failedAttempts.set(ip, {
          count: MAX_ATTEMPTS,
          timestamp: Date.now()
        });
      }
    }
  }
  
  return false;
} 