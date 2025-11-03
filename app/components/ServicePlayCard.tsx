import { type ServicePlay } from '@/lib/capabilities';

interface ServicePlayCardProps {
  play: ServicePlay;
}

export function ServicePlayCard({ play }: ServicePlayCardProps) {
  return (
    <article className="card" aria-labelledby={`${play.id}-title`}>
      <div className="badge" id={`${play.id}-title`}>
        <span>Signature Play</span>
      </div>
      <h3>{play.title}</h3>
      <p>{play.summary}</p>
      <div className="tag-list" role="list">
        {play.artifacts.map((artifact) => (
          <span key={artifact} className="tag" role="listitem">
            {artifact}
          </span>
        ))}
      </div>
    </article>
  );
}
