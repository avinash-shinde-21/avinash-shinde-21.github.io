import experience from '@/data/experience.json';
import ExperienceAnimation from '@/components/animations/ExperienceAnimation';

// extracted into a pure component to reduce duplication of rendering dual timelines for mobile/desktop
const TimelineEntries = ({ isMobileStyles }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem', flex: 1 }}>
        {experience.map((exp, i) => (
            <div
                key={i}
                data-animate="experience-item"
                style={{ position: 'relative' }}
            >
                {/* Dot on timeline */}
                <div style={{
                    position: 'absolute',
                    left: isMobileStyles ? 'calc(-2rem - 4px)' : 'calc(-4rem - 4px)',
                    top: '0.8rem',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'var(--color-dark)',
                    border: '2px solid var(--color-pearl)',
                    boxShadow: '0 0 0 1px var(--color-dark)',
                }} />

                <div className="exp-company" style={{ overflow: 'hidden' }}>
                    <h3 style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 800,
                        fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
                        letterSpacing: '-0.04em',
                        lineHeight: 0.9,
                        color: 'var(--color-dark)',
                        marginBottom: '0.75rem',
                    }}>
                        {exp.company}
                    </h3>
                </div>

                <div className="exp-details">
                    <div style={{
                        display: 'flex',
                        gap: '1.5rem',
                        alignItems: 'center',
                        marginBottom: '0.8rem',
                        flexWrap: 'wrap',
                    }}>
                        <span style={{
                            fontFamily: 'var(--font-serif)',
                            fontStyle: 'italic',
                            fontSize: 'var(--text-m)',
                            color: 'var(--color-mid-gray)',
                        }}>
                            {exp.role}
                        </span>
                        <span style={{
                            fontFamily: 'var(--font-display)',
                            fontWeight: 500,
                            fontSize: 'var(--text-xs)',
                            letterSpacing: '0.08em',
                            color: 'var(--color-warm-gray)',
                            background: 'var(--color-cream)',
                            padding: '0.2rem 0.75rem',
                            borderRadius: '100px',
                        }}>
                            {exp.period}
                        </span>
                    </div>
                    <p className="heading-subtitle" style={{ maxWidth: '580px' }}>
                        {exp.description}
                    </p>
                </div>
            </div>
        ))}
    </div>
);

export default function Experience() {
    return (
        <ExperienceAnimation>
            <section
                id="experience"
                className="section-padding container"
                style={{
                    background: 'var(--color-pearl)',
                    minHeight: '120vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Background text watermark */}
                <div aria-hidden style={{
                    position: 'absolute',
                    top: '50%',
                    right: '-2rem',
                    transform: 'translateY(-50%) rotate(90deg)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: 'clamp(4rem, 10vw, 10rem)',
                    color: 'rgba(26,23,20,0.04)',
                    letterSpacing: '-0.04em',
                    whiteSpace: 'nowrap',
                    userSelect: 'none',
                    pointerEvents: 'none',
                }}>
                    EXPERIENCE
                </div>

                {/* DESKTOP LAYOUT */}
                <div className="desktop-only" style={{ padding: '0 3rem', maxWidth: '1100px', margin: '0 auto', flexDirection: 'column' }}>
                    <p className="heading-label">
                        04 / Experience
                    </p>

                    <h2 className="heading-title" style={{ marginBottom: 'var(--space-xl)' }}>
                        Where I've<br />
                        <span style={{ color: 'var(--color-warm-gray)' }}>Made Impact.</span>
                    </h2>

                    {/* Timeline */}
                    <div style={{ position: 'relative', display: 'flex', gap: '4rem', width: '100%' }}>
                        {/* Vertical accent line */}
                        <div style={{
                            position: 'relative',
                            width: '1px',
                            flexShrink: 0,
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '1px',
                                height: '100%',
                                background: 'var(--color-sand)',
                            }} />
                            <div
                                data-animate="experience-line"
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '1px',
                                    height: '100%',
                                    background: 'var(--color-dark)',
                                    transformOrigin: 'top',
                                }}
                            />
                        </div>

                        {/* Entries */}
                        <TimelineEntries isMobileStyles={false} />
                    </div>
                </div>


                {/* MOBILE LAYOUT */}
                <div className="mobile-only" style={{ padding: '0 1rem', maxWidth: '1100px', margin: '0 auto', flexDirection: 'column', width: '100%' }}>
                    <p className="heading-label">
                        04 / Experience
                    </p>

                    <h2 className="heading-title" style={{ marginBottom: 'var(--space-xl)' }}>
                        Where I've<br />
                        <span style={{ color: 'var(--color-warm-gray)' }}>Made Impact.</span>
                    </h2>

                    {/* Timeline */}
                    <div style={{ position: 'relative', display: 'flex', gap: '2rem', width: '100%' }}>
                        {/* Vertical accent line */}
                        <div style={{
                            position: 'relative',
                            width: '1px',
                            flexShrink: 0,
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '1px',
                                height: '100%',
                                background: 'var(--color-sand)',
                            }} />
                            <div
                                data-animate="experience-line"
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '1px',
                                    height: '100%',
                                    background: 'var(--color-dark)',
                                    transformOrigin: 'top',
                                }}
                            />
                        </div>

                        {/* Entries */}
                        <TimelineEntries isMobileStyles={true} />
                    </div>
                </div>

            </section>
        </ExperienceAnimation>
    );
}
