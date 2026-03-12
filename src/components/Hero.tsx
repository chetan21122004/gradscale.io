import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Users, Building2, Award } from "lucide-react";

import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";

const slides = [heroSlide1, heroSlide2, heroSlide3, heroSlide4];

const highlights = [
  "Structured Skill Development",
  "Real-World Business Exposure",
  "Performance-Based Earnings",
  "Training Certificate",
  "Internship Opportunities",
];

const stats = [
  { icon: Users, value: 500, suffix: "+", label: "Students Trained" },
  { icon: Building2, value: 50, suffix: "+", label: "Partner Companies" },
  { icon: Award, value: 95, suffix: "%", label: "Success Rate" },
  { icon: TrendingUp, value: 200, suffix: "+", label: "Projects Delivered" },
];

function useAnimatedCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

const StatItem = ({ icon: Icon, value, suffix, label }: typeof stats[0]) => {
  const { count, ref } = useAnimatedCounter(value);
  return (
    <div ref={ref} className="text-center">
      <Icon className="w-5 h-5 mx-auto mb-2 text-primary opacity-80" />
      <div className="text-2xl md:text-3xl font-bold text-primary">
        {count}{suffix}
      </div>
      <div className="text-xs text-primary/60 mt-1 uppercase tracking-wider">{label}</div>
    </div>
  );
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image Slider */}
      {slides.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover hero-slide-img"
          style={{ opacity: currentSlide === i ? 1 : 0 }}
        />
      ))}

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50 z-[1]" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 hero-grid-pattern z-[2]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Headline + CTAs */}
        <div className="space-y-8">
          <Badge variant="outline" className="border-primary/30 text-primary bg-primary/10 backdrop-blur-sm text-xs tracking-widest uppercase px-4 py-1.5 hero-fade-in">
            Skill & Training Development Program
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-white hero-fade-in hero-delay-1">
            Turn Your Skills Into{" "}
            <span className="hero-glow-text">Real Income</span>{" "}
            While Still in College
          </h1>

          <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-lg hero-fade-in hero-delay-2">
            GradScale helps students gain practical business exposure, interact with real clients, and develop professional skills that matter.
          </p>

          <div className="flex flex-wrap gap-2 hero-fade-in hero-delay-3">
            {highlights.map((h) => (
              <Badge
                key={h}
                className="bg-white/10 text-white/80 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-colors text-xs px-3 py-1"
              >
                {h}
              </Badge>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2 hero-fade-in hero-delay-4">
            <a href="#apply">
              <Button size="lg" className="hero-cta-glow bg-primary text-primary-foreground hover:bg-primary/90 text-sm uppercase tracking-widest px-8 group">
                Apply Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#colleges">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-sm uppercase tracking-widest px-8">
                Partner With Us
              </Button>
            </a>
          </div>
        </div>

        {/* Right: Glass Card with Stats */}
        <div className="hero-fade-in hero-delay-3">
          <div className="hero-glass-card rounded-2xl p-8 md:p-10 space-y-8">
            <div className="text-center">
              <h3 className="text-white text-lg font-semibold tracking-wide uppercase">Our Impact</h3>
              <div className="w-12 h-0.5 bg-primary mx-auto mt-3" />
            </div>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat) => (
                <StatItem key={stat.label} {...stat} />
              ))}
            </div>

            <div className="text-center pt-2">
              <p className="text-white/40 text-xs italic">
                "The best investment you can make is in yourself."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              currentSlide === i ? "bg-primary w-8" : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
