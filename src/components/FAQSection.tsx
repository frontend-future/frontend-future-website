import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
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
    }
  ];

  return (
    <section className="mx-auto max-w-5xl px-4 py-12 md:py-16">
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800">Frequently Asked Questions</h2>
      </div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`} 
            className="border-0 rounded-lg bg-white shadow-sm overflow-hidden"
          >
            <div className="flex">
              <div className="w-1 bg-amber-400 flex-shrink-0" />
              <div className="flex-1">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-slate-800 hover:text-slate-800 hover:no-underline px-4 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed px-4 pb-4">
                  {faq.answer}
                </AccordionContent>
              </div>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
