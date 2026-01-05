import { Helmet } from "react-helmet-async";
import { useEffect, useState, useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import usatodayArticle from "@/assets/usatoday-article.png";
import techbullionArticle from "@/assets/techbullion-article.png";
import hackernoonArticle from "@/assets/hackernoon-article.png";
import WistiaPlayer from "@/components/WistiaPlayer";
import linkedinMessage1 from "@/assets/linkedin-message-1.png";
import linkedinMessage2 from "@/assets/linkedin-message-2.png";
import linkedinMessage3 from "@/assets/linkedin-message-3.png";
import linkedinMessage4 from "@/assets/linkedin-message-4.png";
import linkedinMessage5 from "@/assets/linkedin-message-5.png";
import linkedinMessage6 from "@/assets/linkedin-message-6.png";
import salaryChart from "@/assets/salary-chart.png";

const Enroll = () => {
  const [showStickyButton, setShowStickyButton] = useState(false);
  const mainButtonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Load Wistia player script
    const playerScript = document.createElement("script");
    playerScript.src = "https://fast.wistia.com/player.js";
    playerScript.async = true;
    document.head.appendChild(playerScript);

    // Load Wistia embed script
    const embedScript = document.createElement("script");
    embedScript.src = "https://fast.wistia.com/embed/s5k8df5vxf.js";
    embedScript.async = true;
    embedScript.type = "module";
    document.head.appendChild(embedScript);

    return () => {
      document.head.removeChild(playerScript);
      document.head.removeChild(embedScript);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowStickyButton(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (mainButtonRef.current) {
      observer.observe(mainButtonRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Enroll | Frontend Future</title>
        <meta
          name="description"
          content="Enroll in the Frontend Future program and start your journey to becoming a frontend developer."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-8">
            Your Next Step: Enroll And Get Started
          </h1>

          <div className="max-w-4xl mx-auto">
            <WistiaPlayer mediaId="s5k8df5vxf" />

            <div className="mt-10">
              <a
                ref={mainButtonRef}
                href="https://buy.stripe.com/bJe3cv5PRfCf6nE8QA1sQ0o"
                className="block w-full py-5 text-xl md:text-2xl font-bold text-white text-center rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                style={{ backgroundColor: "#00BBFF" }}
              >
                Enroll Now
              </a>
            </div>
          </div>

          {/* As Featured In Section */}
          <div className="mt-16 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-10">As Featured In</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* USA Today */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col">
                <img
                  src={usatodayArticle}
                  alt="USA Today article about Frontend Future"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-muted-foreground mb-6 flex-grow">
                    "Frontend Future's AI-integrated curriculum cuts learning time by up to 60%." —{" "}
                    <span className="font-semibold text-foreground">USA Today</span>
                  </p>
                  <a
                    href="https://www.usatoday.com/press-release/story/21551/frontend-future-announces-ai-integrated-curriculum-for-frontend-mentorship-program/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 border-2 border-accent text-accent font-semibold rounded-full hover:bg-accent hover:text-white transition-all duration-300"
                  >
                    Read Article
                  </a>
                </div>
              </div>

              {/* TechBullion */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col">
                <img
                  src={techbullionArticle}
                  alt="TechBullion article about Frontend Future"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-muted-foreground mb-6 flex-grow">
                    "Frontend Future prepares developers for the flexible, remote-first careers shaping modern tech." —{" "}
                    <span className="font-semibold text-foreground">TechBullion</span>
                  </p>
                  <a
                    href="https://techbullion.com/why-frontend-developers-have-the-flexibility-most-workers-are-fighting-for/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 border-2 border-accent text-accent font-semibold rounded-full hover:bg-accent hover:text-white transition-all duration-300"
                  >
                    Read Article
                  </a>
                </div>
              </div>

              {/* HackerNoon */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col">
                <img
                  src={hackernoonArticle}
                  alt="HackerNoon article about Frontend Future"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-muted-foreground mb-6 flex-grow">
                    "Frontend Future is built for the shift from degree-first to skills-first hiring in tech." —{" "}
                    <span className="font-semibold text-foreground">HackerNoon</span>
                  </p>
                  <a
                    href="https://hackernoon.com/frontend-future-reviews-the-shift-from-degree-first-to-skills-first-hiring-in-2025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 border-2 border-accent text-accent font-semibold rounded-full hover:bg-accent hover:text-white transition-all duration-300"
                  >
                    Read Article
                  </a>
                </div>
              </div>
            </div>
          </div>

          <section className="mx-auto max-w-7xl px-4 pb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-center">
              Got Questions?{" "}
              <span className="underline decoration-sky-500 decoration-2">Watch These Before Your Call</span>
            </h2>
            <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
              These quick videos answer the most common questions people have before their qualification call. Watch
              them now so you can focus on what matters most during your session.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Video 1: What even is frontend development? */}
              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm flex flex-col h-full">
                <h3 className="text-lg font-bold mb-4 text-sky-600 min-h-[3.5rem] flex items-center">
                  What even is frontend development?
                </h3>
                <div className="rounded-xl overflow-hidden border border-slate-200 bg-black/90 flex-1">
                  <WistiaPlayer mediaId="5wumegulmo" seo="false" />
                </div>
              </div>

              {/* Video 2: Can I really learn coding in 12 weeks? */}
              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm flex flex-col h-full">
                <h3 className="text-lg font-bold mb-4 text-sky-600 min-h-[3.5rem] flex items-center">
                  Can I really learn coding in 12 weeks?
                </h3>
                <div className="rounded-xl overflow-hidden border border-slate-200 bg-black/90 flex-1">
                  <WistiaPlayer mediaId="onfb7b1f2k" seo="false" />
                </div>
              </div>

              {/* Video 3: Will this work for me if I'm too busy, old, or working full-time? */}
              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm flex flex-col h-full">
                <h3 className="text-lg font-bold mb-4 text-sky-600 min-h-[3.5rem] flex items-center">
                  Will this work for me if I'm too busy, old, or working full-time?
                </h3>
                <div className="rounded-xl overflow-hidden border border-slate-200 bg-black/90 flex-1">
                  <WistiaPlayer mediaId="0px6u0pvgz" seo="false" />
                </div>
              </div>

              {/* Video 4: Do people really get hired without a degree or years of experience? */}
              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm flex flex-col h-full">
                <h3 className="text-lg font-bold mb-4 text-sky-600 min-h-[3.5rem] flex items-center">
                  Do people really get hired without a degree or years of experience?
                </h3>
                <div className="rounded-xl overflow-hidden border border-slate-200 bg-black/90 flex-1">
                  <WistiaPlayer mediaId="fjssikinv7" seo="false" />
                </div>
              </div>

              {/* Video 5: What's the catch? */}
              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm flex flex-col h-full">
                <h3 className="text-lg font-bold mb-4 text-sky-600 min-h-[3.5rem] flex items-center">
                  What's the catch?
                </h3>
                <div className="rounded-xl overflow-hidden border border-slate-200 bg-black/90 flex-1">
                  <WistiaPlayer mediaId="ngtae1ikgl" seo="false" />
                </div>
              </div>

              {/* Video 6: How is this different from a bootcamp or Youtube? */}
              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm flex flex-col h-full">
                <h3 className="text-lg font-bold mb-4 text-sky-600 min-h-[3.5rem] flex items-center">
                  How is this different from a bootcamp or Youtube?
                </h3>
                <div className="rounded-xl overflow-hidden border border-slate-200 bg-black/90 flex-1">
                  <WistiaPlayer mediaId="q60pz5gyeh" seo="false" />
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="mx-auto max-w-5xl px-4 pb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-10 text-center">Here's what people have to say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <div className="rounded-xl overflow-hidden border border-slate-200 bg-black/90">
                <WistiaPlayer mediaId="yf3vz714ok" seo="true" />
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-200 bg-black/90">
                <WistiaPlayer mediaId="pjze7gwdvi" seo="true" />
              </div>
            </div>
          </section>

          {/* LinkedIn Messages Section */}
          <section className="mx-auto max-w-6xl px-4 pb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-10 text-center">
              Here's what your inbox will look like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <img src={linkedinMessage1} alt="LinkedIn job offer message" className="w-full h-auto" />
              </div>
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <img src={linkedinMessage2} alt="LinkedIn job offer message" className="w-full h-auto" />
              </div>
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <img src={linkedinMessage3} alt="LinkedIn job offer message" className="w-full h-auto" />
              </div>
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <img src={linkedinMessage4} alt="LinkedIn job offer message" className="w-full h-auto" />
              </div>
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <img src={linkedinMessage5} alt="LinkedIn job offer message" className="w-full h-auto" />
              </div>
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <img src={linkedinMessage6} alt="LinkedIn job offer message" className="w-full h-auto" />
              </div>
            </div>
          </section>

          {/* Salary Section */}
          <section className="mx-auto max-w-4xl px-4 pb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-10 text-center">Here's what you could be earning</h2>
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <img
                src={salaryChart}
                alt="Frontend Software Engineer salary data showing $184,000 median total comp"
                className="w-full h-auto"
              />
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mx-auto max-w-5xl px-4 pb-14">
            <div className="rounded-2xl bg-white border border-slate-200 p-6 md:p-8">
              <h4 className="text-lg md:text-2xl font-extrabold mb-6">Frequently Asked Questions</h4>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem
                  value="item-0"
                  className="bg-slate-50 border border-slate-200 rounded-lg px-6 hover:border-sky-500/50 transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="font-semibold">How does your program guarantee a job?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-700 pb-4">
                    Once you successfully complete our training program, we provide everything you need to land a
                    6-figure remote role. This includes: a professionally crafted resume tailored to remote tech
                    positions, a compelling cover letter template that gets responses, a fully optimized LinkedIn
                    profile that attracts recruiters, one-on-one career coaching sessions to prepare you for interviews,
                    and a guaranteed internship that gives you real job experience. We don&apos;t just teach you to
                    code. We build your entire hiring profile and give you the proven experience that bypasses the
                    &apos;years of experience required&apos; barrier that stops most beginners.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-1"
                  className="bg-slate-50 border border-slate-200 rounded-lg px-6 hover:border-sky-500/50 transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="font-semibold">What is Frontend Future&apos;s student success rate?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-700 pb-4">
                    Fewer than 5% of our graduates did not secure a tech job. In the US specifically, this success rate
                    improves even further, where less than 1% of our graduates failed to land a job. This demonstrates
                    the effectiveness of our curriculum and the 1-on-1 mentorship we provide to ensure students succeed.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="bg-slate-50 border border-slate-200 rounded-lg px-6 hover:border-sky-500/50 transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="font-semibold">What do you really mean by one-on-one mentorship?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-700 pb-4">
                    One-on-one mentorship means you&apos;ll have personalized support throughout your learning journey.
                    You&apos;ll meet regularly with a dedicated mentor who will guide you through challenges, offer
                    feedback, and adjust the curriculum to your learning pace. This ensures you never feel stuck or
                    overwhelmed.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="bg-slate-50 border border-slate-200 rounded-lg px-6 hover:border-sky-500/50 transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="font-semibold">
                      How long will it take to land a job after I complete the training?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-700 pb-4">
                    Most graduates secure a job within 12 weeks of finishing the program. In fact, it&apos;s possible to
                    land a job on your very first application and even before graduating, thanks to our comprehensive
                    portfolio-building projects, personalized mentorship and career support.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-4"
                  className="bg-slate-50 border border-slate-200 rounded-lg px-6 hover:border-sky-500/50 transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="font-semibold">What if I&apos;m a complete beginner with no degree?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-700 pb-4">
                    No problem! Our program is designed for absolute beginners. You&apos;ll start from the basics and
                    work your way up with hands-on projects. Our one-on-one mentorship ensures you&apos;re supported at
                    every step, making it easy for anyone to learn, regardless of prior experience. Our program is
                    designed to help you achieve results, regardless of your starting point. In addition, a degree is
                    not necessary to become a frontend developer. In fact, major tech companies like Google, Apple, and
                    IBM have publicly announced that they no longer require candidates to have formal degrees. Instead,
                    they prioritize skills, experience, and real-world problem-solving abilities. Our program is
                    designed to give you exactly that—practical, hands-on learning that helps you build a strong
                    portfolio, often more valuable than a degree in today&apos;s tech job market.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-5"
                  className="bg-slate-50 border border-slate-200 rounded-lg px-6 hover:border-sky-500/50 transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="font-semibold">I&apos;m working full-time. Can I still do this?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-700 pb-4">
                    Yes! Many of our students balance full-time jobs while completing the program. The program is
                    flexible, and you can study part-time. Our mentors will work around your availability, making sure
                    you can progress at a comfortable pace without feeling overwhelmed.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-6"
                  className="bg-slate-50 border border-slate-200 rounded-lg px-6 hover:border-sky-500/50 transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="font-semibold">Is 12 weeks really enough time to learn frontend development?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-700 pb-4">
                    Yes, our curriculum is designed to teach you all the essential frontend skills in 12 weeks. With
                    hands-on projects and personalized mentorship, you&apos;ll gain a deep understanding of frontend
                    development. Plus, you&apos;ll have lifetime access to course materials, so you can keep refining
                    your skills even after the program ends.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-7"
                  className="bg-slate-50 border border-slate-200 rounded-lg px-6 hover:border-sky-500/50 transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="font-semibold">Can I work remotely as a frontend developer?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-700 pb-4">
                    Absolutely. Frontend development is one of the most remote-friendly jobs in tech. Many companies
                    offer remote positions, allowing you to work from anywhere with an internet connection. It&apos;s a
                    great career path if you value flexibility and work-life balance.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-8"
                  className="bg-slate-50 border border-slate-200 rounded-lg px-6 hover:border-sky-500/50 transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="font-semibold">Am I too old to start learning frontend development?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-700 pb-4">
                    No! Many of our students are career changers in their 40s, 50s, and even 60s. In tech, skills are
                    more important than age, and with our training, you&apos;ll gain the practical experience and
                    portfolio to impress employers, regardless of your age.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>
        </div>
      </div>

      {/* Sticky Enroll Button */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-slate-200 py-3 px-4 transition-all duration-300 ${
          showStickyButton ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <div className="max-w-3xl mx-auto">
          <a
            href="https://buy.stripe.com/bJe3cv5PRfCf6nE8QA1sQ0o"
            className="block w-full py-3 text-lg font-bold text-white text-center rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            style={{ backgroundColor: "#00BBFF" }}
          >
            Enroll Now
          </a>
        </div>
      </div>
    </>
  );
};

export default Enroll;
