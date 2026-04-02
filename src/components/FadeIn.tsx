"use client";

import { useEffect, useRef, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function FadeIn({ children, className = "", delay = 0 }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasHydrated, setHasHydrated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Mark as hydrated on mount
  useEffect(() => {
    setHasHydrated(true);
  }, []);

  useEffect(() => {
    if (!hasHydrated) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 100);
          observer.unobserve(el);
        }
      },
      { threshold: 0, rootMargin: "0px 0px 100px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasHydrated, delay]);

  // Before hydration: show content normally (SSR/SSG)
  // After hydration but not yet visible: hide for animation
  // After visible: show with animation
  const style = !hasHydrated
    ? {} // SSR: no inline style, content visible by default
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${delay * 0.1}s, transform 0.6s ease ${delay * 0.1}s`,
      };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
