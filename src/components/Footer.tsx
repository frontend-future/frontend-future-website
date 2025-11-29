import ffLogo from "@/assets/ff-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 px-4 py-10 text-center text-xs text-slate-500">
      <div className="flex items-center justify-center gap-2 mb-4">
        <img src={ffLogo} alt="FrontendFuture Logo" className="w-8 h-8 rounded-full" />
        <span className="text-sm font-semibold text-slate-900">FrontendFuture</span>
      </div>
      <div className="mt-4">
        © 2025 Frontend Future · <a href="/terms" className="underline">Terms</a> · <a href="/privacy" className="underline">Privacy</a> · <a href="/accessibility" className="underline">Accessibility</a> · <a href="https://www.youtube.com/@frontendfuture" target="_blank" rel="noopener noreferrer" className="underline">Watch more on YouTube</a>
      </div>
    </footer>
  );
};

export default Footer;
