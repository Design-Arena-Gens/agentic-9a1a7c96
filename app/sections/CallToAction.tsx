export function CallToAction() {
  return (
    <section aria-labelledby="partner" id="partner">
      <div className="card" style={{ display: 'grid', gap: '1.25rem', textAlign: 'center' }}>
        <div className="badge" id="partner">
          <span>Ready to activate?</span>
        </div>
        <h2 style={{ fontSize: '2rem', margin: 0 }}>Partner with an autonomous delivery ally</h2>
        <p style={{ color: 'rgba(203, 213, 225, 0.85)', lineHeight: 1.7 }}>
          Drop a brief, spec, or napkin sketch. This assistant brings the research, narrative, wireframes, and code to life—complete with guardrails, documentation, and a clear iteration runway.
        </p>
        <div className="hero-actions" style={{ justifyContent: 'center' }}>
          <a className="button" href="mailto:hello@example.com?subject=Let%27s%20build%20something">Start a conversation</a>
          <a className="secondary" href="#capabilities">
            Review capabilities again
          </a>
        </div>
      </div>
    </section>
  );
}
