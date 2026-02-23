'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsAnimation({ children }) {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const track = section.querySelector('[data-animate="projects-track"]');
        if (!track) return;

        let scrollTriggerInstance;

        const timer = setTimeout(() => {
            const scrollDistance = track.scrollWidth - window.innerWidth;
            if (scrollDistance <= 0) return;

            gsap.to(track, {
                x: -scrollDistance,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: `+=${scrollDistance}`,
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    onEnter: (self) => { scrollTriggerInstance = self; },
                },
            });
        }, 100);

        return () => {
            clearTimeout(timer);
            scrollTriggerInstance?.kill();
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, []);

    return (
        <div ref={sectionRef}>
            {children}
        </div>
    );
}