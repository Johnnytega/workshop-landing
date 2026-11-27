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
  Car,
  Paintbrush,
  Gauge,
} from 'lucide-react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xqpqnndv'
const WHATSAPP_NUMBER = '2348152205995'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hello Scouch Autos Ltd, I would like to enquire about vehicle servicing, repairs, or fleet maintenance.'
)}`
const DIRECTIONS_URL =
  'https://www.google.com/maps/search/?api=1&query=No+10+Pipeline+Rukpakulushi+Forte+Oil+Station+Eliozu+Bridge+Port+Harcourt'
const LOGO_SRC = '/images/scouch-logo.jpg'

const services = [
  {
    icon: Wrench,
    title: 'General Vehicle Servicing & Maintenance',
    desc: 'Routine servicing, engine diagnostics, oil and filter changes, and mechanical repairs to keep your vehicle performing reliably.',
  },
  {
    icon: Gauge,
    title: 'Tyre & Wheel Services',
    desc: 'Tyre replacement, precision wheel balancing, alignment, and safety inspections for smooth handling on every road.',
  },
  {
    icon: ShieldCheck,
    title: 'Fleet Maintenance Contracts',
    desc: 'Scheduled preventive maintenance and priority workshop turnaround for corporate fleets, commercial operators, and government agencies.',
  },
  {
    icon: Paintbrush,
    title: 'Oven-Baked Spray Painting',
    desc: 'Factory-grade body refinishing and oven-baked spray painting for a durable, glossy finish.',
  },
]

const standards = [
  {
    title: 'Transparent Diagnostics',
    desc: 'Clear fault inspection and upfront scope before any wrench turns—no guesswork or hidden surprises.',
  },
  {
    title: 'Corporate & Government Ready',
    desc: 'Structured service records and dedicated bay scheduling built for multi-vehicle organizations.',
  },
  {
    title: 'All-In-One Facility',
    desc: 'Mechanical repairs, wheel care, and oven-baked spray painting handled under one roof in Rukpakulushi.',
  },
]

const showcaseItems = [
  {
    src: '/images/service-bay.jpg',
    alt: 'Scouch Autos Ltd technicians performing diagnostics and mechanical repairs in Rukpakulushi, Port Harcourt',
    title: 'Vehicle Servicing & Mechanical Bay',
    caption: 'Multi-bay diagnostics, routine servicing, and full mechanical repairs.',
  },
  {
    src: '/images/spray-booth.jpg',
    alt: 'Scouch Autos Ltd oven-baked spray painting booth with technicians',
    title: 'Oven-Baked Spray Booth',
    caption: 'Dust-free, controlled refinishing for a durable factory-grade finish.',
  },
  {
    src: '/images/wheel-fleet.jpg',
    alt: 'Scouch Autos Ltd tyre, wheel alignment, and fleet maintenance area',
    title: 'Tyre, Wheel & Fleet Maintenance',
    caption: 'Precision wheel alignment, balancing, and priority fleet turnaround.',
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
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-red-600 selection:text-white">
      {/* Top Navigation */}
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 shadow-xs backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3.5">
          <a href="#top" className="flex items-center gap-3.5 text-lg font-bold tracking-tight text-[#0c2340]">
            {!logoMissing && (
              <img
                src={LOGO_SRC}
                alt="Scouch Autos Ltd"
                onError={() => setLogoMissing(true)}
                className="h-12 w-20 shrink-0 rounded-md border border-slate-200 object-cover shadow-xs"
              />
            )}
            <div>
              <span className="block leading-none font-extrabold">SCOUCH AUTOS LTD</span>
              <span className="mt-1 block text-[11px] font-bold tracking-wider text-red-600 uppercase">
                Sales • Service • Spares
              </span>
            </div>
          </a>

          <nav className="hidden gap-8 text-sm font-semibold text-slate-600 md:flex">
            <a href="#about" className="transition hover:text-[#0c2340]">
              About
            </a>
            <a href="#services" className="transition hover:text-[#0c2340]">
              Services
            </a>
            <a href="#showcase" className="transition hover:text-[#0c2340]">
              Workshop
            </a>
            <a href="#fleet" className="transition hover:text-[#0c2340]">
              Fleet Care
            </a>
            <a href="#contact" className="transition hover:text-[#0c2340]">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:+2348152205995"
              className="hidden items-center gap-1.5 text-sm font-bold text-[#0c2340] transition hover:text-red-600 sm:inline-flex"
            >
              <Phone className="h-4 w-4 text-red-600" />
              0815 220 5995
            </a>
            <a
              href="#contact"
              className="shrink-0 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700"
            >
              Book Service
            </a>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section
        id="top"
        className="relative overflow-hidden bg-gradient-to-br from-[#0c2340] via-[#133560] to-[#0a1c33] px-6 py-20 text-white sm:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-blue-100 backdrop-blur-xs">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-red-400" />
              No. 10 Pipeline, Rukpakulushi (Behind Forte Oil Station, Near Eliozu Bridge), Port Harcourt
            </p>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              Your Vehicle, <span className="text-red-400">Our Priority.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-blue-100/90">
              Excellence in every mile. Scouch Autos Ltd delivers precision vehicle servicing, tyre and wheel care, oven-baked spray painting, and corporate fleet maintenance in Port Harcourt.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/25 transition hover:bg-red-500"
              >
                Request Service <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-black/20 transition hover:bg-emerald-400"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Get Directions <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About & Standards */}
      <section id="about" className="border-b border-slate-200 bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-bold tracking-widest text-red-600 uppercase">About Scouch Autos Ltd</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0c2340]">
                Built for Reliability on Port Harcourt Roads
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Conveniently positioned off Pipeline Road in Rukpakulushi near Eliozu Bridge, Scouch Autos Ltd combines experienced technicians, modern diagnostic practices, and oven-baked refinishing to keep private vehicles and institutional fleets running without downtime.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-3 lg:col-span-7">
              {standards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-xs"
                >
                  <div className="mb-3 h-1 w-8 rounded bg-red-600" />
                  <h3 className="font-bold text-[#0c2340]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section id="services" className="border-b border-slate-200 bg-slate-50 px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest text-red-600 uppercase">What We Do</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0c2340]">Core Workshop Services</h2>
            <p className="mt-2 text-slate-600">
              Complete mechanical, wheel, refinishing, and fleet maintenance solutions under one roof.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="group rounded-xl border border-slate-200 bg-white p-6 shadow-xs transition hover:-translate-y-0.5 hover:border-red-300 hover:shadow-md"
                >
                  <div className="inline-flex rounded-lg bg-red-50 p-3 text-red-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-[#0c2340]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Workshop & Spray Booth Showcase */}
      <section id="showcase" className="border-b border-slate-200 bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest text-red-600 uppercase">Inside the Facility</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0c2340]">
              Workshop Bays &amp; Spray Booth
            </h2>
            <p className="mt-2 text-slate-600">
              Equipped servicing bays, an oven-baked spray booth, and dedicated wheel &amp; fleet turnaround capacity in Port Harcourt.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {showcaseItems.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-xs transition hover:-translate-y-0.5 hover:border-red-300 hover:shadow-md"
              >
                <div className="overflow-hidden bg-slate-200">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="h-60 w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#0c2340]">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet & Corporate Contracts */}
      <section id="fleet" className="border-b border-slate-200 bg-slate-50 px-6 py-16 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-2xl bg-gradient-to-r from-[#0c2340] to-[#163a68] p-8 text-white shadow-lg sm:p-10 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-red-400 uppercase">
              <Car className="h-4 w-4" />
              Corporate &amp; Government Accounts
            </div>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Fleet Maintenance Contracts That Minimize Downtime
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-blue-100/90 sm:text-base">
              We partner with companies, logistics operators, and government agencies in Rivers State for scheduled preventive servicing, priority bay access, and dependable turnaround across multiple vehicles.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-red-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-red-500"
          >
            Enquire About Fleet Care <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Contact & Enquiry Form */}
      <section id="contact" className="bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-bold tracking-widest text-red-600 uppercase">Visit or Reach Out</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0c2340]">Schedule a Visit or Enquiry</h2>
              <p className="mt-3 text-slate-600">
                Drive into our Rukpakulushi workshop or send your vehicle details below and our service desk will follow up promptly.
              </p>

              <ul className="mt-6 space-y-4 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                  <span>No. 10 Pipeline, Rukpakulushi, behind Forte Oil Station, near Eliozu Bridge, Port Harcourt</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-red-600" />
                  <a href="tel:+2348152205995" className="font-bold text-[#0c2340] hover:text-red-600">
                    +234 815 220 5995
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-red-600" />
                  <span>[COMPANY EMAIL PENDING]</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-4 w-4 shrink-0 text-red-600" />
                  <span>Mon – Sat: 8:00 AM – 6:00 PM</span>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-xs">
              <iframe
                title="Scouch Autos Ltd Location Near Eliozu Bridge, Port Harcourt"
                src="https://www.google.com/maps?q=Eliozu+Bridge,+Port+Harcourt,+Rivers&output=embed"
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="flex items-center justify-between border-t border-slate-200 px-4 py-3 text-xs text-slate-600">
                <span>No. 10 Pipeline, Rukpakulushi (Near Eliozu Bridge)</span>
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-red-600 hover:text-red-700"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8"
          >
            <div>
              <h3 className="text-xl font-bold text-[#0c2340]">Send a Service or Fleet Enquiry</h3>
              <p className="mt-1 text-xs text-slate-500">Direct delivery to our workshop desk.</p>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700">
                Name or Organization
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="e.g. Chinedu Obi / Logistics Fleet Manager"
                className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-red-600 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="contact" className="block text-sm font-semibold text-slate-700">
                Phone Number or Email
              </label>
              <input
                id="contact"
                name="contact"
                type="text"
                required
                placeholder="0815... or name@company.com"
                className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-red-600 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="clientType" className="block text-sm font-semibold text-slate-700">
                Account Type
              </label>
              <select
                id="clientType"
                name="clientType"
                className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-red-600 focus:outline-none"
              >
                <option value="Individual">Individual Vehicle Owner</option>
                <option value="Company">Company / Corporate</option>
                <option value="Fleet Owner">Fleet Owner</option>
                <option value="Government">Government Agency</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700">
                Vehicle &amp; Service Needed
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Tell us your vehicle model and what you need (servicing, tyres, spray painting, or fleet contract)..."
                className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-red-600 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full rounded-lg bg-red-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending Enquiry...' : 'Send Enquiry'}
            </button>

            {status === 'sent' && (
              <p className="flex items-center gap-2 text-sm font-medium text-emerald-700">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                Enquiry received. Scouch Autos Ltd will reach out shortly.
              </p>
            )}

            {status === 'error' && (
              <p className="flex items-center gap-2 text-sm font-medium text-red-600">
                <AlertCircle className="h-4 w-4 shrink-0" />
                Could not send right now. Please call or WhatsApp +234 815 220 5995 directly.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-[#0c2340] px-6 py-8 text-blue-100">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} Scouch Autos Ltd. Excellence in Every Mile.</p>
          <p>No. 10 Pipeline, Rukpakulushi, Behind Forte Oil Station, Near Eliozu Bridge, Port Harcourt</p>
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