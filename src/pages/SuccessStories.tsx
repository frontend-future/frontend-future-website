import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { Helmet } from "react-helmet-async";

const SuccessStories = () => {
  const testimonials = [
    {
      name: "Lee W.",
      age: 42,
      previousRole: "Firefighter & Nurse",
      previousSalary: "$55K",
      newRole: "Frontend Developer",
      newSalary: "$92K",
      quote: "I used to dread going back on shift in healthcare. The stress was overwhelming. Now I'm a lot less stressed about work, and most of my struggles have to do with not working too much on my side projects. Programming is empowering.",
      location: "Remote"
    },
    {
      name: "Aaron J.",
      age: 31,
      previousRole: "English Teacher",
      previousSalary: "$45K",
      newRole: "Frontend Engineer at Uber (Remote)",
      newSalary: "$140K",
      quote: "I was a broke teacher struggling to save money. From beginning to code it took me about 8 months to land a job at Uber. I put myself in a position where I couldn't fail. Now I work remotely and have the flexibility to work on my own projects.",
      location: "Remote"
    },
    {
      name: "Annie M.",
      age: 29,
      previousRole: "Designer & Teacher",
      previousSalary: "$48K",
      newRole: "Frontend Engineering Lead",
      newSalary: "$115K",
      quote: "I was working multiple dead-end jobs in survival mode. It was the darkest period of my life. For the first time in years, I no longer have to think about ordering from the cheapest items on a menu. I got promoted to Frontend Engineering Lead after just 10 months.",
      location: "Toronto, Canada"
    },
    {
      name: "Bekah H.",
      age: 38,
      previousRole: "College English Teacher",
      previousSalary: "$52K",
      newRole: "Frontend Developer (Part-Time Remote)",
      newSalary: "$78K",
      quote: "As a mom of four, I needed flexibility. I found a job within a week of posting on Twitter. Now I work part-time and remotely. My lunch breaks are with my family. When I'm finished work I'm already home and ready for the next activity.",
      location: "Remote"
    },
    {
      name: "Laura R.",
      age: 27,
      previousRole: "Professional Dancer & Comedian",
      previousSalary: "$42K",
      newRole: "Frontend Engineer",
      newSalary: "$85K",
      quote: "I was struggling as an artist and became really depressed, questioning the whole purpose of my life. Learning to code gave me a new sense of purpose. It's both one of the hardest and most rewarding things I've done. I surprise myself having dreams about code.",
      location: "Remote"
    },
    {
      name: "Tom H.",
      age: 22,
      previousRole: "Recent University Graduate",
      previousSalary: "$0",
      newRole: "Freelance Developer",
      newSalary: "$120K+",
      quote: "I worked my way up to six-figures in 2017, seven years after I started. It takes consistent hard and smart work over time. The main thing developers need to know is that it's possible to get there by going down the freelance route.",
      location: "Remote"
    },
    {
      name: "Patryk P.",
      age: 35,
      previousRole: "Various Jobs",
      previousSalary: "$46K",
      newRole: "Full-Stack Engineer",
      newSalary: "$95K+",
      quote: "Since I was a kid, I dreamed about having freedom to travel. Working as a remote freelancer, I'm able to do it. Thanks to this career, I don't need to stress about money. I'm a minimalist and I managed to buy an apartment with cash.",
      location: "Remote"
    },
    {
      name: "Johannes K.",
      age: 47,
      previousRole: "Physics Student",
      previousSalary: "$0",
      newRole: "Frontend Developer (Contractor)",
      newSalary: "$105K",
      quote: "I'm in the very lucky position to make six figures while only working 6 or 7 months a year. I have several months of vacation with my family. As a contractor you can make high rates once you have your skills in place and gained some experience.",
      location: "Remote"
    },
    {
      name: "Justin Z.",
      age: 41,
      previousRole: "Hearing Aid Specialist",
      previousSalary: "$52K",
      newRole: "Frontend Developer",
      newSalary: "$82K",
      quote: "I worked in sales for 10 years. The industry was changing and I regretted not pursuing coding earlier. I no longer have to commute an hour in traffic each way. I work from home now - my lunch breaks are with my family and I'm excited to go to work.",
      location: "Remote"
    },
    {
      name: "Vincent K.",
      age: 28,
      previousRole: "Office Administrator",
      previousSalary: "$44K",
      newRole: "Frontend Engineer",
      newSalary: "$80K",
      quote: "My salary increased by over 40% and I work 100% remotely. I've done warehouse work, office admin, ESL teacher - this job is the first I've ever had where I've been excited to go to work. I no longer dread another boring day.",
      location: "Remote"
    },
    {
      name: "Brian C.",
      age: 34,
      previousRole: "Furniture Maker & Project Manager",
      previousSalary: "$48K",
      newRole: "Frontend Developer",
      newSalary: "$90K",
      quote: "After a decade in construction, I was thinking more about the tech world than my current job. That's when I knew I wanted to make the switch. The difference in culture was important - the tech industry shares ideas to raise the bar collectively.",
      location: "London, UK"
    },
    {
      name: "Cameron B.",
      age: 25,
      previousRole: "Technical Recruiter",
      previousSalary: "$50K",
      newRole: "Frontend Engineer",
      newSalary: "$85K",
      quote: "I found the recruitment job unfulfilling, but I enjoyed chatting with candidates about what they were building. I realized I could get paid to tap into that sense of accomplishment I felt every time I solved a problem. Money was a motivation, but not the sole one.",
      location: "Remote"
    },
    {
      name: "Carl M.",
      age: 32,
      previousRole: "Journalist",
      previousSalary: "$45K",
      newRole: "Frontend Developer",
      newSalary: "$85K",
      quote: "I worked as a journalist for four years but newspapers didn't support my interest in coding. It took me 14 months of self-learning before I was blessed enough to find a company which took a chance on me. Now I build tools and graphics for an energy company in London.",
      location: "London, UK"
    },
    {
      name: "Tae'lur A.",
      age: 26,
      previousRole: "Waitress",
      previousSalary: "$22K",
      newRole: "Frontend Developer",
      newSalary: "$75K",
      quote: "I was working minimum wage as a waitress, fed up with being stagnant and treated poorly in customer service. Learning to code while working full-time was hard, but being ambitious and wanting a better life fueled me. I've been able to travel to places I only dreamed of and gave a talk at the World Trade Center.",
      location: "Remote"
    },
    {
      name: "Andrew K.",
      age: 28,
      previousRole: "Starbucks Barista",
      previousSalary: "$16K",
      newRole: "Frontend Developer",
      newSalary: "$110K",
      quote: "I was 26 working at Starbucks for $8/hour. Life had not gone the way I dreamed. Teaching myself to code was going to be my way out. Now I make six figures working remotely. My salary increased by 625%. The truth is, it's really hard, but it's possible.",
      location: "Remote"
    },
    {
      name: "Madison K.",
      age: 24,
      previousRole: "Model",
      previousSalary: "$35K",
      newRole: "Frontend Developer",
      newSalary: "$105K",
      quote: "I dropped out of college and people told me I'd spend my life stuck in dead-end low-paying jobs. I was working as a model but it wasn't a promising career. When I learned to code, my whole life changed. Now I work with amazing people, can work from anywhere in the world, and make six figures.",
      location: "Bay Area"
    },
    {
      name: "Simon B.",
      age: 35,
      previousRole: "PhD Student",
      previousSalary: "$30K",
      newRole: "Full-Stack Engineer",
      newSalary: "$95K",
      quote: "I had three failed attempts at learning to code before it finally clicked during my PhD. I was struggling to transition and find a dev job - it was soul crushing. My focus now is helping new developers avoid that same painful journey. The breakthrough came when I had a real reason to learn.",
      location: "Warwick, UK"
    },
    {
      name: "Ryan W.",
      age: 29,
      previousRole: "IT Helpdesk",
      previousSalary: "$45K",
      newRole: "Frontend Developer",
      newSalary: "$80K",
      quote: "Before I wrote code professionally I was very bored with my work. After years in IT support I found something I love - programming is a creative discipline where my work has a direct impact on people. The pay is substantially more and the work is much more plentiful.",
      location: "Ottawa, Canada"
    },
    {
      name: "Guillaume M.",
      age: 33,
      previousRole: "Legal Advisor",
      previousSalary: "$97K",
      newRole: "Full-Stack Engineer",
      newSalary: "$100K",
      quote: "I worked as a lawyer for 6 years but coding was taking most of my free time - evenings, nights, and weekends. Switching careers was tough. You have to put aside your painful years of studies and work experience to start over. But my side projects helped me land a good first job. I haven't looked back.",
      location: "Luxembourg"
    }
  ];

  const stats = [
    { label: "Typical Starting Salary", value: "$80K-$120K" },
    { label: "People Served", value: "1000+" },
    { label: "Satisfaction Guarantee", value: "100%" }
  ];

  return (
    <div className="w-full">
      <Helmet>
        <title>Success Stories: Career Changers Earning $80K-$140K Remote | Frontend Future</title>
        <meta name="description" content="Read real testimonials from career changers who landed $80K-$140K remote frontend developer jobs. From teachers to engineers to freelancers earning $100K+." />
        <meta name="keywords" content="frontend developer salary, coding bootcamp reviews, career change success stories, remote developer testimonials" />
        <link rel="canonical" href="https://frontendfuture.pro/success-stories" />
        
        <meta property="og:title" content="Success Stories: Career Changers Earning $80K-$140K Remote" />
        <meta property="og:description" content="Meet graduates who transformed their careers. From firefighters to teachers - now earning $80K-$140K as remote frontend developers." />
      </Helmet>
      {/* Header Section */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-sky-700 bg-sky-50 inline-block rounded-full px-3 py-1">
              Proven transformations
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Real People, <span className="underline decoration-sky-500 decoration-2">Real Results</span>
            </h1>
            <p className="text-xl text-slate-700">
              Meet the students who transformed their careers and lives
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
