import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";
import FAQDynamicSection from "@/components/FAQDynamicSection";
import QualifyCTA from "@/components/QualifyCTA";

const FAQ = () => {
  const faqs = [
    {
      question: "How does your program guarantee a job?",
      answer: "We guarantee job placement because we've built a proven system. You'll complete a guaranteed internship during the program, building real-world experience and references. We provide unlimited interview prep, resume reviews, and direct introductions to our hiring partners. We don't stop supporting you until you land a role - it's that simple. Our track record speaks for itself with a 100% placement rate."
    },
    {
      question: "What is Frontend Future's student success rate?",
      answer: "100% of our students who complete the program land frontend developer roles. Our average graduate salary is $128K, with most securing remote positions. We track every graduate's progress and maintain these statistics publicly. The combination of 1:1 mentorship, guaranteed internship, and unlimited job support means our students succeed where others struggle."
    },
    {
      question: "What do you really mean by one-on-one mentorship?",
      answer: "Unlike bootcamps with 30+ students per instructor, you get dedicated 1:1 time with an experienced frontend developer. Your mentor knows your name, your goals, and your learning style. Sessions are customized to your pace - if you need extra time on React, you get it. If you grasp JavaScript quickly, we move faster. You're never competing for attention or waiting for others to catch up."
    },
    {
      question: "How long will it take to land a job after I complete the training?",
      answer: "Most graduates receive offers within 4-8 weeks of completing the program. Some even secure positions before finishing, thanks to the internship connections. We provide unlimited job search support, so there's no time limit. You'll have ongoing access to interview prep, application reviews, and direct introductions to companies actively hiring."
    },
    {
      question: "What if I'm a complete beginner with no degree?",
      answer: "Perfect - most of our students start exactly where you are. You don't need a degree, prior coding experience, or technical background. The curriculum is designed specifically for complete beginners who are motivated to change careers. We start with the absolute basics and build systematically. Your dedication and work ethic matter far more than your educational background. Companies care about skills, not degrees."
    },
    {
      question: "I'm working full-time. Can I still do this?",
      answer: "Yes, though it requires commitment. The program is intensive and demands 20-30 hours per week. Most students maintain full-time jobs and complete coursework in evenings and weekends. The 1:1 mentorship structure gives you flexibility to schedule sessions around your work. Many of our success stories are from people who did exactly this - kept their job for financial stability while building their new career."
    },
    {
      question: "Is 12 weeks really enough time to learn frontend development?",
      answer: "Absolutely. We're not teaching you everything about web development - we're teaching you exactly what employers need for entry-level frontend roles. The curriculum is laser-focused on HTML, CSS, JavaScript, and React - the core skills that land jobs. Plus, the guaranteed internship gives you real-world application of these skills. You'll be job-ready, not just classroom-ready."
    },
    {
      question: "Can I work remotely as a frontend developer?",
      answer: "Yes - 98% of our graduates work fully remote. Frontend development is one of the most remote-friendly careers in tech. Companies worldwide hire frontend developers remotely because the work is entirely digital. You'll build your portfolio with remote work in mind, and we specifically target remote-friendly companies in our placement support."
    },
    {
      question: "How does this compare to a traditional degree?",
      answer: "A traditional 4-year degree costs 20x more and requires full-time commitment for 4+ years. Our program is 12 weeks, part-time, and you can keep your current job. You'll learn only what employers actually need, not outdated theory. Plus, companies care about skills and portfolio projects, not where you went to school. Our graduates land the same roles as CS grads, but in a fraction of the time and cost."
    },
    {
      question: "Am I too old to become a developer?",
      answer: "No. Our average student is 35-55 years old. Tech companies value maturity, work ethic, and life experience - qualities you've developed in your current career. Age discrimination concerns are overblown for remote positions where skills matter most. Several of our top success stories are students in their late 40s and early 50s who are now thriving in their new careers."
    }
  ];

  return (
    <div className="w-full">
      <Helmet>
        <title>FAQ: Frontend Developer Bootcamp Questions Answered | Frontend Future</title>
        <meta name="description" content="Get answers about our frontend bootcamp: job guarantee, curriculum, 1:1 mentorship, and career outcomes. 100% placement rate for graduates." />
        <meta name="keywords" content="coding bootcamp faq, frontend bootcamp questions, job guarantee bootcamp, learn to code faq" />
        <link rel="canonical" href="https://frontendfuture.pro/faq" />
        
        <meta property="og:title" content="FAQ: Frontend Developer Bootcamp Questions Answered" />
        <meta property="og:description" content="Everything you need to know about our 12-week bootcamp. Job guarantee, 1:1 mentorship, and more." />
      </Helmet>
      {/* Header Section */}
      <section className="bg-slate-50 py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-center">
              <div className="space-y-4 md:space-y-6">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-sky-700 bg-sky-50 inline-block rounded-full px-3 py-1">
                  Everything you need to know
                </p>
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                  <span className="underline decoration-sky-500 decoration-2">Frequently Asked Questions</span>
                </h1>
                <p className="text-base md:text-xl text-slate-700">
                  Get answers to common questions about the program
                </p>
              </div>
              <FAQDynamicSection />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4 md:px-6">
                  <AccordionTrigger className="text-left text-sm md:text-lg font-semibold hover:text-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2 text-xs md:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>


      {/* Qualify CTA */}
      <QualifyCTA />
    </div>
  );
};

export default FAQ;
