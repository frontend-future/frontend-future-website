import { Button } from "@/components/ui/button";
import { Check, Code, Briefcase, TrendingUp } from "lucide-react";

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Learn How To Code And Land A{" "}
              <span className="text-accent">6-Figure Remote Job</span>{" "}
              In As Little As 12 Weeks
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Join career changers aged 35-55 who've gone from $40-70K ceilings to $100K+ remote tech careers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://start.frontendfuture.pro/landing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
                  Apply Now →
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                <Code className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">12-Week Program</h3>
              <p className="text-muted-foreground">
                Intensive training from HTML to React with guaranteed internship
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Internship Guarantee</h3>
              <p className="text-muted-foreground">
                Break out of the 2 years experience trap and cruise into your first role
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">$100K+ Average</h3>
              <p className="text-muted-foreground">
                Our graduates average six-figure salaries in remote roles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Frontend Development */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Frontend Development?
            </h2>
            <div className="grid gap-6">
              {[
                "High demand with remote opportunities worldwide",
                "Six-figure salaries standard in the industry",
                "No degree required - skills matter more than credentials",
                "Perfect for career changers at any age",
                "Work-life balance with flexible schedules",
                "Future-proof career with continuous growth"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center pt-6">
              <a
                href="https://start.frontendfuture.pro/landing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold">
                  Start Your Transformation →
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-white/90">
              Join hundreds of career changers who've successfully transitioned to high-paying tech careers
            </p>
            <div className="pt-6">
              <a
                href="https://start.frontendfuture.pro/landing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-8 py-6">
                  Apply Now →
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
