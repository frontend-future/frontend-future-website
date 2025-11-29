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
      question: "What kind of results do students get with this program?",
      answer: "Students who commit to the process develop the exact frontend skills used in roles that typically pay $80,000 to $120,000 in the industry. You learn the same technologies, build the same types of projects, and work with the same tools that real teams use every day. By the end of the program, you will have a portfolio that shows you can build modern interfaces, solve practical problems, and contribute to real-world applications. These are the skills that sit at the starting point of higher paying opportunities in tech. If you stay consistent and follow the roadmap, you put yourself on a path where roles with stronger pay, better flexibility, and more stability become possible over time."
    },
    {
      question: "What does mentorship and support look like?",
      answer: "You get real human support throughout the program. We run weekly mentor-led sessions where you can ask questions, get feedback, and work through challenges in real time. You also get access to a private Slack channel where you can get help whenever you are stuck. You always know exactly what to do next, and you always have support when you need it."
    },
    {
      question: "How long does it usually take to be ready to apply for jobs?",
      answer: "You can learn the core frontend skills in twelve focused weeks when you follow a clear plan. That gives you the foundation you need to start building real projects, polishing your portfolio, and preparing to apply with confidence. Everyone moves at a different pace depending on their schedule and consistency. What matters is that you keep building the skills that matter and maintain steady progress. We guide you through both the learning phase and the transition into the job search so you never feel lost."
    },
    {
      question: "Can I start if I have no degree or experience?",
      answer: "Yes. Many people who switch into tech start with no degree or technical background. What matters is consistency and the willingness to follow the roadmap. Many tech teams today focus on skills and real work, not formal credentials. If you can commit to steady learning each week, you can build the foundation needed to pursue a tech career."
    },
    {
      question: "Can I do this while working full-time?",
      answer: "Yes. The program is designed for adults with full-time jobs and real responsibilities. The curriculum and weekly support are structured so you can learn during evenings, weekends, or whenever your schedule allows. If you stay consistent, you will keep making progress even with a demanding job."
    },
    {
      question: "Is twelve weeks enough time to learn frontend development?",
      answer: "Twelve weeks is enough time to build a strong foundation when you follow a focused plan. You will not learn everything there is to know about frontend development in twelve weeks, but you will learn the core skills needed to start building real projects. After the twelve weeks, you continue improving with our guidance while expanding your portfolio."
    },
    {
      question: "Are remote frontend jobs realistic?",
      answer: "Yes. Frontend development is one of the most remote-friendly areas of tech because the work is fully digital. Remote roles are competitive but entirely possible when you have strong skills and a portfolio that shows real work. We design your projects and submissions with remote-friendly companies in mind so you can present yourself well when the time comes to apply."
    },
    {
      question: "How does this compare to a traditional degree?",
      answer: "Degrees focus on theory and take years to complete. Frontend Future focuses entirely on practical skills and real projects that employers care about. You learn by building, not by studying for exams, and you can keep your job while you learn. Many successful developers today come from non-degree paths. What matters most is your skill and your portfolio."
    },
    {
      question: "Am I too old to switch into tech?",
      answer: "No. Many people start tech careers in their thirties, forties, and fifties. Companies value reliability, communication, problem solving, and life experience. These strengths often come from the careers you have already lived. Age is not a barrier to learning these skills. If you stay consistent, you can make real progress at any stage of life."
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
