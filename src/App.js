import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { applyTheme } from './theme/utils';
import darkTheme from './theme/dark';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    applyTheme(darkTheme);
  }, []);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 300) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <>
      <Router>
        <Navbar scrolled={scrolled} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </Router>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
