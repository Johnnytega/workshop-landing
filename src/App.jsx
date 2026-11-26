import { useState } from 'react'
import {
  Wrench,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Clock,
} from 'lucide-react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xqpqnndv'

const services = [
  {
    title: 'Diagnostics & Mechanical Repair',
    desc: 'Engine fault scanning, suspension, brakes, transmission, and drivetrain repairs for daily drivers and commercial vehicles.',
  },
  {
    title: 'Scheduled Servicing & Fleet Care',
    desc: 'Preventive maintenance plans tailored for corporate fleets, business operations, and government vehicles.',
  },
  {
    title: 'Electrical & Cooling Systems',
    desc: 'Battery testing, alternators, wiring diagnostics, and A/C servicing built for tough road conditions.',
  },
]

export default function App() {
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'sent' | 'error'

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    const formData = new FormData(e.target)

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setStatus('sent')
        e.target.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Top Navigation */}
      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-lg font-bold tracking-tight text-white">
            [COMPANY NAME]
          </a>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#showcase" className="transition hover:text-white">
              Workshop
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
          >
            Request Service
          </a>
        </div>
      </header>

      {/* Hero Banner */}
      <section
        id="top"
        className="border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 px-6 py-20"
      >
        <div className="mx-auto max-w-4xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-medium text-amber-300">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            No. 10 Pipeline, Rukpakulushi (Behind Fort Oil, Near Eliozu Bridge), Port Harcourt
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Reliable Car Repair & Servicing in Port Harcourt
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Trusted workshop care for individuals, corporate fleets, business accounts, and government vehicles.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
            >
              Visit or Enquire <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-b border-slate-800 px-6 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-white">About the Workshop</h2>
            <p className="mt-4 leading-relaxed text-slate-300">
              Located off Pipeline Road in Rukpakulushi near Eliozu Bridge, our facility focuses on honest diagnostics,
              dependable turnaround times, and structured servicing for private motorists, companies, fleet owners, and
              government agencies.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <Wrench className="h-5 w-5 text-amber-400" />
              <h3 className="mt-3 font-semibold text-white">Hands-On Technicians</h3>
              <p className="mt-1 text-sm text-slate-400">Clear fault findings before repair work begins.</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <ShieldCheck className="h-5 w-5 text-amber-400" />
              <h3 className="mt-3 font-semibold text-white">Fleet & Org Ready</h3>
              <p className="mt-1 text-sm text-slate-400">Built for repeat servicing and multi-vehicle care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-b border-slate-800 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-white">Core Services</h2>
          <p className="mt-2 text-sm text-slate-400">
            Comprehensive maintenance and mechanical repair tailored to your vehicle type.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {services.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-slate-700"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Showcase / Photo Placeholders */}
      <section id="showcase" className="border-b border-slate-800 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div>
            <h2 className="text-2xl font-bold text-white">Workshop & Bay Showcase</h2>
            <p className="mt-1 text-sm text-slate-400">
              Swap in real workshop and vehicle photos from <code className="text-amber-300">public/images/</code> once
              received.
            </p>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {['Service Bay', 'Diagnostics & Repair', 'Showroom / Drop-Off'].map((label) => (
              <div
                key={label}
                className="flex h-52 items-center justify-center rounded-xl border border-dashed border-slate-700 bg-slate-900/50 text-sm font-medium text-slate-400"
              >
                {label} Photo Placeholder
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Enquiry Form */}
      <section id="contact" className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-white">Visit or Contact Us</h2>
            <p className="mt-3 text-slate-300">
              Stop by the workshop or send an enquiry and our team will follow up with availability and next steps.
            </p>
            <ul className="mt-6 space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                <span>No. 10 Pipeline, Rukpakulushi, behind Fort Oil station near Eliozu Bridge, Port Harcourt</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-amber-400" />
                <span>[PHONE NUMBER PENDING]</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-amber-400" />
                <span>[COMPANY EMAIL PENDING]</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-amber-400" />
                <span>Mon – Sat: 8:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-slate-800 bg-slate-900 p-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-200">
                Name or Organization
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="e.g. Fleet Manager / Chinedu Obi"
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white focus:border-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="contact" className="block text-sm font-medium text-slate-200">
                Email or Phone Number
              </label>
              <input
                id="contact"
                name="contact"
                type="text"
                required
                placeholder="name@company.com or 080..."
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white focus:border-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="clientType" className="block text-sm font-medium text-slate-200">
                Customer Category
              </label>
              <select
                id="clientType"
                name="clientType"
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white focus:border-amber-500 focus:outline-none"
              >
                <option value="Individual">Individual Vehicle Owner</option>
                <option value="Company">Company / Corporate</option>
                <option value="Fleet Owner">Fleet Owner</option>
                <option value="Government">Government Agency</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-200">
                Vehicle & Service Needed
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                required
                placeholder="Tell us about your vehicle or fleet servicing request..."
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white focus:border-amber-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending...' : 'Send Enquiry'}
            </button>

            {status === 'sent' && (
              <p className="flex items-center gap-2 text-sm text-emerald-400">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                Enquiry sent successfully. Our workshop team will reach out shortly.
              </p>
            )}

            {status === 'error' && (
              <p className="flex items-center gap-2 text-sm text-rose-400">
                <AlertCircle className="h-4 w-4 shrink-0" />
                Could not send right now. Verify your Formspree ID or contact us directly.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} [COMPANY NAME]. All rights reserved.</p>
          <p>No. 10 Pipeline, Rukpakulushi, Port Harcourt, Rivers State</p>
        </div>
      </footer>
    </div>
  )
}