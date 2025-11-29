import { Helmet } from "react-helmet-async";
import QualifyCTA from "@/components/QualifyCTA";

const WhyWeExist = () => {
  return (
    <div className="w-full">
      <Helmet>
        <title>Why We Exist: Our Story | Frontend Future</title>
        <meta name="description" content="Learn about why Frontend Future exists and our mission to help working professionals transition into six-figure remote tech careers." />
        <meta name="keywords" content="frontend future story, career change, tech education mission, bootcamp story" />
        <link rel="canonical" href="https://frontendfuture.pro/why-we-exist" />
        
        <meta property="og:title" content="Why We Exist: Our Story | Frontend Future" />
        <meta property="og:description" content="Discover the story behind Frontend Future and why we're passionate about helping people change their careers." />
      </Helmet>

      {/* Header Section */}
      <section className="bg-slate-50 py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-sky-700 bg-sky-50 inline-block rounded-full px-3 py-1">
              Our Story
            </p>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              Why <span className="underline decoration-sky-500 decoration-2">We Exist</span>
            </h1>
            <p className="text-base md:text-xl text-slate-700 max-w-3xl mx-auto">
              Every program has a story. Here's ours.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6 text-slate-700">
              <p className="text-base md:text-lg leading-relaxed">
                Most people do not end up on this page because everything in life is perfect. You are here because something is not working anymore.
              </p>
              
              <p className="text-base md:text-lg leading-relaxed">
                Maybe you are tired of the long hours. Maybe the pay has hit a ceiling. Maybe you feel stuck in a role that never changes. Maybe you want more flexibility, more respect, or simply more control over your future.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                And deep down, you know you are capable of more. You just have not had the right path.
              </p>

              <p className="text-base md:text-lg leading-relaxed font-semibold">
                We built Frontend Future for people exactly like you.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Not for nineteen-year-olds with endless free time. Not for college kids living in dorms. But for adults with jobs, families, bills, pressures, and responsibilities. People who need a way forward that actually fits their life.
              </p>

              <p className="text-base md:text-lg leading-relaxed font-semibold">
                Here is the truth:
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Tech is not out of reach. The path has just been hidden.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                And every year, college becomes less and less of the path. Companies are no longer asking for degrees. Tech CEOs openly say they care about skills, not diplomas. They want people who can build, solve problems, and work on real projects. They do not care where you went to school. They care whether you can do the job.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                This should be good news. It means the door has never been more open for people who want to make a change.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                The problem is that schools still teach people in all the wrong ways. They teach theory instead of real skills. Homework instead of real projects. Lectures instead of practical steps. And when students finish, they still have no idea how to get hired in the real world.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                We have been in those classrooms. We have seen the confusion. We have lived the experience of realizing that no one ever taught the part that actually matters.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Even with a top computer science education and experience as a teaching assistant, we saw firsthand how little of that knowledge translates to getting hired. Learning coding in a classroom is not the same as doing the work companies expect. Most people discover this too late.
              </p>

              <p className="text-base md:text-lg leading-relaxed font-semibold">
                That is why this program exists.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                To give you what traditional education never gave anyone.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                A clear roadmap so you always know exactly what to do next. A support system so you are never stuck or sitting alone on YouTube at two in the morning. A practical skillset built through job-like projects that translate into proof. A realistic pace designed for adults who can give ten to twenty hours a week. And a future with flexibility, comfort, and stability instead of stress and uncertainty.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                You do not need a degree. You do not need to be naturally gifted. You do not need to quit your job. You do not need thousands of hours.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                What you need is a path you can follow. A path that actually leads somewhere. And someone to guide you step by step so you do not get lost again.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Frontend development can open doors to remote work, calmer schedules, higher pay ceilings, and real growth. Not overnight. Not magically. But steadily, predictably, one step at a time.
              </p>

              <p className="text-base md:text-lg leading-relaxed font-semibold">
                And that is what we exist to give you.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Not hype. Not fantasies. But a chance. A real one. A chance to build a better future for yourself and the people you care about.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                If you have ever felt stuck, unseen, overlooked, underpaid, or simply meant for more, this is the path we built for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualify CTA */}
      <QualifyCTA />
    </div>
  );
};

export default WhyWeExist;
