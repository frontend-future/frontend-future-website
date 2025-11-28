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
          }}>Learn How To Code</span> And Land A <span className="underline decoration-2" style={{
            textDecorationColor: ACCENT
          }}>6-Figure Remote Job</span> In <span className="underline decoration-2" style={{
            textDecorationColor: ACCENT
          }}>12-Weeks</span>
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
              10 hrs/wk Online
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <Shield className="w-3 h-3 md:w-4 md:h-4" style={{
              color: ACCENT
            }} />
              Money-back Guarantee
            </span>
          </div>

          <div className="mt-5">
            <a href={TYPEFORM_URL} target="_blank" rel="noopener noreferrer" className="cta-btn group inline-flex items-center gap-2 rounded-xl px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base font-semibold text-[#00131a] shadow transition-transform duration-150 will-change-transform">
              <Rocket className="w-4 h-4 md:w-5 md:h-5" />
              <span className="transition-transform duration-150 group-hover:-translate-y-0.5">See if I qualify</span>
              <svg className="h-3 w-3 md:h-4 md:w-4 transition-transform duration-150 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
              title: "Time to Break In",
              frontend: "12 weeks to portfolio + interviews",
              other: "12–24 months certs/MBAs"
            },
            {
              title: "Proof of Skill",
              frontend: "Internship + portfolio",
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
              title: "Guaranteed Path",
              frontend: "Mentorship + job guarantee",
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
                <TableCell className="font-semibold">Time to Break In</TableCell>
                <TableCell className="text-center" style={{
                backgroundColor: "rgba(0,191,255,0.05)"
              }}>
                  <div className="flex items-start justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{
                    color: ACCENT
                  }} />
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
                <TableCell className="text-center" style={{
                backgroundColor: "rgba(0,191,255,0.05)"
              }}>
                  <div className="flex items-start justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{
                    color: ACCENT
                  }} />
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
                <TableCell className="font-semibold">Guaranteed Path</TableCell>
                <TableCell className="text-center" style={{
                backgroundColor: "rgba(0,191,255,0.05)"
              }}>
                  <div className="flex items-start justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{
                    color: ACCENT
                  }} />
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
          <FAQItem q="How does your program guarantee a job?" a="We guarantee job placement because we've built a proven system. You'll complete a guaranteed internship during the program, building real-world experience and references. We provide unlimited interview prep, resume reviews, and direct introductions to our hiring partners. We don't stop supporting you until you land a role - it's that simple. Our track record speaks for itself with a 100% placement rate." />
          <FAQItem q="What is Frontend Future's student success rate?" a="100% of our students who complete the program land frontend developer roles. Our average graduate salary is $128K, with most securing remote positions. We track every graduate's progress and maintain these statistics publicly. The combination of 1:1 mentorship, guaranteed internship, and unlimited job support means our students succeed where others struggle." />
          <FAQItem q="What do you really mean by one-on-one mentorship?" a="Unlike bootcamps with 30+ students per instructor, you get dedicated 1:1 time with an experienced frontend developer. Your mentor knows your name, your goals, and your learning style. Sessions are customized to your pace - if you need extra time on React, you get it. If you grasp JavaScript quickly, we move faster. You're never competing for attention or waiting for others to catch up." />
          <FAQItem q="How long will it take to land a job after I complete the training?" a="Most graduates receive offers within 4-8 weeks of completing the program. Some even secure positions before finishing, thanks to the internship connections. We provide unlimited job search support, so there's no time limit. You'll have ongoing access to interview prep, application reviews, and direct introductions to companies actively hiring." />
          <FAQItem q="What if I'm a complete beginner with no degree?" a="Perfect - most of our students start exactly where you are. You don't need a degree, prior coding experience, or technical background. The curriculum is designed specifically for complete beginners who are motivated to change careers. We start with the absolute basics and build systematically. Your dedication and work ethic matter far more than your educational background. Companies care about skills, not degrees." />
          <FAQItem q="I'm working full-time. Can I still do this?" a="Yes, though it requires commitment. The program is intensive and demands 20-30 hours per week. Most students maintain full-time jobs and complete coursework in evenings and weekends. The 1:1 mentorship structure gives you flexibility to schedule sessions around your work. Many of our success stories are from people who did exactly this - kept their job for financial stability while building their new career." />
          <FAQItem q="Is 12 weeks really enough time to learn frontend development?" a="Absolutely. We're not teaching you everything about web development - we're teaching you exactly what employers need for entry-level frontend roles. The curriculum is laser-focused on HTML, CSS, JavaScript, and React - the core skills that land jobs. Plus, the guaranteed internship gives you real-world application of these skills. You'll be job-ready, not just classroom-ready." />
          <FAQItem q="Can I work remotely as a frontend developer?" a="Yes - 98% of our graduates work fully remote. Frontend development is one of the most remote-friendly careers in tech. Companies worldwide hire frontend developers remotely because the work is entirely digital. You'll build your portfolio with remote work in mind, and we specifically target remote-friendly companies in our placement support." />
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