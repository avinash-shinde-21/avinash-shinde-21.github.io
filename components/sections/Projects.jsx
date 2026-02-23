'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import projects from '@/data/projects.json';
import ProjectsAnimation from '@/components/animations/ProjectsAnimation';

function ProjectCard({ project, index }) {
    return (
        <div
            style={{
                minWidth: 'clamp(320px, 70vw, 700px)',
                height: '75vh',
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative',
                flexShrink: 0,
                background: project.color,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '4rem 3rem',
                cursor: 'none',
            }}
            data-cursor="pointer"
        >
            {/* Chrome shimmer */}
            <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%, rgba(255,255,255,0.05) 100%)',
                pointerEvents: 'none', zIndex: 10,
            }} />

            {/* Image */}
            {project.image && (
                <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: '25%',
                    overflow: 'hidden', zIndex: 0,
                }}>
                    <Image
                        src={project.image} alt={project.title} fill
                        style={{ objectFit: 'cover', objectPosition: 'top' }}
                        sizes="800px"
                    />
                    <div style={{
                        position: 'absolute', inset: 0,
                        background: `linear-gradient(to bottom, transparent 10%, ${project.color} 95%)`
                    }} />
                </div>
            )}

            {/* Index number */}
            <span style={{
                position: 'absolute', top: '2.5rem', right: '2.5rem',
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: 1,
                color: 'rgba(26,23,20,0.07)', letterSpacing: '-0.04em', userSelect: 'none',
            }}>
                {String(index + 1).padStart(2, '0')}
            </span>

            {/* Year + Tags */}
            <div style={{
                position: 'absolute', top: '2.5rem', left: '2.5rem',
                display: 'flex', gap: '0.5rem', alignItems: 'center', zIndex: 2,
            }}>
                <span style={{
                    fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 600,
                    letterSpacing: '0.12em', textTransform: 'uppercase', color: project.accent,
                    background: `${project.accent}18`, padding: '0.25rem 0.75rem',
                    borderRadius: '100px', border: `1px solid ${project.accent}30`,
                }}>{project.year}</span>
                {project.tags.map((t) => (
                    <span key={t} style={{
                        fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 500,
                        letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-dark)',
                        padding: '0.25rem 0.65rem', borderRadius: '100px',
                        border: '1px solid rgba(0,0,0,0.1)', background: 'rgba(255,255,255,0.9)',
                        backdropFilter: 'blur(8px)', boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    }}>{t}</span>
                ))}
            </div>

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 2 }}>
                <h3 style={{
                    fontFamily: 'var(--font-display)', fontWeight: 800,
                    fontSize: 'clamp(2.5rem, 5vw, 5rem)', letterSpacing: '-0.05em',
                    lineHeight: 1, color: 'var(--color-dark)', marginBottom: '1rem',
                }}>{project.title}</h3>
                <p style={{
                    fontFamily: 'var(--font-body)', fontWeight: 300,
                    fontSize: 'var(--text-m)', color: project.accent, marginBottom: '0.5rem',
                }}>{project.tagline}</p>
                <p style={{
                    fontFamily: 'var(--font-body)', fontWeight: 300,
                    fontSize: 'var(--text-s)', color: 'var(--color-mid-gray)',
                    maxWidth: '480px', lineHeight: 1.6,
                }}>{project.description}</p>
            </div>

            {/* Link */}
            <a href={project.link} data-cursor="pointer" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                marginTop: '1.5rem', fontFamily: 'var(--font-display)', fontWeight: 600,
                fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase',
                color: 'var(--color-dark)', borderBottom: '1px solid var(--color-dark)',
                paddingBottom: '2px',
            }}>
                View Project <span>→</span>
            </a>
        </div>
    );
}

