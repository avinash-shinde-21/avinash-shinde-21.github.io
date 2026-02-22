'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroAnimation({ children }) {
    const wrapperRef = useRef(null);

    useEffect(() => {
        // Only run on desktop speeds based on window width after hydration matches CSS
        const isMobile = window.innerWidth < 768;

        const ctx = gsap.context(() => {
            // Intro sequence targeting data attributes that act as refs for children
            const firstNameEl = document.querySelector('[data-animate="hero-firstname"]');
            const lastNameEl = document.querySelector('[data-animate="hero-lastname"]');
            const subEl = document.querySelector('[data-animate="hero-sub"]');
            const scrollLineEl = document.querySelector('[data-animate="hero-scrollline"]');

            const tl = gsap.timeline({ delay: 0.4 });

            if (firstNameEl) {
                tl.fromTo(firstNameEl,
                    { y: 150, opacity: 0, scale: 0.8 },
                    { y: 0, opacity: 1, scale: 1, duration: 1.4, ease: 'expo.out' }
                );
            }

            if (lastNameEl) {
                tl.fromTo(lastNameEl,
                    { y: 150, opacity: 0, scale: 0.8 },
                    { y: 0, opacity: 1, scale: 1, duration: 1.4, ease: 'expo.out' },
                    "-=1.1"
                );
            }

            if (subEl) {
                gsap.fromTo(subEl,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 1.2 }
                );
            }

            if (scrollLineEl) {
                gsap.fromTo(scrollLineEl,
                    { scaleY: 0, opacity: 0 },
                    { scaleY: 1, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 1.8, transformOrigin: 'top' }
                );
            }

            // Scroll opacity effect
            const titleContainerEl = document.querySelector('[data-animate="hero-title-container"]');
            ScrollTrigger.create({
                trigger: wrapperRef.current,
                start: 'top top',
                end: 'bottom top',
                onUpdate: (self) => {
                    if (titleContainerEl) {
                        titleContainerEl.style.opacity = 1 - (self.progress * 1.5);
                    }
                },
            });

        }, wrapperRef);

        // Magnetic Globe Interaction Logic - Desktop Only
        if (!isMobile) {
            const handleMouseMove = (e) => {
                const { clientX, clientY } = e;
                const triggerDistance = 250;

                const letterEls = document.querySelectorAll('[data-hero-letter]');

                letterEls.forEach((letter) => {
                    if (!letter) return;
                    const rect = letter.getBoundingClientRect();
                    const letterCenterX = rect.left + rect.width / 2;
                    const letterCenterY = rect.top + rect.height / 2;

                    const distX = clientX - letterCenterX;
                    const distY = clientY - letterCenterY;
                    const distance = Math.sqrt(distX * distX + distY * distY);

                    if (distance < triggerDistance) {
                        const intensity = 1 - (distance / triggerDistance);
                        const scale = 1 + (intensity * 0.4);
                        const moveX = -(distX * 0.1 * intensity);
                        const moveY = -(distY * 0.2 * intensity);

                        gsap.to(letter, {
                            scale: scale,
                            x: moveX,
                            y: moveY,
                            color: 'var(--color-dark)',
                            WebkitTextStroke: '0px',
                            duration: 0.2,
                            ease: 'power2.out',
                            overwrite: 'auto'
                        });
                    } else {
                        gsap.to(letter, {
                            scale: 1,
                            x: 0,
                            y: 0,
                            color: '',
                            WebkitTextStroke: '',
                            duration: 0.6,
                            ease: 'elastic.out(1, 0.3)',
                            overwrite: 'auto'
                        });
                    }
                });
            };

            window.addEventListener('mousemove', handleMouseMove);

            return () => {
                ctx.revert();
                window.removeEventListener('mousemove', handleMouseMove);
            };
        } else {
            return () => ctx.revert();
        }
    }, []);

    return <div ref={wrapperRef} style={{ display: 'contents' }}>{children}</div>;
}
