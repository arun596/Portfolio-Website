import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <section id='navbar'>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] text-white ${
        isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
      } ${isOpen ? "h-auto" : "h-16"}`}> {/* Added height control */}
        
        <div className={`flex items-center justify-between max-w-7xl mx-auto py-4 ${isOpen ? "pb-0" : ""}`}>
          <a href="#navbar" className="text-xl font-bold text-white hover:text-red-500 transition-colors">
            MyPortfolio
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6">
            {['home', 'skills', 'projects', 'education', 'contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item}`} 
                  className="cursor-pointer hover:text-red-500 transition-colors"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown - Now relative positioned */}
        <div className={`md:hidden w-full transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 py-4 mt-4" : "max-h-0 py-0"
        }`}>
          <ul className="flex flex-col items-center space-y-4">
            {['home', 'skills', 'projects', 'education', 'contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item}`} 
                  className="cursor-pointer hover:text-red-500 transition-colors text-lg"
                  onClick={closeMenu}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      
      {/* Spacer to prevent content from being hidden under fixed navbar */}
      <div className={`h-16 ${isOpen ? "md:h-16 h-[19rem]" : "h-16"}`}></div>
    </section>
  );
};

export default Navbar;