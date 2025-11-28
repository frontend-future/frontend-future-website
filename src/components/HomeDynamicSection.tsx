import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, DollarSign, Users, Award, TrendingUp, Clock, CheckCircle2, Globe } from "lucide-react";

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

function PanelQuickWins() {
  const wins = [
    { icon: Clock, title: "Week 1", desc: "Build & deploy your first website" },
    { icon: Rocket, title: "Week 4", desc: "Create interactive web apps" },
    { icon: Award, title: "Week 12", desc: "Complete job-ready portfolio" },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-slate-900 text-center">Your Fast Track to Success</h3>
      <div className="space-y-3">
        {wins.map((win, idx) => (
          <motion.div
            key={idx}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200"
          >
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: ACCENT }}
            >
              <win.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">{win.title}</div>
              <div className="text-xs text-slate-600">{win.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function PanelCareerStats() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-slate-900 text-center">Career Transformation</h3>
      <div className="grid grid-cols-2 gap-4">
        <Stat label="Avg. Salary Jump" value="$128" suffix="K" />
        <Stat label="Remote Roles" value="98" suffix="%" />
        <Stat label="Weeks to Job" value="4-8" />
        <Stat label="Success Rate" value="100" suffix="%" />
      </div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 p-4 rounded-xl bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200"
      >
        <p className="text-sm text-slate-700 text-center italic">
          "From $45K teacher to $140K Uber engineer in 8 months. Best decision I ever made."
        </p>
        <p className="text-xs text-slate-600 text-center mt-2 font-semibold">— Aaron J.</p>
      </motion.div>
    </div>
  );
}

function PanelWhyRemote() {
  const benefits = [
    { icon: Globe, text: "Work from anywhere in the world" },
    { icon: Clock, text: "Flexible schedule, more family time" },
    { icon: DollarSign, text: "Higher pay than on-site roles" },
    { icon: TrendingUp, text: "Better work-life balance" }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-slate-900 text-center">The Remote Advantage</h3>
      <div className="space-y-3">
        {benefits.map((benefit, idx) => (
          <motion.div
            key={idx}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200"
          >
            <benefit.icon className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
            <span className="text-sm text-slate-700">{benefit.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function PanelGuarantee() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-slate-900 text-center">Our Money-back guarantee</h3>
      <div className="space-y-4">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200"
        >
          <CheckCircle2 className="w-6 h-6 flex-shrink-0" style={{ color: ACCENT }} />
          <div>
            <div className="font-semibold text-slate-900 text-sm">Guaranteed Internship</div>
            <div className="text-xs text-slate-600 mt-1">Real experience on your resume</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200"
        >
          <CheckCircle2 className="w-6 h-6 flex-shrink-0" style={{ color: ACCENT }} />
          <div>
            <div className="font-semibold text-slate-900 text-sm">Unlimited Support</div>
            <div className="text-xs text-slate-600 mt-1">We don't stop until you're hired</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200"
        >
          <CheckCircle2 className="w-6 h-6 flex-shrink-0" style={{ color: ACCENT }} />
          <div>
            <div className="font-semibold text-slate-900 text-sm">100% Track Record</div>
            <div className="text-xs text-slate-600 mt-1">Every graduate lands a role</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const PANELS = [
  { key: "wins", Component: PanelQuickWins, icon: Rocket, label: "Quick Wins" },
  { key: "stats", Component: PanelCareerStats, icon: TrendingUp, label: "Results" },
  { key: "remote", Component: PanelWhyRemote, icon: Globe, label: "Remote Life" },
  { key: "guarantee", Component: PanelGuarantee, icon: Award, label: "Guarantee" }
];

export default function HomeDynamicSection() {
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
