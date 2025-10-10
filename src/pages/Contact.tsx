import { Button } from "@/components/ui/button";
import { Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <div className="w-full">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Get In Touch</h1>
              <p className="text-xl text-muted-foreground">
                Have questions? We're here to help you make an informed decision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border rounded-lg space-y-4 hover:shadow-lg transition-shadow">
                <Mail className="w-10 h-10 text-accent" />
                <h3 className="text-xl font-semibold">Email Us</h3>
                <p className="text-muted-foreground">
                  For general inquiries and support
                </p>
                <a
                  href="mailto:jake@frontendfuture.com"
                  className="text-accent hover:underline font-medium"
                >
                  jake@frontendfuture.com
                </a>
              </div>

              <div className="p-8 border rounded-lg space-y-4 hover:shadow-lg transition-shadow">
                <MessageSquare className="w-10 h-10 text-accent" />
                <h3 className="text-xl font-semibold">Apply Now</h3>
                <p className="text-muted-foreground">
                  Ready to start your transformation?
                </p>
                <a
                  href="https://start.frontendfuture.pro/landing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-accent hover:bg-accent/90 text-white">
                    Book Your Call →
                  </Button>
                </a>
              </div>
            </div>

            <div className="pt-8 text-center space-y-4">
              <p className="text-lg text-muted-foreground">
                We typically respond within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
