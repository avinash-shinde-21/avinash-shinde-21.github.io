import personal from '@/data/personal.json';
import AboutAnimation from '@/components/animations/AboutAnimation';

const marqueeText = '✦ Available for Freelance  ✦ Open to Work  ✦ Creative Developer  ✦ Global / Remote  ✦ Let\'s Collaborate  ';

// Shared component to avoid duplicated code
const AboutContent = ({ isMobile }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '4rem' : '6rem',
            alignItems: 'center',
            width: '100%'
        }}>
            {/* Left: Glass Card */}
            <div
                data-animate="about-card"
                style={{
                    flex: isMobile ? 'none' : '1.2',
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.4)',
                    backdropFilter: 'blur(30px)',
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                    borderRadius: '32px',
                    padding: isMobile ? '3rem' : '4rem',
                    boxShadow: '0 40px 100px rgba(0,0,0,0.03)',
                    position: 'relative',
                    zIndex: 10,
                }}
            >
                {/* Overlapping Number */}
                <div
                    data-animate="about-number"
                    style={{
                        position: 'absolute',
                        top: '-2.5rem',
                        left: isMobile ? '1rem' : '3rem',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 800,
                        fontSize: '10rem',
                        letterSpacing: '-0.08em',
                        color: 'var(--color-dark)',
                        lineHeight: 1,
                        textShadow: '0 10px 30px rgba(0,0,0,0.03)',
                    }}
                >
                    1
                </div>

                <div style={{ marginTop: '5rem' }}>
                    <h2 className="heading-title" style={{ marginBottom: 'var(--space-m)' }}>
                        Year of Focused <br />
                        <span className="chrome-text">Mastery.</span>
                    </h2>

                    <p className="heading-subtitle" style={{ marginBottom: 'var(--space-m)' }}>
                        {personal.bio}
                    </p>

                    {/* Stats Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '2.5rem',
                        borderTop: '1px solid rgba(26,23,20,0.1)',
                        paddingTop: '2.5rem'
                    }}>
                        {[
                            { label: 'Built Projects', val: '03' },
                            { label: 'Live Internship', val: '01' },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <div style={{
                                    fontFamily: 'var(--font-display)',
                                    fontWeight: 800,
                                    fontSize: '2.8rem',
                                    color: 'var(--color-dark)',
                                    marginBottom: '0.2rem',
                                    letterSpacing: '-0.04em'
                                }}>{stat.val}</div>
                                <div style={{
                                    fontFamily: 'var(--font-display)',
                                    fontWeight: 600,
                                    fontSize: '0.65rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.12em',
                                    color: 'var(--color-mid-gray)'
                                }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right: Dynamic Image Sculpture (High Impact) */}
            <div
                data-animate="about-sculpture"
                style={{
                    flex: isMobile ? 'none' : '1',
                    width: '100%',
                    position: 'relative',
                    height: isMobile ? '350px' : '500px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: isMobile ? '2rem' : '0'
                }}
            >
                {/* Main Image Layer */}
                <div
                    className="sculpture-img"
                    style={{
                        width: '100%',
                        aspectRatio: '1',
                        background: 'var(--gradient-chrome)',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        position: 'absolute',
                        zIndex: 2,
                        boxShadow: '0 30px 80px rgba(0,0,0,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <span style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 900,
                        fontSize: '4rem',
                        color: 'rgba(255,255,255,0.2)',
                        textAlign: 'center',
                        lineHeight: 0.85
                    }}>CRAFT<br />PURE</span>
                </div>

                {/* Secondary Floating Layer */}
                <div
                    className="sculpture-img"
                    style={{
                        width: '85%',
                        aspectRatio: '1',
                        border: '1px solid var(--color-warm-gray)',
                        background: 'var(--color-pearl)',
                        borderRadius: '24px',
                        position: 'absolute',
                        top: '10%',
                        right: isMobile ? '0' : '-10%',
                        zIndex: 1,
                        opacity: 0.5,
                    }}
                />

                {/* Text Accent Layer */}
                <div
                    className="sculpture-img"
                    style={{
                        position: 'absolute',
                        left: isMobile ? '5%' : '-15%',
                        bottom: isMobile ? '0' : '5%',
                        zIndex: 3,
                    }}
                >
                    <p style={{
                        fontFamily: 'var(--font-serif)',
                        fontStyle: 'italic',
                        fontSize: '2.5rem',
                        color: 'var(--color-dark)',
                        textShadow: '0 5px 15px rgba(255,255,255,0.8)'
                    }}>
                        Beyond Code.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default function About() {
    return (
        <AboutAnimation>
            <section
                id="about"
                className="section-padding container"
                style={{
                    minHeight: '130vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'var(--color-pearl)',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Background Decorative Text */}
                <div
                    data-animate="about-bgtext"
                    style={{
                        position: 'absolute',
                        top: '15%',
                        left: '50%',
                        whiteSpace: 'nowrap',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 900,
                        fontSize: '25vw',
                        color: 'rgba(26,23,20,0.025)',
                        zIndex: 0,
                        pointerEvents: 'none',
                        lineHeight: 1,
                    }}
                >
                    ESTABLISHED 2026
                </div>

                <div style={{ width: '100%', maxWidth: '1300px', position: 'relative', zIndex: 1 }}>
                    <p className="heading-label" style={{ textAlign: 'center', marginBottom: 'var(--space-l)' }}>
                        01 / STORY
                    </p>

                    <div className="desktop-only" style={{ width: '100%' }}>
                        <AboutContent isMobile={false} />
                    </div>

                    <div className="mobile-only" style={{ width: '100%' }}>
                        <AboutContent isMobile={true} />
                    </div>
                </div>

                {/* Marquee */}
                <div style={{
                    position: 'absolute',
                    bottom: '4rem',
                    width: '100%',
                    borderTop: '1px solid rgba(26,23,20,0.05)',
                    borderBottom: '1px solid rgba(26,23,20,0.05)',
                    padding: '1.2rem 0',
                    background: 'rgba(255,255,255,0.25)',
                    backdropFilter: 'blur(12px)',
                }}>
                    <div style={{
                        display: 'flex',
                        animation: 'marquee 15s linear infinite',
                        whiteSpace: 'nowrap',
                    }}>
                        {[1, 2, 3, 4].map((i) => (
                            <span key={i} style={{
                                fontFamily: 'var(--font-display)',
                                fontWeight: 700,
                                fontSize: 'clamp(0.5rem, 2vw, 0.75rem)',
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                                color: 'var(--color-warm-gray)',
                                paddingRight: 'clamp(2rem, 5vw, 6rem)',
                            }}>
                                {marqueeText}
                            </span>
                        ))}
                    </div>
                </div>

                <style>{`
                    @keyframes marquee {
                        from { transform: translateX(0); }
                        to { transform: translateX(-25%); }
                    }
                `}</style>
            </section>
        </AboutAnimation>
    );
}
