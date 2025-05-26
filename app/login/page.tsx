// app/login/page.tsx
import React from 'react';
import type { Metadata } from 'next';
import AuthForm from '@/components/auth/AuthForm'; // Adjust path if your component is elsewhere

export const metadata: Metadata = {
  title: 'Login - Fanora',
  description: 'Log in to your Fanora account.',
};

const LoginPage = () => {
  return <AuthForm mode="login" />;
};

export default LoginPage;