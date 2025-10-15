import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Sparkles } from "lucide-react";

const ACCENT = "#00bfff";

interface JourneyStep {
  id: number;
  emoji: string;
  phase: string;
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  highlights: string[];
  outcome: string;
  ctaText: string;
}

const journeySteps: JourneyStep[] = [
  {
    id: 1,
    emoji: "🎯",
    phase: "Weeks 1-3",
    title: "Build Your Foundation",
    subtitle: "Master the fundamentals that 90% of bootcamps skip",
    duration: "3 weeks • 6-10 hrs/week",
    description: "No fluff tutorials. No copy-paste exercises. You'll build real, production-ready pages from day one.",
    highlights: [
      "🏗️ HTML5 semantic structure - write code that search engines love",
      "🎨 Master CSS Grid & Flexbox - build any layout imaginable",
      "⚡ JavaScript ES6+ - async/await, promises, array methods that actually matter",
      "📱 Mobile-first responsive design - your sites look perfect on every device",
      "🎯 Build Project #1: High-converting landing page with animations",
      "👨‍💻 Weekly 1-on-1 code review with your personal mentor",
      "🧠 Learn to think like a developer, not memorize syntax"
    ],
    outcome: "You'll have your first portfolio piece that proves you can ship real work, not just follow tutorials.",
    ctaText: "Start learning fundamentals"
  },
  {
    id: 2,
    emoji: "🚀",
    phase: "Weeks 4-7",
    title: "Ship Real Applications",
    subtitle: "Build a full-stack web app hiring managers can actually use",
    duration: "4 weeks • 8-12 hrs/week",
    description: "This is where you separate yourself from tutorial hell. You'll build a complete application with login, database, and live features.",
    highlights: [
      "⚛️ React mastery: components, hooks, state management, context API",
      "🔐 User authentication - secure login/signup with protected routes",
      "📊 Interactive dashboard with real-time data visualization",
      "🔌 REST API integration - fetch, post, update data like a pro",
      "🌐 Deploy to production - your app goes live for the world to see",
      "💼 Git & GitHub workflows - collaborate like enterprise teams",
      "🎤 Mock technical interviews - practice explaining your code",
      "🏆 Build Project #2: Full-stack app with backend integration"
    ],
    outcome: "A live, working application in your portfolio. This is what gets you past HR filters and into real interviews.",
    ctaText: "See the full curriculum"
  },
  {
    id: 3,
    emoji: "💎",
    phase: "Weeks 8-12",
    title: "Polish & Get Job-Ready",
    subtitle: "Turn good projects into portfolio pieces that land $120K offers",
    duration: "5 weeks • 10-15 hrs/week",
    description: "Most developers stop at 'it works.' You'll learn to ship production-grade code that impresses senior engineers.",
    highlights: [
      "⚡ Performance optimization - Lighthouse scores above 90",
      "📝 Code splitting & lazy loading - make your apps blazing fast",
      "🔍 SEO optimization - rank on Google from day one",
      "💼 Complete your guaranteed internship with real client work",
      "📚 Write technical documentation like a senior developer",
      "✍️ Start your developer blog - establish thought leadership",
      "📖 Create detailed case studies for each project",
      "🎯 Advanced debugging techniques that save hours",
      "🧪 Testing strategies used by top companies"
    ],
    outcome: "Graduate with internship experience on your resume and 2-3 production apps that prove you can do the job.",
    ctaText: "Learn about the internship"
  },
  {
    id: 4,
    emoji: "📝",
    phase: "Week 13-16",
    title: "Launch Your Career",
    subtitle: "We build your entire hiring package and get you in front of decision-makers",
    duration: "4 weeks • Ongoing support",
    description: "Most people fail at job hunting because they look like everyone else. We make you unforgettable.",
    highlights: [
      "📄 Professional resume rewrite - optimized for ATS and human reviewers",
      "💼 LinkedIn profile transformation - get found by recruiters daily",
      "🌐 Portfolio website with case studies that tell your story",
      "✉️ Custom cover letter templates for different company types",
      "🎯 Application strategy: target the right companies at the right time",
      "🤝 Direct introductions to our hiring partner network",
      "📊 Track applications with proven follow-up sequences",
      "💪 Mock interviews with developers who've hired before",
      "🎭 Behavioral interview prep - tell your story with confidence"
    ],
    outcome: "Your applications get responses. You're not just another resume - you're a developer with proof.",
    ctaText: "See our placement process"
  },
  {
    id: 5,
    emoji: "💰",
    phase: "Week 17-20",
    title: "Negotiate Like a Pro",
    subtitle: "Turn multiple offers into maximum compensation",
    duration: "2-3 weeks per offer cycle",
    description: "This is where most people leave $20K-$40K on the table. Not you.",
    highlights: [
      "🎯 Offer evaluation framework - salary, equity, benefits, culture fit",
      "💬 Negotiation scripts that actually work",
      "🔥 Use competing offers to drive up compensation",
      "🏡 Negotiate remote work terms and flexibility",
      "📋 Benefits package breakdown - what really matters",
      "🚩 Red flag detection in contracts and company culture",
      "🤝 How to decline offers while keeping relationships warm",
      "📈 Long-term career planning - think beyond the first role",
      "💎 Equity negotiation for startup offers"
    ],
    outcome: "Our average graduate lands $120K+ offers. Many negotiate up by $20K-$40K using our frameworks.",
    ctaText: "Learn our negotiation tactics"
  },
  {
    id: 6,
    emoji: "🏝️",
    phase: "Day 1+",
    title: "Your New Freedom Lifestyle",
    subtitle: "This is what you've been working toward",
    duration: "The rest of your life",
    description: "No more commute. No more asking permission to work from home. No more trading time for money in a job you hate.",
    highlights: [
      "☕ Wake up without an alarm, make coffee, open your laptop",
      "🌎 Work from anywhere - home, beach, mountains, another country",
      "👨‍👩‍👧‍👦 Actually be present for your family's important moments",
      "💰 Save $5K-$15K per year on commuting, food, and work expenses",
      "⏰ Set your own schedule and work when you're most productive",
      "🎯 Take a walk when you need to think, no permission required",
      "🏠 Reclaim 2-3 hours daily from commuting",
      "💪 Hit the gym during lunch break, cook healthy meals",
      "🌱 Keep learning and growing with lifetime community access",
      "🎓 Mentor others and share your journey"
    ],
    outcome: "Financial security. Location independence. Work-life balance. This is freedom on your terms.",
    ctaText: "Start my journey to freedom"
  }
];

