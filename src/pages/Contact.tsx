import { Button } from "@/components/ui/button";
import { Mail, MessageSquare } from "lucide-react";
import { Helmet } from "react-helmet-async";
import ContactDynamicSection from "@/components/ContactDynamicSection";

const Contact = () => {
  return (
    <div className="w-full">
      <Helmet>
        <title>Contact Us: Get Your Questions Answered | Frontend Future</title>
        <meta name="description" content="Have questions about our frontend bootcamp? Contact Frontend Future for admissions info, curriculum details, and career guidance. Response within 24 hours." />
        <meta name="keywords" content="frontend bootcamp contact, coding bootcamp inquiry, bootcamp admissions, career change questions" />
        <link rel="canonical" href="https://frontendfuture.pro/contact" />
        
        <meta property="og:title" content="Contact Us: Get Your Questions Answered" />
        <meta property="og:description" content="Contact Frontend Future for bootcamp information, admissions, and career guidance." />
      </Helmet>
      {/* Header Section */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-sky-700 bg-sky-50 inline-block rounded-full px-3 py-1">
                  We're here to help
                </p>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                  <span className="underline decoration-sky-500 decoration-2">Get In Touch</span>
                </h1>
                <p className="text-xl text-slate-700">
                  Have questions? We're here to help you make an informed decision.
                </p>
              </div>
              <ContactDynamicSection />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-12">

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
