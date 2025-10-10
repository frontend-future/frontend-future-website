import React, { useState } from "react";

/**
 * FrontendFuture — Cold Traffic Landing (Lovable-ready)
 * Accent color: #00bfff (Deep Sky Blue)
 * Font/style: clean, sans, Tailwind utility classes
 *
 * How to use in Lovable:
 * - Paste this into a React page/component file.
 * - Replace TYPEFORM_URL with your eligibility form link.
 * - Replace MICRO_VSL with your 60–90s video (optional). Set showVideoDefault=false to hide.
 */

const ACCENT = "#00bfff"; // accent color
const TYPEFORM_URL = "#eligibility"; // TODO: drop your Typeform/GHL link
const MICRO_VSL = "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&mute=1"; // TODO: replace or remove

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white px-3 py-1 border border-slate-200 shadow-sm text-sm">
      {children}
    </span>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
      <h4 className="font-semibold mb-1 text-slate-900">{title}</h4>
      <div className="text-sm text-slate-600 leading-relaxed">{children}</div>
    </div>
  );
}

export default function Landing1() {
  const [showVideo, setShowVideo] = useState(true);
  const showVideoDefault = true; // set false if you don't want the micro‑VSL

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header */}
      <header className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl font-extrabold">FrontendFuture</span>
          <span className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">Ex‑Amazon led</span>
        </div>
        <a
          href={TYPEFORM_URL}
          className="hidden sm:inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold shadow"
          style={{ backgroundColor: ACCENT, color: "#00131a" }}
        >
          Check eligibility
        </a>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-6 pt-2 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <p className="uppercase tracking-wide text-xs font-semibold mb-3" style={{ color: ACCENT }}>For working professionals</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Train with us. <span style={{ color: ACCENT }}>We'll also help you get the job.</span>
          </h1>
          <p className="mt-4 text-slate-700 text-lg">
            Learn the web work people see and click (the front of a site or app). <span className="font-semibold">12 weeks • 6–10 hours/week • $5,000</span> (financing available).
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
            <Pill>Tuition $5,000 · financing available</Pill>
            <Pill>Time: 6–10 hrs/week</Pill>
            <Pill>Job‑guarantee mentorship*</Pill>
          </div>

          <div className="mt-6 flex gap-4 items-center">
            <a
              href={TYPEFORM_URL}
              className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold shadow"
              style={{ backgroundColor: ACCENT, color: "#00131a" }}
            >
              See if I qualify (2 min)
            </a>
            {showVideoDefault && (
              <button
                onClick={() => setShowVideo((s) => !s)}
                className="underline underline-offset-4"
                style={{ color: ACCENT }}
              >
                {showVideo ? "Hide" : "Show"} 90‑sec video
              </button>
            )}
          </div>

          <p className="mt-5 text-sm text-slate-700">
            <span className="font-semibold">Not for:</span> unemployed, students, less than 6 hours a week, or not ready to invest $5,000.
          </p>

          {/* Tiny proof strip */}
          <div className="mt-4 text-xs text-slate-600 flex flex-wrap gap-x-4 gap-y-1">
            <span>Led by ex‑Amazon engineer</span>
            <span>•</span>
            <span>Built to job standards</span>
            <span>•</span>
            <span>Simple rules = job‑guarantee mentorship*</span>
          </div>
        </div>

        {/* Micro‑VSL */}
        {showVideoDefault && showVideo && (
          <div className="relative bg-white border border-slate-200 rounded-2xl shadow overflow-hidden">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src={MICRO_VSL}
                title="Overview"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="p-4 border-t border-slate-100 flex items-center justify-between">
              <p className="text-sm text-slate-600">Who it's for. What you build. How the guarantee works.</p>
              <a
                href={TYPEFORM_URL}
                className="rounded-xl px-4 py-2 text-sm font-semibold"
                style={{ backgroundColor: "#e6f9ff", color: "#00384d" }}
              >
                Apply
              </a>
            </div>
          </div>
        )}
      </section>

      {/* Why this works */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <h3 className="text-2xl font-bold mb-2">Why this works</h3>
          <p className="text-slate-700">Most job posts get hundreds of clicks. Filters throw people out. <strong>Proof wins.</strong> We help you make proof fast and put it in front of hiring managers.</p>
        </div>
      </section>

      {/* Simple benefits */}
      <section className="mx-auto max-w-6xl px-4 py-10 grid sm:grid-cols-3 gap-4">
        <Card title="Real projects">
          Your work looks like a real job, not homework. We use real limits and targets.
        </Card>
        <Card title="Weekly 1‑on‑1s">
          Short calls and quick feedback so you don't get stuck. Clear next steps each week.
        </Card>
        <Card title="Get in front of the right people">
          We package your work and guide you to reach hiring managers.
        </Card>
      </section>

      {/* 12‑week plan */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <h3 className="text-2xl font-bold mb-4">12‑week plan</h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-700">
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Weeks 1–3</h4>
              <p>Refresh basics. Build a product page that loads fast and converts.</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Weeks 4–7</h4>
              <p>Build a small app with login and a dashboard. Show real state and charts.</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Weeks 8–12</h4>
              <p>Speed up a project, write short case notes, and start targeted outreach.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DFY after you pass */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <h3 className="text-2xl font-bold mb-2">After you pass training (done‑for‑you push)</h3>
          <ul className="list-disc pl-6 text-sm text-slate-700 space-y-2">
            <li><strong>Resume, LinkedIn, cover letter</strong> built with you</li>
            <li><strong>1‑on‑1 interview practice</strong></li>
            <li>We help send your <strong>first three applications</strong></li>
            <li><strong>Pay‑talk help</strong> when offers come</li>
          </ul>
        </div>
      </section>

      {/* Guarantee */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-2xl p-6 md:p-8 shadow-sm" style={{ backgroundColor: "#ecfaff", border: `1px solid ${ACCENT}` }}>
          <h3 className="text-2xl font-bold mb-2" style={{ color: "#00384d" }}>Job‑guarantee mentorship (simple rules)</h3>
          <ul className="list-disc pl-6 text-sm space-y-2 text-slate-800">
            <li>Finish the 3 projects and weekly check‑ins</li>
            <li>Do the outreach plan each week</li>
            <li>Show up to mentor calls and use the notes</li>
          </ul>
          <p className="text-xs mt-3 text-slate-700">Meet the rules and don't get paid interviews? We refund/extend per <a href="#" className="underline" style={{ color: ACCENT }}>terms</a>.</p>
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-3 gap-4">
        <Card title="Who is this for?">People with jobs who want remote web work and can do 6–10 hrs/week.</Card>
        <Card title="Do I need a degree?">No. We focus on proof of skill.</Card>
        <Card title="Time & tuition">6–10 hrs/week for 12 weeks. Tuition $5,000; financing available.</Card>
      </section>

      {/* CTA banner */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4" style={{ backgroundColor: ACCENT }}>
          <div>
            <h3 className="text-2xl font-bold" style={{ color: "#00131a" }}>Ready to see if you fit?</h3>
            <p className="opacity-90" style={{ color: "#00131a" }}>Takes 2 minutes. Employed people only. Tuition $5,000.</p>
          </div>
          <a href={TYPEFORM_URL} className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-base font-semibold shadow" style={{ color: "#00384d" }}>
            Check eligibility
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-10 text-center text-xs text-slate-500 px-4">
        <p className="max-w-4xl mx-auto">
          EARNINGS DISCLAIMER: Results vary. No income is promised. Your outcome depends on your effort, skill, and the job market.
        </p>
        <div className="mt-4">© 2025 Turbo Scale, LLC — FrontendFuture · <a href="#" className="underline">Terms</a> · <a href="#" className="underline">Privacy</a></div>
      </footer>
    </main>
  );
}
