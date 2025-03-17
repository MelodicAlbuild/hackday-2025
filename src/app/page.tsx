'use client';

import {useState} from 'react';
import Image from "next/image";
import {Menu, X } from "lucide-react";

export default function Home() {
  const[isOpen, setIsOpen] = useState(false);

  return (
    <div className="scrollbar-hide bg-gradient-to-t from-neutral-900 via-blue-900 to-pink-800 min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-[100] bg-gradient-to-r from-purple-950 via-blue-900 to-purple-950 px-[15px] text-center fancy-shadow md:h-16">
        <div className="flex items-center justify-between h-full px-5 md:px-20">
          <div className="flex items-center">
            <Image src="/Logo.svg" alt="Main Logo" width={33} height={37} priority />
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-24 justify-center w-full">
            {[
              { name: "Home", href: "#" },
              { name: "Apply", href: "#apply" },
              { name: "The Founder's Arena", href: "#founders-arena" },
              { name: "Schedule", href: "#schedule" },
              { name: "About Us", href: "#about" },
              { name: "FAQ", href: "#faq" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <a key={item.name} href={item.href} className="font-franklinGothic text-2xl font-normal hover:text-purple-300 transition">
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Navigation */}
          <button className="md:hidden text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
              {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
          <div
            className={`absolute top-full left-0 w-full bg-purple-950 bg-opacity-80 backdrop-blur-md flex flex-col items-center space-y-4 py-4 transition-all ${
              isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            {[
              { name: "Home", href: "#" },
              { name: "Apply", href: "#apply" },
              { name: "The Founder's Arena", href: "#founders-arena" },
              { name: "Schedule", href: "#schedule" },
              { name: "About Us", href: "#about" },
              { name: "FAQ", href: "#faq" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <a key={item.name} href={item.href} className="font-franklinGothic text-white text-xl font-normal hover:text-purple-300 transition" onClick={() => setIsOpen(false)}>
                {item.name} 
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Scrollable Content Wrapper */}
      <div className="relative w-full min-h-[130vh] md:min-h-[170vh] flex justify-center items-start"/>      {/* Logo Container (Moves Together) */}
      {/* Logos - Ensure They Appear on Top */}
      <div className="absolute w-full top-[5%] sm:top-[20%] md:top-[15%] lg:top-[20%] left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center">
        <Image
          src="/Logo.svg"
          alt="Main Logo"
          className="absolute bottom-[-400px] sm:bottom-[-400px] md:bottom-[-450px] w-[50%] sm:w-[60%] max-w-[250px] sm:max-w-[300px] md:max-w-[400px] h-auto z-50"
          width={402}
          height={439}
        />
        <Image
          src="/HackDayLogo.svg"
          alt="Hack Day Logo"
          className="absolute bottom-[-460px] sm:bottom-[-460px] md:bottom-[-560px] w-[50%] sm:w-[60%] max-w-[250px] sm:max-w-[300px] md:max-w-[400px] h-auto z-50"
          width={418}
          height={113}
        />
      </div>

      {/* Buildings + Glow (Moves Together) */}
      <div className="absolute w-full top-[70%] sm:top-[75%] md:top-[50%] left-0 flex justify-center items-end">
        <div className="relative w-full">
          <Image
            src="/BuildingGlow.svg"
            alt="Building Glow"
            className="absolute top-[40px] sm:top-[60px] md:top-[40px] w-full h-auto z-10 building-glow-mask"
            width={1438}
            height={730}
          />
          <Image
            src="/Buildings.svg"
            alt="Buildings"
            className="absolute top-0 w-full h-auto z-20 building-mask"
            width={1440}
            height={761}
          />
        </div>
      </div>


      {/* Information Section */}
      <div className="font-franklinCondensed text-white text-center w-[100vw] mx-auto px-6 sm:px-10 p-[40px] mt-[-150px]">        <section id='apply' className="scroll-mt-16 pt-10 mx-auto p-[40px] sm:p-[50px] flex flex-col items-center p-[50px]">
          <h2 className="text-5xl font-bold">ARE YOU READY TO GO BEYOND?</h2>
        </section>
        <section id='apply' className="w-full flex justify-center">
        <a href='https://docs.google.com/forms/d/e/1FAIpQLScBIrfcTsXM32cx4RX1HQItdzIkzVIVj57EL1k5caWSw_btdA/viewform?usp=sharing'
          target='_blank'
          rel='noopener noreferrer'
          className='relative px-8 py-3 text-2xl font-semibold text-white rounded-full transition duration-300
          bg-gradient-to-r from-purple-600 to-red-500 hover:from-purple-600 hover:to-blue-600 shadow-lg hover:shadow-xl w-[90%] max-w-[300px] text-center'>
            APPLY NOW
          </a>
        </section>
        <section id="founders-arena" className="scroll-mt-16 pt-40 mx-auto p-[40px] flex flex-col items-center">
          <h3 className="text-3xl font-normal text-center mb-10 max-w-[500px]">
            Brought to you by...
          </h3>
          <Image
            src="/FoundersArena.svg"
            alt="FoundersArena"
            className="mb-4"
            width={300}
            height={100}
          />
          <h2 className="text-5xl font-bold text-center max-w-[500px]">
            THE FOUNDER'S ARENA
          </h2>
          <p className="text-2xl mt-4 font-normal text-center max-w-[600px]">
            The Founders Arena is a unique and first-of-its-kind "go-to-market" Accelerator 
            specifically for WealthTech companies looking to scale across the global WealthTech 
            market. With a team of Executive Ambassadors, industry experts can guide and drive 
            our start-ups to quicker growth...
          </p>
        </section>
        <section id='schedule' className="scroll-mt-16 pt-10 mx-auto p-[50px]">
          <h2 className="text-5xl font-bold">HackDay Schedule</h2>
          <p className="text-2xl mt-4">W.I.P.</p>
        </section>
        <section id='about' className="scroll-mt-16 pt-10 mx-auto p-[50px]">
          <h2 className="text-5xl font-bold">Meet the Team</h2>
          <p className="text-2xl mt-4">HackUTA Team Information</p>
        </section>
      </div>

    </div>
  );
}
