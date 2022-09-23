import Hero from '../components/Hero';
import Tools from '../components/Tools';
import ProjectList from '../components/ProjectList';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';

function Home() {
  return (
    <div className="w-full xl:w-10/12 mx-auto text-accent">
      <Hero />
      <Tools />
      <ProjectList />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

export default Home;
