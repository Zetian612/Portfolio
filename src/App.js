import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Counter } from "./components/Counter";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Skills } from "./components/skills/Skills";


function App() {
  return (
    <>
      <Header />
      <Hero />
      <main id="main">
        <About />
        <Skills />
        <Counter />
        <Portfolio />
        <Contact />
      </main>
      {/* End #main */}
      <Footer />
    </>
  );
}

export default App;
