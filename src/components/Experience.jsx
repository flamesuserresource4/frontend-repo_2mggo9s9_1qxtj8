const experiences = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Tech Studio',
    period: '2022 — Present',
    bullets: [
      'Led UI architecture for a design system used across 5 products.',
      'Improved performance, cutting LCP by 40% and bundle size by 30%.',
      'Built 3D interactive moments with Spline to elevate brand feel.'
    ],
  },
  {
    role: 'Frontend Engineer',
    company: 'Product Co',
    period: '2020 — 2022',
    bullets: [
      'Shipped features impacting >100k monthly active users.',
      'Introduced testing and CI that reduced bugs by 25%.',
      'Partnered with design on UX research and polished experiences.'
    ],
  },
  {
    role: 'Web Developer',
    company: 'Freelance',
    period: '2018 — 2020',
    bullets: [
      'Delivered marketing sites and dashboards for startups.',
      'Implemented SEO and analytics, increasing organic traffic.',
      'Built accessible, responsive UIs with Tailwind and React.'
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Experience</h2>
          <p className="mt-2 text-slate-600">A selection of roles and impact.</p>
        </div>
        <div className="grid gap-6">
          {experiences.map((exp, idx) => (
            <article key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{exp.role}</h3>
                  <p className="text-slate-600">{exp.company}</p>
                </div>
                <span className="text-sm font-medium text-slate-500">{exp.period}</span>
              </div>
              <ul className="mt-4 grid gap-2">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="text-slate-700">• {b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
