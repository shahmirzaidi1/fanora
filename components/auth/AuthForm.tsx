// src/components/auth/AuthForm.tsx
"use client";

import React, { useState, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/supabase';

interface AuthFormProps {
  mode: 'login' | 'signup';
}

const AuthForm: React.FC<AuthFormProps> = ({ mode }) => {
  const [name, setName] = useState(''); // Only for signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // Only for signup
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    if (mode === 'signup') {
      if (!name.trim()) {
        setError("Name is required.");
        setIsLoading(false);
        return;
      }
      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        setIsLoading(false);
        return;
      }
    }

    if (!email.trim() || !password.trim()) {
        setError("Email and password are required.");
        setIsLoading(false);
        return;
    }

    // Supabase Authentication
    if (mode === 'login') {
      try {
        console.log('Attempting login with:', { email, password });
        const { data, error } = await auth.signIn(email, password);
        
        if (error) {
          setError(error.message || "Invalid credentials.");
        } else if (data.user) {
          console.log('Login successful');
          router.push('/welcome'); // Redirect to welcome page after login
        }
      } catch (err) {
        setError("Failed to login. Please try again.");
        console.error("Login error:", err);
      } finally {
        setIsLoading(false);
      }
    } else { // Signup mode
      try {
        console.log('Attempting signup with:', { name, email, password });
        const { data, error } = await auth.signUp(email, password);
        
        if (error) {
          setError(error.message || "Failed to create account.");
        } else if (data.user) {
          console.log('Signup successful:', data);
          // Show success message and redirect to login
          setError(null);
          alert('Account created successfully! Please check your email to verify your account.');
          router.push('/login');
        }
      } catch (err) {
        setError("Failed to create account. Please try again.");
        console.error("Signup error:", err);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const pageTitle = mode === 'login' ? 'Log In to Fanora' : 'Create Your Fanora Account';
  const submitButtonText = mode === 'login' ? 'Log In' : 'Sign Up';
  const switchLinkHref = mode === 'login' ? '/signup' : '/login';
  const switchLinkText = mode === 'login' ? "Don't have an account? Sign Up" : "Already have an account? Log In";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-8 sm:p-10 bg-white shadow-xl rounded-xl">
        <div>
          <Link href="/" className="flex justify-center">
            <h1 className="text-3xl font-extrabold text-center">
                <span className="text-gray-800">Fan</span><span className="logo-accent">ora</span>
            </h1>
          </Link>
          <h2 className="mt-6 text-center text-2xl sm:text-3xl font-bold text-gray-900">
            {pageTitle}
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="p-3 my-2 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm">
              <p>{error}</p>
            </div>
          )}
          <div className="rounded-md shadow-sm -space-y-px">
            {mode === 'signup' && (
              <div>
                <label htmlFor="name" className="sr-only">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required={mode === 'signup'}
                  className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isLoading}
                />
              </div>
            )}
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 ${mode === 'signup' ? '' : 'rounded-t-md'} ${mode === 'login' && !mode.includes('signup') ? 'rounded-b-md' : ''} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete={mode === 'login' ? "current-password" : "new-password"}
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 ${mode === 'signup' ? '' : 'rounded-b-md'} ${mode === 'signup' && !confirmPassword ? 'rounded-b-md' : ''} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
              />
            </div>
            {mode === 'signup' && (
              <div>
                <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  autoComplete="new-password"
                  required={mode === 'signup'}
                  className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={isLoading}
                />
              </div>
            )}
          </div>

          {mode === 'login' && (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <Link href="/forgot-password" // Added a link for forgot password
                  className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </Link>
              </div>
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400 disabled:cursor-not-allowed"
            >
              {isLoading && (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              )}
              {isLoading ? 'Processing...' : submitButtonText}
            </button>
          </div>
        </form>

        <div className="mt-6">
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3">
                {/* --- NextAuth.js Social Login Placeholder --- */}
                {/* Example for Google:
                <div>
                    <button
                        // onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
                        onClick={() => console.log('Sign in with Google clicked')}
                        disabled={isLoading}
                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                    >
                        <span className="sr-only">Sign in with Google</span>
                        {/* Google SVG Icon - replace with your actual SVG or an icon library component *//*}
                        <svg className="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 9.997c0-.174-.008-.344-.022-.512H10.201v1.946h5.501c-.236 1.246-.995 2.493-2.223 3.273v1.587h2.046c1.194-1.096 1.891-2.676 1.891-4.294z" />
                            <path d="M10.201 20c2.624 0 4.832-1.004 6.437-2.712l-2.047-1.587c-.873.586-1.995.931-3.266.931-2.512 0-4.648-1.685-5.408-3.955H2.688v1.647C4.301 17.852 7.026 20 10.201 20z" />
                            <path d="M4.793 12.045c-.113-.33-.174-.68-.174-1.045s.06-.715.174-1.045V8.308H2.688c-.344.68-.537 1.42-.537 2.192s.193 1.512.537 2.192l2.105-1.647z" />
                            <path d="M10.201 3.859c1.466 0 2.725.484 3.746 1.449l1.729-1.729C14.254 1.988 12.31 0 10.201 0 7.026 0 4.301 2.148 2.688 4.956l2.105 1.647c.76-2.27 2.896-3.744 5.408-3.744z" />
                        </svg>
                        Sign in with Google
                    </button>
                </div>
                */}
                 <div>
                    <button
                        onClick={() => console.log('Social login provider placeholder clicked')}
                        disabled={isLoading}
                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                    >
                        <span className="sr-only">Sign in with Provider</span>
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.5 9.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm9 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM10 14a4 4 0 003.464-6H6.536A4 4 0 0010 14z"></path></svg>
                        Sign in with Example Provider
                    </button>
                </div>
            </div>
        </div>

        <div className="text-sm text-center mt-8">
          <Link href={switchLinkHref} className="font-medium text-indigo-600 hover:text-indigo-500">
            {switchLinkText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;