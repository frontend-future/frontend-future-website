import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const QualifyCTA = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-2xl p-6 md:p-8 shadow-sm"
            style={{
              backgroundImage: "linear-gradient(90deg, rgba(0,191,255,0.12), rgba(0,191,255,0.24), rgba(0,191,255,0.12))",
              backgroundSize: "200% 200%",
              animation: "shimmer 8s ease-in-out infinite"
            }}
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Ready to see if you qualify?
                </h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  Takes 2 minutes. Working professionals only.
                </p>
              </div>
              <a
                href="https://start.frontendfuture.pro/landing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-white hover:bg-white/90 text-primary font-semibold shadow hover:shadow-lg whitespace-nowrap">
                  <Rocket className="w-5 h-5" />
                  See If I Qualify
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualifyCTA;
