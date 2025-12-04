import type { Metadata } from 'next';
import { Albert_Sans } from 'next/font/google';
import '../globals.css';

const albertSans = Albert_Sans({
  variable: '--font-albert-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Vista Studio - Content Management',
  description:
    'Créateur de Sites Web, Applications mobiles et Content Management Instagram',
};

export default function InstaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${albertSans.variable} } antialiased`}>
        <main className="flex w-full mx-auto flex-col items-center justify-start bg-white">
          {children}
        </main>
      </body>
    </html>
  );
}
