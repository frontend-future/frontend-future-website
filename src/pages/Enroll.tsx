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
        </div>
      </div>
    </>
  );
};

export default Enroll;
