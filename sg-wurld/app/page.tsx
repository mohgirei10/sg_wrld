import { site, groups } from "@/lib/site";
import QuoteForm from "@/components/QuoteForm";

const wa = `https://wa.me/${site.whatsapp}`;

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-plan text-paper">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#top" className="font-display text-3xl font-extrabold">SG Wurld</a>
          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href={wa} className="bg-hivis px-4 py-2 text-sm font-bold text-ink">WhatsApp</a>
        </div>
      </header>

      <main id="top">
        <section className="blueprint text-paper">
          <div className="mx-auto max-w-6xl px-5 pb-12 pt-20 md:pt-32">
            <h1 className="max-w-4xl font-display text-6xl font-extrabold leading-[0.92] md:text-9xl">
              Plan it. Build it. Keep it standing.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-chalk">
              SG Wurld covers architectural drawing, construction, solar, plumbing, materials, real estate, truck rental and events, so one call gets your project moving.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={wa} className="bg-hivis px-7 py-3 font-bold text-ink">Chat on WhatsApp</a>
              <a href={`tel:${site.phone}`} className="border border-chalk px-7 py-3 font-bold">Call {site.phoneDisplay}</a>
            </div>
            <div className="mt-20 flex items-center gap-3 text-chalk" aria-hidden="true">
              <span className="h-4 w-px bg-current" />
              <span className="h-px flex-1 bg-current" />
              <span className="font-display text-2xl">{site.tagline}</span>
              <span className="h-px flex-1 bg-current" />
              <span className="h-4 w-px bg-current" />
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="font-display text-5xl font-extrabold text-plan md:sticky md:top-24">What we do</h2>
            <p className="mt-4 max-w-xs text-steel">Every service includes maintenance where it applies.</p>
          </div>
          <div className="space-y-12">
            {groups.map((g) => (
              <div key={g.name}>
                <h3 className="font-display text-3xl font-bold text-plan">{g.name}</h3>
                <dl className="mt-3">
                  {g.rows.map((r) => (
                    <div key={r.t} className="grid gap-1 border-t border-ink/15 py-4 sm:grid-cols-[15rem_1fr] sm:gap-6">
                      <dt className="font-bold">{r.t}</dt>
                      <dd className="text-steel">{r.d}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-plan text-paper">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2">
            <div>
              <h2 className="font-display text-5xl font-extrabold">Tell us what you need</h2>
              <p className="mt-4 max-w-md text-chalk">Pick a service and send. Your message opens in WhatsApp, ready to go.</p>
              <ul className="mt-8 space-y-3 text-lg">
                <li><a href={`tel:${site.phone}`}>Phone: {site.phoneDisplay}</a></li>
                <li><a href={`mailto:${site.email}`}>Email: {site.email}</a></li>
                <li><a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram: @sgwurld</a></li>
                <li><a href={site.facebook} target="_blank" rel="noopener noreferrer">Facebook: SG Wurld</a></li>
              </ul>
            </div>
            <QuoteForm />
          </div>
        </section>
      </main>

      <footer className="bg-ink px-5 py-6 text-center text-sm text-chalk">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </footer>
    </>
  );
}
