const Privacy = () => {
  return (
    <div className="w-full">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-sm">Last updated: {new Date().toLocaleDateString()}</p>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Information We Collect</h2>
                <p>
                  We collect information you provide directly to us when you apply to our program, 
                  contact us, or use our services. This may include your name, email address, phone number, 
                  and other information relevant to your application.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">How We Use Your Information</h2>
                <p>
                  We use the information we collect to provide, maintain, and improve our services, 
                  to communicate with you about our program, and to send you relevant updates and information.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Information Sharing</h2>
                <p>
                  We do not sell, trade, or rent your personal information to third parties. 
                  We may share your information only as necessary to provide our services or as required by law.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Data Security</h2>
                <p>
                  We take reasonable measures to protect your personal information from unauthorized access, 
                  use, or disclosure. However, no internet transmission is completely secure.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy, please contact us at{" "}
                  <a href="mailto:jake@frontendfuture.com" className="text-accent hover:underline">
                    jake@frontendfuture.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
