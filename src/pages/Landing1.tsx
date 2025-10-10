import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ffLogo from "@/assets/ff-logo.png";

/**
 * FrontendFuture — Cold Traffic Landing (Lovable-ready)
 * Accent color: #00bfff
 * Includes micro-interactions:
 *  - Card hover (scale 1.02, shadow deepen, border → #00bfff)
 *  - Button hover (gradient #00bfff→#0095cc, text up 2px, icon → 4px)
 *  - FAQ open/close (auto-height spring, arrow 180°)
 *  - CTA banner shimmer every 8s
 *
 * TODOs:
 *  - Replace TYPEFORM_URL with your eligibility link
 *  - Replace MICRO_VSL with your 60–90s video (or set showVideoDefault=false)
 */

const ACCENT = "#00bfff";
const TYPEFORM_URL = "#eligibility"; // TODO
const MICRO_VSL = "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&mute=1"; // TODO

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white px-3 py-1 border border-slate-200 shadow-sm text-sm">
      {children}
    </span>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      className="group relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:border-[#00bfff]"
      style={{ willChange: "transform, box-shadow, border-color" }}
    >
      <h4 className="mb-1 font-semibold text-slate-900">{title}</h4>
      <div className="text-sm leading-relaxed text-slate-600">{children}</div>
    </div>
  );
}

function CTAButton({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={TYPEFORM_URL}
      className="cta-btn group inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-base font-semibold text-[#00131a] shadow transition-transform duration-150 will-change-transform"
    >
      <span className="transition-transform duration-150 group-hover:-translate-y-0.5">{children}</span>
      <svg
        className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M7 3l7 7-7 7" />
      </svg>
    </a>
  );
}

