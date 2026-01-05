import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import usatodayArticle from "@/assets/usatoday-article.png";
import techbullionArticle from "@/assets/techbullion-article.png";
import hackernoonArticle from "@/assets/hackernoon-article.png";
import WistiaPlayer from "@/components/WistiaPlayer";

const Enroll = () => {
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

            <div className="flex justify-center mt-10">
              <a
                href="https://start.frontendfuture.pro/apply"
                className="inline-block px-12 py-5 text-xl md:text-2xl font-bold text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
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
        </div>
      </div>
    </>
  );
};

export default Enroll;
