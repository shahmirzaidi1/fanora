// app/signup/page.tsx
import React from 'react';
import type { Metadata } from 'next';
import AuthForm from '@/components/auth/AuthForm'; // Adjust path if your component is elsewhere

export const metadata: Metadata = {
  title: 'Sign Up - Fanora',
  description: 'Create a new Fanora account.',
};

const SignUpPage = () => {
  return <AuthForm mode="signup" />;
};

export default SignUpPage;