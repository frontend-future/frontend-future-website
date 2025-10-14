import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import AboutDynamicSection from "@/components/AboutDynamicSection";

const About = () => {
  return (
    <div className="w-full">
      <Helmet>
        <title>About Frontend Future: Transform Careers Into Tech | Frontend Future</title>
        <meta name="description" content="Learn about Frontend Future's mission to help career changers aged 35-55 break into high-paying tech careers. Average graduate salary: $128K remote." />
        <meta name="keywords" content="frontend future story, coding bootcamp mission, career change bootcamp, tech career transformation" />
        <link rel="canonical" href="https://frontendfuture.pro/about" />
        
        <meta property="og:title" content="About Frontend Future: Transform Careers Into Tech" />
        <meta property="og:description" content="Helping career changers aged 35-55 land $128K average remote frontend developer jobs. True 1:1 mentorship." />
      </Helmet>
      {/* Header Section */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-sky-700 bg-sky-50 inline-block rounded-full px-3 py-1">
                  Our mission and story
                </p>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                  About <span className="underline decoration-sky-500 decoration-2">Frontend Future</span>
                </h1>
              </div>
              <AboutDynamicSection />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Frontend Future was founded with a simple mission: help career changers aged 35-55 break into high-paying tech careers, regardless of their background or education.
              </p>
              
              <p>
                We saw too many talented, motivated individuals stuck in careers with income ceilings, working long hours with little work-life balance. Meanwhile, the tech industry was desperate for frontend developers - offering six-figure salaries, remote work, and flexibility.
              </p>
              
              <p>
                The problem? Traditional bootcamps weren't designed for working professionals. Large cohorts, inflexible schedules, and minimal personal attention meant many students fell through the cracks.
              </p>
              
              <p>
                That's why we built Frontend Future differently. True 1:1 mentorship. Guaranteed internships. Unlimited job placement support. A curriculum laser-focused on what actually gets you hired.
              </p>
              
              <p>
                Today, we've helped hundreds of career changers make the transition. Our graduates work at startups and established companies alike, earning an average of $128K in fully remote positions.
              </p>
              
              <p className="text-foreground font-semibold">
                We don't just teach code. We transform careers.
              </p>
            </div>

            <div className="pt-8">
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
    </div>
  );
};

export default About;
