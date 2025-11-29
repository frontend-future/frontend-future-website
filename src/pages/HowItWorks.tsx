import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Laptop, FileCode, Zap, Layout, FileCheck, Briefcase, Target, Send } from "lucide-react";
import { Helmet } from "react-helmet-async";
import HowItWorksDynamicSection from "@/components/HowItWorksDynamicSection";
import JourneyTimeline from "@/components/JourneyTimeline";
import QualifyCTA from "@/components/QualifyCTA";

const HowItWorks = () => {
  const steps = [
    {
      icon: Laptop,
      title: "Setup & Professional Website",
      weeks: "Week 1",
      description: "We will set up your computer for coding with beginner friendly AI tools, walk you through writing your first line of code, and help you build and launch your own professional personal website even if you have never coded before.",
    },
    {
      icon: FileCode,
      title: "HTML & CSS Fundamentals",
      weeks: "Weeks 2–4",
      description: "Learn the core building blocks of frontend development. You will create clean layouts, responsive pages, and your first professional looking projects that begin shaping your portfolio.",
    },
    {
      icon: Zap,
      title: "JavaScript Foundations",
      weeks: "Weeks 5–7",
      description: "This is where coding starts to make sense. You will learn how to add real functionality to your pages with JavaScript so you can build interactive features and start thinking like a real developer.",
    },
    {
      icon: Layout,
      title: "React Development",
      weeks: "Weeks 8–10",
      description: "Learn the framework that most modern companies use. You will build components, connect to real data, and create polished, production style projects that show employers you can work with the tools teams actually use.",
    },
    {
      icon: FileCheck,
      title: "Interview Preparation",
      weeks: "Weeks 11–12",
      description: "Now you get ready to present yourself like a serious candidate. We will improve your LinkedIn, resume, and portfolio and teach you how to talk about your work clearly so you feel confident in interviews.",
    },
    {
      icon: Briefcase,
      title: "Work-Like Experience",
      weeks: "Weeks 13–16",
      description: "Gain hands-on practice doing the same type of tasks junior developers handle on real teams. You will work through features, fix issues, and follow a simple workflow that gives you work-like experience you can confidently talk about in applications.",
    },
    {
      icon: Target,
      title: "Job Search System",
      weeks: "Weeks 17–20",
      description: "Turn your skills and projects into a clean professional presence. You will package your best work into a simple portfolio, refine your resume, and optimize your online presence so hiring managers can see what you bring to the table.",
    },
    {
      icon: Send,
      title: "Start Applying With Confidence",
      weeks: "Weeks 21–24",
      description: "Follow a beginner friendly application plan designed for career changers. You will learn how to reach out the right way, how to get responses, and how to consistently move toward your first tech opportunity.",
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
                  Your Path to a Remote <span className="underline decoration-sky-500 decoration-2">Six-Figure Tech Career</span>
                </h1>
                <p className="text-base md:text-xl text-slate-700">
                  A structured, proven curriculum designed specifically for working adults wanting to change careers
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

      {/* Support Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold">
              Support Every Step of the Way
            </h2>
            <p className="text-sm md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Traditional bootcamps dump you into huge cohorts with little direction. Here, you get consistent support from an experienced developer who makes sure you always know what to do next. Clear steps. Clear progress. Real accountability.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-4 md:pt-8">
              <div className="space-y-1 md:space-y-2">
                <p className="text-2xl md:text-4xl font-bold text-accent">1:1</p>
                <p className="text-xs md:text-base text-muted-foreground">Direct support</p>
              </div>
              <div className="space-y-1 md:space-y-2">
                <p className="text-2xl md:text-4xl font-bold text-accent">12 Weeks</p>
                <p className="text-xs md:text-base text-muted-foreground">Learn the skills</p>
              </div>
              <div className="space-y-1 md:space-y-2">
                <p className="text-2xl md:text-4xl font-bold text-accent">Proven Path</p>
                <p className="text-xs md:text-base text-muted-foreground">Never guess your next step</p>
              </div>
            </div>
            <div className="pt-4">
              <a
                href="https://start.frontendfuture.pro/landing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold">
                  Start Your Journey →
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <JourneyTimeline />

      {/* Qualify CTA */}
      <QualifyCTA />
    </div>
  );
};

export default HowItWorks;
