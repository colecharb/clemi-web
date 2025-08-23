import { useCallback, useEffect, useRef, useState } from 'react';

// Use relative path for Vite import.meta.glob
const frameImports = import.meta.glob('/src/assets/images/shadows/*.PNG', {
  eager: true,
});

const frames = Object.values(frameImports).map(
  (mod) => (mod as { default: string }).default,
);

const minFps = 0;
const maxFps = 12;
const fpsMultiplier = 400; // tweak this for sensitivity
const fpsDecayRate = 0.99; // how quickly FPS decays when not scrolling (0.95 = 5% decay per frame)
const scrollTimeout = 100; // ms after last scroll before decay starts

// type Props = {
//   minFps?: number; // fallback frame rate when not scrolling
// };

const useBackgroundAnimation = () => {
  const [index, setIndex] = useState(0);
  const frameRef = useRef(minFps);
  const requestRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  const lastScrollY = useRef(window.scrollY);
  const lastScrollTime = useRef(performance.now());
  const fpsRef = useRef(0);

  // --- Calculate FPS based on scroll velocity ---
  const handleScroll = () => {
    const now = performance.now();
    const dy = Math.abs(window.scrollY - lastScrollY.current);
    const dt = now - lastScrollTime.current;

    // pixels per ms
    const velocity = dy / dt;

    // Map velocity -> FPS, clamp between minFps and maxFps
    fpsRef.current = Math.min(
      maxFps,
      Math.max(minFps, velocity * fpsMultiplier),
    );

    lastScrollY.current = window.scrollY;
    lastScrollTime.current = now;
  };

  const animate = useCallback((time: number) => {
    if (lastTimeRef.current === null) {
      lastTimeRef.current = time;
    }

    // Apply FPS decay when not scrolling
    const timeSinceLastScroll = time - lastScrollTime.current;
    if (timeSinceLastScroll > scrollTimeout && fpsRef.current > minFps) {
      fpsRef.current *= fpsDecayRate;
      if (fpsRef.current < minFps) {
        fpsRef.current = minFps;
      }
    }

    const delta = time - lastTimeRef.current;
    const frameDuration = fpsRef.current > 0 ? 1000 / fpsRef.current : Infinity;

    // If enough time has passed, advance to next frame
    if (delta >= frameDuration) {
      frameRef.current = (frameRef.current + 1) % frames.length;
      setIndex(frameRef.current);
      lastTimeRef.current = time;
    }

    requestRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [animate]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [animate]);

  return { activeFrame: frames[index] };
};

export default useBackgroundAnimation;
