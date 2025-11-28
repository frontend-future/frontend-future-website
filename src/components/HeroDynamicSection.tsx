import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, LayoutDashboard, Map, CheckCircle2, Globe, Code, FolderGit2, ArrowRight } from "lucide-react";

const ACCENT = "#00bfff";
const PANEL_DURATION_MS = 5200;

function useAutoRotate({ count, duration }: { count: number; duration: number }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % count), duration);
    return () => clearInterval(id);
  }, [count, duration]);
  return [idx, setIdx] as const;
}

function BulletPoint({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="flex items-start gap-2"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-[--accent] flex-shrink-0" />
      <p className="text-sm text-gray-700 leading-relaxed">{children}</p>
    </motion.div>
  );
}

function PanelTrackRecord() {
  const items = [
    { title: "Real, portfolio-ready projects", desc: "Students build actual products they can show employers, not tutorials." },
    { title: "Consistent expert support", desc: "Weekly mentor guidance so you never stay stuck or confused." },
    { title: "Personalized job-search direction", desc: "Clear steps based on your background, goals, and pace." }
  ];

  return (
    <motion.div key="track" className="space-y-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.1, duration: 0.4 }}
          className="flex items-start gap-3 rounded-xl bg-white/60 p-3 border border-white/80"
        >
          <div className="flex-shrink-0 mt-0.5">
            <CheckCircle2 size={18} style={{ color: ACCENT }} />
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900">{item.title}</div>
            <div className="text-xs text-gray-600 mt-0.5">{item.desc}</div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

function PanelWhatYouBuild() {
  const projects = [
    { icon: Globe, title: "A clean, professional website", desc: "Your first project shows you can create and ship something real." },
    { icon: Code, title: "A multi-page web app", desc: "A functional product with navigation, logic, and interactive features." },
    { icon: FolderGit2, title: "A polished portfolio + GitHub", desc: "Your work clearly organized and ready for employers to review." }
  ];

  return (
    <motion.div key="build" className="grid grid-cols-1 md:grid-cols-3 gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {projects.map((project, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1, duration: 0.4 }}
          className="rounded-xl bg-white/60 p-4 border border-white/80 text-center"
        >
          <div className="flex justify-center mb-2">
            <div className="rounded-full bg-[--accent]/10 p-2">
              <project.icon size={20} style={{ color: ACCENT }} />
            </div>
          </div>
          <div className="text-sm font-semibold text-gray-900 mb-1">{project.title}</div>
          <div className="text-xs text-gray-600">{project.desc}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}

function PanelHowItWorks() {
  const steps = [
    { num: "1", title: "Step-by-step guided curriculum", desc: "A clear path from complete beginner to job-ready fundamentals." },
    { num: "2", title: "Weekly accountability + reviews", desc: "Stay on track with feedback, correction, and direct support." },
    { num: "3", title: "Final job-search preparation", desc: "Portfolio, GitHub, resume, and a simple plan tailored for career-changers." }
  ];

  return (
    <motion.div key="how" className="space-y-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {steps.map((step, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.1, duration: 0.4 }}
          className="flex items-start gap-3"
        >
          <div className="flex-shrink-0">
            <div 
              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
              style={{ backgroundColor: ACCENT }}
            >
              {step.num}
            </div>
          </div>
          <div className="flex-1 pt-1">
            <div className="text-sm font-semibold text-gray-900">{step.title}</div>
            <div className="text-xs text-gray-600 mt-0.5">{step.desc}</div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

const PANELS = [
  { key: "track", label: "Track Record", Node: PanelTrackRecord, Icon: TrendingUp },
  { key: "build", label: "What You'll Build", Node: PanelWhatYouBuild, Icon: LayoutDashboard },
  { key: "how", label: "How It Works", Node: PanelHowItWorks, Icon: Map },
];

export default function HeroDynamicSection() {
  const [active, setActive] = useAutoRotate({ count: PANELS.length, duration: PANEL_DURATION_MS });

  useEffect(() => {
    document.documentElement.style.setProperty("--accent", ACCENT);
  }, []);

  return (
    <section className="relative mt-10">
      <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/50 backdrop-blur-xl p-5 md:p-7 shadow-xl">
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-medium text-gray-600">
            <span>Here's what you can expect</span>
          </div>
          <div className="hidden md:flex items-center gap-2 justify-center">
            {PANELS.map((p, i) => (
              <button
                key={p.key}
                onClick={() => setActive(i)}
                className={`flex items-center gap-1 rounded-full border px-3 py-1.5 text-sm transition whitespace-nowrap ${
                  active === i
                    ? "border-[--accent] bg-[--accent]/10 text-gray-900"
                    : "border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
              >
                <p.Icon size={14} style={{ color: ACCENT }} />
                <span>{p.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 min-h-[240px] md:min-h-[200px]">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={PANELS[active].key}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              {React.createElement(PANELS[active].Node)}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {PANELS.map((p, i) => (
            <button
              key={p.key}
              onClick={() => setActive(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                active === i ? "bg-[--accent]" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
