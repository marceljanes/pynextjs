"use client"
import './globals.css'
import HeaderCompStandard from './components/header/headerComp'
import FooterCompStandard from './components/footer/footerComp'
import Breadcrumb from './components/breadcrumb/breadcrumbComp'
import { useState } from 'react'
import { Analytics } from '@vercel/analytics/react';





export default function RootLayout({ children }) {
  const [mode, setMode] = useState(true)
  return (
    <html lang="en">      
      <body>
        <div className="bg-stone-100">
         <HeaderCompStandard mode={mode} setMode={setMode} />
        </div>        
        <div className="flex flex-row w-full">
          {mode ? <div className="w-0 md:w-1/4 bg-white"></div> : <div className="w-0 md:w-1/4 bg-zinc-800"></div> }
          <div className="w-full md:w-1/2 bg-stone-100 border-t-green-200 border-t-8 min-h-screen p-5">            
            <Breadcrumb />
            {children}
            <Analytics />
          </div>
            {mode ? <div className="w-0 md:w-1/4 bg-white"></div> : <div className="w-0 md:w-1/4 bg-zinc-800"></div> }


        </div>
        <FooterCompStandard />
       
       </body>
    </html>
  )
}
