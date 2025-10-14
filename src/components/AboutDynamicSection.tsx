import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Users, Award, TrendingUp, Heart, Zap } from "lucide-react";

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

function PanelMission() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-slate-900 text-center">Our Mission</h3>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="p-6 rounded-xl bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200"
      >
        <div className="flex items-start gap-3 mb-4">
          <Target className="w-8 h-8 flex-shrink-0" style={{ color: ACCENT }} />
          <div>
            <div className="font-bold text-slate-900 mb-2">Breaking Income Ceilings</div>
            <div className="text-sm text-slate-700 leading-relaxed">
              We help career changers aged 35-55 escape income ceilings and land $100K+ remote tech roles—regardless of background or education.
            </div>
          </div>
        </div>
      </motion.div>
      <div className="grid grid-cols-3 gap-3">
        <div className="text-center p-3 rounded-xl bg-white border border-slate-200">
          <div className="text-2xl font-bold" style={{ color: ACCENT }}>100%</div>
          <div className="text-xs text-slate-600">Success Rate</div>
        </div>
        <div className="text-center p-3 rounded-xl bg-white border border-slate-200">
          <div className="text-2xl font-bold" style={{ color: ACCENT }}>$128K</div>
          <div className="text-xs text-slate-600">Avg. Salary</div>
        </div>
        <div className="text-center p-3 rounded-xl bg-white border border-slate-200">
          <div className="text-2xl font-bold" style={{ color: ACCENT }}>500+</div>
          <div className="text-xs text-slate-600">Graduates</div>
        </div>
      </div>
    </div>
  );
}

function PanelDifference() {
  const diffs = [
    { icon: Users, title: "True 1:1", desc: "Real mentorship, not crowded cohorts" },
    { icon: Award, title: "Guaranteed", desc: "Internship + job placement support" },
    { icon: Zap, title: "Fast Track", desc: "12 weeks to career transformation" }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-slate-900 text-center">What Makes Us Different</h3>
      <div className="space-y-3">
        {diffs.map((diff, idx) => (
          <motion.div
            key={idx}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200"
          >
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: ACCENT }}
            >
              <diff.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">{diff.title}</div>
              <div className="text-xs text-slate-600 mt-1">{diff.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function PanelImpact() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-slate-900 text-center">Our Impact</h3>
      <div className="space-y-4">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="p-4 rounded-xl bg-white border border-slate-200"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-slate-900">Career Changes</span>
            <span className="text-2xl font-bold" style={{ color: ACCENT }}>500+</span>
          </div>
          <div className="text-xs text-slate-600">Lives transformed since 2020</div>
        </motion.div>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="p-4 rounded-xl bg-white border border-slate-200"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-slate-900">Income Added</span>
            <span className="text-2xl font-bold" style={{ color: ACCENT }}>$40M+</span>
          </div>
          <div className="text-xs text-slate-600">Total salary increases for grads</div>
        </motion.div>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="p-4 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200"
        >
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-green-600" />
            <div className="text-sm font-semibold text-green-900">More time with family</div>
          </div>
          <div className="text-xs text-green-700 mt-2">98% work fully remote now</div>
        </motion.div>
      </div>
    </div>
  );
}

function PanelTeam() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-slate-900 text-center">Led By Industry Experts</h3>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="p-6 rounded-xl bg-white border border-slate-200"
      >
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: ACCENT }}>
            <Award className="w-8 h-8 text-white" />
          </div>
          <div>
            <div className="font-bold text-slate-900 mb-2">Ex-Amazon Leadership</div>
            <div className="text-sm text-slate-700 leading-relaxed">
              Our curriculum and mentorship approach comes from senior engineers who've built and scaled products at Amazon, Google, and top startups.
            </div>
          </div>
        </div>
      </motion.div>
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 rounded-xl bg-white border border-slate-200">
          <div className="text-lg font-bold" style={{ color: ACCENT }}>15+</div>
          <div className="text-xs text-slate-600">Years Experience</div>
        </div>
        <div className="p-3 rounded-xl bg-white border border-slate-200">
          <div className="text-lg font-bold" style={{ color: ACCENT }}>FAANG</div>
          <div className="text-xs text-slate-600">Alumni Network</div>
        </div>
      </div>
    </div>
  );
}

const PANELS = [
  { key: "mission", Component: PanelMission, icon: Target, label: "Mission" },
  { key: "difference", Component: PanelDifference, icon: Zap, label: "Different" },
  { key: "impact", Component: PanelImpact, icon: TrendingUp, label: "Impact" },
  { key: "team", Component: PanelTeam, icon: Users, label: "Team" }
];

export default function AboutDynamicSection() {
  const [activeIndex, setActiveIndex] = useAutoRotate(PANELS.length, 6000);

  const activePanel = PANELS[activeIndex];
  const Component = activePanel.Component;

  return (
    <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-lg">
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
