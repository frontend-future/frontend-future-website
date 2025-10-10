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
          <span className="text-xl font-extrabold">🧠 FrontendFuture</span>
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
          <p className="mb-3 text-sm text-slate-600">
            Ex-Amazon–led mentorship for working professionals
          </p>
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
            Train with us. Build real web work. <span style={{ color: ACCENT }}>Land a remote frontend developer job.</span>
          </h1>
          <p className="mt-4 text-xl font-semibold text-slate-700">
            Learn the work people see and click.
          </p>
          <p className="mt-3 text-base text-slate-600">
            In just 12 weeks, you'll design, build, and ship real-world projects that match what hiring managers look for.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-600">
            <span>Flexible schedule</span>
            <span>•</span>
            <span>6–10 hours per week</span>
            <span>•</span>
            <span>Job-guarantee mentorship*</span>
          </div>

          <div className="mt-6">
            <CTAButton>See if I qualify</CTAButton>
          </div>
        </div>

      </section>

      {/* Why this works */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h3 className="mb-3 text-2xl font-bold">Why this works</h3>
          <p className="text-lg font-semibold text-slate-900 mb-2">
            Hiring managers hire proof, not resumes.
          </p>
          <p className="text-slate-700">
            Most job posts get hundreds of applicants—filters reject almost everyone. We help you build proof that passes those filters and puts you directly in front of decision-makers.
          </p>
        </div>
      </section>

      {/* What makes us different */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h3 className="mb-6 text-2xl font-bold">What makes us different</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card title="Real projects.">
            No tutorials. You'll work with real limits, specs, and performance targets—just like an actual job.
          </Card>
          <Card title="Weekly 1-on-1 mentorship.">
            Short calls. Clear feedback. Every week you'll know exactly what to improve next.
          </Card>
          <Card title="Career packaging.">
            We help you showcase your projects, rewrite your resume, and reach hiring managers directly.
          </Card>
          <Card title="Job-guarantee mentorship.">
            Complete your milestones and outreach plan—if you don't get paid interviews, we refund or extend your mentorship per terms.
          </Card>
        </div>
      </section>

      {/* 12-Week Roadmap */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h3 className="mb-4 text-2xl font-bold">12-Week Roadmap</h3>
          <div className="space-y-3 text-slate-700">
            <p>
              <span className="font-semibold text-slate-900">Weeks 1–3:</span> Refresh fundamentals. Build a fast, conversion-optimized product page.
            </p>
            <p>
              <span className="font-semibold text-slate-900">Weeks 4–7:</span> Develop a small web app with login, dashboard, and real-time data.
            </p>
            <p>
              <span className="font-semibold text-slate-900">Weeks 8–12:</span> Optimize performance, document your work, and begin targeted outreach.
            </p>
          </div>
        </div>
      </section>

      {/* After graduation */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h3 className="mb-4 text-xl font-bold">After graduation:</h3>
          <ul className="space-y-2 text-slate-700">
            <li className="flex items-start gap-2">
              <span style={{ color: ACCENT }}>✅</span>
              <span>Resume, LinkedIn & portfolio built with you</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: ACCENT }}>✅</span>
              <span>1-on-1 interview prep and strategy</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: ACCENT }}>✅</span>
              <span>Support sending your first applications</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: ACCENT }}>✅</span>
              <span>Pay-talk guidance when offers come</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Who It's For */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h3 className="mb-4 text-2xl font-bold">Who It's For</h3>
          <div className="space-y-3 text-slate-700">
            <p className="flex items-start gap-2">
              <span style={{ color: ACCENT }}>✅</span>
              <span>Professionals who want remote web work while keeping their current job</span>
            </p>
            <p className="flex items-start gap-2">
              <span style={{ color: ACCENT }}>✅</span>
              <span>People ready to commit 6–10 hours per week to a proven roadmap</span>
            </p>
            <p className="flex items-start gap-2">
              <span style={{ color: ACCENT }}>✅</span>
              <span>Doers who value mentorship and real-world proof over theory</span>
            </p>
            <p className="mt-4 text-sm">
              <span className="font-semibold">Not for:</span> unemployed applicants, full-time students, or anyone unable to commit weekly hours.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h3 className="mb-6 text-2xl font-bold">FAQs</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <FAQItem q="Do I need a degree?" a="No. We focus on evidence of skill, not credentials." />
          <FAQItem q="Is the job guarantee real?" a="Yes—meet the milestones, follow the plan, and we stand behind you." />
          <FAQItem q="Can I do this with a full-time job?" a="Absolutely. The program is built around a flexible 6–10 hour weekly schedule." />
        </div>
      </section>

      {/* CTA banner with shimmer */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
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
              <h3 className="text-2xl font-bold text-[#00131a]">Ready to see if you qualify?</h3>
              <p className="text-[#00131a]/80">Takes 2 minutes. Working professionals only.</p>
            </div>
            <a
              href={TYPEFORM_URL}
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-base font-semibold text-[#00384d] shadow"
            >
              Check Eligibility →
            </a>
          </div>
        </section>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 px-4 py-10 text-center text-xs text-slate-500">
        <div className="mt-4">
          © 2025 Turbo Scale, LLC — FrontendFuture · <a href="/terms" className="underline">Terms</a> · <a href="/privacy" className="underline">Privacy</a> · <a href="/accessibility" className="underline">Accessibility</a> · <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="underline">Watch more on YouTube</a>
        </div>
      </footer>
    </main>
  );
}
