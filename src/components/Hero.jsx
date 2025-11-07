import Spline from '@splinetool/react-spline';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-white to-slate-50">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay to improve text contrast - does not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-28 md:py-36">
        <span className="inline-flex items-center rounded-full bg-slate-900/5 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-900/10">
          Tech • Portfolio • Interactive
        </span>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
          Hi, I'm <span className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">Your Name</span>.
          <br className="hidden sm:block" />
          I craft modern web experiences.
        </h1>
        <p className="max-w-2xl text-lg text-slate-600">
          Frontend-focused developer with a passion for delightful UX, clean architecture, and playful 3D moments. Explore my work, skills, and experience below.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-white shadow-lg shadow-slate-900/10 transition hover:translate-y-[-1px] hover:bg-slate-800"
          >
            Contact me <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-slate-900 ring-1 ring-slate-900/10 transition hover:bg-slate-50"
          >
            View experience
          </a>
          <div className="ml-2 flex items-center gap-2">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-slate-700 ring-1 ring-slate-900/10 transition hover:bg-slate-50"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-slate-700 ring-1 ring-slate-900/10 transition hover:bg-slate-50"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
