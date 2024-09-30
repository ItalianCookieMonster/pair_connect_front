import { useState, useEffect, useRef } from "react";
import ModeToggle from "./ModeToggle";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";
import useLogout from "@/hooks/useLogout";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const { handleLogout } = useLogout();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);



  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const navlinks = [
    { name: "Home", to: "/" },
    { name: "Sobre nosotros", to: "/about-us" },
    { name: "Pair programming", to: "/pair-programming" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="px-6 py-4" style={{ boxShadow: "var(--shadow-custom)" }}>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Link href="/" onClick={handleLogoClick} className="h-10">
            <img src="/logo.svg" alt="logo" className="w-[35px]" />
          </Link>
          <span
            className="font-poppins font-bold text-[36px] leading-[120%] hidden md:block text-transparent bg-clip-text"
            style={{ backgroundImage: "var(--gradient)" }}
          >
            Pair Connect
          </span>
        </div>

        <div className="hidden lg:flex space-x-8">
          {navlinks.map((item) => (
            <NavLink key={item.name} to={item.to}>
              {item.name}
            </NavLink>
          ))}
          {isAuthenticated && (
            <>
              <NavLink to="/my-profile">Mi perfil</NavLink>
              <NavLink to="/projects">Mis proyectos</NavLink>
            </>
          )}
        </div>

        <div className="flex items-center space-x-4">
          <ModeToggle />
          {isAuthenticated ? (
            <Button onClick={handleLogout}>Log Out</Button>
          ) : (
            <Button><Link to="/login">Login</Link></Button>
          )}
          <div className="lg:hidden" ref={menuRef}>
            <button
              onClick={toggleMenu}
              className="focus:outline-none hover:text-primary"
            >
              <Menu size={40} />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="lg:hidden flex flex-col items-left space-y-2 py-5"
          ref={menuRef}
        >
          {navlinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className="hover:text-primary"
            >
              {item.name}
            </NavLink>
          ))}
          {isAuthenticated && (
            <>
              <NavLink to="/profile">Mi perfil</NavLink>
              <NavLink to="/projects">Mis proyectos</NavLink>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
