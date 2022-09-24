import ProjectItem from './ProjectItem';

function ProjectList() {
  return (
    <div id="projects" className="w-full flex flex-col">
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </div>
  );
}

export default ProjectList;
