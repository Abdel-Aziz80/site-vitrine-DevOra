"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export function GsapAnimations() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      document.documentElement.classList.add("motion-reduced");
      return;
    }

    const context = gsap.context(() => {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            gsap.fromTo(
              entry.target,
              { y: 28 },
              {
                y: 0,
                duration: 0.85,
                ease: "power3.out",
              },
            );
            revealObserver.unobserve(entry.target);
          });
        },
        { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
      );

      const projectObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            gsap.fromTo(
              entry.target,
              { y: 34, scale: 0.985 },
              {
                y: 0,
                scale: 1,
                duration: 0.85,
                ease: "power3.out",
              },
            );
            projectObserver.unobserve(entry.target);
          });
        },
        { threshold: 0.16, rootMargin: "0px 0px -6% 0px" },
      );

      document.querySelectorAll("[data-reveal]").forEach((element) => revealObserver.observe(element));
      document.querySelectorAll("[data-project-card]").forEach((element) => projectObserver.observe(element));

      gsap.to("[data-float]", {
        y: -14,
        duration: 3.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.18,
      });

      gsap.to("[data-pulse-line]", {
        scaleX: 1,
        transformOrigin: "left center",
        duration: 1.25,
        repeat: -1,
        repeatDelay: 1.4,
        ease: "power2.inOut",
      });

      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((button) => {
        const onMove = (event: MouseEvent) => {
          const rect = button.getBoundingClientRect();
          const x = event.clientX - rect.left - rect.width / 2;
          const y = event.clientY - rect.top - rect.height / 2;
          gsap.to(button, { x: x * 0.08, y: y * 0.16, duration: 0.35, ease: "power3.out" });
        };
        const onLeave = () => gsap.to(button, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.45)" });

        button.addEventListener("mousemove", onMove);
        button.addEventListener("mouseleave", onLeave);
      });

      return () => {
        revealObserver.disconnect();
        projectObserver.disconnect();
      };
    });

    return () => context.revert();
  }, []);

  return null;
}
