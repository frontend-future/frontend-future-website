import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Clock, MessageSquare, CheckCircle2, Headphones } from "lucide-react";

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

function PanelResponseTime() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-slate-900 text-center">Fast Response Times</h3>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="p-6 rounded-xl bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200"
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <Clock className="w-8 h-8" style={{ color: ACCENT }} />
          <div className="text-4xl font-bold" style={{ color: ACCENT }}>24hrs</div>
        </div>
        <div className="text-center text-sm text-slate-700">
          We respond to all inquiries within 24 hours during business days
        </div>
      </motion.div>
      <div className="space-y-3">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200"
        >
          <CheckCircle2 className="w-5 h-5" style={{ color: ACCENT }} />
          <span className="text-sm text-slate-700">Personal responses, not bots</span>
        </motion.div>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200"
        >
          <CheckCircle2 className="w-5 h-5" style={{ color: ACCENT }} />
          <span className="text-sm text-slate-700">Detailed answers to your questions</span>
        </motion.div>
      </div>
    </div>
  );
}

function PanelContactMethods() {
  const methods = [
    { icon: Mail, method: "Email", desc: "jake@frontendfuture.com", best: "General inquiries" },
    { icon: MessageSquare, method: "Apply", desc: "Book consultation call", best: "Ready to start" },
    { icon: Headphones, method: "Support", desc: "Post-enrollment help", best: "Student support" }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-slate-900 text-center">How to Reach Us</h3>
      <div className="space-y-3">
        {methods.map((method, idx) => (
          <motion.div
            key={idx}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="p-4 rounded-xl bg-white border border-slate-200"
          >
            <div className="flex items-start gap-3">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: ACCENT }}
              >
                <method.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">{method.method}</div>
                <div className="text-xs text-slate-600 mt-1">{method.desc}</div>
                <div className="text-xs mt-1" style={{ color: ACCENT }}>Best for: {method.best}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function PanelOfficeHours() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-slate-900 text-center">Availability</h3>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="p-6 rounded-xl bg-white border border-slate-200"
      >
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Clock className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: ACCENT }} />
            <div>
              <div className="font-semibold text-slate-900">Business Hours</div>
              <div className="text-sm text-slate-600 mt-1">Monday - Friday: 9 AM - 6 PM EST</div>
            </div>
          </div>
          <div className="border-t pt-4">
            <div className="text-sm text-slate-700 mb-2">We'll help you with:</div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" style={{ color: ACCENT }} />
                <span className="text-xs text-slate-600">Program details & curriculum</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" style={{ color: ACCENT }} />
                <span className="text-xs text-slate-600">Admissions & financing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" style={{ color: ACCENT }} />
                <span className="text-xs text-slate-600">Career outcomes & support</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function PanelWhyReachOut() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-slate-900 text-center">Why Contact Us?</h3>
      <div className="space-y-3">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="p-4 rounded-xl bg-white border border-slate-200"
        >
          <div className="font-semibold text-slate-900 mb-2 text-sm">Get Personalized Advice</div>
          <div className="text-xs text-slate-600 leading-relaxed">
            We'll assess your background and goals to see if the program is right for you
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="p-4 rounded-xl bg-white border border-slate-200"
        >
          <div className="font-semibold text-slate-900 mb-2 text-sm">Learn About Financing</div>
          <div className="text-xs text-slate-600 leading-relaxed">
            We offer payment plans and income share agreements to make the program accessible
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="p-4 rounded-xl bg-white border border-slate-200"
        >
          <div className="font-semibold text-slate-900 mb-2 text-sm">Ask Anything</div>
          <div className="text-xs text-slate-600 leading-relaxed">
            No question is too small. We want you to feel confident in your decision
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const PANELS = [
  { key: "response", Component: PanelResponseTime, icon: Clock, label: "Response" },
  { key: "methods", Component: PanelContactMethods, icon: MessageSquare, label: "Methods" },
  { key: "hours", Component: PanelOfficeHours, icon: Phone, label: "Hours" },
  { key: "why", Component: PanelWhyReachOut, icon: Headphones, label: "Why" }
];

export default function ContactDynamicSection() {
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
