import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="w-full">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold">About Frontend Future</h1>
            
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
