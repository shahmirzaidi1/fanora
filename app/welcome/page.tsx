import { redirect } from 'next/navigation';

export default function HomePage() {
  redirect('/welcome/landing');
  // This component will not render anything as redirect() will take over.
  // You can optionally return null or a loading indicator if needed,
  // but for a direct redirect, this is sufficient.
  return null;
}