function FAQItem({ q, a }: { q: string; a: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between text-left">
        <span className="font-medium text-slate-900">{q}</span>
        <svg
          className={`h-5 w-5 text-slate-600 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M5 8l5 5 5-5" />
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{ open: { height: "auto", opacity: 1 }, collapsed: { height: 0, opacity: 0 } }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-3 text-sm text-slate-600">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CTABanner() {
  return (
    <section
      className="rounded-2xl p-6 md:p-8 shadow-sm"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0,191,255,0.12), rgba(0,191,255,0.24), rgba(0,191,255,0.12))",
        backgroundSize: "200% 200%",
        animation: "shimmer 8s ease-in-out infinite",
      }}
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-2xl font-bold text-[#00131a]">Ready to see if you fit?</h3>
          <p className="text-[#00131a]/80">Takes 2 minutes. Employed people only. Tuition $5,000.</p>
        </div>
        <a
          href={TYPEFORM_URL}
          className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-base font-semibold text-[#00384d] shadow"
        >
          Check eligibility
        </a>
      </div>
    </section>
  );
}

export default function Landing1() {
  const [showVideo, setShowVideo] = useState(true);
  const showVideoDefault = true; // set false to hide micro‑VSL

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <style>{`
        /* CTA button gradient + hover shifts */
        .cta-btn{background-image:linear-gradient(90deg,#00bfff,#00bfff);background-color:#00bfff}
        .cta-btn:hover{background-image:linear-gradient(90deg,#00bfff,#0095cc)}
        .cta-btn:hover span{transform:translateY(-2px)}
        .cta-btn:hover svg{transform:translateX(4px)}

        /* Shimmer for CTA banner */
        @keyframes shimmer{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
      `}</style>

      {/* Header */}
      <header className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={ffLogo} alt="FrontendFuture Logo" className="w-10 h-10" />
          <span className="text-xl font-extrabold">FrontendFuture</span>
          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-xs text-emerald-700">Ex‑Amazon led</span>
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
      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 pb-6 pt-2 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide" style={{ color: ACCENT }}>
            For working professionals
          </p>
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
            Train with us. <span style={{ color: ACCENT }}>We'll also help you get the job.</span>
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Learn the web work people see and click (the front of a site or app). <span className="font-semibold">12 weeks • 6–10 hours/week • $5,000</span> (financing available).
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
            <Pill>Tuition $5,000 · financing available</Pill>
            <Pill>Time: 6–10 hrs/week</Pill>
            <Pill>Job‑guarantee mentorship*</Pill>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <CTAButton>See if I qualify</CTAButton>
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

          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600">
            <span>Led by ex‑Amazon engineer</span>
            <span>•</span>
            <span>Built to job standards</span>
            <span>•</span>
            <span>Simple rules = job‑guarantee mentorship*</span>
          </div>
        </div>

        {showVideoDefault && showVideo && (
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow">
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src={MICRO_VSL}
                title="Overview"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="flex items-center justify-between border-t border-slate-100 p-4">
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
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h3 className="mb-2 text-2xl font-bold">Why this works</h3>
          <p className="text-slate-700">
            Most job posts get hundreds of clicks. Filters throw people out. <strong>Proof wins.</strong> We help you make proof fast and put it in front of hiring managers.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-10 sm:grid-cols-3">
        <Card title="Real projects">Your work looks like a real job, not homework. We use real limits and targets.</Card>
        <Card title="Weekly 1‑on‑1s">Short calls and quick feedback so you don't get stuck. Clear next steps each week.</Card>
        <Card title="Get in front of the right people">We package your work and guide you to reach hiring managers.</Card>
      </section>

      {/* 12‑week plan */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h3 className="mb-4 text-2xl font-bold">12‑week plan</h3>
          <div className="grid gap-6 text-sm text-slate-700 md:grid-cols-3">
            <div>
              <h4 className="mb-1 font-semibold text-slate-900">Weeks 1–3</h4>
              <p>Refresh basics. Build a product page that loads fast and converts.</p>
            </div>
            <div>
              <h4 className="mb-1 font-semibold text-slate-900">Weeks 4–7</h4>
              <p>Build a small app with login and a dashboard. Show real state and charts.</p>
            </div>
            <div>
              <h4 className="mb-1 font-semibold text-slate-900">Weeks 8–12</h4>
              <p>Speed up a project, write short case notes, and start targeted outreach.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DFY */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h3 className="mb-2 text-2xl font-bold">After you pass training (done‑for‑you push)</h3>
          <ul className="list-disc space-y-2 pl-6 text-sm text-slate-700">
            <li>
              <strong>Resume, LinkedIn, cover letter</strong> built with you
            </li>
            <li>
              <strong>1‑on‑1 interview practice</strong>
            </li>
            <li>
              We help send your <strong>first three applications</strong>
            </li>
            <li>
              <strong>Pay‑talk help</strong> when offers come
            </li>
          </ul>
        </div>
      </section>

      {/* Guarantee */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div
          className="rounded-2xl p-6 shadow-sm md:p-8"
          style={{ backgroundColor: "#ecfaff", border: `1px solid ${ACCENT}` }}
        >
          <h3 className="mb-2 text-2xl font-bold" style={{ color: "#00384d" }}>
            Job‑guarantee mentorship (simple rules)
          </h3>
          <ul className="list-disc space-y-2 pl-6 text-sm text-slate-800">
            <li>Finish the 3 projects and weekly check‑ins</li>
            <li>Do the outreach plan each week</li>
            <li>Show up to mentor calls and use the notes</li>
          </ul>
          <p className="mt-3 text-xs text-slate-700">
            Meet the rules and don't get paid interviews? We refund/extend per <a href="#" className="underline" style={{ color: ACCENT }}>
              terms
            </a>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h3 className="mb-6 text-2xl font-bold">FAQs</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <FAQItem q="Who is this for?" a="People with jobs who want remote web work and can do 6–10 hrs/week." />
          <FAQItem q="Do I need a degree?" a="No. We focus on proof of skill." />
          <FAQItem q="Time & tuition" a="6–10 hrs/week for 12 weeks. Tuition $5,000; financing available." />
          <FAQItem q="Is the guarantee real?" a="Yes. Follow the simple rules. If you don't get paid interviews, we refund or extend per terms." />
        </div>
      </section>

      {/* CTA banner with shimmer */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <CTABanner />
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 px-4 py-10 text-center text-xs text-slate-500">
        <p className="mx-auto max-w-4xl">
          EARNINGS DISCLAIMER: Results vary. No income is promised. Your outcome depends on your effort, skill, and the job market.
        </p>
        <div className="mt-4">
          © 2025 Turbo Scale, LLC — FrontendFuture · <a href="#" className="underline">Terms</a> · <a href="#" className="underline">Privacy</a>
        </div>
      </footer>
    </main>
  );
}
