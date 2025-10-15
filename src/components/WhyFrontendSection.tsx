import { CheckCircle2 } from "lucide-react";

const ACCENT = "#00bfff";

export default function WhyFrontendSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 hover:shadow-md transition-shadow">
        <h3 className="mb-6 text-2xl font-bold">Why Frontend Development? 💻</h3>
        
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1 transition-transform group-hover:scale-110" style={{ color: ACCENT }} />
            <div>
              <p className="text-slate-900 font-semibold">🌎 Global demand with remote opportunities</p>
              <p className="text-sm text-slate-600">Work from anywhere in the world</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1 transition-transform group-hover:scale-110" style={{ color: ACCENT }} />
            <div>
              <p className="text-slate-900 font-semibold">💰 Six-figure salaries standard</p>
              <p className="text-sm text-slate-600">$80K–$150K+ in the industry</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1 transition-transform group-hover:scale-110" style={{ color: ACCENT }} />
            <div>
              <p className="text-slate-900 font-semibold">🎓 No degree required</p>
              <p className="text-sm text-slate-600">Skills matter more than credentials</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1 transition-transform group-hover:scale-110" style={{ color: ACCENT }} />
            <div>
              <p className="text-slate-900 font-semibold">⚡ Fast path to mastery</p>
              <p className="text-sm text-slate-600">Job-ready in just 12 weeks</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1 transition-transform group-hover:scale-110" style={{ color: ACCENT }} />
            <div>
              <p className="text-slate-900 font-semibold">🏖️ Work-life balance</p>
              <p className="text-sm text-slate-600">Flexible schedules, your own hours</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1 transition-transform group-hover:scale-110" style={{ color: ACCENT }} />
            <div>
              <p className="text-slate-900 font-semibold">🚀 Future-proof career</p>
              <p className="text-sm text-slate-600">Continuous growth opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
