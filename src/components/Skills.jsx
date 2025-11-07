const skills = [
  {
    group: 'Core',
    items: ['JavaScript/TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js'],
  },
  {
    group: 'UX & Quality',
    items: ['Accessibility (a11y)', 'Design Systems', 'Performance Tuning', 'Testing (Vitest/Jest)'],
  },
  {
    group: 'Tools',
    items: ['Git & CI/CD', 'Vite', 'Framer Motion', 'Spline'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Skills</h2>
        <p className="mt-2 text-slate-600">Technologies and practices I use regularly.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((s) => (
          <div key={s.group} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">{s.group}</h3>
            <ul className="mt-3 space-y-2">
              {s.items.map((item) => (
                <li key={item} className="text-slate-700">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
