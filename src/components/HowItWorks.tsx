const steps = [
  {
    number: "01",
    title: "APPLY & ONBOARD",
    description: "Selected students receive access to GradScale's onboarding resources including training materials, pitch frameworks, and professional communication guides.",
  },
  {
    number: "02",
    title: "SKILL DEVELOPMENT & TRAINING",
    description: "Students participate in structured training focused on developing essential professional skills including business communication, client discovery conversations, negotiation and closing techniques, identifying market opportunities, and building professional relationships.",
  },
  {
    number: "03",
    title: "PRACTICAL EXPOSURE",
    description: "Students begin interacting with real business environments under mentorship guidance and apply the skills they have learned.",
  },
  {
    number: "04",
    title: "PERFORMANCE RECOGNITION",
    description: "Students who successfully complete the program receive a Skill & Training Development Certificate, performance-based earning opportunities, and potential internship opportunities with GradScale or partner companies.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-minimal text-muted-foreground mb-4">PROCESS</h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">
              A Simple 4-Step Learning Journey
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
            {steps.map((step) => (
              <div key={step.number} className="group">
                <div className="flex items-start space-x-6">
                  <span className="text-minimal text-muted-foreground font-medium">
                    {step.number}
                  </span>
                  <div>
                    <h4 className="text-2xl font-light mb-4 text-architectural group-hover:text-muted-foreground transition-colors duration-500">
                      {step.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
