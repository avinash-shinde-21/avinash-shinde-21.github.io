import React from 'react';
import personal from '@/data/personal.json';
import HeroAnimation from '@/components/animations/HeroAnimation';

export default function Hero() {
    const [firstName, lastName] = personal.fullName.split(' ');

    return (
        <HeroAnimation>
            <section
                id="hero"
                className="section-padding container"
                style={{
                    position: 'relative',
                    minHeight: '120svh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'var(--gradient-hero-bg)',
                    overflow: 'hidden',
                }}
            >
                {/* Dynamic Background Accents */}
                <div aria-hidden style={{
                    position: 'absolute',
                    top: '5%',
                    right: '5%',
                    width: '50vw',
                    height: '50vw',
                    background: 'radial-gradient(circle, rgba(212,201,219,0.15) 0%, transparent 60%)',
                    filter: 'blur(80px)',
                    zIndex: 0,
                }} />

                <div style={{
                    position: 'relative',
                    zIndex: 2,
                    textAlign: 'center',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingBottom: '5rem',
                }}>
                    {/* Availability label */}
                    <p className="heading-label">
                        {personal.availability} · GLOBAL
                    </p>

                    {/* Desktop Magnetic Character Splitting */}
                    <div
                        data-animate="hero-title-container"
                        className="desktop-only"
                        style={{
                            flexDirection: 'column',
                            alignItems: 'center',
                            lineHeight: 0.9,
                            marginBottom: 'var(--space-l)',
                            width: '100%',
                        }}
                    >
                        <h1
                            data-animate="hero-firstname"
                            style={{
                                fontFamily: 'var(--font-display)',
                                fontWeight: 800,
                                fontSize: 'var(--text-hero)',
                                letterSpacing: '-0.04em',
                                color: 'var(--color-dark)',
                                textTransform: 'uppercase',
                                whiteSpace: 'nowrap',
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            {firstName.split('').map((char, index) => (
                                <span
                                    key={`first-${index}`}
                                    data-hero-letter
                                    style={{ display: 'inline-block', transformOrigin: 'center center' }}
                                >
                                    {char}
                                </span>
                            ))}
                        </h1>
                        <h1
                            data-animate="hero-lastname"
                            style={{
                                fontFamily: 'var(--font-display)',
                                fontWeight: 800,
                                fontSize: 'var(--text-hero)',
                                letterSpacing: '-0.04em',
                                color: 'transparent',
                                WebkitTextStroke: '2px var(--color-dark)',
                                textTransform: 'uppercase',
                                marginTop: '-1rem',
                                whiteSpace: 'nowrap',
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            {lastName.split('').map((char, index) => (
                                <span
                                    key={`last-${index}`}
                                    data-hero-letter
                                    style={{ display: 'inline-block', transformOrigin: 'center center' }}
                                >
                                    {char}
                                </span>
                            ))}
                        </h1>
                    </div>

                    {/* Mobile Simplified Text */}
                    <div
                        className="mobile-only"
                        style={{
                            flexDirection: 'column',
                            alignItems: 'center',
                            lineHeight: 0.9,
                            marginBottom: 'var(--space-l)',
                            width: '100%',
                        }}
                    >
                        <h1
                            style={{
                                fontFamily: 'var(--font-display)',
                                fontWeight: 800,
                                fontSize: 'clamp(1.5rem, 12vw, 4rem)',
                                letterSpacing: '-0.02em',
                                color: 'var(--color-dark)',
                                textTransform: 'uppercase',
                                width: '100%',
                                textAlign: 'center',
                                margin: 0
                            }}
                        >
                            {firstName}
                        </h1>
                        <h1
                            style={{
                                fontFamily: 'var(--font-display)',
                                fontWeight: 800,
                                fontSize: 'clamp(1.5rem, 12vw, 4rem)',
                                letterSpacing: '-0.02em',
                                color: 'var(--color-pearl)',
                                WebkitTextStroke: '1px var(--color-dark)',
                                textTransform: 'uppercase',
                                marginTop: '-0.2rem',
                                width: '100%',
                                textAlign: 'center',
                                margin: 0
                            }}
                        >
                            {lastName}
                        </h1>
                    </div>

                    {/* Tagline & Roles */}
                    <div data-animate="hero-sub" style={{ opacity: 0, maxWidth: '800px', padding: '0 2vw' }} className="hero-sub-mobile-pad">
                        <p style={{
                            fontFamily: 'var(--font-serif)',
                            fontStyle: 'italic',
                            fontSize: 'var(--text-xl)',
                            color: 'var(--color-dark)',
                            lineHeight: 1.2,
                            marginBottom: 'var(--space-m)',
                        }}>
                            {personal.tagline}
                        </p>

                        <div style={{
                            display: 'flex',
                            gap: '1rem',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                        }}>
                            {personal.heroWords.map((w) => (
                                <span key={w} style={{
                                    fontFamily: 'var(--font-display)',
                                    fontWeight: 600,
                                    fontSize: '0.7rem',
                                    letterSpacing: '0.15em',
                                    textTransform: 'uppercase',
                                    padding: '0.6rem 1.5rem',
                                    border: '1px solid var(--color-warm-gray)',
                                    borderRadius: '100px',
                                    color: 'var(--color-dark)',
                                    background: 'rgba(255,255,255,0.2)',
                                    backdropFilter: 'blur(10px)',
                                }}>
                                    {w}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div style={{
                    position: 'absolute',
                    bottom: '1.5rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.75rem',
                    zIndex: 2,
                }}>
                    <span style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 600,
                        fontSize: '0.7rem',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'var(--color-mid-gray)',
                    }}>Explore</span>
                    <div
                        data-animate="hero-scrollline"
                        className="scroll-line"
                        style={{ height: '80px', background: 'var(--color-dark)' }}
                    />
                </div>
            </section>
        </HeroAnimation>
    );
}
