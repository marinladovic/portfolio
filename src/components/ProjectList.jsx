import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../firebase.config';
import ProjectItem from './ProjectItem';

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectRef = collection(db, 'projects');
        const q = query(projectRef, orderBy('timestamp', 'desc'), limit(4));
        const querySnapshot = await getDocs(q);

        const projects = [];
        querySnapshot.forEach((doc) => {
          return projects.push({
            id: doc.id,
            data: doc.data(),
          });
        });

        setProjects(projects);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div id="projects" className="w-full flex flex-col mb-12">
      <ul>
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            project={project.data}
            id={project.is}
          />
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
