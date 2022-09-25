import { useState, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import ToggleTheme from './ToggleTheme';
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';

function Hero() {
  //eslint-disable-next-line no-unused-vars
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div
      id="top"
      className="grid grid-cols-[20px_1fr_20px] mt-3 mb-16 md:mb-24 mx-3 border border-accent"
    >
      <div className="col-span-3">
        <nav className="flex justify-between w-full border-b border-accent text-accent">
          <Link to="/">
            <h1 className="text-accent uppercase font-semibold p-2">
              Marin Ladović{' '}
              <span className="hidden sm:inline-block font-light">
                | Web developer
              </span>
            </h1>
          </Link>
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
                  <Menu.Items className="absolute top-0 left-0 w-full h-screen origin-top-right bg-primary z-[39] p-12">
                    <div className="border border-accent w-full h-full flex flex-col gap-8 justify-center items-center uppercase font-mono text-3xl">
                      <Menu.Item>
                        <div className="cursor-pointer px-4 py-2 hover:font-bold hover:text-primary hover:bg-accent transition duration-150">
                          <a
                            href="#projects"
                            onClick={() => setIsNavOpen(false)}
                          >
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
                          <a
                            href="#contact"
                            onClick={() => setIsNavOpen(false)}
                          >
                            Contact
                          </a>
                        </div>
                      </Menu.Item>
                      <Menu.Item>
                        <div className="cursor-pointer px-4 py-2 hover:font-bold hover:text-primary hover:bg-accent transition duration-150">
                          <Link
                            to="/resume"
                            onClick={() => setIsNavOpen(false)}
                          >
                            Resume
                          </Link>
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
              <Link
                to="/resume"
                className="cursor-pointer px-4 py-2 border-l border-accent hover:bg-accent hover:text-primary transition duration-150"
              >
                Resume
              </Link>
            </section>
          </div>
        </nav>
      </div>
      <div className="border-r border-accent"></div>
      <div className="flex flex-col">
        <div className="hero border-b border-accent">
          <div className="text-center md:text-left px-4 py-8 md:max-w-[80%] md:pt-32 md:pb-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl md:text-left mb-6">
              Hello World!
            </h1>
            <h1 className="text-3xl sm:text-5xl md:text-left">
              I'm Marin and I'm a web developer.
            </h1>
          </div>
        </div>
        <div className="social py-6 xl:py-16 md:py-10 flex flex-col md:flex-row justify-center items-center">
          <div className="mb-4 flex flex-col sm:flex-row items-center text-md md:text-xl sm:items-baseline md:mb-0 md:order-last">
            <button className="px-3 py-2 text-primary font-mono font-bold bg-accent border border-accent uppercase mb-3 md:mb-0 sm:mr-4 hover:bg-primary hover:text-accent hover:scale-105 hover:shadow-lg transition duration-150">
              <a href="#contact">contact me</a>
            </button>
            <button className="px-3 py-2 text-accent font-mono border border-accent uppercase md:mr-4 hover:bg-accent hover:text-primary hover:font-bold hover:scale-105 hover:shadow-lg transition duration-150">
              view my resume
            </button>
          </div>
          <div className="flex text-3xl">
            <BsLinkedin className="mr-4 hover:scale-110 hover:shadow-xl transition duration-150 cursor-pointer" />
            <BsGithub className="mr-4 hover:scale-110 hover:shadow-xl transition duration-150 cursor-pointer" />
            <BsFacebook className="mr-4 hover:scale-110 hover:shadow-xl transition duration-150 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="border-l border-accent"></div>
    </div>
  );
}

export default Hero;
