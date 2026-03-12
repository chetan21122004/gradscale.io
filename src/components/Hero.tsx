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
      <Icon className="w-5 h-5 mx-auto mb-2 text-white/80" />
      <div className="text-2xl md:text-3xl font-bold text-white">
        {count}{suffix}
      </div>
      <div className="text-xs text-white/50 mt-1 uppercase tracking-wider">{label}</div>
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

      {/* Dark gradient overlay - stronger for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/90 via-[#000000]/75 to-[#000000]/60 z-[1]" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 hero-grid-pattern z-[2]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Headline + CTAs */}
        <div className="space-y-8">
          <Badge variant="outline" className="border-white/30 text-white bg-white/10 backdrop-blur-sm text-xs tracking-widest uppercase px-4 py-1.5 hero-fade-in">
            Skill & Training Development Program
          </Badge>

          <h1 className="sm:text-5xl text-3xl  font-bold leading-[1.05] tracking-tight text-white hero-fade-in hero-delay-1">
            Turn Your Skills Into{" "}
            <span className="hero-glow-text">Real Income</span>{" "}
            While Still in College
          </h1>

          <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-lg hero-fade-in hero-delay-2">
            GradScale helps students gain practical business exposure, interact with real clients, and develop professional skills that matter.
          </p>


          <div className="flex flex-col sm:flex-row gap-4 pt-2 hero-fade-in hero-delay-4">
            <a href="#apply">
              <Button size="lg" className="hero-cta-glow bg-destructive text-white hover:bg-destructive/90 text-sm uppercase tracking-widest px-8 group border-0">
                Apply Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#colleges">
              <Button size="lg" className="border-white/40 text-white bg-white/10 hover:text-white text-sm uppercase tracking-widest px-8">
                Partner With Us
              </Button>
            </a>
          </div>
        </div>


      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${currentSlide === i ? "bg-destructive w-8" : "bg-white/40 hover:bg-white/60"
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
