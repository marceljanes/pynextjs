"use client"
import './globals.css';
import HeaderCompStandard from './components/header/headerComp';
import FooterCompStandard from './components/footer/footerComp';
import Breadcrumb from './components/breadcrumb/breadcrumbComp';
import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  const [mode, setMode] = useState(false);

  return (
    <html lang="en">      
      <body>
        <div className="bg-stone-100">
          
        </div>        
        <div className="flex flex-col md:flex-row w-full">
          {/* Sidebar (conditional rendering based on mode) */}
          {mode ? (
            <div className="hidden md:block md:w-1/4 bg-white"></div>
          ) : (
            <div className="hidden md:block md:w-1/4 bg-zinc-800"></div>
          )}

          {/* Main content area */}
          <div className="w-full md:w-1/2 mx-auto bg-stone-100 min-h-screen p-5">
            <Breadcrumb />
            {/* Render children here */}
            {children}
            <Analytics />
          </div>

          {/* Additional sidebar (conditional rendering based on mode) */}
          {mode ? (
            <div className="hidden md:block md:w-1/4 bg-white"></div>
          ) : (
            <div className="hidden md:block md:w-1/4 bg-zinc-800"></div>
          )}
        </div>
        <FooterCompStandard />
      </body>
    </html>
  );
}
