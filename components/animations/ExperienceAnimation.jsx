'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceAnimation({ children }) {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (window.innerWidth < 768) return;

            // Both mobile and desktop lines exist in DOM, only one is visible. Animate all.
            const lineEls = document.querySelectorAll('[data-animate="experience-line"]');

            lineEls.forEach(lineEl => {
                gsap.fromTo(lineEl,
                    { scaleY: 0 },
                    {
                        scaleY: 1,
                        duration: 2,
                        ease: 'power3.inOut',
                        transformOrigin: 'top center',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top 70%',
                            end: 'bottom 80%',
                            scrub: 0.5,
                        },
                    }
                );
            });

            // Each experience item container
            const itemEls = document.querySelectorAll('[data-animate="experience-item"]');

            itemEls.forEach((el) => {
                const company = el.querySelector('.exp-company');
                const details = el.querySelector('.exp-details');

                if (company) {
                    gsap.fromTo(company,
                        { x: -60, opacity: 0 },
                        {
                            x: 0, opacity: 1,
                            duration: 1, ease: 'power3.out',
                            scrollTrigger: { trigger: el, start: 'top 95%' }
                        }
                    );
                }

                if (details) {
                    gsap.fromTo(details,
                        { opacity: 0, y: 20 },
                        {
                            opacity: 1, y: 0,
                            duration: 0.8, ease: 'power3.out',
                            delay: 0.2,
                            scrollTrigger: { trigger: el, start: 'top 95%' }
                        }
                    );
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return <div ref={sectionRef} style={{ display: 'contents' }}>{children}</div>;
}
