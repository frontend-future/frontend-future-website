const Accessibility = () => {
  return (
    <div className="w-full">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold">Accessibility Statement</h1>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Frontend Future is committed to ensuring digital accessibility for people with disabilities. 
                We are continually improving the user experience for everyone and applying the relevant 
                accessibility standards.
              </p>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Our Commitment</h2>
                <p>
                  We strive to conform to Level AA of the Web Content Accessibility Guidelines (WCAG) 2.1. 
                  These guidelines explain how to make web content more accessible for people with disabilities.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Measures We Take</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide text alternatives for non-text content</li>
                  <li>Create content that can be presented in different ways</li>
                  <li>Make it easier for users to see and hear content</li>
                  <li>Help users navigate and find content</li>
                  <li>Make all functionality available from a keyboard</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Program Accessibility</h2>
                <p>
                  Our program is designed to be accessible to students with diverse needs. We provide 
                  reasonable accommodations and work individually with students to ensure they can 
                  fully participate in the program.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Feedback</h2>
                <p>
                  We welcome your feedback on the accessibility of Frontend Future. If you encounter 
                  accessibility barriers, please contact us at{" "}
                  <a href="mailto:jake@frontendfuture.com" className="text-accent hover:underline">
                    jake@frontendfuture.com
                  </a>
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Technical Specifications</h2>
                <p>
                  This website is designed to be compatible with assistive technologies including 
                  screen readers, voice recognition software, and keyboard-only navigation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accessibility;
