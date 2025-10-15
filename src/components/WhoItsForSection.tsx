import { CheckCircle2, Target, XCircle } from "lucide-react";

const ACCENT = "#00bfff";

export default function WhoItsForSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 hover:shadow-md transition-shadow">
        <div className="flex items-start gap-3 mb-6">
          <Target className="w-6 h-6 flex-shrink-0" style={{ color: ACCENT }} />
          <h3 className="text-2xl font-bold">Who It's For 🎯</h3>
        </div>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110" style={{ color: ACCENT }} />
            <p className="text-slate-700">
              <span className="font-semibold text-slate-900">💼 Working professionals</span> who want remote web work while keeping their current job
            </p>
          </div>
          
          <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110" style={{ color: ACCENT }} />
            <p className="text-slate-700">
              <span className="font-semibold text-slate-900">⏰ Committed learners</span> ready to invest 6–10 hours per week to a proven roadmap
            </p>
          </div>
          
          <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110" style={{ color: ACCENT }} />
            <p className="text-slate-700">
              <span className="font-semibold text-slate-900">🎯 Action takers</span> who value mentorship and real-world proof over theory
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-200">
          <div className="flex items-start gap-3 text-sm">
            <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-500" />
            <p className="text-slate-600">
              <span className="font-semibold text-slate-900">Not for:</span> unemployed applicants, full-time students, or anyone unable to commit weekly hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
