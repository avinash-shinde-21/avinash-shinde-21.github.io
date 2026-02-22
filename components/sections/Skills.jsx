import skills from '@/data/skills.json';
import SkillsAnimation from '@/components/animations/SkillsAnimation';

const allSkills = skills.flatMap((g) => g.items);

export default function Skills() {
    const chunkSize = Math.ceil(allSkills.length / 4);
    const row1 = allSkills.slice(0, chunkSize);
    const row2 = allSkills.slice(chunkSize, chunkSize * 2);
    const row3 = allSkills.slice(chunkSize * 2, chunkSize * 3);
    const row4 = allSkills.slice(chunkSize * 3);

    return (
        <SkillsAnimation>
            <section
                id="skills"
                className="section-padding container"
                style={{
                    background: 'var(--color-pearl)',
                    minHeight: '120vh',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', marginBottom: '8rem', padding: '0 2vw' }}>
                    <p className="heading-label">02 / The Tech Stack</p>
                    <h2 className="heading-title" style={{ textTransform: 'uppercase' }}>
                        The Art of<br />
                        <span className="chrome-text">Crafting.</span>
                    </h2>

                    {/* Only show interaction hint on desktop where physics are active */}
                    <p className="desktop-only" style={{
                        marginTop: '2rem',
                        fontSize: 'var(--text-s)',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--color-dark)',
                        opacity: 0.6,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem'
                    }}>
                        <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-dark)', opacity: 0.4 }} />
                        Click and drag to play
                    </p>
                </div>

                {/* Mobile Slow Kinetic Marquee Layout */}
                <div className="mobile-only" style={{ position: 'relative', zIndex: 10, width: '100vw', left: 'calc(-50vw + 50%)', overflow: 'hidden', padding: '2rem 0', flexDirection: 'column', gap: '1.5rem' }}>
                    {/* Row 1 - Left */}
                    <div style={{ display: 'flex', whiteSpace: 'nowrap', animation: 'mobileMarqueeLeft 35s linear infinite', width: 'max-content' }}>
                        {[...Array(3)].map((_, i) => (
                            <div key={i} style={{ display: 'flex', gap: '1.5rem', paddingRight: '1.5rem' }}>
                                {row1.map(s => (
                                    <span key={s.name} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem, 6vw, 2rem)', fontWeight: 800, color: 'var(--color-dark)', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                        {s.name} <span style={{ color: 'var(--color-warm-gray)', fontSize: '0.4em' }}>✦</span>
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Row 2 - Right */}
                    <div style={{ display: 'flex', whiteSpace: 'nowrap', animation: 'mobileMarqueeRight 40s linear infinite', width: 'max-content' }}>
                        {[...Array(3)].map((_, i) => (
                            <div key={i} style={{ display: 'flex', gap: '1.5rem', paddingRight: '1.5rem' }}>
                                {row2.map(s => (
                                    <span key={s.name} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem, 6vw, 2rem)', fontWeight: 800, color: 'transparent', WebkitTextStroke: '1px var(--color-dark)', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                        {s.name} <span style={{ color: 'var(--color-warm-gray)', WebkitTextStroke: '0', fontSize: '0.4em' }}>✦</span>
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Row 3 - Left */}
                    <div style={{ display: 'flex', whiteSpace: 'nowrap', animation: 'mobileMarqueeLeft 30s linear infinite', width: 'max-content' }}>
                        {[...Array(3)].map((_, i) => (
                            <div key={i} style={{ display: 'flex', gap: '1.5rem', paddingRight: '1.5rem' }}>
                                {row3.map(s => (
                                    <span key={s.name} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem, 6vw, 2rem)', fontWeight: 800, color: 'var(--color-dark)', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                        {s.name} <span style={{ color: 'var(--color-warm-gray)', fontSize: '0.4em' }}>✦</span>
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Row 4 - Right */}
                    <div style={{ display: 'flex', whiteSpace: 'nowrap', animation: 'mobileMarqueeRight 45s linear infinite', width: 'max-content' }}>
                        {[...Array(3)].map((_, i) => (
                            <div key={i} style={{ display: 'flex', gap: '1.5rem', paddingRight: '1.5rem' }}>
                                {row4.map(s => (
                                    <span key={s.name} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem, 6vw, 2rem)', fontWeight: 800, color: 'transparent', WebkitTextStroke: '1px var(--color-dark)', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                        {s.name} <span style={{ color: 'var(--color-warm-gray)', WebkitTextStroke: '0', fontSize: '0.4em' }}>✦</span>
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>

                    <style>{`
                        @keyframes mobileMarqueeLeft {
                            from { transform: translateX(0); }
                            to { transform: translateX(-33.333%); }
                        }
                        @keyframes mobileMarqueeRight {
                            from { transform: translateX(-33.333%); }
                            to { transform: translateX(0); }
                        }
                    `}</style>
                </div>


                {/* Desktop Interactive Physics Playground */}
                <div
                    data-animate="skills-scene"
                    className="desktop-only"
                    style={{
                        width: '100vw',
                        maxWidth: '100%',
                        height: '600px',
                        margin: '0 auto',
                        position: 'relative',
                        zIndex: 10,
                        overflow: 'hidden',
                        cursor: 'grab',
                    }}
                >
                    {allSkills.map((skill, i) => (
                        <div
                            key={skill.name}
                            data-animate="skills-pill"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                transformOrigin: 'center center',
                                pointerEvents: 'none',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    padding: '1rem 2rem',
                                    background: 'rgba(255, 255, 255, 0.4)',
                                    backdropFilter: 'blur(24px)',
                                    WebkitBackdropFilter: 'blur(24px)',
                                    border: '1px solid rgba(255, 255, 255, 0.6)',
                                    borderRadius: '100px',
                                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)',
                                    color: 'var(--color-dark)',
                                    fontFamily: 'var(--font-display)',
                                    fontWeight: 700,
                                    fontSize: 'clamp(1rem, 1.5vw, 1.5rem)',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                <span
                                    className="skill-icon"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '2.5rem',
                                        height: '2.5rem',
                                        borderRadius: '50%',
                                        background: 'rgba(0,0,0,0.05)',
                                        fontSize: '1rem',
                                        fontFamily: 'sans-serif',
                                    }}
                                >
                                    {skill.icon}
                                </span>
                                {skill.name}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Liquid Background Blobs */}
                <div
                    data-animate="skills-blob1"
                    style={{
                        position: 'absolute',
                        top: '20%',
                        left: '10%',
                        width: '40vw',
                        height: '40vw',
                        background: 'var(--gradient-chrome)',
                        filter: 'blur(100px)',
                        opacity: 0.15,
                        borderRadius: '50%',
                        pointerEvents: 'none',
                        zIndex: 0,
                    }}
                />
                <div
                    data-animate="skills-blob2"
                    style={{
                        position: 'absolute',
                        bottom: '10%',
                        right: '5%',
                        width: '35vw',
                        height: '35vw',
                        background: 'var(--gradient-chrome)',
                        filter: 'blur(90px)',
                        opacity: 0.12,
                        borderRadius: '50%',
                        pointerEvents: 'none',
                        zIndex: 0,
                    }}
                />
            </section>
        </SkillsAnimation>
    );
}
