const benefits = [
  {
    number: "01",
    title: "PERFORMANCE-BASED EARNINGS",
    description: "Students may earn commissions based on opportunities they help generate.",
  },
  {
    number: "02",
    title: "PRACTICAL SKILL DEVELOPMENT",
    description: "Develop valuable professional skills including communication, negotiation, and business engagement.",
  },
  {
    number: "03",
    title: "REAL BUSINESS EXPOSURE",
    description: "Interact with professionals and businesses across industries.",
  },
  {
    number: "04",
    title: "FLEXIBLE WORK MODEL",
    description: "Fully remote program allowing students to manage their schedules.",
  },
  {
    number: "05",
    title: "CERTIFICATION & CAREER OPPORTUNITIES",
    description: "Receive a Skill & Training Development Certificate, with internship opportunities available for high-performing students.",
  },
];

const WhyJoin = () => {
  return (
    <section id="why-join" className="py-32 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-minimal text-muted-foreground mb-4">BENEFITS</h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">
              Why Students Join GradScale
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-14">
            {benefits.map((b) => (
              <div key={b.number} className="group">
                <div className="flex items-start space-x-6">
                  <span className="text-minimal text-muted-foreground font-medium">
                    {b.number}
                  </span>
                  <div>
                    <h4 className="text-xl font-light mb-3 text-architectural group-hover:text-muted-foreground transition-colors duration-500">
                      {b.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {b.description}
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

export default WhyJoin;
