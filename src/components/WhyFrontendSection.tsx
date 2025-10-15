import { CheckCircle2, Globe, TrendingUp, Brain, Clock, Zap, Users } from "lucide-react";

export default function WhyFrontendSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 p-8 shadow-sm">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Why Frontend Development? 💻
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 group">
            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
            <div>
              <p className="font-semibold">🌎 High demand worldwide</p>
              <p className="text-sm text-muted-foreground">Remote opportunities everywhere</p>
            </div>
          </div>

          <div className="flex items-start gap-3 group">
            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
            <div>
              <p className="font-semibold">💰 Six-figure salaries</p>
              <p className="text-sm text-muted-foreground">$80K-$150K+ is standard</p>
            </div>
          </div>

          <div className="flex items-start gap-3 group">
            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
            <div>
              <p className="font-semibold">🎓 No degree required</p>
              <p className="text-sm text-muted-foreground">Skills matter more than credentials</p>
            </div>
          </div>

          <div className="flex items-start gap-3 group">
            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
            <div>
              <p className="font-semibold">⚡ Quick to master</p>
              <p className="text-sm text-muted-foreground">12 weeks to job-ready</p>
            </div>
          </div>

          <div className="flex items-start gap-3 group">
            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
            <div>
              <p className="font-semibold">🏖️ Work-life balance</p>
              <p className="text-sm text-muted-foreground">Flexible schedules & remote work</p>
            </div>
          </div>

          <div className="flex items-start gap-3 group">
            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
            <div>
              <p className="font-semibold">🚀 Future-proof career</p>
              <p className="text-sm text-muted-foreground">Continuous growth & opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
