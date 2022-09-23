import { FaHtml5, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase } from 'react-icons/si';

function Tools() {
  return (
    <div className="w-full flex flex-col mb-24">
      <h1 className="text-2xl font-mono mb-12 mx-3 text-left md:text-center">
        I build good-looking and fully responsive web applications using:
      </h1>
      <div className="flex justify-between mx-auto">
        <div className="flex flex-col items-center mr-8 md:mr-20">
          <FaHtml5 className="text-6xl mb-2" />
          <p className="font-mono">HTML</p>
        </div>
        <div className="flex flex-col items-center mr-8 md:mr-20">
          <SiTailwindcss className="text-6xl mb-2" />
          <p className="font-mono">TailwindCss</p>
        </div>
        <div className="flex flex-col items-center mr-8 md:mr-20">
          <FaReact className="text-6xl mb-2" />
          <p className="font-mono">ReactJs</p>
        </div>
        <div className="flex flex-col items-center">
          <SiFirebase className="text-6xl mb-2" />
          <p className="font-mono">Firebase</p>
        </div>
      </div>
    </div>
  );
}

export default Tools;
