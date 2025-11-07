import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app this would POST to your backend or form service
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <Mail className="h-6 w-6" />
          <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-slate-300">
              Want to collaborate or have an opportunity that fits my background? Drop a note and I'll get back to you.
            </p>
            <div className="mt-6 rounded-2xl bg-slate-800 p-6">
              <p className="text-sm text-slate-300">Email</p>
              <a href="mailto:you@example.com" className="text-lg font-semibold hover:underline">you@example.com</a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="rounded-2xl bg-white/5 p-6 backdrop-blur">
            {submitted ? (
              <div className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4 text-emerald-200">
                Thanks! Your message has been noted.
              </div>
            ) : (
              <>
                <div className="grid gap-4">
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-5 py-3 font-medium text-white shadow transition hover:bg-indigo-400"
                >
                  Send message <Send className="h-4 w-4" />
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
