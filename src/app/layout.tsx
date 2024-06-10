"use client";

import React, { useEffect } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/app/components/Navbar';
import gsap from 'gsap';

// フォントの指定
const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  useEffect(() => {
    gsap.fromTo(
      'body',
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    );
  }, []);

  return (
    <html lang="ja">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
