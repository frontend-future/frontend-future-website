import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const SuccessStories = () => {
  const testimonials = [
    {
      name: "Michael Rodriguez",
      age: 42,
      previousRole: "Retail Manager",
      previousSalary: "$52K",
      newRole: "Frontend Developer at Tech Startup",
      newSalary: "$125K",
      quote: "I thought I was too old to break into tech. Frontend Future proved me wrong. The 1:1 mentorship made all the difference - my mentor helped me overcome every obstacle.",
      location: "Remote, Texas"
    },
    {
      name: "David Chen",
      age: 38,
      previousRole: "Sales Representative",
      previousSalary: "$68K",
      newRole: "Senior Frontend Engineer",
      newSalary: "$142K",
      quote: "The guaranteed internship gave me real-world experience. Within 3 weeks of completing the program, I had 5 job offers. Now I work from home and spend more time with my kids.",
      location: "Remote, California"
    },
    {
      name: "James Thompson",
      age: 51,
      previousRole: "Construction Supervisor",
      previousSalary: "$65K",
      newRole: "Frontend Developer",
      newSalary: "$118K",
      quote: "After 25 years in construction, I was ready for a change but didn't know where to start. The program was intense but manageable alongside my full-time job. Best investment I've ever made.",
      location: "Remote, Florida"
    },
    {
      name: "Robert Williams",
      age: 45,
      previousRole: "Restaurant Manager",
      previousSalary: "$58K",
      newRole: "Frontend Developer at E-commerce Company",
      newSalary: "$135K",
      quote: "I went from working 60+ hour weeks managing a restaurant to a comfortable remote job with better pay and benefits. The job guarantee wasn't just talk - they delivered.",
      location: "Remote, New York"
    },
    {
      name: "Tom Anderson",
      age: 39,
      previousRole: "Insurance Agent",
      previousSalary: "$71K",
      newRole: "Lead Frontend Developer",
      newSalary: "$156K",
      quote: "No CS degree, no prior coding experience - just determination. The curriculum is challenging but designed for people like us. Within 6 months, I doubled my income.",
      location: "Remote, Washington"
    },
    {
      name: "Kevin Martinez",
      age: 48,
      previousRole: "Manufacturing Supervisor",
      previousSalary: "$62K",
      newRole: "Frontend Engineer at SaaS Company",
      newSalary: "$128K",
      quote: "At 48, I thought I'd work in manufacturing until retirement. Now I have a career I'm passionate about, better work-life balance, and financial security I never thought possible.",
      location: "Remote, Ohio"
    }
  ];

  const stats = [
    { label: "Average Starting Salary", value: "$128K" },
    { label: "People Served", value: "1000+" },
    { label: "Average Age of Students", value: "35-55" },
    { label: "Remote Positions", value: "98%" }
  ];

  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Real Career Changers, <span className="text-accent">Real Results</span>
            </h1>
            <p className="text-xl text-white/90">
              Meet the men who transformed their careers and lives
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <p className="text-3xl md:text-4xl font-bold text-accent">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Quote className="w-8 h-8 text-accent flex-shrink-0" />
                    <div className="flex-1 space-y-4">
                      <p className="text-lg italic leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      <div className="space-y-2">
                        <p className="font-bold text-lg">{testimonial.name}, {testimonial.age}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground">Before:</p>
                            <p className="font-medium">{testimonial.previousRole}</p>
                            <p className="text-accent">{testimonial.previousSalary}/year</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">After:</p>
                            <p className="font-medium">{testimonial.newRole}</p>
                            <p className="text-accent font-bold">{testimonial.newSalary}/year</p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Salary Potential */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Your Future Salary Potential
            </h2>
            <p className="text-xl text-muted-foreground">
              Frontend developer salaries continue to grow with experience
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 space-y-2">
                <p className="text-sm text-muted-foreground">Entry Level (0-2 years)</p>
                <p className="text-3xl font-bold text-accent">$80K-$120K</p>
              </Card>
              <Card className="p-6 space-y-2">
                <p className="text-sm text-muted-foreground">Mid Level (2-5 years)</p>
                <p className="text-3xl font-bold text-accent">$120K-$180K</p>
              </Card>
              <Card className="p-6 space-y-2">
                <p className="text-sm text-muted-foreground">Senior Level (5+ years)</p>
                <p className="text-3xl font-bold text-accent">$180K-$300K+</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              You Could Be Next
            </h2>
            <p className="text-xl text-muted-foreground">
              Join hundreds of career changers who've successfully made the transition
            </p>
            <div className="pt-6">
              <a
                href="https://start.frontendfuture.pro/landing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold">
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

export default SuccessStories;
