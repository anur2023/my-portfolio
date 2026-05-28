import { useEffect, useRef, useState } from "react";

/** Scroll-triggered fade/slide-in for section content */
export function SectionReveal({ id, className = "", children }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setActive(true);
      },
      { threshold: 0.06, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={`${className} section section-reveal ${active ? "section-reveal--active" : ""}`}
    >
      {children}
    </section>
  );
}
