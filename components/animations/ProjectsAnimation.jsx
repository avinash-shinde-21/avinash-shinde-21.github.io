'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsAnimation({ children }) {
    const containerRef = useRef(null);

    useEffect(() => {
        const isMobile = window.innerWidth < 768;
        if (isMobile) return;

        const ctx = gsap.context(() => {
            const track = document.querySelector('[data-animate="projects-track"]');
            if (!track) return;

            const totalWidth = track.scrollWidth - window.innerWidth;

            gsap.to(track, {
                x: -totalWidth,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: `+=${totalWidth + window.innerWidth * 0.5}`,
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1,
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return <div ref={containerRef} style={{ display: 'contents' }}>{children}</div>;
}
