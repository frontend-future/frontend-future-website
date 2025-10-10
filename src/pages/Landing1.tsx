import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Clock, Target, Users, Briefcase, Award, TrendingUp, Code, Rocket, Shield, X } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import ffLogo from "@/assets/ff-logo.png";
import HeroDynamicSection from "@/components/HeroDynamicSection";

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
          <img src={ffLogo} alt="FrontendFuture Logo" className="w-12 h-12 rounded-full" />
          <div className="flex flex-col">
            <span className="text-xl font-extrabold text-slate-900">FrontendFuture</span>
            <span className="text-xs text-slate-600 flex items-center gap-1">
              <Award className="w-3 h-3" style={{ color: ACCENT }} />
              Ex-Amazon led
            </span>
          </div>
        </div>
        <a
          href={TYPEFORM_URL}
          className="hidden sm:inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold shadow-md hover:shadow-lg transition-all"
          style={{ backgroundColor: ACCENT, color: "#00131a" }}
        >
          <Rocket className="w-4 h-4" />
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
            <span className="inline-flex items-center gap-1.5">
              <Target className="w-4 h-4" style={{ color: ACCENT }} />
              Flexible schedule
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4" style={{ color: ACCENT }} />
              6–10 hours per week
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5">
              <Shield className="w-4 h-4" style={{ color: ACCENT }} />
              Job-guarantee mentorship*
            </span>
          </div>

          <div className="mt-6">
            <a
              href={TYPEFORM_URL}
              className="cta-btn group inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-base font-semibold text-[#00131a] shadow transition-transform duration-150 will-change-transform"
            >
              <Rocket className="w-5 h-5" />
              <span className="transition-transform duration-150 group-hover:-translate-y-0.5">See if I qualify</span>
              <svg
                className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7 3l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <HeroDynamicSection />
      </section>

      {/* Why this works */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex items-start gap-3 mb-3">
            <TrendingUp className="w-7 h-7 flex-shrink-0" style={{ color: ACCENT }} />
            <div>
              <h3 className="text-2xl font-bold">Why this works</h3>
            </div>
          </div>
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
          <div className="group relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:border-[#00bfff]">
            <div className="flex items-start gap-3 mb-2">
              <Code className="w-5 h-5 flex-shrink-0" style={{ color: ACCENT }} />
              <h4 className="font-semibold text-slate-900">Real projects.</h4>
            </div>
            <div className="text-sm leading-relaxed text-slate-600">No tutorials. You'll work with real limits, specs, and performance targets—just like an actual job.</div>
          </div>
          <div className="group relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:border-[#00bfff]">
            <div className="flex items-start gap-3 mb-2">
              <Users className="w-5 h-5 flex-shrink-0" style={{ color: ACCENT }} />
              <h4 className="font-semibold text-slate-900">Weekly 1-on-1 mentorship.</h4>
            </div>
            <div className="text-sm leading-relaxed text-slate-600">Short calls. Clear feedback. Every week you'll know exactly what to improve next.</div>
          </div>
          <div className="group relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:border-[#00bfff]">
            <div className="flex items-start gap-3 mb-2">
              <Briefcase className="w-5 h-5 flex-shrink-0" style={{ color: ACCENT }} />
              <h4 className="font-semibold text-slate-900">Career packaging.</h4>
            </div>
            <div className="text-sm leading-relaxed text-slate-600">We help you showcase your projects, rewrite your resume, and reach hiring managers directly.</div>
          </div>
          <div className="group relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:border-[#00bfff]">
            <div className="flex items-start gap-3 mb-2">
              <Shield className="w-5 h-5 flex-shrink-0" style={{ color: ACCENT }} />
              <h4 className="font-semibold text-slate-900">Job-guarantee mentorship.</h4>
            </div>
            <div className="text-sm leading-relaxed text-slate-600">Complete your milestones and outreach plan—if you don't get paid interviews, we refund or extend your mentorship per terms.</div>
          </div>
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
          <div className="flex items-start gap-3 mb-4">
            <Rocket className="w-6 h-6 flex-shrink-0" style={{ color: ACCENT }} />
            <h3 className="text-xl font-bold">After graduation:</h3>
          </div>
          <ul className="space-y-3 text-slate-700">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
              <span>Resume, LinkedIn & portfolio built with you</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
              <span>1-on-1 interview prep and strategy</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
              <span>Support sending your first applications</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
              <span>Pay-talk guidance when offers come</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Who It's For */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex items-start gap-3 mb-4">
            <Target className="w-6 h-6 flex-shrink-0" style={{ color: ACCENT }} />
            <h3 className="text-2xl font-bold">Who It's For</h3>
          </div>
          <div className="space-y-3 text-slate-700">
            <p className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
              <span>Professionals who want remote web work while keeping their current job</span>
            </p>
            <p className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
              <span>People ready to commit 6–10 hours per week to a proven roadmap</span>
            </p>
            <p className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
              <span>Doers who value mentorship and real-world proof over theory</span>
            </p>
            <p className="mt-4 text-sm">
              <span className="font-semibold">Not for:</span> unemployed applicants, full-time students, or anyone unable to commit weekly hours.
            </p>
          </div>
        </div>
      </section>

      {/* Why Frontend Development */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h3 className="mb-6 text-2xl font-bold">Why Frontend Development?</h3>
          <div className="grid gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: ACCENT }} />
              <p className="text-slate-700">High demand with remote opportunities worldwide</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: ACCENT }} />
              <p className="text-slate-700">Six-figure salaries standard in the industry</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: ACCENT }} />
              <p className="text-slate-700">No degree required - skills matter more than credentials</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: ACCENT }} />
              <p className="text-slate-700">Perfect for career changers at any age</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: ACCENT }} />
              <p className="text-slate-700">Work-life balance with flexible schedules</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: ACCENT }} />
              <p className="text-slate-700">Future-proof career with continuous growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h3 className="mb-6 text-2xl font-bold">Why Frontend Development Wins</h3>
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50">
                <TableHead className="w-1/3 font-bold text-slate-900"></TableHead>
                <TableHead className="w-1/3 font-bold text-slate-900 text-center" style={{ backgroundColor: "rgba(0,191,255,0.1)" }}>
                  Frontend Development
                </TableHead>
                <TableHead className="w-1/3 font-bold text-slate-900 text-center">
                  Other Paths (e.g. Cyber, PM, IT)
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-semibold">Time to Break In</TableCell>
                <TableCell className="text-center" style={{ backgroundColor: "rgba(0,191,255,0.05)" }}>
                  <div className="flex items-start justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
                    <span>12 weeks to portfolio + job interviews</span>
                  </div>
                </TableCell>
                <TableCell className="text-center text-slate-600">
                  <div className="flex items-start justify-center gap-2">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>12–24 months of certs, MBAs, or grinding</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Proof of Skill</TableCell>
                <TableCell className="text-center" style={{ backgroundColor: "rgba(0,191,255,0.05)" }}>
                  <div className="flex items-start justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
                    <span>Guaranteed Internship experience + portfolio</span>
                  </div>
                </TableCell>
                <TableCell className="text-center text-slate-600">
                  <div className="flex items-start justify-center gap-2">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>No real proof (certs, resumes, buzzwords only)</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Remote Lifestyle Fit</TableCell>
                <TableCell className="text-center" style={{ backgroundColor: "rgba(0,191,255,0.05)" }}>
                  <div className="flex items-start justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
                    <span>High % of remote-first roles</span>
                  </div>
                </TableCell>
                <TableCell className="text-center text-slate-600">
                  <div className="flex items-start justify-center gap-2">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Many require on-site / hybrid (especially Cyber + PM)</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Income Potential</TableCell>
                <TableCell className="text-center" style={{ backgroundColor: "rgba(0,191,255,0.05)" }}>
                  <div className="flex items-start justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
                    <span>$80K–$120K starting → $150K+ within a few years</span>
                  </div>
                </TableCell>
                <TableCell className="text-center text-slate-600">
                  <div className="flex items-start justify-center gap-2">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>IT stuck at $40K–$60K, PM requires years, bizopps inconsistent</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Barrier to Entry</TableCell>
                <TableCell className="text-center" style={{ backgroundColor: "rgba(0,191,255,0.05)" }}>
                  <div className="flex items-start justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
                    <span>No degree required, skills &gt; pedigree</span>
                  </div>
                </TableCell>
                <TableCell className="text-center text-slate-600">
                  <div className="flex items-start justify-center gap-2">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Degree, clearance, MBA, or years of "experience"</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Family & Freedom Friendly</TableCell>
                <TableCell className="text-center" style={{ backgroundColor: "rgba(0,191,255,0.05)" }}>
                  <div className="flex items-start justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
                    <span>Control schedule, more time for travel/kids/health</span>
                  </div>
                </TableCell>
                <TableCell className="text-center text-slate-600">
                  <div className="flex items-start justify-center gap-2">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Commutes, stress, or unstable income</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Guaranteed Path</TableCell>
                <TableCell className="text-center" style={{ backgroundColor: "rgba(0,191,255,0.05)" }}>
                  <div className="flex items-start justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
                    <span>Mentorship + insider referrals + job guarantee</span>
                  </div>
                </TableCell>
                <TableCell className="text-center text-slate-600">
                  <div className="flex items-start justify-center gap-2">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>"Figure it out yourself," zero guarantees</span>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
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
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-base font-semibold text-[#00384d] shadow hover:shadow-lg transition-all"
            >
              <Rocket className="w-5 h-5" />
              Check Eligibility
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
