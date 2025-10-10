import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code, Layout, Smartphone, Briefcase, FileCheck, Monitor, Users } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Monitor,
      title: "Setup & Professional Website",
      weeks: "Week 1",
      description: "Setup your computer for success in frontend development. You'll have built your own professional personal website that you can show to potential employers (yes, even if you've never coded before).",
    },
    {
      icon: Code,
      title: "HTML & CSS Fundamentals",
      weeks: "Weeks 2-4",
      description: "Master the building blocks of web development. Learn to create beautiful, responsive layouts from scratch.",
    },
    {
      icon: Smartphone,
      title: "JavaScript Mastery",
      weeks: "Weeks 5-7",
      description: "Become proficient in JavaScript - the language that powers modern web applications. Build interactive features and logic.",
    },
    {
      icon: Layout,
      title: "React Development",
      weeks: "Weeks 8-10",
      description: "Learn React, the industry-standard framework. Build complex, production-ready applications used by top tech companies. Create portfolio projects you can share with employers.",
    },
    {
      icon: FileCheck,
      title: "Interview Preparation",
      weeks: "Weeks 11-12",
      description: "Master LinkedIn optimization, resume building, and what to expect in interviews. Start applying to jobs and hearing back from employers.",
    },
    {
      icon: Users,
      title: "Guaranteed Internship",
      weeks: "Weeks 13-24",
      description: "The reason most bootcamp grads fail is that they learn the skills but don't have 'proof of experience' to land that first role. We shortcut that by guaranteeing internship experience you can share with future employers.",
    },
  ];

  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Your 24-Week Path to a <span className="text-accent">Six-Figure Career</span>
            </h1>
            <p className="text-xl text-white/90">
              A structured, proven curriculum with guaranteed internship designed specifically for career changers
            </p>
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                        <Icon className="w-8 h-8 text-accent" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                        <span className="text-accent font-semibold">{step.weeks}</span>
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* One-on-One Mentorship */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              True One-on-One Mentorship
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Unlike other bootcamps with large cohorts, you get dedicated 1:1 time with an experienced frontend developer. Your mentor knows your name, tracks your progress, and customizes lessons to your learning style. You're never just a number in a class.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="space-y-2">
                <p className="text-4xl font-bold text-accent">1:1</p>
                <p className="text-muted-foreground">Personal mentorship</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-bold text-accent">100%</p>
                <p className="text-muted-foreground">Job placement support</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-bold text-accent">24</p>
                <p className="text-muted-foreground">Weeks to career change</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-muted-foreground">
              See how our graduates transformed their careers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a
                href="https://start.frontendfuture.pro/landing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold">
                  Apply Now →
                </Button>
              </a>
              <Button size="lg" variant="outline" asChild>
                <a href="/success-stories">See Success Stories</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
