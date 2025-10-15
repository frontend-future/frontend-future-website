import { CheckCircle2, Target, XCircle } from "lucide-react";

export default function WhoItsForSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-purple-500/5 p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <Target className="w-7 h-7 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold">Who It's For</h2>
        </div>
        
        <div className="grid gap-4 mb-6">
          <div className="flex items-start gap-3 group">
            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
            <p className="text-base">
              <span className="font-semibold">💼 Professionals</span> who want remote work while keeping their current job
            </p>
          </div>
          <div className="flex items-start gap-3 group">
            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
            <p className="text-base">
              <span className="font-semibold">⏰ Part-timers</span> ready to commit 6–10 hours per week
            </p>
          </div>
          <div className="flex items-start gap-3 group">
            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
            <p className="text-base">
              <span className="font-semibold">🎯 Doers</span> who value mentorship and real-world proof over theory
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-border/50">
          <div className="flex items-start gap-3">
            <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Not for:</span> unemployed applicants, full-time students, or anyone unable to commit weekly hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
