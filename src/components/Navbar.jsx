import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ToggleTheme from './ToggleTheme';

function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <header className={`active ${show && 'hidden'}`}>
      <nav className="w-full flex justify-between items-center">
        <h1 className="p-4 text-accent uppercase font-semibold">
          Marin Ladović <span className="font-light">| Web developer</span>
        </h1>
        <ToggleTheme />
        <ul className="hidden md:flex uppercase text-accent">
          <li
            onClick={() => navigate('/')}
            className={
              pathMatchRoute('/')
                ? 'navigation-item__active'
                : 'navigation-item'
            }
          >
            Home
          </li>
          <li
            onClick={() => navigate('/projects')}
            className={
              pathMatchRoute('/projects')
                ? 'navigation-item__active'
                : 'navigation-item'
            }
          >
            Projects
          </li>
          <li
            onClick={() => navigate('/about')}
            className={
              pathMatchRoute('/about')
                ? 'navigation-item__active'
                : 'navigation-item'
            }
          >
            About
          </li>
          <li
            onClick={() => navigate('/contact')}
            className={
              pathMatchRoute('/contact')
                ? 'navigation-item__active'
                : 'navigation-item'
            }
          >
            Contact
          </li>
          <li
            onClick={() => navigate('/resume')}
            className={
              pathMatchRoute('/resume')
                ? 'navigation-item__active'
                : 'navigation-item'
            }
          >
            Resume
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
