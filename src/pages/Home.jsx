import Hero from '../components/Hero';
import Tools from '../components/Tools';
import ProjectList from '../components/ProjectList';

function Home() {
  return (
    <div className="w-full xl:w-10/12 mx-auto text-accent">
      <Hero />
      <Tools />
      <ProjectList />
    </div>
  );
}

export default Home;
