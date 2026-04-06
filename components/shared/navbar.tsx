"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#" },
  { label: "Resources", href: "#" },
];

export default function Navbar() {
  const [activeNav, setActiveNav] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isMobileMenuOpen &&
        !target.closest(".mobile-menu") &&
        !target.closest(".menu-button")
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Handle window resize to close mobile menu when switching to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // lg breakpoint is 1024px
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        className={`
        w-full h-16 lg:h-22.25 
        bg-[#ffffff] 
        shadow-[0px_4px_62px_#f9c4d2a1] 
        flex items-center 
        px-4 sm:px-6 md:px-12 lg:px-25 
        fixed top-0 z-50
        transition-all duration-300
        ${isScrolled ? "shadow-lg" : ""}
      `}>
        {/* Logo */}
        <div className='shrink-0'>
          <Image
            alt='Google logo wine'
            src='/Google-Logo.png'
            width={100}
            height={400}
            className='lg:w-31.25 w-22.5 h-auto'
          />
        </div>

        {/* Desktop Navigation - Hidden on mobile and tablet, visible on lg screens */}
        <nav className='hidden lg:flex items-center gap-4 xl:gap-6.25 mx-auto'>
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => {
                setActiveNav(link.label);
                // Smooth scroll to section if href is not "#"
                if (link.href !== "#") {
                  const element = document.querySelector(link.href);
                  element?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className={
                activeNav === link.label
                  ? "inline-flex h-10.25 items-center justify-center gap-0.75 border-b-2 border-[#ed3c6a] font-bold text-[#ed3c6a] text-sm xl:text-base 2xl:text-lg leading-6.75 whitespace-nowrap tracking-[0] bg-transparent cursor-pointer transition-colors duration-200"
                  : "inline-flex items-center gap-0.75 font-normal text-[#1e1e1e] text-sm xl:text-base 2xl:text-lg tracking-[0] leading-6.75 whitespace-nowrap bg-transparent cursor-pointer border-none hover:text-[#ed3c6a] transition-colors duration-200"
              }>
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop Button - Hidden on mobile and tablet, visible on lg screens */}
        <div className='hidden lg:block shrink-0'>
          <Button className='flex items-center justify-center gap-2 px-3 py-2.5 lg:px-4 lg:py-3 xl:px-4.5 xl:py-5.5 bg-[#ED3C6A] rounded-[5px] overflow-hidden hover:bg-[#d4325a] border-none cursor-pointer transition-all duration-200 hover:scale-105'>
            <span className=' font-bold text-[#ffffff] text-xs xl:text-sm text-center tracking-[0] leading-3.5 whitespace-nowrap'>
              Schedule A Meeting
            </span>
            <ArrowRight className='w-3 h-3 xl:w-4 xl:h-4' />
          </Button>
        </div>

        {/* Mobile Menu Button - Visible on screens smaller than lg (below 1024px) */}
        <button
          className='lg:hidden ml-auto menu-button p-2 hover:bg-gray-100 rounded-lg transition-colors'
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label='Toggle menu'>
          {isMobileMenuOpen ? (
            <X className='w-6 h-6 text-[#ed3c6a]' />
          ) : (
            <Menu className='w-6 h-6 text-[#ed3c6a]' />
          )}
        </button>
      </header>

      {/* Mobile Menu Overlay - Visible on screens smaller than lg */}
      {isMobileMenuOpen && (
        <div className='fixed inset-0 z-40 lg:hidden'>
          {/* Backdrop */}
          <div
            className='absolute inset-0 bg-black/50 backdrop-blur-sm'
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Mobile Menu */}
          <div className='mobile-menu absolute top-16 lg:top-22.25 left-0 right-0 bg-white shadow-xl animate-slide-down'>
            <nav className='flex flex-col py-4 max-h-[calc(100vh-4rem)] overflow-y-auto'>
              {navLinks.map((link, index) => (
                <button
                  key={link.label}
                  onClick={() => {
                    setActiveNav(link.label);
                    if (link.href !== "#") {
                      const element = document.querySelector(link.href);
                      element?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className={`
                    px-6 py-4 text-left transition-all duration-200
                    ${
                      activeNav === link.label
                        ? "bg-[#ed3c6a]/10 text-[#ed3c6a] font-bold border-l-4 border-[#ed3c6a]"
                        : "text-[#1e1e1e] font-normal hover:bg-gray-50"
                    }
                     text-lg
                  `}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: "fadeIn 0.3s ease-out forwards",
                    opacity: 0,
                  }}>
                  {link.label}
                </button>
              ))}

              {/* Mobile Button */}
              <div className='px-6 pt-4 pb-6'>
                <Button
                  className='w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#ed3c6a] rounded-[5px] hover:bg-[#d4325a] border-none cursor-pointer transition-all duration-200'
                  onClick={() => {
                    console.log("Schedule meeting clicked");
                    setIsMobileMenuOpen(false);
                  }}>
                  <span className=' font-bold text-[#ffffff] text-sm text-center tracking-[0] leading-3.5 whitespace-nowrap'>
                    Schedule A Meeting
                  </span>
                  <ArrowRight className='w-4 h-4' />
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Add custom animations */}
      <style jsx global>{`
        @keyframes slide-down {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
