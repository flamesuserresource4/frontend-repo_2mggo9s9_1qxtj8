export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-3">
        <div className="md:col-span-1">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">About</h2>
          <p className="mt-3 text-slate-600">
            A quick intro to who I am and how I work.
          </p>
        </div>
        <div className="md:col-span-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-slate-700">
              I'm a product-minded developer who blends aesthetics with engineering. I enjoy turning complex
              problems into elegant, performant interfaces. My toolkit includes React, TypeScript, Tailwind,
              and a curiosity for 3D on the web.
            </p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              <li className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">What I value</p>
                <p className="text-sm text-slate-600">Clarity, craftsmanship, and measurable impact.</p>
              </li>
              <li className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">How I work</p>
                <p className="text-sm text-slate-600">Rapid iteration, data-informed decisions, and close collaboration.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
