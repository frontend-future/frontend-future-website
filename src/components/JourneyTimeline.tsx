import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, CheckCircle2, Clock, Code, Briefcase, Award, DollarSign, Home, Rocket } from "lucide-react";

const ACCENT = "#00bfff";

interface JourneyStep {
  id: number;
  phase: string;
  title: string;
  duration: string;
  icon: React.ReactNode;
  description: string;
  details: string[];
  outcome: string;
}

const journeySteps: JourneyStep[] = [
  {
    id: 1,
    phase: "Weeks 1-3",
    title: "Master the Fundamentals",
    duration: "3 weeks",
    icon: <Code className="w-6 h-6" style={{ color: ACCENT }} />,
    description: "Build a rock-solid foundation in HTML, CSS, and JavaScript. No fluff - just what employers actually look for.",
    details: [
      "Deep dive into HTML5 semantic structure and accessibility",
      "Master CSS Grid, Flexbox, and responsive design patterns",
      "Learn JavaScript ES6+: async/await, promises, array methods",
      "Build your first project: A conversion-optimized product landing page",
      "Weekly 1-on-1 code reviews with your mentor",
      "Learn to think like a developer, not just copy tutorials"
    ],
    outcome: "You'll have a professional landing page in your portfolio that proves you understand core web technologies."
  },
  {
    id: 2,
    phase: "Weeks 4-7",
    title: "Build Real Applications",
    duration: "4 weeks",
    icon: <Rocket className="w-6 h-6" style={{ color: ACCENT }} />,
    description: "Create a fully functional web application with authentication, database, and real-time features - the kind of work that gets you hired.",
    details: [
      "Master React: components, hooks, state management, and context",
      "Implement user authentication and protected routes",
      "Build a dashboard with dynamic data visualization",
      "Integrate REST APIs and handle real-time data updates",
      "Learn Git, GitHub workflows, and collaborative coding",
      "Deploy your app to production and manage live environments",
      "Practice explaining your code in mock technical interviews"
    ],
    outcome: "You'll have a live, working application that hiring managers can interact with - this is what separates you from tutorial followers."
  },
  {
    id: 3,
    phase: "Weeks 8-12",
    title: "Polish & Launch Your Career",
    duration: "5 weeks",
    icon: <Award className="w-6 h-6" style={{ color: ACCENT }} />,
    description: "Optimize your projects for performance, complete your guaranteed internship, and start your job search with insider strategies.",
    details: [
      "Performance optimization: lighthouse scores, lazy loading, code splitting",
      "Complete your guaranteed internship with real client work",
      "Document your code like a senior developer",
      "Build your technical blog and establish thought leadership",
      "Create case studies for each project showing your problem-solving process",
      "Learn advanced debugging and testing strategies",
      "Begin targeted outreach to companies in your desired market"
    ],
    outcome: "Graduate with internship experience, 2-3 production-grade projects, and the confidence to interview at any company."
  },
  {
    id: 4,
    phase: "Week 13+",
    title: "Career Launch Package",
    duration: "Until hired",
    icon: <Briefcase className="w-6 h-6" style={{ color: ACCENT }} />,
    description: "We build your entire hiring profile and guide you through every application, interview, and negotiation until you land your remote role.",
    details: [
      "Professional resume rewrite highlighting your projects and internship",
      "LinkedIn profile optimization for recruiter visibility",
      "Portfolio website showcasing your best work with case studies",
      "Custom cover letter templates for different company types",
      "1-on-1 interview prep: technical, behavioral, and system design",
      "Mock interviews with real developers who have hired before",
      "Direct introductions to our hiring partner network",
      "Application strategy: which companies to target and when",
      "Follow-up templates and timeline management"
    ],
    outcome: "Your application stands out. You're not just another resume - you're a developer with proof, references, and a mentor backing you."
  },
  {
    id: 5,
    phase: "Offer Stage",
    title: "Negotiate Your Worth",
    duration: "1-2 weeks",
    icon: <DollarSign className="w-6 h-6" style={{ color: ACCENT }} />,
    description: "Multiple offers start coming in. We help you evaluate, compare, and negotiate to maximize your compensation and work-life balance.",
    details: [
      "Offer evaluation framework: salary, equity, benefits, culture fit",
      "Negotiation scripts and counter-offer strategies",
      "Leverage multiple offers to increase compensation",
      "Remote work agreement review and negotiation",
      "Benefits package breakdown and what to prioritize",
      "Red flags to watch for in contracts and culture",
      "How to professionally decline offers while maintaining relationships"
    ],
    outcome: "Most graduates land $120K+ remote roles. Some receive multiple offers and negotiate up by $20K-$40K using our strategies."
  },
  {
    id: 6,
    phase: "Hired!",
    title: "Your New Life Begins",
    duration: "Forever",
    icon: <Home className="w-6 h-6" style={{ color: ACCENT }} />,
    description: "Wake up, make coffee, open your laptop. No commute. No office politics. Just you, your code, and the freedom to work from anywhere.",
    details: [
      "Work from home, a beach in Bali, or a cabin in the mountains",
      "Set your own schedule and maximize productivity on your terms",
      "Spend more time with family instead of in traffic",
      "Save $5K-$15K per year on commuting and work expenses",
      "Join a global community of remote developers",
      "Continue learning and growing with lifetime community access",
      "Eventually mentor others and share your journey"
    ],
    outcome: "This is what freedom looks like: financial security, location independence, and work-life balance on your terms."
  }
];

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
  const progress = ((activeStep + 1) / journeySteps.length) * 100;

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Your Journey to $120K+ Remote Developer</h2>
        <p className="mt-2 text-lg text-slate-600">Click through each phase to see exactly what you'll learn, build, and achieve</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="relative h-2 overflow-hidden rounded-full bg-slate-200">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: ACCENT }}
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
        <div className="mt-2 flex justify-between text-xs text-slate-500">
          <span>Start</span>
          <span className="font-semibold" style={{ color: ACCENT }}>
            Step {activeStep + 1} of {journeySteps.length}
          </span>
          <span>Hired & Free</span>
        </div>
      </div>

      {/* Timeline Navigation */}
      <div className="mb-6 flex items-center justify-center gap-2 overflow-x-auto pb-4">
        {journeySteps.map((step, index) => (
          <button
            key={step.id}
            onClick={() => setActiveStep(index)}
            className={`group relative flex flex-col items-center gap-2 rounded-xl border px-4 py-3 transition-all ${
              index === activeStep
                ? "border-[#00bfff] bg-[#00bfff]/10 shadow-md"
                : index < activeStep
                ? "border-slate-300 bg-white hover:border-[#00bfff]/50"
                : "border-slate-200 bg-white hover:border-slate-300"
            }`}
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-all ${
                index <= activeStep ? "bg-[#00bfff] text-white" : "bg-slate-100 text-slate-400"
              }`}
            >
              {index < activeStep ? (
                <CheckCircle2 className="h-5 w-5" />
              ) : (
                step.icon
              )}
            </div>
            <span className="text-xs font-medium text-slate-700 whitespace-nowrap">{step.phase}</span>
          </button>
        ))}
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg md:p-8"
        >
          <div className="mb-6">
            <div className="mb-2 flex items-center gap-3">
              {currentStep.icon}
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: ACCENT }}>
                {currentStep.phase}
              </span>
            </div>
            <h3 className="mb-2 text-2xl font-bold md:text-3xl">{currentStep.title}</h3>
            <p className="flex items-center gap-2 text-slate-600">
              <Clock className="h-4 w-4" />
              <span className="font-medium">{currentStep.duration}</span>
            </p>
          </div>

          <p className="mb-6 text-lg font-medium text-slate-800">{currentStep.description}</p>

          <div className="mb-6">
            <h4 className="mb-3 font-semibold text-slate-900">What you'll do:</h4>
            <ul className="space-y-3">
              {currentStep.details.map((detail, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: ACCENT }} />
                  <span className="text-slate-700">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl bg-[#00bfff]/5 p-4 border border-[#00bfff]/20">
            <h4 className="mb-2 font-semibold text-slate-900">Outcome:</h4>
            <p className="text-slate-700">{currentStep.outcome}</p>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-6 flex items-center justify-between gap-4">
            <button
              onClick={handlePrevious}
              disabled={activeStep === 0}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 font-medium text-slate-700 transition-all hover:border-slate-400 hover:shadow-sm disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRight className="h-5 w-5 rotate-180" />
              Previous
            </button>

            {activeStep === journeySteps.length - 1 ? (
              <a
                href="#eligibility"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-[#00131a] shadow-md transition-all hover:shadow-lg"
                style={{ backgroundColor: ACCENT }}
              >
                <Rocket className="h-5 w-5" />
                Start Your Journey
                <ChevronRight className="h-5 w-5" />
              </a>
            ) : (
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-[#00131a] shadow-md transition-all hover:shadow-lg"
                style={{ backgroundColor: ACCENT }}
              >
                Next: {journeySteps[activeStep + 1].title}
                <ChevronRight className="h-5 w-5" />
              </button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}