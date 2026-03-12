import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

import tisorahbox from "@/assets/projects/tisorahbox.png";
import ekatra from "@/assets/projects/ekatra.png";
import on3 from "@/assets/projects/on3.png";
import makewood from "@/assets/projects/makewood.png";
import interiorBygourav from "@/assets/projects/interior-bygourav.png";
import snigmay from "@/assets/projects/snigmay.png";
import thelifesports from "@/assets/projects/thelifesports.png";
import vmlindia from "@/assets/projects/vmlindia.png";
import aivalytics from "@/assets/projects/aivalytics.png";
import arogyayatri from "@/assets/projects/arogyayatri.png";
import dhanushri from "@/assets/projects/dhanushri.png";
import pragatiEvents from "@/assets/projects/pragati-events.png";
import labbbb from "@/assets/projects/labbbb.png";

const projects = [
  { name: "Tisorah Box", url: "https://www.tisorahbox.com/", industry: "E-Commerce", image: tisorahbox },
  { name: "Ekatra", url: "https://www.ekatra.co.in/", industry: "EdTech", image: ekatra },
  { name: "ON3", url: "https://www.on3.in/", industry: "Streetwear", image: on3 },
  { name: "Makewood", url: "https://makewood.vercel.app/", industry: "Interior Design", image: makewood },
  { name: "Interior by Gourav", url: "https://interior-bygourav.vercel.app/", industry: "Interior Design", image: interiorBygourav },
  { name: "Snigmay Foundation", url: "https://www.snigmayfoundation.org/", industry: "Non-Profit", image: snigmay },
  { name: "The Life Sports", url: "https://www.thelifesports.in/", industry: "Sports & Fitness", image: thelifesports },
  { name: "VML India", url: "https://www.vmlindia.in/", industry: "Logistics", image: vmlindia },
  { name: "AIValytics", url: "https://www.aivalytics.com/", industry: "SaaS / AI", image: aivalytics },
  { name: "Arogya Yatri", url: "https://www.arogyayatri.com/", industry: "Healthcare", image: arogyayatri },
  { name: "Dhanushri", url: "https://dhanushri-mauve.vercel.app/", industry: "Portfolio", image: dhanushri },
  { name: "Pragati Events", url: "https://pragati-events.vercel.app/", industry: "Events", image: pragatiEvents },
  { name: "MBReCE Lab", url: "https://labbbb.vercel.app/", industry: "Research", image: labbbb },
];

const row1 = [projects[0], projects[2], projects[4], projects[6], projects[8], projects[10], projects[12]];
const row2 = [projects[1], projects[3], projects[5], projects[7], projects[9], projects[11]];

interface ParallaxProps {
  items: typeof projects;
  baseVelocity: number;
}

/**
 * Manual wrap function: (((value - min) % (max - min)) + (max - min)) % (max - min) + min
 */
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

function ParallaxRow({ items, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic number for the wrap. 
   * It depends on the width of the container.
   * Since we use flex and repeat items, -25% to -50% usually works.
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what makes it move faster on scroll.
     * The velocity factor is added to the base movement.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax flex whitespace-nowrap flex-nowrap overflow-hidden">
      <motion.div className="scroller flex whitespace-nowrap flex-nowrap gap-4" style={{ x }}>
        {/* We repeat items multiple times to ensure we don't see gaps during the wrap */}
        {[...items, ...items, ...items, ...items].map((project, i) => (
          <div key={i} className="relative w-[300px] md:w-[450px] aspect-[16/10] group overflow-hidden bg-muted flex-shrink-0">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-minimal text-white/60 mb-1">{project.industry}</p>
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-light text-white">{project.name}</h4>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white flex items-center justify-center text-white hover:text-black transition-all">
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

const Portfolio = () => {
  const [row1Speed, setRow1Speed] = useState(-1.6); // Speed in px/s approx
  const [row2Speed, setRow2Speed] = useState(1.6);

  const handleNudge = (row: 1 | 2, direction: "L" | "R") => {
    if (row === 1) {
      setRow1Speed(prev => direction === "L" ? prev - 2 : prev + 2);
      setTimeout(() => setRow1Speed(-1.6), 2000); // Reset after 2s
    } else {
      setRow2Speed(prev => direction === "L" ? prev - 2 : prev + 2);
      setTimeout(() => setRow2Speed(1.6), 2000);
    }
  };

  return (
    <section id="portfolio" className="py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 mb-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-minimal text-muted-foreground mb-4">PORTFOLIO</h2>
            <h3 className="text-4xl md:text-7xl font-light text-architectural leading-none">
              Live Projects.<br />
              <span className="font-semibold">Digital Excellence.</span>
            </h3>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-sm">
            A dual-flow interactive showcase of 13+ client success stories delivered by GradScale interns.
          </p>
        </div>
      </div>

      <div className="space-y-12">
        {/* Row 1 */}
        <div className="relative group/row">
          <ParallaxRow items={row1} baseVelocity={row1Speed} />
          {/* Navigation Buttons Row 1 */}
          <div className="absolute inset-y-0 left-6 flex items-center opacity-0 group-hover/row:opacity-100 transition-opacity pointer-events-none">
            <button 
              onClick={() => handleNudge(1, "L")}
              className="w-12 h-12 rounded-full bg-white/90 shadow-xl flex items-center justify-center text-black hover:bg-destructive hover:text-white transition-all pointer-events-auto"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute inset-y-0 right-6 flex items-center opacity-0 group-hover/row:opacity-100 transition-opacity pointer-events-none">
            <button 
              onClick={() => handleNudge(1, "R")}
              className="w-12 h-12 rounded-full bg-white/90 shadow-xl flex items-center justify-center text-black hover:bg-destructive hover:text-white transition-all pointer-events-auto"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Row 2 */}
        <div className="relative group/row">
          <ParallaxRow items={row2} baseVelocity={row2Speed} />
          {/* Navigation Buttons Row 2 */}
          <div className="absolute inset-y-0 left-6 flex items-center opacity-0 group-hover/row:opacity-100 transition-opacity pointer-events-none">
            <button 
              onClick={() => handleNudge(2, "L")}
              className="w-12 h-12 rounded-full bg-white/90 shadow-xl flex items-center justify-center text-black hover:bg-destructive hover:text-white transition-all pointer-events-auto"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute inset-y-0 right-6 flex items-center opacity-0 group-hover/row:opacity-100 transition-opacity pointer-events-none">
            <button 
              onClick={() => handleNudge(2, "R")}
              className="w-12 h-12 rounded-full bg-white/90 shadow-xl flex items-center justify-center text-black hover:bg-destructive hover:text-white transition-all pointer-events-auto"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="container mx-auto px-6 mt-20">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-12 border-t border-border pt-12">
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-light text-architectural">13+</span>
            <span className="text-minimal text-muted-foreground uppercase">Deployments</span>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-light text-architectural">100%</span>
            <span className="text-minimal text-muted-foreground uppercase">Live status</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
