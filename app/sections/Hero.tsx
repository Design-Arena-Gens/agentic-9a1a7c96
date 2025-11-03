export function Hero() {
  return (
    <section aria-labelledby="hero-title" style={{ paddingTop: '6rem' }}>
      <p className="badge">Agentic AI Partner</p>
      <h1 id="hero-title" className="hero-title">
        Build strategy, design, and code in one continuous flow.
      </h1>
      <p className="hero-description">
        From vision decks to production-ready Next.js apps, this assistant pairs systems thinking with hands-on delivery. Plug it into your roadmap and watch ambiguity turn into shipped outcomes.
      </p>
      <div className="hero-actions">
        <a className="button" href="#capabilities">See the playbook</a>
        <a className="secondary" href="#workflow">
          Explore the workflow
        </a>
      </div>
    </section>
  );
}
