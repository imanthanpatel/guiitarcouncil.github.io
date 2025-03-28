// src/Components/Navbar.tsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";

// const logo1 = "/new.png";

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const toggleMenu = (): void => {
    setIsOpen((prev) => !prev);
  };

  const handleNavigation = (path: string): void => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[1000] bg-[var(--secondary-color)] shadow-md transition-all duration-300">
      <div className="flex justify-between items-center w-full max-w-full mx-auto px-5 py-[15px]">
        {/* Logo */}
        <div className="pl-5 flex items-center">
          <Link to="/" onClick={() => handleNavigation("/")}>
            <img 
              src="https://res.cloudinary.com/dopcjxehj/image/upload/v1743065708/new_f92wp6.png"
              alt="Logo" 
              className="h-[50px] cursor-pointer object-contain"
            />
          </Link>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`
            ${isOpen ? "flex" : "hidden"} 
            md:flex flex-col md:flex-row 
            md:items-center gap-[40px] 
            absolute md:static top-full left-0 w-full md:w-auto 
            bg-[var(--secondary-color)] py-4 md:py-0
            shadow-lg md:shadow-none z-[1001]
          `}
        >
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/funding", label: "Funding" },
            { path: "/workshop", label: "Workshop & Events" },
            { path: "/contact", label: "Contact" },
            { path: "/login", label: "Login" },
          ].map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                onClick={() => handleNavigation(item.path)}
                className="
                  block px-5 py-2 md:px-0 md:py-0 
                  text-[#333] text-[20px]
                  hover:text-[var(--primary-color)] transition-colors duration-300
                "
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;