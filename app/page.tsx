import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Home",
  description: "Liam Mahoney's Personal Website",
};

export default function HomePage() {
  return (
    <>
      <Welcome />
    </>
  );
}
