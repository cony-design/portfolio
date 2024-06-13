"use client";

import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/app/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja" className={inter.className}>
      <body>
        <div className='l-page'>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
