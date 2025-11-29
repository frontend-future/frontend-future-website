import { Link } from "react-router-dom";
import { Youtube } from "lucide-react";
import ffLogo from "@/assets/ff-logo.png";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-muted/30 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={ffLogo} alt="FrontendFuture Logo" className="w-10 h-10 rounded-full" />
            <span className="text-lg font-bold text-accent">
              FrontendFuture
            </span>
          </Link>

          {/* Footer Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              to="/about"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/privacy"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Terms
            </Link>
            <Link
              to="/accessibility"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Accessibility
            </Link>
          </nav>

          {/* Social Links */}
          <a
            href="https://www.youtube.com/@frontendfuture"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
            aria-label="Visit our YouTube channel"
          >
            <span>Watch more on YouTube</span>
            <Youtube size={20} />
          </a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Frontend Future
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
