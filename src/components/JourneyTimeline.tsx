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
const journeySteps: JourneyStep[] = [{
  id: 1,
  emoji: "🎯",
  phase: "Weeks 1-3",
  title: "Learn to Code",
  subtitle: "Build your first real website",
  duration: "3 weeks",
  description: "Jump straight into building things you can actually see and use. You will learn the fundamentals by shipping real projects, not watching endless tutorials.",
  highlights: ["🎨 Build clean, modern pages that look great on any device", "⚡ Add basic interactions so your site starts to feel alive", "🏆 Ship your first working project with mentor feedback"],
  outcome: "Your first real portfolio piece that shows you can build from scratch.",
  ctaText: "Start learning"
}, {
  id: 2,
  emoji: "🛠️",
  phase: "Weeks 4-7",
  title: "Build Real Apps",
  subtitle: "Create interactive apps that feel like real products",
  duration: "4 weeks",
  description: "Move beyond simple pages and start building apps that rely on real logic, real data, and real user flows.",
  highlights: ["⚛️ Build multi-screen app flows using components and reusable UI", "🔐 Add dynamic behavior like filtering, search, forms, and instant updates", "📊 Work with real data to create charts, tables, lists, and simple dashboards"],
  outcome: "An interactive app that proves you can build real functionality with JavaScript and React.",
  ctaText: "See what you'll build"
}, {
  id: 3,
  emoji: "💎",
  phase: "Weeks 8-12",
  title: "Polish and Performance",
  subtitle: "Make your projects look and feel professional",
  duration: "5 weeks",
  description: "Take your apps from \"it works\" to \"this looks like a real product.\" You will refine your UI, improve your logic, and make everything feel snappy and polished.",
  highlights: ["✨ Clean up rough edges and redesign messy parts", "⚡ Improve performance and responsiveness so everything feels fast", "📖 Refactor your code to match real developer standards"],
  outcome: "Refined, professional-quality projects that stand out immediately.",
  ctaText: "Learn about internship"
}, {
  id: 4,
  emoji: "🗂️",
  phase: "Weeks 13-16",
  title: "Job Search System",
  subtitle: "Turn your work into a professional portfolio",
  duration: "4 weeks",
  description: "This phase transforms your projects, skills, and story into a clean professional presence that gets attention.",
  highlights: ["📄 Create a polished resume that reflects your new skills", "💼 Optimize your LinkedIn so recruiters can find you", "🌐 Build a simple, clean portfolio website", "🤝 Practice explaining your work with confidence and clarity"],
  outcome: "A professional online presence that makes your applications stand out.",
  ctaText: "See how we help"
}, {
  id: 5,
  emoji: "📬",
  phase: "Weeks 17-20",
  title: "Start Applying With Confidence",
  subtitle: "Use a plan designed for career changers",
  duration: "2-3 weeks",
  description: "Stop guessing and start applying with purpose. You will follow a simple system that increases your chances of getting responses.",
  highlights: ["🎯 Follow a clear weekly application plan", "💬 Practice common interview questions and explanations", "🏡 Learn how to reach out to hiring managers the right way", "📈 Build a long-term roadmap for breaking into tech"],
  outcome: "A repeatable strategy for getting interviews and moving toward your first tech opportunity.",
  ctaText: "Learn to negotiate"
}, {
  id: 6,
  emoji: "🌴",
  phase: "Day 1+",
  title: "Live the Dream",
  subtitle: "Work from anywhere, on your own terms",
  duration: "Forever",
  description: "The goal is not just learning code. The goal is freedom. More control of your time, more flexibility, and a career that supports your life.",
  highlights: ["☕ Explore remote-friendly paths that fit your goals", "🌎 Build a schedule that you control", "👨‍👩‍👧‍👦 Reclaim time for family, travel, and your personal life", "💰 Use your skills to create opportunities you never had before"],
  outcome: "A remote-friendly, flexible career path that gives you more control over your life.",
  ctaText: "Start your journey"
}];
export default function JourneyTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    if (activeStep < journeySteps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };
  const handlePrevious = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };
  const currentStep = journeySteps[activeStep];
  const progress = (activeStep + 1) / journeySteps.length * 100;
  const isFirstStep = activeStep === 0;
  const isFinalStep = activeStep === journeySteps.length - 1;
  return <section className="mx-auto max-w-6xl px-4 py-6 md:py-12">
      {/* Header */}
      <div className="mb-4 md:mb-8 text-center">
        <div className="inline-flex items-center gap-2 mb-2 px-3 py-1.5 rounded-full bg-[#00bfff]/10 border border-[#00bfff]/20">
          <Sparkles className="w-3 h-3" style={{
          color: ACCENT
        }} />
          <span className="text-xs font-semibold" style={{
          color: ACCENT
        }}>Visualize Your Journey</span>
        </div>
        <h2 className="text-xl md:text-4xl font-bold mb-1">
          Zero to Remote Dev
        </h2>
        <p className="text-sm md:text-lg text-slate-600 max-w-2xl mx-auto">
          👇 Click through each step
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-4 md:mb-6">
        <div className="relative h-2 md:h-3 overflow-hidden rounded-full bg-slate-200">
          <motion.div className="h-full rounded-full" style={{
          backgroundColor: ACCENT
        }} initial={{
          width: "0%"
        }} animate={{
          width: `${progress}%`
        }} transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1]
        }} />
        </div>
        <div className="mt-1.5 flex justify-between items-center text-xs text-slate-500">
          <span className="font-medium">🎯</span>
          <span className="font-bold px-2 py-0.5 rounded-full bg-[#00bfff]/10 text-xs" style={{
          color: ACCENT
        }}>
            {activeStep + 1}/{journeySteps.length}
          </span>
          <span className="font-medium">🏝️</span>
        </div>
      </div>

      {/* Mobile-Optimized Step Pills */}
      <div className="mb-3 overflow-x-auto pb-2 pt-2 -mx-4 px-4 scrollbar-hide">
        <div className="flex gap-1.5 min-w-max md:justify-center">
          {journeySteps.map((step, index) => <button key={step.id} onClick={() => setActiveStep(index)} className={`flex-shrink-0 flex flex-col items-center gap-1 rounded-lg border-2 px-2 py-1.5 transition-all ${index === activeStep ? "border-[#00bfff] bg-[#00bfff]/10 shadow-lg scale-105" : index < activeStep ? "border-slate-300 bg-white shadow-sm" : "border-slate-200 bg-slate-50"}`}>
              <span className="text-xl">{step.emoji}</span>
              <span className="text-[9px] md:text-xs font-semibold text-slate-700 whitespace-nowrap">
                {step.phase.replace('Week ', 'W').replace('Weeks ', 'W').replace('Day ', 'D')}
              </span>
            </button>)}
        </div>
      </div>

      {/* Main Content Card */}
      <AnimatePresence mode="wait">
        <motion.div key={currentStep.id} initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} transition={{
        duration: 0.3
      }} className="rounded-2xl border-2 border-slate-200 bg-white shadow-xl overflow-hidden">
          {/* Card Header */}
          <div className="bg-gradient-to-br from-[#00bfff]/10 via-white to-white p-3 md:p-8 border-b border-slate-100">
            <div className="flex items-start gap-2 mb-1">
              <span className="text-2xl md:text-5xl">{currentStep.emoji}</span>
              <div className="flex-1">
                <div className="inline-block px-2 py-0.5 rounded-full bg-white border border-[#00bfff]/30 mb-1">
                  <span className="text-[10px] md:text-sm font-bold" style={{
                  color: ACCENT
                }}>
                    {currentStep.phase}
                  </span>
                </div>
                <h3 className="text-base md:text-3xl font-bold mb-0.5 leading-tight">{currentStep.title}</h3>
                <p className="text-xs md:text-lg text-slate-600 font-medium">{currentStep.subtitle}</p>
              </div>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-3 md:p-8 space-y-2.5 md:space-y-6">
            {/* Description */}
            <p className="text-xs md:text-lg text-slate-700 leading-relaxed">
              {currentStep.description}
            </p>

            {/* Highlights */}
            <div>
              <h4 className="text-xs md:text-lg font-bold text-slate-900 mb-1.5 md:mb-4 flex items-center gap-1">
                <span className="text-sm md:text-xl">✨</span>
                <span>What you'll do:</span>
              </h4>
              <ul className="space-y-1.5 md:space-y-2">
                {currentStep.highlights.map((highlight, index) => <li key={index} className="flex items-start gap-1.5 md:gap-2 text-slate-700 leading-relaxed">
                    <span className="text-sm md:text-base flex-shrink-0">{highlight.split(" ")[0]}</span>
                    <span className="text-[11px] md:text-base">{highlight.split(" ").slice(1).join(" ")}</span>
                  </li>)}
              </ul>
            </div>

            {/* Outcome Banner */}
            <div className="rounded-lg bg-gradient-to-r from-[#00bfff]/10 to-[#00bfff]/5 p-2.5 md:p-5 border-2 border-[#00bfff]/20">
              <div className="flex items-start gap-1 md:gap-1.5 mb-0.5 md:mb-1">
                <span className="text-sm md:text-xl">🎯</span>
                <h4 className="font-bold text-slate-900 text-xs md:text-base">Result:</h4>
              </div>
              <p className="text-[11px] md:text-base text-slate-700 leading-relaxed">{currentStep.outcome}</p>
            </div>
          </div>

          {/* Navigation Footer */}
          <div className="bg-slate-50 border-t border-slate-200 p-3 md:p-6">
            <div className="flex items-center justify-between gap-2">
              <button onClick={handlePrevious} disabled={isFirstStep} className="flex items-center gap-1 px-3 py-2 rounded-lg border-2 border-slate-300 bg-white font-semibold text-slate-700 transition-all hover:border-slate-400 hover:shadow-md disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none text-sm">
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline text-xs">Back</span>
              </button>

              {isFinalStep ? <a href="https://start.frontendfuture.pro/apply" target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg font-bold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105 text-xs md:text-base" style={{
              backgroundColor: ACCENT
            }}>
                  <span>🚀</span>
                  <span>See if I qualify</span>
                </a> : <button onClick={handleNext} className="flex-1 md:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg font-bold text-[#00131a] shadow-lg transition-all hover:shadow-xl hover:scale-105 text-xs md:text-base" style={{
              backgroundColor: ACCENT
            }}>
                  <span className="text-xs md:text-base">Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>


      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>;
}