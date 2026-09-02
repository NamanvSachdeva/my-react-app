import { useEffect, useRef, useState } from "react";

export default function useInView() {
  const ref = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          observer.unobserve(element); // we want the animation to happen once

        }
      },
      {
        threshold: 0.3, // it says approx start when the 30%of the element is visible 
      }
    );

    observer.observe(element); // removing the observers
    return () => {
      observer.disconnect();
    };
  }, []);

  return [ref, isVisible];
}