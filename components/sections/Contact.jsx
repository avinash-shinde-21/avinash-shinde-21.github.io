import contact from '@/data/contact.json';
import ContactAnimation, { MagneticLink } from '@/components/animations/ContactAnimation';

export default function Contact() {
    const words = contact.cta.split(' ');

    return (
        <ContactAnimation>
            <section
                id="contact"
                style={{
                    background: 'var(--color-dark)',
                    padding: 'var(--space-2xl) 3rem var(--space-l)',
                    position: 'relative',
                    overflow: 'hidden',
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                {/* Background chrome circle accent */}
                <div aria-hidden style={{
                    position: 'absolute',
                    bottom: '-10%',
                    right: '-5%',
                    width: 'clamp(200px, 40vw, 500px)',
                    height: 'clamp(200px, 40vw, 500px)',
                    borderRadius: '50%',
                    background: 'var(--gradient-chrome)',
                    opacity: 0.06,
                    filter: 'blur(60px)',
                    pointerEvents: 'none',
                }} />

                {/* Grain on dark bg */}
                <div aria-hidden style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.05\'/%3E%3C/svg%3E")',
                    opacity: 0.5,
                    pointerEvents: 'none',
                }} />

                <div style={{ maxWidth: '1200px', position: 'relative', zIndex: 2 }}>
                    <p className="heading-label">
                        06 / Contact
                    </p>

                    {/* Giant CTA */}
                    <div data-animate="contact-heading" style={{ marginBottom: '3rem' }}>
                        <h2 className="heading-title" style={{ color: 'var(--color-pearl)', maxWidth: '900px' }}>
                            {words.map((word, i) => (
                                <span key={i} style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.25em' }}>
                                    <span
                                        className="cta-word"
                                        style={{
                                            display: 'inline-block',
                                            color: i === words.length - 1 ? 'transparent' : 'var(--color-pearl)',
                                            background: i === words.length - 1 ? 'var(--gradient-chrome-text)' : 'none',
                                            backgroundSize: i === words.length - 1 ? '200% auto' : 'auto',
                                            WebkitBackgroundClip: i === words.length - 1 ? 'text' : 'initial',
                                            backgroundClip: i === words.length - 1 ? 'text' : 'initial',
                                            WebkitTextFillColor: i === words.length - 1 ? 'transparent' : 'var(--color-pearl)',
                                            animation: i === words.length - 1 ? 'chromaShift 4s linear infinite' : 'none',
                                        }}
                                    >
                                        {word}
                                    </span>
                                </span>
                            ))}
                        </h2>
                    </div>

                    <div data-animate="contact-sub" style={{}}>
                        <p className="heading-subtitle" style={{ color: 'rgba(200,191,181,0.7)', marginBottom: '2.5rem', maxWidth: '500px' }}>
                            {contact.sub}
                        </p>
                    </div>

                    {/* Magnetic email explicitly uses Client Component inner node */}
                    <div data-animate="contact-email" style={{ marginBottom: '4rem' }}>
                        <MagneticLink
                            href={`mailto:${contact.email}`}
                            style={{
                                fontFamily: 'var(--font-display)',
                                fontWeight: 700,
                                fontSize: 'clamp(1.2rem, 3vw, 2.5rem)',
                                letterSpacing: '-0.02em',
                                color: 'var(--color-pearl)',
                                borderBottom: '1px solid rgba(248,245,240,0.3)',
                                paddingBottom: '4px',
                                transition: 'border-color 0.2s',
                            }}
                        >
                            {contact.email} →
                        </MagneticLink>
                    </div>

                    {/* Social links */}
                    <div style={{
                        display: 'flex',
                        gap: '2rem',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        marginBottom: '5rem',
                    }}>
                        {Object.entries(contact.social).map(([platform, url]) => (
                            <a
                                key={platform}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-cursor="pointer"
                                style={{
                                    fontFamily: 'var(--font-display)',
                                    fontWeight: 600,
                                    fontSize: '0.75rem',
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase',
                                    color: 'rgba(200,191,181,0.5)',
                                    transition: 'color 0.2s',
                                }}
                            >
                                {platform}
                            </a>
                        ))}
                    </div>

                    {/* Footer bar */}
                    <div style={{
                        borderTop: '1px solid rgba(200,191,181,0.15)',
                        paddingTop: '2rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '1rem',
                    }}>
                        <p style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.75rem',
                            color: 'rgba(200,191,181,0.35)',
                            letterSpacing: '0.04em',
                        }}>
                            {contact.footerCredit}
                        </p>
                        <p style={{
                            fontFamily: 'var(--font-display)',
                            fontWeight: 800,
                            fontSize: '0.75rem',
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: 'rgba(200,191,181,0.35)',
                        }}>
                            AS
                        </p>
                    </div>
                </div>
            </section>
        </ContactAnimation>
    );
}
