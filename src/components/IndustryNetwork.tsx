import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";

import img1 from "@/assets/companys/Screenshot 2026-03-14 220739.png";
import img2 from "@/assets/companys/Screenshot 2026-03-14 221200.png";
import img3 from "@/assets/companys/Screenshot 2026-03-14 221212.png";
import img4 from "@/assets/companys/Screenshot_2026-03-14_220126-removebg-preview.png";
import img5 from "@/assets/companys/Screenshot_2026-03-14_220206-removebg-preview.png";
import img6 from "@/assets/companys/Screenshot_2026-03-14_220526-removebg-preview.png";
import img7 from "@/assets/companys/Screenshot_2026-03-14_220621-removebg-preview.png";
import img8 from "@/assets/companys/Screenshot_2026-03-14_220711-removebg-preview.png";

const partnerImages = [
  img1, img2, img3, img4, img5, img6, img7, img8,
];

/**
 * Manual wrap function: (((value - min) % (max - min)) + (max - min)) % (max - min) + min
 */
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface ParallaxProps {
  items: string[];
  baseVelocity: number;
}

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

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax flex whitespace-nowrap flex-nowrap overflow-hidden py-12">
      <motion.div className="scroller flex whitespace-nowrap flex-nowrap items-center gap-16 sm:gap-32" style={{ x }}>
        {/* We repeat items multiple times to ensure we don't see gaps during the wrap */}
        {[...items, ...items, ...items, ...items].map((imgSrc, i) => (
          <div key={i} className="relative flex-shrink-0 flex items-center justify-center group cursor-pointer">
            <img
              src={imgSrc}
              alt="Partner logo"
              className="h-14 sm:h-24 w-auto object-contain transition-all duration-700 group-hover:scale-105"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

const IndustryNetwork = () => {
  return (
    <section className="py-32 bg-background border-t border-border overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-minimal text-muted-foreground mb-4">NETWORK</h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural leading-tight">
              Our Industry<br />
              <span className="font-semibold">Ecosystem.</span>
            </h3>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed max-w-md">
            GradScale collaborates with innovative startups and growing companies 
            to provide students exposure to real business environments and potential internship pathways.
          </p>
        </div>
      </div>

      <div className="w-full relative mt-12 bg-muted/20 border-y border-border">
        {/* Fading Gradients for smooth entrance/exit */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
        
        <ParallaxRow items={partnerImages} baseVelocity={-3} />
      </div>

      <div className="container mx-auto px-6 mt-16">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs text-muted-foreground uppercase tracking-widest">
           <p>
             Logos represent companies within GradScale's network.
           </p>
           <span className="hidden sm:block">11+ PARTNERS</span>
        </div>
      </div>
    </section>
  );
};

export default IndustryNetwork;
