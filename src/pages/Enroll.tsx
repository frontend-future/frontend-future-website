import { Helmet } from "react-helmet-async";

const Enroll = () => {
  return (
    <>
      <Helmet>
        <title>Enroll | Frontend Future</title>
        <meta name="description" content="Enroll in the Frontend Future program and start your journey to becoming a frontend developer." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-8">
            Your Next Step: Enroll And Get Started
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
            Start your journey to becoming a frontend developer.
          </p>
        </div>
      </div>
    </>
  );
};

export default Enroll;
