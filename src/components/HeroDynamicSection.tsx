import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Hammer, Clock3 } from "lucide-react";

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

function Stat({ label, value, suffix = "" }: { label: string; value: number; suffix?: string }) {
  return (
    <motion.div
      className="rounded-2xl bg-white/40 backdrop-blur border border-white/60 px-5 py-4 flex flex-col gap-1 shadow-sm"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <div className="text-3xl font-extrabold tracking-tight text-gray-900">
        {value}
        <span className="text-[--accent]">{suffix}</span>
      </div>
      <div className="text-xs text-gray-600 font-medium">{label}</div>
    </motion.div>
  );
}

function PanelTrackRecord() {
  return (
    <motion.div key="track" className="grid grid-cols-2 md:grid-cols-4 gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Stat label="projects shipped by grads" value={3120} />
      <Stat label="avg. weekly mentor calls" value={2} suffix="x" />
      <Stat label="hiring manager intros" value={3} suffix="+" />
      <Stat label="countries represented" value={27} />
    </motion.div>
  );
}

function PanelWhatYouBuild() {
  return (
    <motion.div key="build" className="grid grid-cols-2 md:grid-cols-4 gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="rounded-2xl bg-white/40 backdrop-blur border border-white/60 p-4 text-gray-900 font-medium shadow-sm">Product page</div>
      <div className="rounded-2xl bg-white/40 backdrop-blur border border-white/60 p-4 text-gray-900 font-medium shadow-sm">Auth + Dashboard</div>
      <div className="rounded-2xl bg-white/40 backdrop-blur border border-white/60 p-4 text-gray-900 font-medium shadow-sm">Performance Pass</div>
      <div className="rounded-2xl bg-white/40 backdrop-blur border border-white/60 p-4 text-gray-900 font-medium shadow-sm">Data UX</div>
    </motion.div>
  );
}

function PanelHowItWorks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="rounded-2xl bg-white/40 backdrop-blur border border-white/60 p-4 shadow-sm">
        <div className="font-semibold text-gray-900">Weeks 1–3: Foundations</div>
        <div className="text-sm text-gray-600">Refresh basics. Ship a fast, converting product page.</div>
      </div>
      <div className="rounded-2xl bg-white/40 backdrop-blur border border-white/60 p-4 shadow-sm">
        <div className="font-semibold text-gray-900">Weeks 4–7: App & Data</div>
        <div className="text-sm text-gray-600">Build auth, state, and dashboard with real UX patterns.</div>
      </div>
      <div className="rounded-2xl bg-white/40 backdrop-blur border border-white/60 p-4 shadow-sm">
        <div className="font-semibold text-gray-900">Weeks 8–12: Proof</div>
        <div className="text-sm text-gray-600">Polish, performance pass, and targeted outreach.</div>
      </div>
    </div>
  );
}

const PANELS = [
  { key: "track", label: "Track record", Node: PanelTrackRecord, Icon: Users },
  { key: "build", label: "What you'll build", Node: PanelWhatYouBuild, Icon: Hammer },
  { key: "how", label: "How it works", Node: PanelHowItWorks, Icon: Clock3 },
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
            <span>Ex-Amazon–led • Job Hunt Support</span>
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

        <div className="mt-5">
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
