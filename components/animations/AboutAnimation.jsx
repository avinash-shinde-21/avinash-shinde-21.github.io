'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutAnimation({ children }) {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Card floating entrance (targets both mobile/desktop cards)
            const cards = document.querySelectorAll('[data-animate="about-card"]');
            cards.forEach(card => {
                gsap.fromTo(card,
                    { y: 150, opacity: 0, rotateX: 20 },
                    {
                        y: 0, opacity: 1, rotateX: 0,
                        duration: 1.5,
                        ease: 'expo.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 90%',
                        }
                    }
                );
            });

            // Number count up
            const numbers = document.querySelectorAll('[data-animate="about-number"]');
            numbers.forEach(number => {
                gsap.fromTo({ val: 0 },
                    { val: 0 },
                    {
                        val: 1,
                        duration: 1.2,
                        ease: 'power2.out',
                        snap: { val: 1 },
                        scrollTrigger: { trigger: number, start: 'top 85%' },
                        onUpdate: function () {
                            if (number) number.textContent = Math.round(this.targets()[0].val) + '+';
                        }
                    }
                );
            });

            // Image Sculpture Parallax
            const sculptureNodes = document.querySelectorAll('[data-animate="about-sculpture"]');
            sculptureNodes.forEach(container => {
                const images = container.querySelectorAll('.sculpture-img');
                images.forEach((img, i) => {
                    gsap.to(img, {
                        y: (i + 1) * -40,
                        rotation: (i === 1 ? -3 : 3),
                        ease: 'none',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: i + 1,
                        }
                    });
                });
            });

            // BG Text drift
            const bgText = document.querySelector('[data-animate="about-bgtext"]');
            if (bgText) {
                gsap.to(bgText, {
                    x: -200,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 2,
                    }
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return <div ref={sectionRef} style={{ display: 'contents' }}>{children}</div>;
}
