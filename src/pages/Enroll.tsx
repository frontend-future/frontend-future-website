import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

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
        <meta name="description" content="Enroll in the Frontend Future program and start your journey to becoming a frontend developer." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-8">
            Your Next Step: Enroll And Get Started
          </h1>
          
          <div className="max-w-4xl mx-auto">
            <style>{`
              wistia-player[media-id='s5k8df5vxf']:not(:defined) {
                background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/s5k8df5vxf/swatch');
                display: block;
                filter: blur(5px);
                padding-top: 56.25%;
              }
            `}</style>
            {/* @ts-ignore */}
            <wistia-player media-id="s5k8df5vxf" aspect="1.7777777777777777"></wistia-player>
            
            <div className="flex justify-center mt-10">
              <a
                href="https://start.frontendfuture.pro/apply"
                className="inline-block px-12 py-5 text-xl md:text-2xl font-bold text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: '#00BBFF' }}
              >
                Enroll Now
              </a>
            </div>
          </div>

          {/* As Featured In Section */}
          <div className="mt-16 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-10">
              As Featured In
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* USA Today */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col items-center text-center shadow-sm">
                <p className="text-muted-foreground mb-4 flex-grow">
                  "Frontend Future's AI-integrated curriculum cuts learning time by up to 60%." — <span className="font-semibold text-foreground">USA Today</span>
                </p>
                <a
                  href="https://www.usatoday.com/story/partner/kingnewswire/press-release/2025/12/16/frontend-future-announces-ai-integrated-curriculum-for-frontend-mentorship-program/77147419007/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 border-2 border-accent text-accent font-semibold rounded-full hover:bg-accent hover:text-white transition-all duration-300"
                >
                  Read Article
                </a>
              </div>

              {/* TechBullion */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col items-center text-center shadow-sm">
                <p className="text-muted-foreground mb-4 flex-grow">
                  "Frontend Future prepares developers for the flexible, remote-first careers shaping modern tech." — <span className="font-semibold text-foreground">TechBullion</span>
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

              {/* HackerNoon */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col items-center text-center shadow-sm">
                <p className="text-muted-foreground mb-4 flex-grow">
                  "Frontend Future is built for the shift from degree-first to skills-first hiring in tech." — <span className="font-semibold text-foreground">HackerNoon</span>
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
      </div>
    </>
  );
};

export default Enroll;
