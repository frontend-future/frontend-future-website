import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code, Layout, Smartphone, Briefcase, FileCheck, Monitor, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";
import HowItWorksDynamicSection from "@/components/HowItWorksDynamicSection";

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
      description: "Our team will optimize your LinkedIn, polish your resume, and train you on how to crush your interviews. Start applying to jobs and hearing back from employers.",
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
      <Helmet>
        <title>How It Works: 12-Week Frontend Developer Bootcamp | Frontend Future</title>
        <meta name="description" content="Discover our proven 12-week curriculum from HTML to React with guaranteed internship. Learn frontend development with 1:1 mentorship and land your dream remote job." />
        <meta name="keywords" content="frontend bootcamp curriculum, coding bootcamp structure, learn react, javascript course, web development training" />
        <link rel="canonical" href="https://frontendfuture.pro/how-it-works" />
        
        <meta property="og:title" content="How It Works: 12-Week Frontend Developer Bootcamp" />
        <meta property="og:description" content="From HTML basics to React mastery in 12 weeks. Guaranteed internship included. 1:1 mentorship throughout your journey." />
      </Helmet>
      {/* Header Section */}
      <section className="bg-slate-50 py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-center">
              <div className="space-y-4 md:space-y-6">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-sky-700 bg-sky-50 inline-block rounded-full px-3 py-1">
                  Your proven roadmap to success
                </p>
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                  Your 12-Week Path to a <span className="underline decoration-sky-500 decoration-2">Six-Figure Career</span>
                </h1>
                <p className="text-base md:text-xl text-slate-700">
                  A structured, proven curriculum with guaranteed internship designed specifically for career changers
                </p>
              </div>
              <HowItWorksDynamicSection />
            </div>
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="p-4 md:p-8 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-accent/10 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 md:w-8 md:h-8 text-accent" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-2 md:space-y-3">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-2">
                        <h3 className="text-lg md:text-2xl font-bold">{step.title}</h3>
                        <span className="text-accent font-semibold text-sm md:text-base">{step.weeks}</span>
                      </div>
                      <p className="text-muted-foreground text-sm md:text-lg leading-relaxed">
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
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold">
              True One-on-One Mentorship
            </h2>
            <p className="text-sm md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Unlike other bootcamps with large cohorts, you get dedicated 1:1 time with an experienced frontend developer. Your mentor knows your name, tracks your progress, and customizes lessons to your learning style. You're never just a number in a class.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-4 md:pt-8">
              <div className="space-y-1 md:space-y-2">
                <p className="text-2xl md:text-4xl font-bold text-accent">1:1</p>
                <p className="text-xs md:text-base text-muted-foreground">Personal mentorship</p>
              </div>
              <div className="space-y-1 md:space-y-2">
                <p className="text-2xl md:text-4xl font-bold text-accent">100%</p>
                <p className="text-xs md:text-base text-muted-foreground">Job placement support</p>
              </div>
              <div className="space-y-1 md:space-y-2">
                <p className="text-2xl md:text-4xl font-bold text-accent">12</p>
                <p className="text-xs md:text-base text-muted-foreground">Weeks to career change</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 md:space-y-6">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold">
              Ready to Start Your Journey?
            </h2>
            <p className="text-sm md:text-lg lg:text-xl text-muted-foreground">
              See how our graduates transformed their careers
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-4 md:pt-6">
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
