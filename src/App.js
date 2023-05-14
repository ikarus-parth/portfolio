import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Banner from "./components/Banner";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";


function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => setIsLoaded(true), 4000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {!isLoaded ? (
        <div><Loader /></div>
      ) : (
        <div className="bg-site bg-cover bg-no-repeat overflow-hidden">
          <Header />
          <Banner />
          <Navbar />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
