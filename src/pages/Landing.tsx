import React, { useEffect } from "react";
import { FAQSection } from "@/components/FAQSection";
import ffLogo from "@/assets/ff-logo.png";

/**
 * FrontendFuture — VSL + DTA (No Opt‑in)
 * CRO‑Optimized Mobile‑First Build
 * - High-contrast primary CTA
 * - Sticky mobile footer CTA
 * - Above‑the‑fold clarity (promise + proof + action)
 * - Inline micro‑proof and objection squash
 * - Wistia watch events → reveal CTA + auto‑scroll
 * - Typeform embedded DTA
 */

export default function Landing() {
  // load external scripts once
  useEffect(() => {
    const load = (src: string) => new Promise(res => {
      if (document.querySelector(`script[src="${src}"]`)) return res(true);
      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      s.onload = () => res(true);
      document.body.appendChild(s);
    });
    (async () => {
      await load("https://fast.wistia.com/embed/medias/p868stnd98.jsonp");
      await load("https://fast.wistia.com/assets/external/E-v1.js");
      await load("//embed.typeform.com/next/embed.js");

      // Wistia events: show sticky CTA at 15s, auto-scroll at 60%
      (window as any)._wq = (window as any)._wq || [];
      (window as any)._wq.push({
        id: "p868stnd98",
        onReady: function (video: any) {
          try {
            let revealed = false;
            video.bind("secondchange", function (s: number) {
              if (!revealed && s >= 15) {
                document.documentElement.classList.add("ff-sticky-visible");
                revealed = true;
              }
            });
            video.bind("percentwatchedchanged", function (p: number) {
              if (p >= 0.6) {
                const el = document.querySelector("#apply");
                if (el) el.scrollIntoView({
                  behavior: "smooth",
                  block: "start"
                });
              }
            });
          } catch (e) {}
        }
      });
    })();

    // Hide sticky button when application section is in view
    const applySection = document.querySelector("#apply");
    if (applySection) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            document.documentElement.classList.remove("ff-sticky-visible");
          } else if (entry.boundingClientRect.top > 0) {
            document.documentElement.classList.add("ff-sticky-visible");
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: "0px 0px -20% 0px"
      });
      observer.observe(applySection);
      return () => observer.disconnect();
    }

    // Hide header on scroll down, show on scroll up
    let lastScroll = 0;
    const header = document.querySelector('header');
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        header?.classList.remove('ff-header-hidden');
        return;
      }
      if (currentScroll > lastScroll && currentScroll > 100) {
        header?.classList.add('ff-header-hidden');
      } else if (currentScroll < lastScroll) {
        header?.classList.remove('ff-header-hidden');
      }
      lastScroll = currentScroll;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToVideo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const video = document.getElementById("video");
    if (video) {
      video.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  };
  
  const scrollToApply = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const apply = document.getElementById("apply");
    if (apply) {
      apply.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };
  
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 scroll-smooth">
      {/* Sticky top bar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white font-bold">{"</>"}</span>
            <span className="font-semibold">FrontendFuture</span>
          </div>
          <a href="#apply" onClick={scrollToApply} className="hidden sm:inline-flex px-4 py-2 rounded-xl bg-sky-700 text-white shadow-sm hover:bg-sky-800 transition">
            Get My 6-Figure Remote Roadmap
          </a>
        </div>
      </header>

      {/* HERO: promise + action + short proof */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-8 md:py-12 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-sky-700 bg-sky-50 block mx-auto md:inline-block rounded-full px-3 py-1 text-center">
              Ditch the commute and work from anywhere
            </p>
            <h1 className="mt-3 text-[28px] md:text-5xl font-extrabold leading-tight">
              <span className="underline decoration-sky-500 decoration-2">Learn How To Code</span> And Land A <span className="underline decoration-sky-500 decoration-2">6-Figure Remote Job</span> In <span className="underline decoration-sky-500 decoration-2">12-Weeks</span>
            </h1>
            <p className="mt-3 text-base md:text-lg text-slate-700 font-semibold">
              Without a degree and quitting your day job.
            </p>
            <ul className="mt-5 space-y-2 text-sm md:text-base">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                <span><strong>Land $120k+ remote roles</strong> without years of experience or starting from scratch.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                <span><strong>Guaranteed internship</strong> so you graduate with job experience, not just a certificate.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                <span><strong>DFY hiring profile</strong> (resume + LinkedIn + cover letter) built for you so you're guaranteed to get offers that are worth your time.</span>
              </li>
            </ul>
          </div>

          {/* VSL */}
          <div>
            <div className="mb-3 text-center">
              <p className="text-sm font-semibold text-slate-900">👇 Watch This Short Video First</p>
              <p className="text-xs text-slate-600 mt-1">See how we help you land $120k+ remote roles</p>
            </div>
            <div id="video" className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-black/90">
              <div className="wistia_responsive_padding" style={{
                padding: "56.25% 0 0 0",
                position: "relative"
              }}>
                <div className="wistia_responsive_wrapper" style={{
                  height: "100%",
                  left: 0,
                  position: "absolute",
                  top: 0,
                  width: "100%"
                }}>
                  <div className="wistia_embed wistia_async_p868stnd98 seo=false videoFoam=true" style={{
                    height: "100%",
                    position: "relative",
                    width: "100%"
                  }}>
                    <div className="wistia_swatch" style={{
                      height: "100%",
                      left: 0,
                      opacity: 0,
                      overflow: "hidden",
                      position: "absolute",
                      top: 0,
                      transition: "opacity 200ms",
                      width: "100%"
                    }}>
                      <img 
                        src="https://fast.wistia.com/embed/medias/p868stnd98/swatch" 
                        style={{
                          filter: "blur(5px)",
                          height: "100%",
                          objectFit: "contain",
                          width: "100%"
                        }} 
                        alt="" 
                        aria-hidden="true" 
                        onLoad={e => e.currentTarget.parentElement && (e.currentTarget.parentElement.style.opacity = '1')} 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <a href="#apply" onClick={scrollToApply} className="block px-5 py-3 rounded-xl bg-sky-700 text-white font-semibold shadow hover:bg-sky-800 text-center">
                Get My 6-Figure Remote Roadmap
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="rounded-xl bg-white border border-slate-200 p-3 text-[13px] text-slate-600">
          HR screens for years of experience. Hiring managers look for proof you can do the job. We help you build that proof in weeks using AI.
        </div>
      </section>

      {/* DTA — Application */}
      <section id="apply" className="mx-auto max-w-5xl px-4 py-12 md:py-16">
        <div className="mb-6 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold">
            Get Your Custom <span className="underline decoration-sky-500 decoration-2">6-Figure Remote Career Roadmap</span>
          </h2>
          <p className="mt-2 text-slate-700">
            Fill out the form below to get your personalized 6-figure remote career roadmap.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 shadow-sm bg-white p-2">
          <div data-tf-live="01K6Y7Y8CMPZE5YYWS6SM4HMDG"></div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* Legal */}
      <footer className="bg-white border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-8 text-xs text-slate-500 space-y-3">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img src={ffLogo} alt="FrontendFuture Logo" className="w-8 h-8 rounded-full" />
            <span className="text-sm font-semibold text-slate-900">FrontendFuture</span>
          </div>
          <p>
            This website is not part of the YouTube, Google, or Facebook website; Google Inc or Facebook Inc. Also, this website is NOT endorsed by YouTube, Google or Facebook in any way. FACEBOOK is a trademark of FACEBOOK Inc. YOUTUBE is a trademark of GOOGLE Inc.
          </p>
          <p>
            <span className="font-semibold">EARNINGS DISCLAIMER:</span> Any income or earnings statements are estimates of income potential only. Individual results will vary and there is no guarantee that you will make money, improve current profits, or make any money at all. Success depends on your effort, dedication, skills, and market conditions. As with any business endeavor, you assume all risk related to investment and money.
          </p>
          <div className="flex items-center justify-between">
            <p className="text-slate-600">© 2025 Turbo Scale, LLC — FrontendFuture</p>
            <div className="flex gap-4">
              <a href="#" className="hover:underline">Terms</a>
              <a href="#" className="hover:underline">Privacy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 sm:hidden translate-y-full ff-sticky-transition">
        <div className="mx-auto max-w-xl px-4 pb-[env(safe-area-inset-bottom)]">
          <a href="#apply" onClick={scrollToApply} className="block mb-3 px-5 py-4 rounded-2xl bg-sky-700 text-white text-center font-semibold shadow-lg shadow-sky-700/30">
            Get My 6-Figure Remote Roadmap
          </a>
        </div>
      </div>

      <style>{`
        .ff-sticky-transition{transition:transform .35s cubic-bezier(.2,.8,.2,1)}
        .ff-sticky-visible .ff-sticky-transition{transform:translateY(0)}
        header{transition:transform .35s cubic-bezier(.2,.8,.2,1)}
        header.ff-header-hidden{transform:translateY(-100%)}
      `}</style>
    </main>
  );
}
