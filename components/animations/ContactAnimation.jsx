'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useMotionValue, useSpring } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export function MagneticLink({ children, href, style }) {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 200, damping: 20 });
    const springY = useSpring(y, { stiffness: 200, damping: 20 });

    const handleMouse = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        x.set((e.clientX - cx) * 0.4);
        y.set((e.clientY - cy) * 0.4);
    };
    const reset = () => { x.set(0); y.set(0); };

    return (
        <motion.a
            ref={ref}
            href={href}
            style={{ x: springX, y: springY, display: 'inline-block', ...style }}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            data-cursor="pointer"
        >
            {children}
        </motion.a>
    );
}

export default function ContactAnimation({ children }) {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (window.innerWidth < 768) return;

            const headingEl = document.querySelector('[data-animate="contact-heading"]');
            const subEl = document.querySelector('[data-animate="contact-sub"]');
            const emailEl = document.querySelector('[data-animate="contact-email"]');

            const chars = headingEl?.querySelectorAll('.cta-word');
            if (chars && chars.length > 0) {
                gsap.fromTo(chars,
                    { yPercent: 110, opacity: 0 },
                    {
                        yPercent: 0, opacity: 1,
                        duration: 1.1, ease: 'power4.out', stagger: 0.08,
                        scrollTrigger: { trigger: headingEl, start: 'top 95%' }
                    }
                );
            }
            if (subEl) {
                gsap.fromTo(subEl,
                    { opacity: 0, y: 24 },
                    {
                        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.3,
                        scrollTrigger: { trigger: subEl, start: 'top 95%' }
                    }
                );
            }
            if (emailEl) {
                gsap.fromTo(emailEl,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.5,
                        scrollTrigger: { trigger: emailEl, start: 'top 95%' }
                    }
                );
            }
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return <div ref={sectionRef} style={{ display: 'contents' }}>{children}</div>;
}
