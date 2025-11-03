'use client';

import { useState } from 'react';

type ToggleKey = 'product' | 'design' | 'engineering';

const copy: Record<ToggleKey, { title: string; headline: string; bullets: string[] }> = {
  product: {
    title: 'Product Leadership',
    headline: 'Shape strategy, narratives, and roadmaps that drive alignment.',
    bullets: [
      'Translate ambiguous goals into crisp vision docs and success metrics.',
      'Create north-star narratives, positioning, and go-to-market briefs.',
      'Stand up decision frameworks that help teams prioritize with confidence.'
    ]
  },
  design: {
    title: 'Design Systems & Research',
    headline: 'Blend service design, UX research, and interaction craft.',
    bullets: [
      'Run discovery sprints, concept validation, and insight synthesis loops.',
      'Author interaction specs, accessibility guidance, and design tokens.',
      'Map journeys, service blueprints, and operations to unblock delivery.'
    ]
  },
  engineering: {
    title: 'Engineering & Automation',
    headline: 'Ship full-stack experiences and autonomous workflows.',
    bullets: [
      'Deliver production-ready Next.js apps with typed contracts and testing.',
      'Orchestrate AI agents, background jobs, and process automations.',
      'Instrument telemetry, QA guardrails, and operational documentation.'
    ]
  }
};

export function FeatureTogglePanel() {
  const [selected, setSelected] = useState<ToggleKey>('product');
  const active = copy[selected];

  return (
    <div className="card" style={{ display: 'grid', gap: '1.5rem' }}>
      <div className="badge">
        <span>Pick a lane</span>
      </div>
      <div role="tablist" aria-label="Capability lanes" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        {Object.keys(copy).map((key) => {
          const toggleKey = key as ToggleKey;
          const isActive = selected === toggleKey;

          return (
            <button
              key={toggleKey}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => setSelected(toggleKey)}
              style={{
                padding: '0.6rem 1.2rem',
                borderRadius: '9999px',
                border: '1px solid',
                borderColor: isActive ? 'rgba(59, 130, 246, 0.6)' : 'rgba(148, 163, 184, 0.3)',
                background: isActive ? 'rgba(37, 99, 235, 0.18)' : 'rgba(15, 23, 42, 0.6)',
                color: 'rgba(226, 232, 240, 0.9)',
                fontWeight: 500,
                cursor: 'pointer'
              }}
            >
              {copy[toggleKey].title}
            </button>
          );
        })}
      </div>
      <div role="tabpanel" aria-live="polite" aria-label={active.title}>
        <h3 style={{ margin: 0 }}>{active.title}</h3>
        <p style={{ color: 'rgba(203, 213, 225, 0.85)', marginTop: '0.5rem', lineHeight: 1.7 }}>{active.headline}</p>
        <ul style={{ margin: '1.25rem 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: '0.75rem' }}>
          {active.bullets.map((bullet) => (
            <li
              key={bullet}
              style={{
                padding: '0.85rem 1rem',
                borderRadius: '1rem',
                background: 'rgba(15, 23, 42, 0.55)',
                border: '1px solid rgba(148, 163, 184, 0.2)' ,
                color: 'rgba(226, 232, 240, 0.9)'
              }}
            >
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
