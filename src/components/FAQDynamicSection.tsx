import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, DollarSign, Clock, Award, Users, CheckCircle2 } from "lucide-react";

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


function PanelDegreeComparison() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-slate-900 text-center">vs. Traditional Degree</h3>
      <div className="space-y-4">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="p-4 rounded-xl bg-red-50 border border-red-200"
        >
          <div className="text-sm font-bold text-red-900 mb-2">4-Year Degree</div>
          <div className="space-y-2 text-xs text-red-700">
            <div>• 20x more expensive</div>
            <div>• 4+ years full-time commitment</div>
            <div>• Can't work during studies</div>
            <div>• Outdated curriculum</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="p-4 rounded-xl bg-green-50 border border-green-200"
        >
          <div className="text-sm font-bold text-green-900 mb-2">Frontend Future</div>
          <div className="space-y-2 text-xs text-green-700">
            <div>• Fraction of the cost</div>
            <div>• 12 weeks part-time</div>
            <div>• Keep your current job</div>
            <div>• Industry-current skills</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center p-3 rounded-xl"
          style={{ backgroundColor: `${ACCENT}15` }}
        >
          <div className="text-2xl font-bold" style={{ color: ACCENT }}>Same Jobs</div>
          <div className="text-xs text-slate-600">Companies care about skills, not degrees</div>
        </motion.div>
      </div>
    </div>
  );
}

function PanelTimeCommitment() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-slate-900 text-center">Time Investment</h3>
      <div className="space-y-4">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200"
        >
          <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: ACCENT }}>
            <Clock className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900">10-20 hours/week</div>
            <div className="text-xs text-slate-600">Evening & weekend friendly</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200"
        >
          <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: ACCENT }}>
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900">Weekly Live Mentor-Led Sessions</div>
            <div className="text-xs text-slate-600">Get answers, feedback, and guidance in real time each week</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200"
        >
          <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: ACCENT }}>
            <CheckCircle2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900">Keep your job</div>
            <div className="text-xs text-slate-600">Build skills while earning</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function PanelAgeBreakdown() {
  const ages = [
    { range: "25-34", percent: 23 },
    { range: "35-44", percent: 42 },
    { range: "45-55", percent: 31 },
    { range: "55+", percent: 4 }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-slate-900 text-center">Student Age Breakdown</h3>
      <div className="space-y-3">
        {ages.map((age, idx) => (
          <motion.div
            key={idx}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="space-y-2"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-900">{age.range} years</span>
              <span className="text-sm font-bold" style={{ color: ACCENT }}>{age.percent}%</span>
            </div>
            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${age.percent}%` }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="h-full rounded-full"
                style={{ backgroundColor: ACCENT }}
              />
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center text-sm text-slate-600 mt-4">
        Average age: <span className="font-bold" style={{ color: ACCENT }}>39 years</span>
      </div>
    </div>
  );
}

const PANELS = [
  { key: "comparison", Component: PanelDegreeComparison, icon: DollarSign, label: "vs Degree" },
  { key: "time", Component: PanelTimeCommitment, icon: Clock, label: "Time" },
  { key: "age", Component: PanelAgeBreakdown, icon: Users, label: "Ages" }
];

export default function FAQDynamicSection() {
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

      <div className="relative h-[380px] overflow-hidden">
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