export default function JourneyTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep < journeySteps.length - 1) {
      setActiveStep(activeStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevious = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const currentStep = journeySteps[activeStep];
  const progress = ((activeStep + 1) / journeySteps.length) * 100;
  const isFirstStep = activeStep === 0;
  const isFinalStep = activeStep === journeySteps.length - 1;

  return (
    <section className="mx-auto max-w-6xl px-4 py-8 md:py-12">
      {/* Header */}
      <div className="mb-6 md:mb-8 text-center">
        <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 rounded-full bg-[#00bfff]/10 border border-[#00bfff]/20">
          <Sparkles className="w-4 h-4" style={{ color: ACCENT }} />
          <span className="text-sm font-semibold" style={{ color: ACCENT }}>Your Complete Journey</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold mb-2">
          From Zero to $120K+ Remote Developer
        </h2>
        <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
          👇 Click through each phase to see exactly what you'll learn, build, and achieve
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-6 md:mb-8">
        <div className="relative h-2.5 md:h-3 overflow-hidden rounded-full bg-slate-200">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: ACCENT }}
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <div className="mt-2 flex justify-between items-center text-xs md:text-sm text-slate-500">
          <span className="font-medium">🎯 Start</span>
          <span className="font-bold px-3 py-1 rounded-full bg-[#00bfff]/10" style={{ color: ACCENT }}>
            Step {activeStep + 1} of {journeySteps.length}
          </span>
          <span className="font-medium">🏝️ Freedom</span>
        </div>
      </div>

      {/* Mobile-Optimized Step Pills */}
      <div className="mb-6 overflow-x-auto pb-3 -mx-4 px-4 scrollbar-hide">
        <div className="flex gap-2 min-w-max md:justify-center">
          {journeySteps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(index)}
              className={`flex-shrink-0 flex flex-col items-center gap-1.5 rounded-xl border-2 px-3 py-2.5 transition-all ${
                index === activeStep
                  ? "border-[#00bfff] bg-[#00bfff]/10 shadow-lg scale-105"
                  : index < activeStep
                  ? "border-slate-300 bg-white shadow-sm"
                  : "border-slate-200 bg-slate-50"
              }`}
            >
              <span className="text-2xl">{step.emoji}</span>
              <span className="text-[10px] md:text-xs font-semibold text-slate-700 whitespace-nowrap">
                {step.phase}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border-2 border-slate-200 bg-white shadow-xl overflow-hidden"
        >
          {/* Card Header */}
          <div className="bg-gradient-to-br from-[#00bfff]/10 via-white to-white p-6 md:p-8 border-b border-slate-100">
            <div className="flex items-start gap-3 mb-3">
              <span className="text-4xl md:text-5xl">{currentStep.emoji}</span>
              <div className="flex-1">
                <div className="inline-block px-3 py-1 rounded-full bg-white border border-[#00bfff]/30 mb-2">
                  <span className="text-xs md:text-sm font-bold" style={{ color: ACCENT }}>
                    {currentStep.phase}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-1">{currentStep.title}</h3>
                <p className="text-base md:text-lg text-slate-600 font-medium">{currentStep.subtitle}</p>
                <p className="text-sm text-slate-500 mt-2">⏱️ {currentStep.duration}</p>
              </div>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-6 md:p-8 space-y-6">
            {/* Description */}
            <p className="text-base md:text-lg text-slate-700 leading-relaxed font-medium">
              {currentStep.description}
            </p>

            {/* Highlights */}
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span>✨</span>
                <span>What you'll do:</span>
              </h4>
              <ul className="space-y-3">
                {currentStep.highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3 text-slate-700 leading-relaxed"
                  >
                    <span className="text-lg flex-shrink-0">{highlight.split(" ")[0]}</span>
                    <span className="text-sm md:text-base">{highlight.split(" ").slice(1).join(" ")}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Outcome Banner */}
            <div className="rounded-xl bg-gradient-to-r from-[#00bfff]/10 to-[#00bfff]/5 p-5 border-2 border-[#00bfff]/20">
              <div className="flex items-start gap-2 mb-2">
                <span className="text-xl">🎯</span>
                <h4 className="font-bold text-slate-900">The Result:</h4>
              </div>
              <p className="text-slate-700 leading-relaxed">{currentStep.outcome}</p>
            </div>
          </div>

          {/* Navigation Footer */}
          <div className="bg-slate-50 border-t border-slate-200 p-4 md:p-6">
            <div className="flex items-center justify-between gap-3">
              <button
                onClick={handlePrevious}
                disabled={isFirstStep}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-slate-300 bg-white font-semibold text-slate-700 transition-all hover:border-slate-400 hover:shadow-md disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none"
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="hidden sm:inline">Back</span>
              </button>

              {isFinalStep ? (
                <a
                  href="#eligibility"
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-[#00131a] shadow-lg transition-all hover:shadow-xl hover:scale-105 text-sm md:text-base"
                  style={{ backgroundColor: ACCENT }}
                >
                  <span>🚀</span>
                  <span>Start Your Journey Now</span>
                </a>
              ) : (
                <button
                  onClick={handleNext}
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-[#00131a] shadow-lg transition-all hover:shadow-xl hover:scale-105 text-sm md:text-base"
                  style={{ backgroundColor: ACCENT }}
                >
                  <span>Next Phase</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Quick Jump */}
      <div className="mt-6 text-center">
        <p className="text-sm text-slate-500 mb-3">Quick jump:</p>
        <div className="flex flex-wrap justify-center gap-2">
          {journeySteps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(index)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                index === activeStep
                  ? "bg-[#00bfff] text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {step.emoji} {step.phase}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}