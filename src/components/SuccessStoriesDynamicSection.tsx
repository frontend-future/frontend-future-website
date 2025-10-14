import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Users, Award, Briefcase, DollarSign, Clock } from "lucide-react";

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

function PanelTopEarners() {
  const earners = [
    { name: "Andrew K.", before: "$16K", after: "$110K", job: "Starbucks → Frontend Dev" },
    { name: "Aaron J.", before: "$45K", after: "$140K", job: "Teacher → Uber Engineer" },
    { name: "Madison K.", before: "$35K", after: "$105K", job: "Model → Developer" }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-slate-900 text-center">Biggest Salary Jumps</h3>
      <div className="space-y-4">
        {earners.map((earner, idx) => (
          <motion.div
            key={idx}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="p-4 rounded-xl bg-white border border-slate-200"
          >
            <div className="font-bold text-slate-900">{earner.name}</div>
            <div className="text-xs text-slate-600 mb-2">{earner.job}</div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">{earner.before}</span>
              <TrendingUp className="w-4 h-4" style={{ color: ACCENT }} />
              <span className="text-lg font-bold" style={{ color: ACCENT }}>{earner.after}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function PanelDemographics() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-slate-900 text-center">Who Makes the Switch?</h3>
      <div className="space-y-4">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="p-4 rounded-xl bg-white border border-slate-200"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-slate-900">Career Changers</span>
            <span className="text-2xl font-bold" style={{ color: ACCENT }}>87%</span>
          </div>
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "87%" }}
              transition={{ duration: 1 }}
              className="h-full rounded-full"
              style={{ backgroundColor: ACCENT }}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="p-4 rounded-xl bg-white border border-slate-200"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-slate-900">Age 35-55</span>
            <span className="text-2xl font-bold" style={{ color: ACCENT }}>73%</span>
          </div>
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "73%" }}
              transition={{ duration: 1, delay: 0.1 }}
              className="h-full rounded-full"
              style={{ backgroundColor: ACCENT }}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="p-4 rounded-xl bg-white border border-slate-200"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-slate-900">No Degree</span>
            <span className="text-2xl font-bold" style={{ color: ACCENT }}>65%</span>
          </div>
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "65%" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-full rounded-full"
              style={{ backgroundColor: ACCENT }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function PanelBeforeAfter() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-slate-900 text-center">Before vs After</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-red-50 border border-red-200">
          <div className="text-sm font-semibold text-red-900 mb-3">Before</div>
          <div className="space-y-2 text-xs text-red-700">
            <div>• $40K-$60K salaries</div>
            <div>• 1-2 hour commutes</div>
            <div>• No flexibility</div>
            <div>• Income ceiling</div>
          </div>
        </div>
        <div className="p-4 rounded-xl bg-green-50 border border-green-200">
          <div className="text-sm font-semibold text-green-900 mb-3">After</div>
          <div className="space-y-2 text-xs text-green-700">
            <div>• $80K-$140K salaries</div>
            <div>• 100% remote work</div>
            <div>• Full flexibility</div>
            <div>• Unlimited growth</div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center p-3 rounded-xl"
        style={{ backgroundColor: `${ACCENT}15` }}
      >
        <div className="text-2xl font-bold" style={{ color: ACCENT }}>2-3x</div>
        <div className="text-xs text-slate-600">Average salary increase</div>
      </motion.div>
    </div>
  );
}

function PanelTimeline() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-slate-900 text-center">Average Journey</h3>
      <div className="space-y-3">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex items-center gap-4 p-3 rounded-xl bg-white border border-slate-200"
        >
          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: ACCENT }}>
            <Clock className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900">12 Weeks</div>
            <div className="text-xs text-slate-600">Complete bootcamp</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-4 p-3 rounded-xl bg-white border border-slate-200"
        >
          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: ACCENT }}>
            <Briefcase className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900">4-8 Weeks</div>
            <div className="text-xs text-slate-600">Land first offer</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-4 p-3 rounded-xl bg-white border border-slate-200"
        >
          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: ACCENT }}>
            <Award className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900">6-12 Months</div>
            <div className="text-xs text-slate-600">First promotion/raise</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const PANELS = [
  { key: "earners", Component: PanelTopEarners, icon: DollarSign, label: "Top Earners" },
  { key: "demographics", Component: PanelDemographics, icon: Users, label: "Demographics" },
  { key: "comparison", Component: PanelBeforeAfter, icon: TrendingUp, label: "Transformation" },
  { key: "timeline", Component: PanelTimeline, icon: Clock, label: "Timeline" }
];

export default function SuccessStoriesDynamicSection() {
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
