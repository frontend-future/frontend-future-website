import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Briefcase, TrendingUp, Award, Clock, CheckCircle2, Zap, Target } from "lucide-react";

const ACCENT = "#0ea5e9";

function useAutoRotate(count: number, durationMs: number = 5000) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % count);
    }, durationMs);
    return () => clearInterval(timer);
  }, [count, durationMs]);
  return [index, setIndex] as const;
}

function Stat({ label, value, suffix = "" }: { label: string; value: string; suffix?: string }) {
  return (
    <div className="text-center">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-3xl md:text-4xl font-bold"
        style={{ color: ACCENT }}
      >
        {value}
        {suffix && <span className="text-2xl">{suffix}</span>}
      </motion.div>
      <div className="mt-1 text-sm text-slate-600">{label}</div>
    </div>
  );
}

function PanelJourney() {
  const milestones = [
    { week: "Week 1", title: "First Website Live", icon: Code, complete: true },
    { week: "Week 4", title: "Interactive Apps", icon: Zap, complete: true },
    { week: "Week 8", title: "React Mastery", icon: Target, complete: true },
    { week: "Week 12", title: "Job Ready", icon: Briefcase, complete: false }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-slate-900 text-center">Your Transformation Timeline</h3>
      <div className="space-y-4">
        {milestones.map((milestone, idx) => (
          <motion.div
            key={idx}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-center gap-4 p-3 rounded-xl bg-white border border-slate-200"
          >
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: milestone.complete ? ACCENT : "#e2e8f0" }}
            >
              <milestone.icon className="w-6 h-6" style={{ color: milestone.complete ? "white" : "#64748b" }} />
            </div>
            <div className="flex-1">
              <div className="text-xs font-semibold" style={{ color: ACCENT }}>{milestone.week}</div>
              <div className="text-sm font-semibold text-slate-900">{milestone.title}</div>
            </div>
            {milestone.complete && (
              <CheckCircle2 className="w-5 h-5" style={{ color: ACCENT }} />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function PanelResults() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-slate-900 text-center">Real Outcomes</h3>
      <div className="grid grid-cols-2 gap-4">
        <Stat label="Avg. Starting Salary" value="$120k" suffix="+" />
        <Stat label="Time to First Offer" value="8" suffix=" weeks" />
        <Stat label="Job Placement Rate" value="94" suffix="%" />
        <Stat label="Career Changers" value="87" suffix="%" />
      </div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 p-4 rounded-xl bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200"
      >
        <p className="text-sm text-slate-700 text-center italic">
          "I went from retail management to a $130k remote developer role in 14 weeks."
        </p>
        <p className="text-xs text-slate-600 text-center mt-2 font-semibold">— Sarah M., Frontend Developer @ Shopify</p>
      </motion.div>
    </div>
  );
}

function PanelSkills() {
  const skills = [
    { name: "HTML & CSS", weeks: "1-4", level: 100 },
    { name: "JavaScript", weeks: "5-7", level: 100 },
    { name: "React", weeks: "8-10", level: 100 },
    { name: "Portfolio Projects", weeks: "11-12", level: 100 }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-slate-900 text-center">Skills You'll Master</h3>
      <div className="space-y-4">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="space-y-2"
          >
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold text-slate-900">{skill.name}</span>
              <span className="text-xs text-slate-600">{skill.weeks}</span>
            </div>
            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="h-full rounded-full"
                style={{ backgroundColor: ACCENT }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function PanelSupport() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-slate-900 text-center">You're Never Alone</h3>
      <div className="space-y-4">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200"
        >
          <Award className="w-6 h-6 flex-shrink-0" style={{ color: ACCENT }} />
          <div>
            <div className="font-semibold text-slate-900 text-sm">1:1 Mentor Sessions</div>
            <div className="text-xs text-slate-600 mt-1">Weekly calls with your dedicated mentor</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200"
        >
          <Clock className="w-6 h-6 flex-shrink-0" style={{ color: ACCENT }} />
          <div>
            <div className="font-semibold text-slate-900 text-sm">24/7 Community Support</div>
            <div className="text-xs text-slate-600 mt-1">Private Slack with fellow students & alumni</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200"
        >
          <TrendingUp className="w-6 h-6 flex-shrink-0" style={{ color: ACCENT }} />
          <div>
            <div className="font-semibold text-slate-900 text-sm">Career Coaching</div>
            <div className="text-xs text-slate-600 mt-1">Resume, LinkedIn, interview prep included</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const PANELS = [
  { key: "journey", Component: PanelJourney, icon: Target, label: "Your Journey" },
  { key: "results", Component: PanelResults, icon: TrendingUp, label: "Results" },
  { key: "skills", Component: PanelSkills, icon: Code, label: "Skills" },
  { key: "support", Component: PanelSupport, icon: Award, label: "Support" }
];

export default function HowItWorksDynamicSection() {
  const [activeIndex, setActiveIndex] = useAutoRotate(PANELS.length, 6000);

  const activePanel = PANELS[activeIndex];
  const Component = activePanel.Component;

  return (
    <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-lg">
      {/* Navigation Buttons */}
      <div className="mb-6 flex flex-wrap gap-2 justify-center">
        {PANELS.map((panel, idx) => {
          const Icon = panel.icon;
          const isActive = idx === activeIndex;
          return (
            <button
              key={panel.key}
              onClick={() => setActiveIndex(idx)}
              className="group flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition-all"
              style={{
                backgroundColor: isActive ? ACCENT : "white",
                color: isActive ? "white" : "#475569",
                border: `1px solid ${isActive ? ACCENT : "#e2e8f0"}`
              }}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{panel.label}</span>
            </button>
          );
        })}
      </div>

      {/* Panel Content with Animation */}
      <div className="relative min-h-[380px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Component />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {PANELS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className="h-2 w-2 rounded-full transition-all"
            style={{
              backgroundColor: idx === activeIndex ? ACCENT : "#cbd5e1",
              width: idx === activeIndex ? "24px" : "8px"
            }}
          />
        ))}
      </div>
    </div>
  );
}
