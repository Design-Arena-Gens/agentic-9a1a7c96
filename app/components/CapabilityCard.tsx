import { type Capability } from '@/lib/capabilities';

interface CapabilityCardProps {
  capability: Capability;
}

export function CapabilityCard({ capability }: CapabilityCardProps) {
  const { title, description, tags } = capability;

  return (
    <article className="card" aria-labelledby={`${capability.id}-title`}>
      <div className="badge" id={`${capability.id}-title`}>
        <span>Capability</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tag-list" role="list">
        {tags.map((tag) => (
          <span key={tag} className="tag" role="listitem">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
