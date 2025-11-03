interface DifferentiatorsProps {
  points: string[];
}

export function Differentiators({ points }: DifferentiatorsProps) {
  return (
    <div className="card">
      <div className="badge">
        <span>Why it works</span>
      </div>
      <h3>Signature advantages</h3>
      <ul style={{ margin: '1rem 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: '0.75rem' }}>
        {points.map((point) => (
          <li
            key={point}
            style={{
              background: 'rgba(148, 163, 184, 0.12)',
              padding: '0.9rem 1rem',
              borderRadius: '1rem',
              border: '1px solid rgba(148, 163, 184, 0.18)'
            }}
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
