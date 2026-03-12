import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const highlights = [
  "Structured skill development & training program",
  "Real-world business interaction exposure",
  "Performance-based earning opportunities",
  "Skill & Training Development Certificate",
  "Internship opportunities for top performers",
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-32">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-primary-foreground text-architectural mb-8 reveal">
          Turn Your Skills Into Real Income While Still in College
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/70 font-light leading-relaxed max-w-2xl mx-auto mb-6 reveal-delayed">
          GradScale offers a structured Skill & Training Development Program designed to help students gain practical business exposure, interact with real clients, and develop valuable professional skills.
        </p>

        <p className="text-base text-primary-foreground/50 font-light max-w-2xl mx-auto mb-10 reveal-delayed">
          Students who demonstrate strong performance during the program may receive internship opportunities with GradScale or companies within our industry network.
        </p>

        <div className="flex flex-col items-start max-w-md mx-auto mb-12 space-y-3 reveal-delayed">
          {highlights.map((item) => (
            <div key={item} className="flex items-center space-x-3">
              <Check className="w-4 h-4 text-primary-foreground/60 flex-shrink-0" />
              <span className="text-sm text-primary-foreground/70 text-left">{item}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal-delayed">
          <a href="#apply">
            <Button size="lg" variant="secondary" className="text-minimal px-8">
              APPLY FOR PROGRAM
            </Button>
          </a>
          <a href="#colleges">
            <Button size="lg" variant="outline" className="text-minimal px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              PARTNER WITH US (COLLEGES)
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
