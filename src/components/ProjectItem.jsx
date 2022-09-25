function ProjectItem({ project, id }) {
  return (
    <div className="grid grid-cols-[20px_1fr_20px] font-mono mx-3 mb-12 max-w-full border border-accent">
      <div className="border-r border-b border-accent"></div>
      <div className="border-b border-accent uppercase tracking-widest text-center py-1">
        Featured Project
      </div>
      <div className="border-l border-b border-accent"></div>
      <div className="border-r border-accent"></div>
      {/* Project container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 justify-center items-center lg:flex-row lg:p-12">
        {/* Image container */}
        <div className="project-item__image p-8 md:p-16 lg:p-0 relative">
          <img src={project.images.laptop} alt="app on laptop" />
          <img
            src={project.images.mobile}
            alt="app on laptop"
            className="w-[25%] absolute left-[80%] top-[60%] transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        {/* Text container */}
        <div className="flex flex-col justify-center items-center p-8 md:p-8 lg:p-0">
          <h1 className="font-bold mb-4 text-2xl text-center">
            {project.title}
          </h1>
          <p className="font-mono text-sm text-center mb-6">
            {project.description.short}
          </p>
          <ul className="built-with flex flex-wrap justify-center items-center gap-2 uppercase text-sm mb-8">
            {project.builtWith.map((tech, index) => (
              <li key={index} className="py-1 px-3 border border-accent">
                {tech}
              </li>
            ))}
          </ul>
          <div className="flex justify-center gap-4">
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 font-mono font-bold border border-accent uppercase mb-3 md:mb-0 md:mr-4 hover:bg-accent hover:text-primary hover:scale-105 hover:shadow-lg transition duration-150"
            >
              Source
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 text-primary font-mono font-bold bg-accent border border-accent uppercase mb-3 md:mb-0 md:mr-4 hover:bg-primary hover:text-accent hover:scale-105 hover:shadow-lg transition duration-150"
            >
              Live demo
            </a>
          </div>
        </div>
      </div>
      <div className="border-l border-accent"></div>
    </div>
  );
}

export default ProjectItem;
