import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="apply" className="py-32 bg-primary">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-light text-primary-foreground text-architectural mb-8">
            Start Building Real Professional Skills
          </h2>
          <p className="text-lg text-primary-foreground/70 leading-relaxed mb-4">
            Join GradScale's Skill & Training Development Program and gain practical exposure to real business environments while developing valuable career skills.
          </p>
          <p className="text-sm text-primary-foreground/50 mb-10">
            Students who perform well may unlock internship opportunities with GradScale or companies within our industry network.
          </p>
          <Button size="lg" variant="secondary" className="text-minimal px-10">
            APPLY NOW
          </Button>
          <p className="text-minimal text-primary-foreground/40 mt-6">
            Limited program slots available.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
