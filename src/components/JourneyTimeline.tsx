import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Sparkles } from "lucide-react";

// Extend Window interface for Typeform
declare global {
  interface Window {
    tf?: {
      createPopup: (formId: string, options?: any) => {
        open: () => void;
        close: () => void;
        toggle: () => void;
      };
    };
  }
}
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
  description: "Learn HTML, CSS, and JavaScript by building actual stuff people can use.",
  highlights: ["🎨 Make beautiful websites that work on phones", "⚡ Learn JavaScript to make things interactive", "🏆 Build your first real project", "👨‍💻 Get help from your mentor every week"],
  outcome: "You'll have a real website in your portfolio that proves you can build stuff.",
  ctaText: "Start learning"
}, {
  id: 2,
  emoji: "🚀",
  phase: "Weeks 4-7",
  title: "Build Real Apps",
  subtitle: "Create apps with login and databases",
  duration: "4 weeks",
  description: "Build a complete app that people can actually sign up for and use.",
  highlights: ["⚛️ Master React to build professional apps", "🔐 Add login so users can sign up", "📊 Show data with cool charts and graphs", "🌐 Put your app online for everyone to see"],
  outcome: "A working app that's live on the internet. This gets you real interviews.",
  ctaText: "See what you'll build"
}, {
  id: 3,
  emoji: "💎",
  phase: "Weeks 8-12",
  title: "Get Work Experience",
  subtitle: "Do real work for real clients",
  duration: "5 weeks",
  description: "Work on actual client projects so you have experience before you even graduate.",
  highlights: ["💼 Complete a guaranteed internship", "⚡ Make your apps super fast", "✍️ Start a blog to show what you know", "📖 Create case studies of your projects"],
  outcome: "Graduate with real work experience and 2-3 professional projects.",
  ctaText: "Learn about internship"
}, {
  id: 4,
  emoji: "📝",
  phase: "Week 13-16",
  title: "Get Ready to Apply",
  subtitle: "Build your resume and portfolio",
  duration: "4 weeks",
  description: "We make you look amazing so companies actually want to interview you.",
  highlights: ["📄 Get a professional resume that stands out", "💼 Fix your LinkedIn so recruiters find you", "🌐 Build a portfolio website", "🤝 Meet companies looking to hire"],
  outcome: "Companies respond to your applications because you look like a real developer.",
  ctaText: "See how we help"
}, {
  id: 5,
  emoji: "💰",
  phase: "Week 17-20",
  title: "Land High-Paying Offers",
  subtitle: "Get multiple job offers",
  duration: "2-3 weeks",
  description: "Companies compete for you, and we help you get the best deal possible.",
  highlights: ["🎯 Compare multiple job offers", "💬 Negotiate for more money", "🏡 Ask to work from anywhere", "📈 Plan your long-term career"],
  outcome: "Our grads average $120K+ and many negotiate $20K-$40K more.",
  ctaText: "Learn to negotiate"
}, {
  id: 6,
  emoji: "🏝️",
  phase: "Day 1+",
  title: "Live the Dream",
  subtitle: "Work from anywhere, make great money",
  duration: "Forever",
  description: "No boss breathing down your neck. No commute. Just you, your laptop, and freedom.",
  highlights: ["☕ Wake up when you want, work from anywhere", "🌎 Travel while you work", "👨‍👩‍👧‍👦 Actually spend time with your family", "💰 Save thousands on commuting", "🏠 Get back 2-3 hours every day"],
  outcome: "This is real freedom. Good money, work from anywhere, live life on your terms.",
  ctaText: "Start your journey"
}];
export default function JourneyTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  
  useEffect(() => {
    // Load Typeform embed script
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);
  
  const handleTypeformOpen = () => {
    if (window.tf && window.tf.createPopup) {
      const { open } = window.tf.createPopup('01K6Y7Y8CMPZE5YYWS6SM4HMDG', {
        opacity: 100,
        size: 100
      });
      open();
    }
  };
  
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
          Zero to $120K+ Remote Dev
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
      <div className="mb-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
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
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }} className="rounded-2xl border-2 border-slate-200 bg-white shadow-xl overflow-hidden">
          {/* Card Header */}
          <div className="bg-gradient-to-br from-[#00bfff]/10 via-white to-white p-4 md:p-8 border-b border-slate-100">
            <div className="flex items-start gap-2 mb-2">
              <span className="text-3xl md:text-5xl">{currentStep.emoji}</span>
              <div className="flex-1">
                <div className="inline-block px-2 py-0.5 rounded-full bg-white border border-[#00bfff]/30 mb-1">
                  <span className="text-[10px] md:text-sm font-bold" style={{
                  color: ACCENT
                }}>
                    {currentStep.phase}
                  </span>
                </div>
                <h3 className="text-lg md:text-3xl font-bold mb-0.5">{currentStep.title}</h3>
                <p className="text-sm md:text-lg text-slate-600 font-medium">{currentStep.subtitle}</p>
              </div>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-4 md:p-8 space-y-3 md:space-y-6">
            {/* Description */}
            <p className="text-sm md:text-lg text-slate-700 leading-snug">
              {currentStep.description}
            </p>

            {/* Highlights */}
            <div>
              <h4 className="text-sm md:text-lg font-bold text-slate-900 mb-2 md:mb-4 flex items-center gap-1.5">
                <span className="text-base md:text-xl">✨</span>
                <span>What you'll do:</span>
              </h4>
              <ul className="space-y-2">
                {currentStep.highlights.map((highlight, index) => <motion.li key={index} initial={{
                opacity: 0,
                x: -10
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: index * 0.05
              }} className="flex items-start gap-2 text-slate-700 leading-snug">
                    <span className="text-base flex-shrink-0">{highlight.split(" ")[0]}</span>
                    <span className="text-xs md:text-base">{highlight.split(" ").slice(1).join(" ")}</span>
                  </motion.li>)}
              </ul>
            </div>

            {/* Outcome Banner */}
            <div className="rounded-lg bg-gradient-to-r from-[#00bfff]/10 to-[#00bfff]/5 p-3 md:p-5 border-2 border-[#00bfff]/20">
              <div className="flex items-start gap-1.5 mb-1">
                <span className="text-base md:text-xl">🎯</span>
                <h4 className="font-bold text-slate-900 text-sm md:text-base">Result:</h4>
              </div>
              <p className="text-xs md:text-base text-slate-700 leading-snug">{currentStep.outcome}</p>
            </div>
          </div>

          {/* Navigation Footer */}
          <div className="bg-slate-50 border-t border-slate-200 p-3 md:p-6">
            <div className="flex items-center justify-between gap-2">
              <button onClick={handlePrevious} disabled={isFirstStep} className="flex items-center gap-1 px-3 py-2 rounded-lg border-2 border-slate-300 bg-white font-semibold text-slate-700 transition-all hover:border-slate-400 hover:shadow-md disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none text-sm">
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline text-xs">Back</span>
              </button>

              {isFinalStep ? <button 
                onClick={handleTypeformOpen}
                className="flex-1 md:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg font-bold text-[#00131a] shadow-lg transition-all hover:shadow-xl hover:scale-105 text-xs md:text-base" 
                style={{
                  backgroundColor: ACCENT
                }}
              >
                  <span>🚀</span>
                  <span>Start Now</span>
                </button> : <button onClick={handleNext} className="flex-1 md:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg font-bold text-[#00131a] shadow-lg transition-all hover:shadow-xl hover:scale-105 text-xs md:text-base" style={{
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