import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Project } from "./pages/Project"
import { Home } from "./pages/Home"
import './index.css';
import { useEffect } from "react"
import ScrollReveal from "scrollreveal"

function App() {

  useEffect(() => {
    const srRight = ScrollReveal({
      origin: 'right',
      distance: '80px',
      duration: 2000,
      reset: true
    });
    srRight.reveal('.skills-box', { delay: 100 });
    srRight.reveal('.form-control', { delay: 100 });

    return () => {
      srRight.destroy();
    }
  }, [])
  useEffect(() => {
    const srLeft = ScrollReveal({
      origin: 'left',
      distance: '80px',
      duration: 2000,
      reset: true
    });

    srLeft.reveal('.about-info', { delay: 100 });
    srLeft.reveal('.contact-info', { delay: 100 });

    return () => {
      srLeft.destroy();
    }
  }, [])


  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true
    });
    sr.reveal('.featured-text-card', {});
    sr.reveal('.featured-name', { delay: 100 });
    sr.reveal('.featured-text-info', { delay: 200 });
    sr.reveal('.featured-text-btn', { delay: 200 });
    sr.reveal('.social_icons', { delay: 200 });
    sr.reveal('.featured-image', { delay: 300 });
    sr.reveal('.project-box', { interval: 200 });
    sr.reveal('.top-header', {});
    return () => {
      sr.destroy();
    }
  }, [])


  return (
    <>
  <div className="countainer">
    <Header />
    <main className="wrapper">
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </main>
  </div>
    </>
  )
}

export default App
