import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Simple sticky nav */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="font-semibold tracking-tight">Your Name</a>
          <nav className="hidden gap-6 text-sm text-slate-600 sm:flex">
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#experience" className="hover:text-slate-900">Experience</a>
            <a href="#skills" className="hover:text-slate-900">Skills</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-7xl px-6 text-sm text-slate-500">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
