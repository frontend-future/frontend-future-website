import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const SuccessStories = () => {
  const testimonials = [
    {
      name: "Lee Warrick",
      age: 32,
      previousRole: "Firefighter & Nurse",
      previousSalary: "$55K",
      newRole: "Full-Stack JavaScript Developer",
      newSalary: "$92K",
      quote: "I used to dread going back on shift in healthcare. The stress was overwhelming. Now I'm a lot less stressed about work, and most of my struggles have to do with not working too much on my side projects. Programming is empowering.",
      location: "Ocala, Florida"
    },
    {
      name: "Aaron",
      age: 28,
      previousRole: "English Teacher",
      previousSalary: "$18K",
      newRole: "Software Engineer at Uber (Remote)",
      newSalary: "$140K",
      quote: "I was a broke teacher struggling to save money. From beginning to code it took me about 8 months to land a job at Uber. I put myself in a position where I couldn't fail. Now I work remotely and have the flexibility to work on my own projects.",
      location: "Remote"
    },
    {
      name: "Annie",
      age: 29,
      previousRole: "Designer & Teacher",
      previousSalary: "$32K",
      newRole: "Front-End Engineering Lead",
      newSalary: "$115K",
      quote: "I was working multiple dead-end jobs in survival mode. It was the darkest period of my life. For the first time in years, I no longer have to think about ordering from the cheapest items on a menu. I got promoted to Front-End Engineering Lead after just 10 months.",
      location: "Remote"
    },
    {
      name: "Bekah Hawrot Weigel",
      age: 36,
      previousRole: "College English Teacher",
      previousSalary: "$35K",
      newRole: "Software Developer (Part-Time Remote)",
      newSalary: "$65K",
      quote: "As a mom of four, I needed flexibility. I found a job within a week of posting on Twitter. Now I work part-time and remotely. My lunch breaks are with my family. When I'm finished work I'm already home and ready for the next activity.",
      location: "Remote"
    },
    {
      name: "Laura Roudge",
      age: 27,
      previousRole: "Professional Dancer & Comedian",
      previousSalary: "$22K",
      newRole: "Full-Stack Software Engineer",
      newSalary: "$78K",
      quote: "I was struggling as an artist and became really depressed, questioning the whole purpose of my life. Learning to code gave me a new sense of purpose. It's both one of the hardest and most rewarding things I've done. I surprise myself having dreams about code.",
      location: "Remote"
    },
    {
      name: "Tom Hirst",
      age: 22,
      previousRole: "Recent University Graduate",
      previousSalary: "$0",
      newRole: "Freelance WordPress Developer",
      newSalary: "$120K+",
      quote: "I worked my way up to six-figures in 2017, seven years after I started. It takes consistent hard and smart work over time. The main thing developers need to know is that it's possible to get there by going down the freelance route.",
      location: "Remote"
    },
    {
      name: "Patryk Pawlowski",
      age: 29,
      previousRole: "Various Jobs",
      previousSalary: "$28K",
      newRole: "Full-Stack Developer & Designer",
      newSalary: "$95K+",
      quote: "Since I was a kid, I dreamed about having enough freedom to travel. Working as a remote freelancer, I'm able to do it. Thanks to this career, I don't need to stress about money. I'm a minimalist and I managed to buy an apartment with cash.",
      location: "Remote"
    },
    {
      name: "Johannes",
      age: 34,
      previousRole: "Physics Student",
      previousSalary: "$0",
      newRole: "Full-Stack JavaScript Contractor",
      newSalary: "$98K",
      quote: "I'm in the very lucky position to make six figures while only working 6 or 7 months a year. I have several months of vacation with my family. As a contractor you can make high rates once you have your skills in place and gained some experience.",
      location: "Remote"
    },
    {
      name: "Justin Zimmerman",
      age: 38,
      previousRole: "Hearing Aid Specialist",
      previousSalary: "$52K",
      newRole: "Junior Rails Developer",
      newSalary: "$72K",
      quote: "I worked in sales for 10 years. The industry was changing and I regretted not pursuing coding earlier. I no longer have to commute an hour in traffic each way. I work from home now - my lunch breaks are with my family and I'm excited to go to work.",
      location: "Washington D.C. Area"
    },
    {
      name: "Vincent",
      age: 27,
      previousRole: "Office Administrator",
      previousSalary: "$38K",
      newRole: "Junior Software Engineer",
      newSalary: "$54K",
      quote: "My salary increased by over 40% and I work 100% remotely. I've done warehouse work, office admin, ESL teacher - this job is the first I've ever had where I've been excited to go to work. I no longer dread another boring day.",
      location: "Remote"
    },
    {
      name: "Brian Cooney",
      age: 32,
      previousRole: "Furniture Maker & Project Manager",
      previousSalary: "$45K",
      newRole: "Web Developer",
      newSalary: "$85K",
      quote: "After a decade in construction, I was thinking more about the tech world than my current job. That's when I knew I wanted to make the switch. The difference in culture was important - the tech industry shares ideas to raise the bar collectively.",
      location: "Remote"
    },
    {
      name: "Cameron Blackwood",
      age: 25,
      previousRole: "Technical Recruiter",
      previousSalary: "$42K",
      newRole: "Software Engineer",
      newSalary: "$78K",
      quote: "I found the recruitment job unfulfilling, but I enjoyed chatting with candidates about what they were building. I realized I could get paid to tap into that sense of accomplishment I felt every time I solved a problem. Money was a motivation, but not the sole one.",
      location: "Remote"
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
              Real People, <span className="text-accent">Real Results</span>
            </h1>
            <p className="text-xl text-white/90">
              Meet the students who transformed their careers and lives
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
