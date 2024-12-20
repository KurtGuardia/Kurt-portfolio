import './globals.css';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Kurt Guardia',
  description: 'Explore the portfolio of Kurt Guardia, a passionate JavaScript developer specializing in creating user-friendly applications and elegant solutions. Discover projects, skills, and opportunities for collaboration.',
  keywords: 'JavaScript, Developer, Portfolio, Web Development, User Experience, React, Next.js, MERN Stack, Frontend Development',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
