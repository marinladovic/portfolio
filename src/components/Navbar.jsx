import { useState, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import ToggleTheme from './ToggleTheme';

function Navbar({ scrolled }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav
      className={`${
        scrolled ? 'scrolled' : 'hidden'
      } flex justify-between w-full border border-accent text-accent`}
    >
      {/* <Link to="/"> */}
      <a href="#top">
        <h1 className="text-accent uppercase font-semibold p-2">
          Marin Ladović{' '}
          <span className="hidden sm:inline-block font-light">
            | Web developer
          </span>
        </h1>
      </a>
      {/* </Link> */}
      <div className="flex gap-4 justify-end items-center">
        <ToggleTheme />
        <section className="md:hidden">
          <Menu>
            <div className="flex justify-center items-center">
              <Menu.Button
                onClick={() => setIsNavOpen(!isNavOpen)}
                id="menu-btn"
                type="button"
                className={`z-40 block hamburger md:hidden focus:outline-none ${
                  isNavOpen ? 'open' : ''
                }`}
              >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-in duration-300"
              enterFrom="transform scale-0"
              enterTo="transform scale-100"
              leave="transition ease-in duration-300"
              leaveFrom="transform scale-100"
              leaveTo="transform scale-0"
            >
              <Menu.Items className="absolute top-0 left-0 w-full h-screen origin-top-right bg-primary z-[39] p-10">
                <div className="border border-accent w-full h-full flex flex-col gap-8 justify-center items-center uppercase font-mono text-3xl">
                  <Menu.Item>
                    <div className="cursor-pointer px-4 py-2 hover:font-bold hover:text-primary hover:bg-accent transition duration-150">
                      <a href="#projects" onClick={() => setIsNavOpen(false)}>
                        Projects
                      </a>
                    </div>
                  </Menu.Item>
                  <Menu.Item>
                    <div className="cursor-pointer px-4 py-2 hover:font-bold hover:text-primary hover:bg-accent transition duration-150">
                      <a href="#about" onClick={() => setIsNavOpen(false)}>
                        Bio
                      </a>
                    </div>
                  </Menu.Item>
                  <Menu.Item>
                    <div className="cursor-pointer px-4 py-2 hover:font-bold hover:text-primary hover:bg-accent transition duration-150">
                      <a href="#contact" onClick={() => setIsNavOpen(false)}>
                        Contact
                      </a>
                    </div>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </section>
        <section className="hidden md:flex justify-end items-center uppercase font-mono">
          <a
            href="#projects"
            className="cursor-pointer px-4 py-2 border-l border-accent hover:bg-accent hover:text-primary transition duration-150"
          >
            Projects
          </a>
          <a
            href="#about"
            className="cursor-pointer px-4 py-2 border-l border-accent hover:bg-accent hover:text-primary transition duration-150"
          >
            Bio
          </a>
          <a
            href="#contact"
            className="cursor-pointer px-4 py-2 border-l border-accent hover:bg-accent hover:text-primary transition duration-150"
          >
            Contact
          </a>
        </section>
      </div>
    </nav>
  );
}

export default Navbar;
