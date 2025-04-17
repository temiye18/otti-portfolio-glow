
import { useEffect, useRef, useState } from 'react';

export const useRevealAnimation = (threshold = 0.1, rootMargin = '50px') => {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    
    // Enhanced intersection observer with better options
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only trigger animation if it hasn't been triggered yet
        if (entry.isIntersecting && !hasAnimated) {
          setIsInView(true);
          setHasAnimated(true);
          
          // Add a slight delay before unobserving to ensure animation completes
          setTimeout(() => {
            if (currentRef) {
              observer.unobserve(currentRef);
            }
          }, 1000);
        } else if (!entry.isIntersecting && !hasAnimated) {
          setIsInView(false);
        }
      },
      {
        threshold,
        rootMargin,
        // Add root: null to observe relative to viewport
        root: null,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, hasAnimated]);

  // Reset animation if needed (useful for route changes)
  const resetAnimation = () => {
    setIsInView(false);
    setHasAnimated(false);
  };

  return { ref, isInView, resetAnimation };
};
