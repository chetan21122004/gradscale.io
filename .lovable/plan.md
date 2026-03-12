

## Hero Section Redesign Plan

### Concept
A cinematic, full-screen hero with an **auto-playing background image slider** (crossfade transitions between multiple high-quality images), overlaid with a dark gradient, floating particle/grid animation, and bold split-layout content. The design will feel premium and "crazy professional."

### Design Details

**Background Image Slider:**
- 4-5 high-quality AI-generated images cycling every 5 seconds with smooth crossfade (CSS opacity transitions)
- Using absolute-positioned `<img>` tags with state-driven opacity toggling
- Dark gradient overlay on top for text readability

**Layout:**
- Split layout: left side has headline + description + CTAs, right side has a floating stats/highlights card with glassmorphism effect
- Animated counter stats (e.g., "500+ Students", "50+ Companies") floating on the right
- Highlights presented as pill badges instead of a plain checklist

**Visual Effects:**
- Subtle animated grid/dot pattern overlay (CSS background-pattern)
- Glassmorphism card with `backdrop-blur` for the highlights section
- Staggered reveal animations on scroll
- Glowing accent on CTA buttons

**Responsive:**
- Stacks vertically on mobile, side-by-side on desktop

### Technical Approach

1. **Generate 4 AI images** for the background slider (business/tech/students themes)
2. **Rewrite `src/components/Hero.tsx`** with:
   - `useState` + `useEffect` for image slider index cycling
   - Split grid layout (left content, right glass card)
   - Animated stat counters
   - Pill-style highlights
   - Enhanced CTA buttons with hover glow
3. **Add CSS** in `src/index.css` for crossfade transitions, glassmorphism, grid pattern overlay, and glow effects

### Files Modified
- `src/components/Hero.tsx` — Full rewrite
- `src/index.css` — Add new utility classes
- 4 new AI-generated background images

