"use client"
import './globals.css'
import HeaderCompStandard from './components/header/headerComp'
import FooterCompStandard from './components/footer/footerComp'
import Breadcrumb from './components/breadcrumb/breadcrumbComp'
import { useState } from 'react'
import { Analytics } from '@vercel/analytics/react';




export default function RootLayout({ children }) {
  const [mode, setMode] = useState(true);
  return (
    <html lang="en">      
      <body>
        <div className="bg-stone-100">
         <HeaderCompStandard mode={mode} setMode={setMode} />
        </div>        
        <div className="flex flex-col md:flex-row w-full">
          {mode ? 
            <div className="hidden md:block md:w-1/4 bg-white"></div> : 
            <div className="hidden md:block md:w-1/4 bg-zinc-800"></div> 
          }
          <div className="w-full max-w-4xl mx-auto bg-stone-100 min-h-screen p-5">            
            <Breadcrumb />
            {children}
            <Analytics />
          </div>
          {mode ? 
            <div className="hidden md:block md:w-1/4 bg-white"></div> : 
            <div className="hidden md:block md:w-1/4 bg-zinc-800"></div> 
          }
        </div>
        <FooterCompStandard />
      </body>
    </html>
  );
}
