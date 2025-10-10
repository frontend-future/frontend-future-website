const Terms = () => {
  return (
    <div className="w-full">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-sm">Last updated: {new Date().toLocaleDateString()}</p>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Acceptance of Terms</h2>
                <p>
                  By accessing and using Frontend Future's services, you accept and agree to be bound 
                  by the terms and conditions of this agreement.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Program Enrollment</h2>
                <p>
                  Enrollment in our program is subject to application approval. We reserve the right 
                  to accept or decline applications at our discretion based on candidate fit and program capacity.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Program Requirements</h2>
                <p>
                  Students are expected to dedicate 20-30 hours per week to the program, complete all 
                  assigned work, and maintain professional conduct throughout their enrollment.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Job Guarantee</h2>
                <p>
                  Our job placement guarantee applies to students who successfully complete all program 
                  requirements and actively participate in our job placement support services.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Intellectual Property</h2>
                <p>
                  All course materials, content, and curriculum are the intellectual property of Frontend Future 
                  and may not be reproduced or distributed without written permission.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
                <p>
                  For questions about these Terms of Service, contact us at{" "}
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

export default Terms;
