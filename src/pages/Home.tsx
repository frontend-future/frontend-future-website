import { Button } from "@/components/ui/button";
import { Check, Code, Briefcase, TrendingUp, X } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Helmet } from "react-helmet-async";
import HomeDynamicSection from "@/components/HomeDynamicSection";

const Home = () => {
  return (
    <div className="w-full">
      <Helmet>
        <title>Learn to Code & Land a 6-Figure Remote Job in 12 Weeks | Frontend Future</title>
        <meta name="description" content="Transform your career with Frontend Future's 12-week bootcamp. 1:1 mentorship, guaranteed internship, and $100K+ remote developer jobs. No degree required. Apply now!" />
        <meta name="keywords" content="frontend developer bootcamp, learn to code, remote developer job, career change coding, bootcamp with job guarantee, frontend development course" />
        <link rel="canonical" href="https://frontendfuture.pro/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Learn to Code & Land a 6-Figure Remote Job in 12 Weeks" />
        <meta property="og:description" content="12-week bootcamp for career changers. 1:1 mentorship, guaranteed internship, $100K+ remote salaries. No degree required." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://frontendfuture.pro/" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Learn to Code & Land a 6-Figure Remote Job in 12 Weeks" />
        <meta name="twitter:description" content="Transform your career with Frontend Future. 1:1 mentorship, guaranteed internship, $100K+ remote developer jobs." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Frontend Future",
            "description": "Frontend development bootcamp with guaranteed internship and job placement support",
            "url": "https://frontendfuture.pro"
          })}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-8">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-sky-700 bg-sky-50 inline-block rounded-full px-3 py-1">
                  Ditch the commute and work from anywhere
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                  <span className="underline decoration-sky-500 decoration-2">Learn How To Code</span> And Land A{" "}
                  <span className="underline decoration-sky-500 decoration-2">6-Figure Remote Job</span>{" "}
                  In <span className="underline decoration-sky-500 decoration-2">12-Weeks</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-700 font-semibold">
                  Without a degree and without quitting your day job.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://start.frontendfuture.pro/landing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold text-xl px-12 py-8 shadow-xl hover:shadow-2xl transition-all">
                      Apply Now →
                    </Button>
                  </a>
                </div>
              </div>
              <HomeDynamicSection />
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
                Frontend developers average six-figure salaries in remote roles
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

      {/* Comparison Table */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Frontend Development Wins
            </h2>
            <div className="bg-background rounded-lg shadow-lg overflow-hidden border">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="w-1/3 font-bold text-foreground"></TableHead>
                    <TableHead className="w-1/3 font-bold text-foreground text-center bg-accent/20">
                      Frontend Development
                    </TableHead>
                    <TableHead className="w-1/3 font-bold text-foreground text-center">
                      Other Paths (e.g. Cyber, PM, IT)
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-semibold">Time to Break In</TableCell>
                    <TableCell className="text-center bg-accent/10">
                      <div className="flex items-start justify-center gap-2">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>12 weeks to portfolio + job interviews</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center text-muted-foreground">
                      <div className="flex items-start justify-center gap-2">
                        <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                        <span>12–24 months of certs, MBAs, or grinding</span>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Proof of Skill</TableCell>
                    <TableCell className="text-center bg-accent/10">
                      <div className="flex items-start justify-center gap-2">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>Guaranteed Internship experience + portfolio</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center text-muted-foreground">
                      <div className="flex items-start justify-center gap-2">
                        <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                        <span>No real proof (certs, resumes, buzzwords only)</span>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Remote Lifestyle Fit</TableCell>
                    <TableCell className="text-center bg-accent/10">
                      <div className="flex items-start justify-center gap-2">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>High % of remote-first roles</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center text-muted-foreground">
                      <div className="flex items-start justify-center gap-2">
                        <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                        <span>Many require on-site / hybrid (especially Cyber + PM)</span>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Income Potential</TableCell>
                    <TableCell className="text-center bg-accent/10">
                      <div className="flex items-start justify-center gap-2">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>$80K–$120K starting → $150K+ within a few years</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center text-muted-foreground">
                      <div className="flex items-start justify-center gap-2">
                        <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                        <span>IT stuck at $40K–$60K, PM requires years, bizopps inconsistent</span>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Barrier to Entry</TableCell>
                    <TableCell className="text-center bg-accent/10">
                      <div className="flex items-start justify-center gap-2">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>No degree required, skills &gt; pedigree</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center text-muted-foreground">
                      <div className="flex items-start justify-center gap-2">
                        <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                        <span>Degree, clearance, MBA, or years of "experience"</span>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Family & Freedom Friendly</TableCell>
                    <TableCell className="text-center bg-accent/10">
                      <div className="flex items-start justify-center gap-2">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>Control schedule, more time for travel/kids/health</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center text-muted-foreground">
                      <div className="flex items-start justify-center gap-2">
                        <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                        <span>Commutes, stress, or unstable income</span>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Guaranteed Path</TableCell>
                    <TableCell className="text-center bg-accent/10">
                      <div className="flex items-start justify-center gap-2">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>Mentorship + insider referrals + job guarantee</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center text-muted-foreground">
                      <div className="flex items-start justify-center gap-2">
                        <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                        <span>"Figure it out yourself," zero guarantees</span>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
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
