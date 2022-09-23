import ToggleTheme from './ToggleTheme';
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';

function Hero() {
  return (
    <div className="grid grid-cols-[20px_1fr_20px] md:grid-cols-[50px_1fr_50px] mt-3 mb-24 mx-3 border border-accent">
      <nav className="col-span-3 flex justify-between items-center border-b border-accent">
        <h1 className="p-2 text-accent uppercase font-semibold">
          Marin Ladović{' '}
          <span className="hidden md:inline-block font-light">
            | Web developer
          </span>
        </h1>
        <ToggleTheme />
        <ul className="hidden md:flex items-center uppercase text-accent">
          <a href="#projects">
            <li className="p-2 border-l-2 border-accent hover:bg-accent hover:text-primary cursor-pointer">
              Projects
            </li>
          </a>
          <a href="#about">
            <li className="p-2 border-l-2 border-accent hover:bg-accent hover:text-primary cursor-pointer">
              About
            </li>
          </a>
          <a href="#contact">
            <li className="p-2 border-l-2 border-accent hover:bg-accent hover:text-primary cursor-pointer">
              Contact
            </li>
          </a>
        </ul>
      </nav>
      <div className="border-r border-accent"></div>
      <div className="flex flex-col">
        <div className="hero border-b border-accent">
          <h1 className="text-7xl leading-[4.2rem] px-8 py-14 text-center md:text-left md:pb-4 md:pr-28 md:pt-28 lg:text-8xl lg:pt-48 lg:mr-48">
            Lorem ipsum dolor sit amet, consectetur.
          </h1>
        </div>
        <div className="social py-6 xl:py-16 md:py-10 flex flex-col md:flex-row justify-center items-center">
          <div className="mb-4 flex flex-col md:flex-row items-center text-md md:text-xl md:items-baseline md:mb-0 md:order-last">
            <button className="px-3 py-2 text-primary font-bold bg-accent border border-accent uppercase mb-3 md:mb-0 md:mr-4 hover:bg-primary hover:text-accent hover:scale-105 hover:shadow-lg transition duration-150">
              contact me
            </button>
            <button className="px-3 py-2 text-accent border border-accent uppercase md:mr-4  hover:bg-accent hover:text-primary hover:font-bold hover:scale-105 hover:shadow-lg transition duration-150">
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
