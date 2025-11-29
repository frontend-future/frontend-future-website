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
            <div className="prose prose-lg max-w-none space-y-6 text-slate-700">
              <p className="text-lg md:text-xl leading-relaxed">
                [Your story content will go here]
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed">
                This section is ready for your story. You can share:
              </p>
              
              <ul className="list-disc pl-6 space-y-3 text-base md:text-lg">
                <li>How Frontend Future was founded</li>
                <li>The problem you're solving</li>
                <li>Your mission and values</li>
                <li>What makes your approach different</li>
                <li>The impact you want to create</li>
              </ul>

              <p className="text-lg md:text-xl leading-relaxed">
                Add your compelling story here to connect with potential students and show them why Frontend Future is the right choice for their career transformation.
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
