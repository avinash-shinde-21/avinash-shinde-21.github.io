'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Matter from 'matter-js';
import skills from '@/data/skills.json';

gsap.registerPlugin(ScrollTrigger);
const allSkills = skills.flatMap((g) => g.items);

export default function SkillsAnimation({ children }) {
    const sectionRef = useRef(null);
    const sceneRef = useRef(null);
    const engineRef = useRef(null);

    // Initial background Setup
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(sectionRef.current, {
                backgroundColor: '#F2EDE6',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: true,
                }
            });

            const blob1 = document.querySelector('[data-animate="skills-blob1"]');
            const blob2 = document.querySelector('[data-animate="skills-blob2"]');

            if (blob1 && blob2) {
                gsap.to([blob1, blob2], {
                    x: 'random(-100, 100)',
                    y: 'random(-100, 100)',
                    duration: 'random(10, 20)',
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                    stagger: 2,
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Matter.js Physics Logic
    useEffect(() => {
        const isMobile = window.innerWidth < 768;
        // The scene is only rendered via CSS on desktop, but we need the ref to be present
        const sceneEl = document.querySelector('[data-animate="skills-scene"]');
        if (isMobile || !sceneEl) return;

        sceneRef.current = sceneEl;

        const { Engine, Render, Runner, World, Bodies, Mouse, MouseConstraint, Composite, Events } = Matter;

        const engine = Engine.create();
        engineRef.current = engine;
        engine.world.gravity.y = 0;
        engine.world.gravity.x = 0;

        const width = sceneRef.current.clientWidth;
        const height = sceneRef.current.clientHeight;

        const wallOptions = {
            isStatic: true,
            render: { visible: false },
            restitution: 1
        };
        const ground = Bodies.rectangle(width / 2, height + 50, width * 2, 100, wallOptions);
        const leftWall = Bodies.rectangle(-50, height / 2, 100, height * 2, wallOptions);
        const rightWall = Bodies.rectangle(width + 50, height / 2, 100, height * 2, wallOptions);
        const ceiling = Bodies.rectangle(width / 2, -50, width * 2, 100, wallOptions);

        Composite.add(engine.world, [ground, leftWall, rightWall, ceiling]);

        const cols = 4;
        const spacingX = Math.min(250, width / cols);
        const spacingY = 100;
        const startX = (width - (spacingX * (cols - 1))) / 2;
        const startY = height / 2 - Math.floor(allSkills.length / cols) * spacingY / 2;

        const pillNodes = document.querySelectorAll('[data-animate="skills-pill"]');
        if (pillNodes.length === 0) return;

        const pillBodies = [];

        pillNodes.forEach((node, i) => {
            const col = i % cols;
            const row = Math.floor(i / cols);

            const x = startX + (col * spacingX);
            const y = startY + (row * spacingY);

            const body = Bodies.rectangle(x, y, 220, 64, {
                chamfer: { radius: 32 },
                restitution: 0.9,
                friction: 0.01,
                frictionAir: 0.005,
                density: 0.005,
                label: 'skillPill'
            });

            const driftX = (Math.random() - 0.5) * 0.01;
            const driftY = (Math.random() - 0.5) * 0.01;
            Matter.Body.applyForce(body, body.position, { x: driftX, y: driftY });
            Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.01);

            pillBodies.push(body);
        });

        Composite.add(engine.world, pillBodies);

        const mouse = Mouse.create(sceneRef.current);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: { visible: false }
            }
        });

        mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
        mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

        Composite.add(engine.world, mouseConstraint);

        Events.on(engine, 'afterUpdate', () => {
            pillBodies.forEach((body, i) => {
                const el = pillNodes[i];
                if (el) {
                    const { x, y } = body.position;
                    el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${body.angle}rad)`;
                }
            });
        });

        // Re-attach grabbed cursor logic using standard event listeners on the scene
        const handleMouseDown = () => { sceneRef.current.style.cursor = 'grabbing'; };
        const handleMouseUp = () => { sceneRef.current.style.cursor = 'grab'; };
        sceneRef.current.addEventListener('mousedown', handleMouseDown);
        sceneRef.current.addEventListener('mouseup', handleMouseUp);
        sceneRef.current.addEventListener('mouseleave', handleMouseUp);

        const runner = Runner.create();
        Runner.run(runner, engine);

        const handleResize = () => {
            if (!sceneRef.current) return;
            const newWidth = sceneRef.current.clientWidth;
            const newHeight = sceneRef.current.clientHeight;
            Matter.Body.setPosition(ground, { x: newWidth / 2, y: newHeight + 50 });
            Matter.Body.setPosition(rightWall, { x: newWidth + 50, y: newHeight / 2 });
            Matter.Body.setPosition(ceiling, { x: newWidth / 2, y: -50 });
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            Runner.stop(runner);
            Engine.clear(engine);
            mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
            mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

            if (sceneRef.current) {
                sceneRef.current.removeEventListener('mousedown', handleMouseDown);
                sceneRef.current.removeEventListener('mouseup', handleMouseUp);
                sceneRef.current.removeEventListener('mouseleave', handleMouseUp);
            }
        };
    }, []);

    return <div ref={sectionRef} style={{ display: 'contents' }}>{children}</div>;
}