function MobileLayout() {
    return (
        <section id="projects" style={{ background: 'var(--color-pearl)' }}>
            <div style={{ padding: '4rem 1.5rem 2rem' }}>
                <p className="heading-label">03 / Work</p>
                <h2 className="heading-title" style={{ marginBottom: '2rem' }}>
                    Selected<br />
                    <span style={{ color: 'var(--color-warm-gray)' }}>Projects.</span>
                </h2>
            </div>
            <div style={{ padding: '0 1.5rem 5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {projects.map((p) => (
                    <div key={p.id} style={{
                        width: '100%', minHeight: '60vh', borderRadius: '16px',
                        background: p.color, padding: '3rem 2rem',
                        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                        position: 'relative', overflow: 'hidden',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                    }}>
                        {p.image && (
                            <div style={{
                                position: 'absolute', top: 0, left: 0, right: 0, bottom: '30%',
                                overflow: 'hidden', zIndex: 0,
                            }}>
                                <Image src={p.image} alt={p.title} fill
                                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                                    sizes="100vw"
                                />
                                <div style={{
                                    position: 'absolute', inset: 0,
                                    background: `linear-gradient(to bottom, transparent 10%, ${p.color} 95%)`
                                }} />
                            </div>
                        )}
                        <div style={{
                            position: 'absolute', top: '1.5rem', left: '1.5rem',
                            display: 'flex', gap: '0.4rem', flexWrap: 'wrap',
                            maxWidth: 'calc(100% - 3rem)', zIndex: 2,
                        }}>
                            <span style={{
                                fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.55rem',
                                letterSpacing: '0.12em', textTransform: 'uppercase',
                                color: 'var(--color-dark)', background: '#fff',
                                padding: '0.15rem 0.5rem', borderRadius: '100px',
                                border: '1px solid rgba(0,0,0,0.1)', boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                            }}>{p.year}</span>
                            {p.tags.map((t) => (
                                <span key={t} style={{
                                    fontFamily: 'var(--font-display)', fontSize: '0.5rem', fontWeight: 500,
                                    letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-dark)',
                                    padding: '0.15rem 0.4rem', borderRadius: '100px',
                                    border: '1px solid rgba(0,0,0,0.1)', background: 'rgba(255,255,255,0.9)',
                                    backdropFilter: 'blur(8px)', boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                                }}>{t}</span>
                            ))}
                        </div>
                        <div style={{ position: 'relative', zIndex: 2 }}>
                            <h3 style={{
                                fontFamily: 'var(--font-display)', fontWeight: 800,
                                fontSize: 'clamp(1.75rem, 8vw, 3rem)', letterSpacing: '-0.04em',
                                lineHeight: 1, color: 'var(--color-dark)', marginBottom: '0.6rem',
                            }}>{p.title}</h3>
                            <p style={{
                                fontFamily: 'var(--font-body)', fontSize: '0.8rem',
                                color: p.accent, lineHeight: 1.4,
                            }}>{p.tagline}</p>
                            <a href={p.link} target="_blank" rel="noreferrer" style={{
                                display: 'inline-flex', alignItems: 'center',
                                marginTop: '1.25rem', padding: '0.6rem 1.25rem',
                                background: 'var(--color-dark)', color: 'var(--color-pearl)',
                                borderRadius: '100px', fontFamily: 'var(--font-display)',
                                fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.05em',
                                textTransform: 'uppercase', textDecoration: 'none', width: 'fit-content',
                            }}>View Project</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function DesktopLayout() {
    return (
        <ProjectsAnimation>
            <section
                id="projects"
                style={{
                    background: 'var(--color-pearl)',
                    position: 'relative',
                    // NO overflow:hidden here — GSAP pin needs to inject a spacer div
                    // The clipping is handled by the inner 100vh container
                }}
            >
                {/*
                    This inner container is 100vh and clips overflowing cards visually.
                    IMPORTANT: overflow:hidden here is fine because GSAP pins the
                    outer <section>, not this div. The track's scrollWidth is still
                    measurable because it's a child — overflow:hidden only affects
                    visual clipping, not layout measurement of children.
                */}
                <div style={{
                    height: '100vh',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                }}>
                    {/* Heading — stays fixed while track scrolls over it */}
                    <div style={{
                        position: 'absolute', left: 0, top: '50%',
                        transform: 'translateY(-50%)',
                        padding: '0 5rem',
                        zIndex: 1,
                        pointerEvents: 'none',
                    }}>
                        <p className="heading-label">03 / Work</p>
                        <h2 className="heading-title" style={{ marginBottom: '2rem' }}>
                            Selected<br />
                            <span style={{ color: 'var(--color-warm-gray)' }}>Projects.</span>
                        </h2>
                        <p className="heading-subtitle" style={{ maxWidth: '260px' }}>
                            A selection of recent work spanning interactive experiences,
                            platforms, and design systems.
                        </p>
                    </div>

                    {/*
                        The track:
                        - paddingLeft: 65vw pushes cards to start just right of the heading
                        - GSAP translates this element on the X axis as user scrolls
                        - Must NOT have overflow:hidden so scrollWidth measures all cards
                    */}
                    <div
                        data-animate="projects-track"
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '4rem',
                            paddingLeft: '65vw',
                            paddingRight: '15vw',
                            alignItems: 'center',
                            willChange: 'transform',
                            flexShrink: 0,
                            zIndex: 2,
                            position: 'relative',
                        }}
                    >
                        {projects.map((project, i) => (
                            <ProjectCard key={project.id} project={project} index={i} />
                        ))}
                    </div>
                </div>
            </section>
        </ProjectsAnimation>
    );
}

export default function Projects() {
    const [isMobile, setIsMobile] = useState(null);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    if (isMobile === null) return null;
    return isMobile ? <MobileLayout /> : <DesktopLayout />;
}