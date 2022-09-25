import githibfinder_laptop_image from '../assets/githubfinder_laptop.png';
import githibfinder_mobile_image from '../assets/githibfinder_mobile.png';

function ProjectItem() {
  return (
    <div className="grid grid-cols-[20px_1fr_20px] md:grid-cols-[50px_1fr_50px] font-mono mx-3 mb-12 max-w-full border border-accent">
      <div className="border-r border-b border-accent"></div>
      <div className="border-b border-accent uppercase tracking-widest text-center py-1">
        Featured Project
      </div>
      <div className="border-l border-b border-accent"></div>
      <div className="border-r border-accent"></div>
      <div className="flex flex-col justify-center lg:flex-row lg:p-6">
        <div className="project-item__image p-6">
          <div className="relative">
            <img src={githibfinder_laptop_image} alt="app on laptop" />
            <img
              src={githibfinder_mobile_image}
              alt="app on laptop"
              className="w-[30%] absolute left-[80%] top-[60%] transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        <div className="project-item__text p-4">
          <h1 className="font-bold mb-4 text-2xl text-center">
            GitHub Finder App
          </h1>
          <p className="font-mono text-sm text-center mb-6">
            Web application that allows users to search for GitHub users and
            view their profile details and repos. Built with ReactJs and
            TailwindCss and consuming the Github API.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-3 py-2 text-accent font-mono font-bold bg-primary border border-accent uppercase mb-3 md:mb-0 md:mr-4 hover:bg-primary hover:text-accent hover:scale-105 hover:shadow-lg transition duration-150">
              Source
            </button>
            <button className="px-3 py-2 text-primary font-mono font-bold bg-accent border border-accent uppercase mb-3 md:mb-0 md:mr-4 hover:bg-primary hover:text-accent hover:scale-105 hover:shadow-lg transition duration-150">
              Live demo
            </button>
          </div>
        </div>
      </div>
      <div className="border-l border-accent"></div>
    </div>
  );
}

export default ProjectItem;
