import ProjectItem from './ProjectItem';

function ProjectList() {
  return (
    <div className="w-full flex flex-col">
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </div>
  );
}

export default ProjectList;
