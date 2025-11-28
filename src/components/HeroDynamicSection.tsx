import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, LayoutDashboard, Map } from "lucide-react";

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
  return (
    <motion.div key="track" className="space-y-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <BulletPoint>
        <strong>Real, portfolio-ready projects</strong>
        <br />Students build actual products they can show employers, not tutorials.
      </BulletPoint>
      <BulletPoint>
        <strong>Consistent expert support</strong>
        <br />Weekly mentor guidance so you never stay stuck or confused.
      </BulletPoint>
      <BulletPoint>
        <strong>Personalized job-search direction</strong>
        <br />Clear steps based on your background, goals, and pace.
      </BulletPoint>
    </motion.div>
  );
}

function PanelWhatYouBuild() {
  return (
    <motion.div key="build" className="space-y-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <BulletPoint>
        <strong>A clean, professional website</strong>
        <br />Your first project shows you can create and ship something real.
      </BulletPoint>
      <BulletPoint>
        <strong>A multi-page web app</strong>
        <br />A functional product with navigation, logic, and interactive features.
      </BulletPoint>
      <BulletPoint>
        <strong>A polished portfolio + GitHub</strong>
        <br />Your work clearly organized and ready for employers to review.
      </BulletPoint>
    </motion.div>
  );
}

function PanelHowItWorks() {
  return (
    <motion.div key="how" className="space-y-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <BulletPoint>
        <strong>Step-by-step guided curriculum</strong>
        <br />A clear path from complete beginner to job-ready fundamentals.
      </BulletPoint>
      <BulletPoint>
        <strong>Weekly accountability + reviews</strong>
        <br />Stay on track with feedback, correction, and direct support.
      </BulletPoint>
      <BulletPoint>
        <strong>Final job-search preparation</strong>
        <br />Portfolio, GitHub, resume, and a simple plan tailored for career-changers.
      </BulletPoint>
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
            <span>What to expect</span>
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

        <div className="mt-5 min-h-[200px] md:min-h-[180px]">
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
