import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';

function Footer() {
  return (
    <footer className="w-full grid grid-cols-1 gap-4 border border-accent text-accent font-mono text-center p-6">
      <p className="">marinladovic.dev</p>

      <div className="flex items-center justify-center text-xl">
        <BsLinkedin className="mr-4 hover:scale-110 hover:shadow-xl transition duration-150 cursor-pointer" />
        <BsGithub className="mr-4 hover:scale-110 hover:shadow-xl transition duration-150 cursor-pointer" />
        <BsFacebook className="mr-4 hover:scale-110 hover:shadow-xl transition duration-150 cursor-pointer" />
      </div>

      <div className="flex justify-center items-center gap-4">
        <p>Built with:</p>
        <FaReact className="text-2xl" /> &{' '}
        <SiTailwindcss className="text-2xl" />
      </div>
    </footer>
  );
}

export default Footer;
