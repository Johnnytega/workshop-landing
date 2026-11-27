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
  MessageCircle,
  ExternalLink,
} from 'lucide-react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xqpqnndv'
const WHATSAPP_NUMBER = '2348152205995'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hello Scouch Autos Ltd, I would like to enquire about vehicle repair, servicing, or fleet maintenance.'
)}`
const DIRECTIONS_URL =
  'https://www.google.com/maps/search/?api=1&query=No+10+Pipeline+Rukpakulushi+Forte+Oil+Station+Eliozu+Bridge+Port+Harcourt'
const LOGO_SRC = '/images/scouch-logo.jpg'

const services = [
  {
    title: 'General Vehicle Servicing & Maintenance',
    desc: 'Routine servicing, oil and filter changes, diagnostics, and mechanical repairs to keep daily drivers road-ready.',
  },
  {
    title: 'Tyre & Wheel Services',
    desc: 'Tyre replacement, wheel alignment, balancing, and inspection for safe handling and even tread wear.',
  },
  {
    title: 'Fleet Maintenance Contracts',
    desc: 'Structured maintenance and priority turnaround support for corporate fleets, business accounts, and government vehicles.',
  },
  {
    title: 'Oven-Baked Spray Painting',
    desc: 'Clean refinishing and oven-baked spray paint work to restore bodywork appearance and durability.',
  },
]

export default function App() {
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'sent' | 'error'
  const [logoMissing, setLogoMissing] = useState(false)

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
    <div className="min-h-screen bg-[#070d19] text-slate-100">
      {/* Top Navigation */}
      <header className="sticky top-0 z-20 border-b border-blue-950 bg-[#070d19]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3 text-lg font-bold tracking-tight text-white">
            {!logoMissing && (
              <img
                src={LOGO_SRC}
                alt="Scouch Autos Ltd logo"
                onError={() => setLogoMissing(true)}
                className="h-9 w-12 rounded border border-red-500/40 object-cover"
              />
            )}
            <span>Scouch Autos Ltd</span>
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
            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-500"
          >
            Request Service
          </a>
        </div>
      </header>

      {/* Hero Banner */}
      <section
        id="top"
        className="border-b border-blue-950 bg-gradient-to-b from-[#0d1d3a] via-[#091428] to-[#070d19] px-6 py-20"
      >
        <div className="mx-auto max-w-4xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-600/15 px-3.5 py-1 text-xs font-medium text-red-200">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-red-400" />
            No. 10 Pipeline, Rukpakulushi (Behind Forte Oil Station, Near Eliozu Bridge), Port Harcourt
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Your Vehicle, Our Priority
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Dependable auto servicing, tyres and wheels, oven-baked spray painting, and fleet maintenance in Port Harcourt for individuals, companies, fleet owners, and government agencies.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
            >
              Visit or Enquire <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-blue-800/80 bg-[#0b172e] px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-red-500/60 hover:text-white"
            >
              Get Directions <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-b border-blue-950 px-6 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-white">About Scouch Autos Ltd</h2>
            <p className="mt-4 leading-relaxed text-slate-300">
              Based at No. 10 Pipeline, Rukpakulushi (behind Forte Oil Station, near Eliozu Bridge) in Port Harcourt, Scouch Autos Ltd delivers practical workshop care, transparent fault checks, and structured maintenance for private motorists, corporate fleets, business operators, and government agencies.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-blue-900/70 bg-[#0b162c] p-5">
              <Wrench className="h-5 w-5 text-red-400" />
              <h3 className="mt-3 font-semibold text-white">Workshop &amp; Paint Care</h3>
              <p className="mt-1 text-sm text-slate-400">Servicing, tyres, and oven-baked spray painting under one roof.</p>
            </div>
            <div className="rounded-xl border border-blue-900/70 bg-[#0b162c] p-5">
              <ShieldCheck className="h-5 w-5 text-red-400" />
              <h3 className="mt-3 font-semibold text-white">Fleet &amp; Org Contracts</h3>
              <p className="mt-1 text-sm text-slate-400">Built for corporate fleets, businesses, and government vehicles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-b border-blue-950 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-white">Our Services</h2>
          <p className="mt-2 text-sm text-slate-400">
            Tailored automotive solutions for individual drivers, fleets, and institutional accounts.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-blue-900/70 bg-[#0b162c] p-6 transition hover:border-red-500/60"
              >
                <div className="mb-3 h-1 w-10 rounded bg-red-600" />
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Showcase / Photo Placeholders */}
      <section id="showcase" className="border-b border-blue-950 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div>
            <h2 className="text-2xl font-bold text-white">Workshop &amp; Bay Showcase</h2>
            <p className="mt-1 text-sm text-slate-400">
              Drop final high-resolution workshop and spray-booth photos into <code className="text-red-300">public/images/</code> when provided.
            </p>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {['Service Bay', 'Oven-Baked Spray Booth', 'Tyre & Fleet Drop-Off'].map((label) => (
              <div
                key={label}
                className="flex h-52 items-center justify-center rounded-xl border border-dashed border-blue-800/80 bg-[#0b162c]/60 text-sm font-medium text-slate-400"
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
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Visit or Contact Us</h2>
              <p className="mt-3 text-slate-300">
                Visit our workshop in Rukpakulushi or send an enquiry for vehicle servicing, spray painting, or fleet maintenance.
              </p>
              <ul className="mt-6 space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                  <span>No. 10 Pipeline, Rukpakulushi, behind Forte Oil Station, near Eliozu Bridge, Port Harcourt</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-red-400" />
                  <a href="tel:+2348152205995" className="hover:text-white">
                    +234 815 220 5995
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-red-400" />
                  <span>[COMPANY EMAIL PENDING]</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-4 w-4 shrink-0 text-red-400" />
                  <span>Mon – Sat: 8:00 AM – 6:00 PM</span>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-xl border border-blue-900/70 bg-[#0b162c]">
              <iframe
                title="Scouch Autos Ltd Location Near Eliozu Bridge, Port Harcourt"
                src="https://www.google.com/maps?q=Eliozu+Bridge,+Port+Harcourt,+Rivers&output=embed"
                className="h-60 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="flex items-center justify-between border-t border-blue-950 px-4 py-3 text-xs text-slate-400">
                <span>No. 10 Pipeline, Rukpakulushi (Near Eliozu Bridge)</span>
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-red-400 hover:text-red-300"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-blue-900/70 bg-[#0b162c] p-6">
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
                className="mt-1 w-full rounded-lg border border-blue-900 bg-[#070d19] px-3 py-2 text-sm text-white focus:border-red-500 focus:outline-none"
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
                placeholder="name@company.com or 0815..."
                className="mt-1 w-full rounded-lg border border-blue-900 bg-[#070d19] px-3 py-2 text-sm text-white focus:border-red-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="clientType" className="block text-sm font-medium text-slate-200">
                Customer Category
              </label>
              <select
                id="clientType"
                name="clientType"
                className="mt-1 w-full rounded-lg border border-blue-900 bg-[#070d19] px-3 py-2 text-sm text-white focus:border-red-500 focus:outline-none"
              >
                <option value="Individual">Individual Vehicle Owner</option>
                <option value="Company">Company / Corporate</option>
                <option value="Fleet Owner">Fleet Owner</option>
                <option value="Government">Government Agency</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-200">
                Vehicle &amp; Service Needed
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                required
                placeholder="Servicing, tyres, spray painting, or fleet maintenance request..."
                className="mt-1 w-full rounded-lg border border-blue-900 bg-[#070d19] px-3 py-2 text-sm text-white focus:border-red-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending...' : 'Send Enquiry'}
            </button>

            {status === 'sent' && (
              <p className="flex items-center gap-2 text-sm text-emerald-400">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                Enquiry sent successfully. Scouch Autos Ltd will reach out shortly.
              </p>
            )}

            {status === 'error' && (
              <p className="flex items-center gap-2 text-sm text-rose-400">
                <AlertCircle className="h-4 w-4 shrink-0" />
                Could not send right now. Please try again or call +234 815 220 5995.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-950 bg-[#070d19] px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Scouch Autos Ltd. All rights reserved.</p>
          <p>No. 10 Pipeline, Rukpakulushi, Near Eliozu Bridge, Port Harcourt</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Scouch Autos Ltd on WhatsApp"
        className="fixed bottom-5 right-5 z-30 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:bg-emerald-400"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp
      </a>
    </div>
  )
}