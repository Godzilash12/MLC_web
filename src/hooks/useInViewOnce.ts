import { useEffect, useRef, useState } from "react";

export function useInViewOnce<T extends HTMLElement>({
  root = null,
  rootMargin = "0px",
  threshold = 0.35
}: IntersectionObserverInit = {}) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || inView || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [inView, root, rootMargin, threshold]);

  return { ref, inView };
}
