import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { useCallback, useEffect, useRef, useState } from "react";
import '../Navbar/Navbar.css'
import { logout } from "../../Firebase";

const Navbar: React.FC = () => {
  const navRef = useRef<HTMLDivElement | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll: () => void = useCallback(() => {
    if (window.scrollY >= 80) {
      navRef.current?.classList.add('nav-dark')
    } else {
      navRef.current?.classList.remove('nav-dark')
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  // Close mobile menu when clicking outside or on scroll
  useEffect(() => {
    const closeMobileMenu = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      window.addEventListener('scroll', closeMobileMenu);
      document.addEventListener('click', closeMobileMenu);
    }

    return () => {
      window.removeEventListener('scroll', closeMobileMenu);
      document.removeEventListener('click', closeMobileMenu);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false); // Close menu when item is clicked
  };

  return (
    <div ref={navRef}
      className="navbar w-full py-3 sm:py-4 md:py-5 px-4 sm:px-[4%] md:px-[6%] flex justify-between items-center fixed top-0 left-0
      text-xs sm:text-sm text-[#e5e5e5] bg-[linear-gradient(180deg,rgba(0,0,0,0.7)_10%,transparent)] z-50 transition-all duration-300">
      
      <div className="navbar-left flex items-center gap-4 sm:gap-8 md:gap-12">
        <img src={logo} alt="netflix-logo" className="h-4 sm:h-5 md:h-[25px] w-auto flex-shrink-0 cursor-pointer" />
        
        {/* Desktop Navigation */}
        <ul className="hidden lg:flex list-none gap-4 xl:gap-5">
          <li className="cursor-pointer hover:text-white transition-colors duration-200">Home</li>
          <li className="cursor-pointer hover:text-white transition-colors duration-200">TV Shows</li>
          <li className="cursor-pointer hover:text-white transition-colors duration-200">Movies</li>
          <li className="cursor-pointer hover:text-white transition-colors duration-200">New & Popular</li>
          <li className="cursor-pointer hover:text-white transition-colors duration-200">My List</li>
          <li className="cursor-pointer hover:text-white transition-colors duration-200 whitespace-nowrap">Browse by Languages</li>
        </ul>

        {/* Mobile/Tablet Browse Button */}
        <button 
          onClick={toggleMobileMenu}
          className="lg:hidden text-xs sm:text-sm cursor-pointer hover:text-white transition-colors duration-200 flex items-center gap-1 
                     bg-transparent border-none outline-none p-1 -m-1 rounded touch-manipulation"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          Browse
          <img 
            src={caret_icon} 
            alt="browse_icon" 
            className="h-3 sm:h-4 transition-transform duration-200" 
            style={{ transform: isMobileMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} 
          />
        </button>
      </div>

      {/* Mobile/Tablet Dropdown Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm border-t border-gray-800 
                       transition-all duration-300 overflow-hidden ${
                         isMobileMenuOpen 
                           ? 'opacity-100 visible max-h-96 translate-y-0' 
                           : 'opacity-0 invisible max-h-0 -translate-y-2'
                       }`}>
        <ul className="flex flex-col p-4 gap-1 text-sm">
          <li onClick={handleMenuItemClick} className="cursor-pointer hover:text-white transition-colors duration-200 py-2 px-2 rounded hover:bg-white/10">
            Home
          </li>
          <li onClick={handleMenuItemClick} className="cursor-pointer hover:text-white transition-colors duration-200 py-2 px-2 rounded hover:bg-white/10">
            TV Shows
          </li>
          <li onClick={handleMenuItemClick} className="cursor-pointer hover:text-white transition-colors duration-200 py-2 px-2 rounded hover:bg-white/10">
            Movies
          </li>
          <li onClick={handleMenuItemClick} className="cursor-pointer hover:text-white transition-colors duration-200 py-2 px-2 rounded hover:bg-white/10">
            New & Popular
          </li>
          <li onClick={handleMenuItemClick} className="cursor-pointer hover:text-white transition-colors duration-200 py-2 px-2 rounded hover:bg-white/10">
            My List
          </li>
          <li onClick={handleMenuItemClick} className="cursor-pointer hover:text-white transition-colors duration-200 py-2 px-2 rounded hover:bg-white/10">
            Browse by Languages
          </li>
        </ul>
      </div>

      <div className="navbar-right flex gap-2 sm:gap-3 md:gap-4 lg:gap-5 items-center">
        {/* Search Icon - Hidden on very small screens, shown as icon only on small screens */}
        <button className="bg-transparent border-none outline-none p-1 -m-1 rounded touch-manipulation">
          <img
            src={search_icon}
            alt="search_icon"
            className="icons w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 cursor-pointer hover:opacity-80 transition-opacity duration-200 flex-shrink-0"
          />
        </button>
        
        {/* Hide "Children" text on small screens */}
        <p className="hidden md:block text-xs sm:text-sm cursor-pointer hover:text-white transition-colors duration-200 whitespace-nowrap">
          Children
        </p>
        
        {/* Notification Icon */}
        <button className="bg-transparent border-none outline-none p-1 -m-1 rounded touch-manipulation">
          <img
            src={bell_icon}
            alt="bell_icon"
            className="icons w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 cursor-pointer hover:opacity-80 transition-opacity duration-200 flex-shrink-0"
          />
        </button>
        
        <div className="navbar-profile flex items-center gap-1 sm:gap-2 cursor-pointer relative group">
          <img
            src={profile_img}
            alt="profile_img"
            className="profile rounded h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 object-cover flex-shrink-0"
          />
          <img 
            src={caret_icon} 
            alt="caret_icon" 
            className="h-3 sm:h-4 md:h-5 transition-transform duration-200 group-hover:rotate-180 flex-shrink-0" 
          />
          
          <div className="dropdown absolute top-[100%] right-0 w-max bg-[#191919] 
                         px-3 py-3 sm:px-4 sm:py-4 md:px-[18px] md:py-[22px] 
                         rounded-sm z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                         transition-all duration-200 transform translate-y-2 group-hover:translate-y-0
                         border border-gray-700 shadow-lg min-w-[140px]">
            <p 
              onClick={() => logout()} 
              className="text-xs sm:text-sm cursor-pointer hover:text-white transition-colors duration-200 whitespace-nowrap"
            >
              Sign Out of Netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;