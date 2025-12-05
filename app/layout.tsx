import type { Metadata } from 'next';
import { Albert_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const albertSans = Albert_Sans({
  variable: '--font-albert-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Vista Studio',
  description:
    'Créateur de Sites Web, Applications mobiles et Content Management Instagram',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${albertSans.variable} } antialiased`}>
        <main className="flex min-h-screen min-w-full w-full mx-auto flex-col items-center justify-start bg-white">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
