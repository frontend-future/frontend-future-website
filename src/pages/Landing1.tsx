import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Clock, Target, Users, Briefcase, Award, TrendingUp, Code, Rocket, Shield, X } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import ffLogo from "@/assets/ff-logo.png";
import HeroDynamicSection from "@/components/HeroDynamicSection";
import SalaryChart from "@/components/SalaryChart";
import YouTubeChannelSection from "@/components/YouTubeChannelSection";
import JourneyTimeline from "@/components/JourneyTimeline";

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
const TYPEFORM_URL = "https://start.frontendfuture.pro/landing";
const MICRO_VSL = "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&mute=1"; // TODO

function CTAButton({
  children
}: {
  children: React.ReactNode;
}) {
  return <a href={TYPEFORM_URL} target="_blank" rel="noopener noreferrer" className="cta-btn group inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-base font-semibold text-[#00131a] shadow transition-transform duration-150 will-change-transform">
      <span className="transition-transform duration-150 group-hover:-translate-y-0.5">{children}</span>
      <svg className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M7 3l7 7-7 7" />
      </svg>
    </a>;
}
function FAQItem({
  q,
  a
}: {
  q: string;
  a: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return <div className="rounded-xl border border-slate-200 bg-white p-4">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between text-left">
        <span className="font-medium text-slate-900">{q}</span>
        <svg className={`h-5 w-5 text-slate-600 transition-transform duration-200 ${open ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M5 8l5 5 5-5" />
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {open && <motion.div key="content" initial="collapsed" animate="open" exit="collapsed" variants={{
        open: {
          height: "auto",
          opacity: 1
        },
        collapsed: {
          height: 0,
          opacity: 0
        }
      }} transition={{
        duration: 0.28,
        ease: [0.22, 1, 0.36, 1]
      }} className="overflow-hidden">
            <div className="pt-3 text-sm text-slate-600">{a}</div>
          </motion.div>}
      </AnimatePresence>
    </div>;
}
function CTABanner() {
  return <section className="rounded-2xl p-6 md:p-8 shadow-sm" style={{
    backgroundImage: "linear-gradient(90deg, rgba(0,191,255,0.12), rgba(0,191,255,0.24), rgba(0,191,255,0.12))",
    backgroundSize: "200% 200%",
    animation: "shimmer 8s ease-in-out infinite"
  }}>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-2xl font-bold text-[#00131a]">Ready to see if you fit?</h3>
          <p className="text-[#00131a]/80">Takes 2 minutes. Employed people only.</p>
        </div>
        <a href={TYPEFORM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-base font-semibold text-[#00384d] shadow">
          Check eligibility
        </a>
      </div>
    </section>;
}
export default function Landing1() {
  const [showVideo, setShowVideo] = useState(true);
  const showVideoDefault = true; // set false to hide micro‑VSL

  return <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
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
      

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 pb-6 pt-2 lg:grid-cols-2">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider bg-sky-50 inline-block rounded-full px-3 py-1 text-center mb-3" style={{
          color: ACCENT
        }}>
            Ditch the commute and work from anywhere
          </p>
          <h1 className="text-2xl font-extrabold leading-tight md:text-5xl">
            <span className="underline decoration-2" style={{
            textDecorationColor: ACCENT
          }}>Learn How to Code</span> and Pursue a <span className="underline decoration-2" style={{
            textDecorationColor: ACCENT
          }}>Remote 6-Figure Tech Career</span>
          </h1>
          <p className="mt-3 text-base md:text-xl font-semibold text-slate-700">
            Without a degree and without quitting your day job.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-600">
            <span className="inline-flex items-center gap-1">
              <Target className="w-3 h-3 md:w-4 md:h-4" style={{
              color: ACCENT
            }} />
              Flexible schedule
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3 h-3 md:w-4 md:h-4" style={{
              color: ACCENT
            }} />
              10 hrs/wk online
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <Shield className="w-3 h-3 md:w-4 md:h-4" style={{
              color: ACCENT
            }} />
              Money-back guarantee
            </span>
          </div>

          <div className="mt-5">
            <a href={TYPEFORM_URL} target="_blank" rel="noopener noreferrer" className="cta-btn group inline-flex items-center gap-2 rounded-xl px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base font-semibold text-white shadow transition-shadow duration-200 hover:shadow-lg">
              <Rocket className="w-4 h-4 md:w-5 md:h-5" />
              <span>See if I qualify</span>
              <svg className="h-3 w-3 md:h-4 md:w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M7 3l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <HeroDynamicSection />
      </section>

      {/* Why this works */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="rounded-xl border border-slate-200 bg-white p-4 md:p-6 shadow-sm">
          <div className="flex items-start gap-2 mb-2">
            <TrendingUp className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" style={{
            color: ACCENT
          }} />
            <div>
              <h3 className="text-lg md:text-xl font-bold">Why this works</h3>
            </div>
          </div>
          <p className="text-sm md:text-base font-semibold text-slate-900 mb-1.5">
            Hiring managers hire proof, not resumes.
          </p>
          <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
            Most job posts get hundreds of applicants—filters reject almost everyone. We help you build proof that passes those filters and puts you directly in front of decision-makers.
          </p>
        </div>
      </section>

      {/* What makes us different */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h3 className="mb-4 text-lg md:text-2xl font-bold">What makes us different</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="group relative rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:border-[#00bfff]">
            <div className="flex items-start gap-2 mb-1.5">
              <Code className="w-4 h-4 flex-shrink-0" style={{
              color: ACCENT
            }} />
              <h4 className="text-sm font-semibold text-slate-900">Real projects.</h4>
            </div>
            <div className="text-xs leading-relaxed text-slate-600">No tutorials. You'll work with real limits, specs, and performance targets—just like an actual job.</div>
          </div>
          <div className="group relative rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:border-[#00bfff]">
            <div className="flex items-start gap-2 mb-1.5">
              <Users className="w-4 h-4 flex-shrink-0" style={{
              color: ACCENT
            }} />
              <h4 className="text-sm font-semibold text-slate-900">Weekly Personalized Guidance</h4>
            </div>
            <div className="text-xs leading-relaxed text-slate-600">Short calls. Clear feedback. Every week you'll know exactly what to improve next.</div>
          </div>
          <div className="group relative rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:border-[#00bfff]">
            <div className="flex items-start gap-2 mb-1.5">
              <Briefcase className="w-4 h-4 flex-shrink-0" style={{
              color: ACCENT
            }} />
              <h4 className="text-sm font-semibold text-slate-900">Career packaging.</h4>
            </div>
            <div className="text-xs leading-relaxed text-slate-600">We help you showcase your projects, rewrite your resume, and reach hiring managers directly.</div>
          </div>
          <div className="group relative rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:border-[#00bfff]">
            <div className="flex items-start gap-2 mb-1.5">
              <Shield className="w-4 h-4 flex-shrink-0" style={{
              color: ACCENT
            }} />
              <h4 className="text-sm font-semibold text-slate-900">Job Hunt Support</h4>
            </div>
            <div className="text-xs leading-relaxed text-slate-600">We don't just teach you then drop you in the deep end—we guide you every step of the way through your job search.</div>
          </div>
        </div>
      </section>

      {/* Interactive Journey Timeline */}
      <JourneyTimeline />

      {/* Salary Data Chart */}
      <SalaryChart />

      {/* YouTube Channel Section - Hidden until ready to upload */}
      {/* <YouTubeChannelSection
        handle="@frontendfuture"
        heading="From our YouTube channel"
        subheading="Real career transformation stories and frontend development tutorials."
        maxResults={12}
       /> */}

      {/* Comparison Table */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h3 className="mb-4 text-lg md:text-2xl font-bold">Why Frontend Development Wins</h3>
        
        {/* Mobile Card Layout */}
        <div className="md:hidden space-y-3">
          {[
            {
              title: "Time to Learn",
              frontend: "12 weeks to skills + begin applying",
              other: "12–24 months certs/MBAs"
            },
            {
              title: "Proof of Skill",
              frontend: "Graduate with experience + portfolio",
              other: "Certs & buzzwords only"
            },
            {
              title: "Remote Lifestyle",
              frontend: "High % remote-first roles",
              other: "Mostly on-site/hybrid"
            },
            {
              title: "Income Potential",
              frontend: "$80K–$120K → $150K+",
              other: "IT: $40K–$60K, PM: years"
            },
            {
              title: "Barrier to Entry",
              frontend: "No degree, skills > pedigree",
              other: "Degree, MBA, clearance"
            },
            {
              title: "Family & Freedom",
              frontend: "Control schedule & location",
              other: "Commutes & stress"
            },
            {
              title: "Proven Path",
              frontend: "Expert mentors + insider referral system",
              other: "Figure it out yourself"
            }
          ].map((item, idx) => (
            <div key={idx} className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              <div className="bg-slate-50 px-3 py-2 border-b border-slate-200">
                <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
              </div>
              <div className="p-3 space-y-2.5">
                <div className="flex items-start gap-2 rounded-lg p-2" style={{ backgroundColor: "rgba(0,191,255,0.05)" }}>
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
                  <div>
                    <div className="text-[10px] font-semibold mb-0.5" style={{ color: ACCENT }}>Frontend Dev</div>
                    <div className="text-xs text-slate-900">{item.frontend}</div>
                  </div>
                </div>
                <div className="flex items-start gap-2 rounded-lg p-2">
                  <X className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] font-semibold text-slate-500 mb-0.5">Other Paths</div>
                    <div className="text-xs text-slate-600">{item.other}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table Layout */}
        <div className="hidden md:block rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50">
                <TableHead className="w-1/3 font-bold text-slate-900"></TableHead>
                <TableHead className="w-1/3 font-bold text-slate-900 text-center" style={{
                backgroundColor: "rgba(0,191,255,0.1)"
              }}>
                  Frontend Development
                </TableHead>
                <TableHead className="w-1/3 font-bold text-slate-900 text-center">
                  Other Paths (e.g. Cyber, PM, IT)
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-semibold">Time to Learn</TableCell>
                <TableCell className="text-center" style={{
                backgroundColor: "rgba(0,191,255,0.05)"
              }}>
                  <div className="flex items-start justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{
                    color: ACCENT
                  }} />
                    <span>12 weeks to skills + begin applying</span>
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
                <TableCell className="text-center" style={{
                backgroundColor: "rgba(0,191,255,0.05)"
              }}>
                  <div className="flex items-start justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{
                    color: ACCENT
                  }} />
                    <span>Graduate with experience + portfolio</span>
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
                <TableCell className="text-center" style={{
                backgroundColor: "rgba(0,191,255,0.05)"
              }}>
                  <div className="flex items-start justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{
                    color: ACCENT
                  }} />
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
                <TableCell className="text-center" style={{
                backgroundColor: "rgba(0,191,255,0.05)"
              }}>
                  <div className="flex items-start justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{
                    color: ACCENT
                  }} />
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
                <TableCell className="text-center" style={{
                backgroundColor: "rgba(0,191,255,0.05)"
              }}>
                  <div className="flex items-start justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{
                    color: ACCENT
                  }} />
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
                <TableCell className="text-center" style={{
                backgroundColor: "rgba(0,191,255,0.05)"
              }}>
                  <div className="flex items-start justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{
                    color: ACCENT
                  }} />
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
                <TableCell className="font-semibold">Proven Path</TableCell>
                <TableCell className="text-center" style={{
                backgroundColor: "rgba(0,191,255,0.05)"
              }}>
                  <div className="flex items-start justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{
                    color: ACCENT
                  }} />
                    <span>Expert mentors + insider referral system</span>
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
          <FAQItem q="How does your program help students become job-ready?" a="Our goal is to give you every advantage possible when breaking into tech. During the program, you'll complete a structured internship project that simulates real-world work and helps you build portfolio-ready experience. You also get interview prep, resume reviews, application support, and introductions to companies and recruiters in our network when relevant. We support you for up to 12 months after training, so you always have guidance while navigating the job search." />
          <FAQItem q="How long does it take to land a job after completing the training?" a="Job timelines vary from student to student, since factors like consistency, application volume, and interview preparation all play a role. While we cannot legally guarantee employment, we provide continued job-search support every step of the way, including coaching, application reviews, interview prep, and salary negotiation guidance. We also offer a money-back guarantee if you complete the required steps and do not secure a role within the terms outlined in the agreement, giving students added confidence as they work toward their goals." />
          <FAQItem q="What if I'm a complete beginner with no degree?" a="Great, many students start exactly there. You don't need a degree or prior coding background. Our curriculum is designed for people changing careers, starting from foundational concepts and building up to the skills employers look for in junior frontend roles. Your background matters far less than your consistency and willingness to put in the work." />
          <FAQItem q="I'm working full-time. Can I still do this?" a="Yes, most of our students work full-time. The program is built to fit evenings and weekends, and you can expect to commit at least 10 hours per week depending on your pace. The mentorship structure helps you keep moving forward even with a busy schedule, so you can make consistent progress without needing to quit your job." />
          <FAQItem q="Is 12 weeks really enough time to learn frontend development?" a="Twelve weeks of focused learning is enough to build the essential skills used in entry-level frontend roles, including HTML, CSS, JavaScript, and React. The internship project helps you apply these skills in a real-world context, and the additional months of job-search support give you time to strengthen your portfolio, practice interviews, and improve steadily as you prepare to apply for roles." />
          <FAQItem q="Can I work remotely as a frontend developer?" a="Many entry-level and mid-level frontend roles today offer remote or hybrid flexibility, and tech remains one of the most remote-friendly career paths. You'll build your portfolio with remote-friendly workflows in mind, and we help students target companies that are open to remote talent when searching for opportunities." />
        </div>
      </section>

      {/* CTA banner with shimmer */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <section className="rounded-2xl p-6 md:p-8 shadow-sm" style={{
        backgroundImage: "linear-gradient(90deg, rgba(0,191,255,0.12), rgba(0,191,255,0.24), rgba(0,191,255,0.12))",
        backgroundSize: "200% 200%",
        animation: "shimmer 8s ease-in-out infinite"
      }}>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-[#00131a]">Ready to see if you qualify?</h3>
              <p className="text-[#00131a]/80">Takes 2 minutes. Working professionals only.</p>
            </div>
            <a href={TYPEFORM_URL} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-base font-semibold text-[#00384d] shadow hover:shadow-lg transition-all">
              <Rocket className="w-5 h-5" />
              See If I Qualify
            </a>
          </div>
        </section>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 px-4 py-10 text-center text-xs text-slate-500">
        <div className="flex items-center justify-center gap-2 mb-4">
          <img src={ffLogo} alt="FrontendFuture Logo" className="w-8 h-8 rounded-full" />
          <span className="text-sm font-semibold text-slate-900">FrontendFuture</span>
        </div>
        <div className="mt-4">
          © 2025 Turbo Scale, LLC — FrontendFuture · <a href="/terms" className="underline">Terms</a> · <a href="/privacy" className="underline">Privacy</a> · <a href="/accessibility" className="underline">Accessibility</a> · <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="underline">Watch more on YouTube</a>
        </div>
      </footer>
    </main>;
}